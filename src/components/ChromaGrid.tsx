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
}

const ChromaGrid = ({ items, radius = 200 }: ChromaGridProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // --- PHYSICS FIX ---
    // High damping (60+) relative to stiffness (300) creates a 
    // "Critically Damped" effect: it moves fast but stops dead 
    // without any back-and-forth "beating."
    const springConfig = { 
        damping: 60, 
        stiffness: 300, 
        mass: 1,
        restDelta: 0.001 
    };
    
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            mouseX.set(e.clientX - rect.left);
            mouseY.set(e.clientY - rect.top);
            setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        };

        const container = containerRef.current;
        container?.addEventListener('mousemove', handleMouseMove);
        return () => container?.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div ref={containerRef} className="relative w-full h-full bg-transparent">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
                {items.map((item, index) => {
                    const getItemCenter = () => {
                        if (!containerRef.current) return { x: 0, y: 0 };
                        const container = containerRef.current;
                        const itemsPerRow = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
                        const row = Math.floor(index / itemsPerRow);
                        const col = index % itemsPerRow;
                        const cardWidth = container.offsetWidth / itemsPerRow;
                        const cardHeight = 420; 
                        return {
                            x: col * cardWidth + cardWidth / 2,
                            y: row * cardHeight + cardHeight / 2
                        };
                    };

                    const itemCenter = getItemCenter();
                    const distance = useTransform(
                        [springX, springY],
                        ([x, y]: any) => {
                            const dx = (x as number) - itemCenter.x;
                            const dy = (y as number) - itemCenter.y;
                            return Math.sqrt(dx * dx + dy * dy);
                        }
                    );

                    // Reduced factor to 0.03 for a very subtle, high-end feel
                    const x = useTransform(distance, (d) => {
                        if (d < radius) {
                            return (mousePosition.x - itemCenter.x) * (1 - d / radius) * 0.03;
                        }
                        return 0;
                    });

                    const y = useTransform(distance, (d) => {
                        if (d < radius) {
                            return (mousePosition.y - itemCenter.y) * (1 - d / radius) * 0.03;
                        }
                        return 0;
                    });

                    return (
                        <motion.div
                            key={index}
                            className="relative h-[400px] perspective-1000"
                            style={{ x, y }}
                        >
                            <motion.div
                                className="relative rounded-xl overflow-hidden bg-white border border-gray-200 shadow-sm h-full"
                                style={{ borderColor: item.borderColor || '#f3f4f6' }}
                                // Use a TWEEN for the hover scale to ensure NO bounce
                                whileHover={{ 
                                    scale: 1.02,
                                    boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
                                }}
                                transition={{ 
                                    type: "tween", 
                                    ease: "easeOut", 
                                    duration: 0.2 
                                }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <div className="p-6 h-full flex flex-col">
                                    {item.image && (
                                        <div className="mb-4 rounded-lg overflow-hidden h-40 bg-gray-50">
                                            <img 
                                                src={item.image} 
                                                alt={item.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    )}
                                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                                    <p className="text-sm text-gray-500 mt-2 flex-grow">{item.description}</p>
                                    
                                    <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between">
                                        <span className="text-xs font-medium text-blue-500 uppercase">{item.subtitle}</span>
                                        {item.url && <span className="text-gray-400 text-sm">→</span>}
                                    </div>
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