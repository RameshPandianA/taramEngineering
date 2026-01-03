import { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface ChromaGridItem {
    image: string;
    title: string;
    subtitle?: string;
    handle?: string;
    borderColor?: string;
    gradient?: string;
    url?: string;
    description?: string;
}

interface ChromaGridProps {
    items: ChromaGridItem[];
    radius?: number;
    damping?: number;
    fadeOut?: number;
    ease?: string;
}

const ChromaGrid = ({ 
    items, 
    radius = 300, 
    damping = 0.45, 
    fadeOut = 0.6,
    ease = "power3.out"
}: ChromaGridProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: damping * 100, stiffness: 100 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;
            
            const rect = containerRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            setMousePosition({ x, y });
            mouseX.set(x);
            mouseY.set(y);
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener('mousemove', handleMouseMove);
        }

        return () => {
            if (container) {
                container.removeEventListener('mousemove', handleMouseMove);
            }
        };
    }, [mouseX, mouseY]);

    return (
        <div 
            ref={containerRef}
            className="relative w-full h-full"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {items.map((item, index) => {
                    const getItemCenter = () => {
                        if (!containerRef.current) return { x: 0, y: 0 };
                        const container = containerRef.current;
                        const itemsPerRow = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
                        const row = Math.floor(index / itemsPerRow);
                        const col = index % itemsPerRow;
                        const cardWidth = container.offsetWidth / itemsPerRow;
                        const cardHeight = 400;
                        return {
                            x: col * cardWidth + cardWidth / 2,
                            y: row * cardHeight + cardHeight / 2
                        };
                    };

                    const itemCenter = getItemCenter();
                    const distance = useTransform(
                        [springX, springY],
                        ([x, y]) => {
                            const dx = x - itemCenter.x;
                            const dy = y - itemCenter.y;
                            return Math.sqrt(dx * dx + dy * dy);
                        }
                    );

                    const x = useTransform(distance, (d) => {
                        if (d < radius) {
                            const factor = (1 - d / radius) * 0.2;
                            return (mousePosition.x - itemCenter.x) * factor;
                        }
                        return 0;
                    });

                    const y = useTransform(distance, (d) => {
                        if (d < radius) {
                            const factor = (1 - d / radius) * 0.2;
                            return (mousePosition.y - itemCenter.y) * factor;
                        }
                        return 0;
                    });

                    const scale = useTransform(distance, (d) => {
                        if (d < radius) {
                            return 1 + (1 - d / radius) * 0.1;
                        }
                        return 1;
                    });

                    const opacity = useTransform(distance, (d) => {
                        if (d < radius * fadeOut) {
                            return 1;
                        }
                        const fadeStart = radius * fadeOut;
                        const fadeEnd = radius;
                        if (d > fadeEnd) return 0.3;
                        return 1 - ((d - fadeStart) / (fadeEnd - fadeStart)) * 0.7;
                    });

                    return (
                        <motion.div
                            key={index}
                            className="relative"
                            style={{
                                x,
                                y,
                                scale,
                                opacity
                            }}
                        >
                            <motion.div
                                className="relative rounded-2xl overflow-hidden shadow-lg bg-white border-2 transition-all duration-300 h-full"
                                style={{
                                    borderColor: item.borderColor || '#3B82F6',
                                }}
                                whileHover={{ scale: 1.05, zIndex: 10 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                {item.gradient && (
                                    <div 
                                        className="absolute inset-0 opacity-10 pointer-events-none"
                                        style={{ background: item.gradient }}
                                    />
                                )}
                                <div className="relative p-6 h-full flex flex-col">
                                    {item.image && (
                                        <div className="mb-4 rounded-lg overflow-hidden flex-shrink-0">
                                            <img 
                                                src={item.image} 
                                                alt={item.title}
                                                className="w-full h-48 object-cover"
                                                onError={(e) => {
                                                    const target = e.target as HTMLImageElement;
                                                    target.style.display = 'none';
                                                }}
                                            />
                                        </div>
                                    )}
                                    <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                                    {item.subtitle && (
                                        <p className="text-sm font-semibold text-gray-600 mb-1">{item.subtitle}</p>
                                    )}
                                    {item.description && (
                                        <p className="text-sm text-gray-500 mb-2 flex-grow">{item.description}</p>
                                    )}
                                    {item.handle && (
                                        <p className="text-xs text-gray-400">{item.handle}</p>
                                    )}
                                    {item.url && (
                                        <a 
                                            href={item.url} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:text-blue-800 text-sm mt-2 inline-block"
                                        >
                                            Learn more →
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default ChromaGrid;

