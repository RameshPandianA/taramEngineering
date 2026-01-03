import { motion, AnimatePresence, useInView, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

interface ScrollStackItem {
    id: string;
    content: ReactNode;
    image: string;
    title: string;
}

interface ScrollStackProps {
    items: ScrollStackItem[];
    className?: string;
}

const ScrollSection = ({ 
    item, 
    index, 
    setActiveIndex 
}: { 
    item: ScrollStackItem, 
    index: number, 
    setActiveIndex: (i: number) => void 
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-45% 0px -45% 0px" });

    useEffect(() => {
        if (isInView) setActiveIndex(index);
    }, [isInView, index, setActiveIndex]);

    return (
        <div ref={ref} className="min-h-[70vh] flex flex-col justify-center py-20 pl-12">
            {item.content}
        </div>
    );
};

const ScrollStack = ({ items, className = '' }: ScrollStackProps) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    // Progress Bar Logic
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    // useSpring makes the ball movement "floaty" and smooth
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Calculate ball position based on scaleY
    const ballY = useTransform(scaleY, [0, 1], ["0%", "100%"]);

    return (
        <div ref={containerRef} className={`relative grid grid-cols-1 lg:grid-cols-2 gap-12 ${className}`}>
            
            {/* Left Side: Scrolling Content + Progress Bar */}
            <div className="relative flex flex-col">
                
                {/* --- Vertical Progress Indicator --- */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gray-100 ml-4 lg:ml-0">
                    {/* The Active Line */}
                    <motion.div 
                        className="absolute top-0 left-0 w-full bg-blue-600 origin-top"
                        style={{ scaleY }}
                    />
                    
                    {/* The Smooth Ball */}
                    <motion.div 
                        className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-md z-10"
                        style={{ top: ballY }}
                    />
                </div>

                {items.map((item, index) => (
                    <ScrollSection 
                        key={item.id} 
                        item={item} 
                        index={index} 
                        setActiveIndex={setActiveIndex} 
                    />
                ))}
            </div>

            {/* Right Side: Sticky Stacked Images */}
            <div className="hidden lg:block sticky top-32 h-[500px] self-start">
                <div className="relative w-full h-full">
                    <AnimatePresence mode="popLayout">
                        {items.map((item, index) => {
                            if (index !== activeIndex) return null;

                            return (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, x: 30, scale: 0.95 }}
                                    animate={{ opacity: 1, x: 0, scale: 1 }}
                                    exit={{ opacity: 0, x: -20, scale: 0.95 }}
                                    transition={{ duration: 0.4 }}
                                    className="absolute inset-0"
                                >
                                    <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-white border border-gray-100">
                                        <img 
                                            src={item.image} 
                                            alt={item.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default ScrollStack;