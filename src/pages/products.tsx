import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

// Reusable Scrollable Group Component
const ScrollableGroup = ({ title, items }: { title: string; items: any[] }) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);
    const [isHovered, setIsHovered] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [dragStartScrollLeft, setDragStartScrollLeft] = useState(0);
    const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const updateArrowVisibility = () => {
        const container = scrollContainerRef.current;
        if (!container) return;
        const { scrollLeft, scrollWidth, clientWidth } = container;
        setShowLeftArrow(scrollLeft > 0);
        setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    };

    const handleScroll = () => {
        setIsScrolling(true);
        updateArrowVisibility();
        if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current);
        }
        scrollTimeoutRef.current = setTimeout(() => {
            setIsScrolling(false);
        }, 2000);
    };

    const handleScrollLeft = () => {
        const container = scrollContainerRef.current;
        if (!container) return;
        setIsScrolling(true);
        container.scrollBy({ left: -400, behavior: 'smooth' });
        setTimeout(() => {
            updateArrowVisibility();
            setTimeout(() => setIsScrolling(false), 2000);
        }, 100);
    };

    const handleScrollRight = () => {
        const container = scrollContainerRef.current;
        if (!container) return;
        setIsScrolling(true);
        container.scrollBy({ left: 400, behavior: 'smooth' });
        setTimeout(() => {
            updateArrowVisibility();
            setTimeout(() => setIsScrolling(false), 2000);
        }, 100);
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        const container = scrollContainerRef.current;
        if (!container) return;
        setIsDragging(true);
        setStartX(e.pageX - container.offsetLeft);
        setDragStartScrollLeft(container.scrollLeft);
        setIsHovered(true);
        setIsScrolling(true);
    };

    const handleMouseLeave = () => {
        if (!isDragging) {
            setIsHovered(false);
        }
    };

    useEffect(() => {
        setTimeout(updateArrowVisibility, 500);
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', updateArrowVisibility);
            window.addEventListener('resize', updateArrowVisibility);
        }
        return () => {
            if (container) {
                container.removeEventListener('scroll', updateArrowVisibility);
            }
            window.removeEventListener('resize', updateArrowVisibility);
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!isDragging) return;
            e.preventDefault();
            const container = scrollContainerRef.current;
            if (!container) return;
            const x = e.pageX - container.offsetLeft;
            const walk = (x - startX) * 2;
            container.scrollLeft = dragStartScrollLeft - walk;
        };

        const handleMouseUp = () => {
            setIsDragging(false);
            setTimeout(() => {
                setIsHovered(false);
                setIsScrolling(false);
            }, 2000);
        };

        if (isDragging) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, startX, dragStartScrollLeft]);

    return (
        <motion.section 
            className="py-12 overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6 }}
        >
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold mb-8 text-gray-900"
            >
                {title}
            </motion.h2>
            
            <div className="relative w-full group">
                {showLeftArrow && (
                    <button
                        onClick={handleScrollLeft}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-all duration-300 hover:scale-110 opacity-80 hover:opacity-100"
                        aria-label="Scroll left"
                    >
                        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                )}
                
                {showRightArrow && (
                    <button
                        onClick={handleScrollRight}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-all duration-300 hover:scale-110 opacity-80 hover:opacity-100"
                        aria-label="Scroll right"
                    >
                        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                )}

                <div
                    ref={scrollContainerRef}
                    onMouseEnter={() => !isDragging && setIsHovered(true)}
                    onMouseLeave={handleMouseLeave}
                    onMouseDown={handleMouseDown}
                    onScroll={handleScroll}
                    className="flex gap-6 overflow-x-auto overflow-y-hidden scrollbar-hide pb-4 cursor-grab active:cursor-grabbing select-none"
                    style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                        WebkitOverflowScrolling: 'touch'
                    }}
                >
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className={`flex-shrink-0 ${item.hasImage ? 'w-[500px]' : 'w-96'} bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden`}
                        >
                            <div className="flex flex-col h-full">
                                {item.hasImage ? (
                                    <>
                                        <div className="w-full h-64 bg-gray-100 overflow-hidden">
                                            <img 
                                                src={item.image} 
                                                alt={item.name}
                                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                                                onError={(e) => {
                                                    const target = e.target as HTMLImageElement;
                                                    target.style.display = 'none';
                                                    target.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400">Image not found</div>';
                                                }}
                                            />
                                        </div>
                                        <div className="p-6 flex flex-col flex-grow">
                                            <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 w-fit ${
                                                item.type === 'product' 
                                                    ? 'bg-blue-100 text-blue-700' 
                                                    : 'bg-purple-100 text-purple-700'
                                            }`}>
                                                {item.type === 'product' ? 'Product' : 'Prototype'}
                                            </div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.name}</h3>
                                            <p className="text-gray-600 leading-relaxed flex-grow">{item.description}</p>
                                        </div>
                                    </>
                                ) : (
                                    <div className="p-6 flex flex-col h-full">
                                        <div className="text-5xl mb-4">{item.icon}</div>
                                        <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 w-fit ${
                                            item.type === 'product' 
                                                ? 'bg-blue-100 text-blue-700' 
                                                : 'bg-purple-100 text-purple-700'
                                        }`}>
                                            {item.type === 'product' ? 'Product' : 'Prototype'}
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.name}</h3>
                                        <p className="text-gray-600 leading-relaxed flex-grow">{item.description}</p>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            
            <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </motion.section>
    );
};

const Products = () => {
    // Grouped Products
    const productGroups = {
        engineeringDesigns: [
            {
                name: 'Butterfly Valve Concept Design',
                description: 'Isometric view 200 Dia Butterfly Valve for mining industry',
                image: '/images/butterfly-valve-concept.jpg',
                type: 'prototype',
                hasImage: true
            },
            {
                name: 'Fully Developed Butterfly Valve',
                description: 'Fully Developed Butterfly Valve by Taram',
                image: '/images/butterfly-valve-developed.jpg',
                type: 'product',
                hasImage: true
            }
        ],
        aerospace: [
            {
                name: 'Aerospace Components - 1',
                description: 'Aerospace Components - 1',
                image: '/images/aerospace-components-1.jpg',
                type: 'product',
                hasImage: true
            },
            {
                name: 'Aerospace Components - 2',
                description: 'Aerospace Components - 2',
                image: '/images/aerospace-components-2.jpg',
                type: 'product',
                hasImage: true
            }
        ],
        dieselEngine: [
            {
                name: 'Diesel Engine Components',
                description: 'Diesel Engine Components - Lube Valve',
                image: '/images/diesel-engine-lube-valve.jpg',
                type: 'product',
                hasImage: true
            },
            {
                name: 'Diesel Engine Components',
                description: 'Diesel Engine Components - Lube Valve',
                image: '/images/diesel-engine-Cylinder-head.jpg',
                type: 'product',
                hasImage: true
            },
            {
                name: 'Diesel Engine Components',
                description: 'Diesel Engine Components - Lube Valve',
                image: '/images/diesel-engine-Oil-cooler-cover.jpg',
                type: 'product',
                hasImage: true
            },
            {
                name: 'Diesel Engine Components',
                description: 'Diesel Engine Components - Lube Valve',
                image: '/images/diesel-engine-conrod.jpg',
                type: 'product',
                hasImage: true
            }
        ],
        railwayEquipments: [
            {
                name: 'Distributed Valve Cover',
                description: 'Distributed valve cover for railway systems',
                image: '/images/railway-distributed-valve-cover.jpg',
                type: 'product',
                hasImage: true
            },
            {
                name: 'Wagon Coupler Assembly Parts',
                description: 'Wagon coupler assembly parts for railway wagons',
                image: '/images/railway-wagon-coupler.jpg',
                type: 'product',
                hasImage: true
            },
            {
                name: 'CAM',
                description: 'CAM components for railway applications',
                image: '/images/railway-cam.jpg',
                type: 'product',
                hasImage: true
            },
            {
                name: 'Dumble Valve for Railway Brakes',
                description: 'Dumble Valve for railway brake systems',
                image: '/images/railway-dumble-valve.jpg',
                type: 'product',
                hasImage: true
            }
        ],
        fluidPowerComponents: [
            {
                name: 'Cap End Cover',
                description: 'Cap end cover for hydraulic cylinders',
                image: '/images/hydraulic-cap-end-cover.jpg',
                type: 'product',
                hasImage: true
            },
            {
                name: 'Trunion',
                description: 'Trunion components for hydraulic cylinder mounting',
                image: '/images/hydraulic-trunion.jpg',
                type: 'product',
                hasImage: true
            }
        ],
        battleTankComponents: [
            {
                name: 'Battle Tank Component - Housing',
                description: 'Battle tank housing and manifold components',
                image: '/images/tank-housing.jpg',
                type: 'product',
                hasImage: true
            },
            {
                name: 'Battle Tank Component - Structural Panel',
                description: 'Battle tank structural panel with reinforcing features',
                image: '/images/tank-structural-panel.jpg',
                type: 'product',
                hasImage: true
            },
            {
                name: 'Battle Tank Component - Gear Segment',
                description: 'Battle tank gear segment components',
                image: '/images/tank-gear-segment.jpg',
                type: 'product',
                hasImage: true
            }
        ],
        toolsAndDies: [
            {
                name: 'Tools & Dies Collection',
                description: 'Manufacturing tools, jigs, and fixtures',
                image: '/images/tools-dies-collection.jpg',
                type: 'product',
                hasImage: true
            },
            {
                name: 'Complex Tool & Die',
                description: 'Complex metallic tool or die for stamping and molding',
                image: '/images/tools-dies-complex.jpg',
                type: 'product',
                hasImage: true
            },
            {
                name: 'Die & Mold Component',
                description: 'Large metallic die or mold component for forming',
                image: '/images/tools-dies-mold.jpg',
                type: 'product',
                hasImage: true
            }
        ]
    };

    return (
        <div className="min-h-screen overflow-x-hidden bg-white">
            <Navigation />
            
            {/* Main Content Area */}
            <div className="pt-24 md:pt-28 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="pb-12"
                >
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">Products & Services</h1>
                    <p className="text-xl text-gray-600">Comprehensive Engineering Solutions Tailored to Your Success</p>
                </motion.section>

                {/* Major Engineering Designs & Development */}
                <ScrollableGroup 
                    title="Major Engineering Designs & Development"
                    items={productGroups.engineeringDesigns}
                />

                {/* Aerospace Components */}
                <ScrollableGroup 
                    title="Aerospace Components"
                    items={productGroups.aerospace}
                />

                {/* Diesel Engine Components */}
                <ScrollableGroup 
                    title="Diesel Engine Components"
                    items={productGroups.dieselEngine}
                />

                {/* Railway Equipments */}
                <ScrollableGroup 
                    title="Railway Equipments"
                    items={productGroups.railwayEquipments}
                />

                {/* Fluid Power Components */}
                <ScrollableGroup 
                    title="Fluid Power Components / Hydraulic Cylinder Parts"
                    items={productGroups.fluidPowerComponents}
                />

                {/* Battle Tank Components */}
                <ScrollableGroup 
                    title="Battle Tank Components"
                    items={productGroups.battleTankComponents}
                />

                {/* Tools & Dies */}
                <ScrollableGroup 
                    title="Tools & Dies"
                    items={productGroups.toolsAndDies}
                />

                </div>

                <Footer />
            </div>
        </div>
    );
};

export default Products;
