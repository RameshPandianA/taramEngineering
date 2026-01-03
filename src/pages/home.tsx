import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollStack from '../components/ScrollStack';

const Home = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            
            {/* Main Content Area */}
            <div className="pt-24 md:pt-28 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section - Always Visible */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="pb-12 min-h-[60vh] flex flex-col justify-center"
                >
                    <motion.h1 
                        className="text-5xl md:text-6xl font-bold mb-4 text-gray-900"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Welcome to Taram Engineering
                    </motion.h1>
                    <motion.p 
                        className="text-xl text-gray-600"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Transforming Ideas into Engineering Excellence - Your Trusted Partner in Mechanical Design & Manufacturing
                    </motion.p>
                </motion.section>

                {/* Mission Section - Scroll Triggered */}
                <motion.section 
                    className="py-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: false, margin: "-100px" }}
                        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                        className="text-3xl md:text-4xl font-bold mb-6 text-gray-900"
                    >
                        Our Mission
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-gray-600 leading-relaxed max-w-4xl"
                    >
                        To become the <span className="text-yellow-500 font-bold">most valued Partner</span> for Customers around the world in Mechanical Engineering 
                        Design and Manufacture at <span className="text-pink-500 font-bold">competitive cost</span> and with <span className="text-purple-500 font-bold">highest Quality Standards</span>.
                    </motion.p>
                </motion.section>

                {/* Business Verticals Section - Grid Layout with Animations */}
                <motion.section 
                    className="py-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: false, margin: "-100px" }}
                        transition={{ duration: 0.6, type: "spring" as const, stiffness: 100 }}
                        className="text-3xl md:text-4xl font-bold mb-8 text-gray-900"
                    >
                        Business Verticals Serviced
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { 
                                name: 'Railways', 
                                icon: '🚂', 
                                index: 0,
                                description: 'Taram serves the railway sector with precision-engineered components designed to withstand heavy loads, continuous operation, and harsh environmental conditions. Our products are manufactured to meet stringent railway standards for safety, durability, and performance.',
                                image: '/images/railways.jpg',
                                bgColor: 'bg-blue-50',
                                borderColor: 'border-blue-200'
                            },
                            { 
                                name: 'Off-Highway Vehicles', 
                                icon: '🚜', 
                                index: 1,
                                description: 'Off-highway vehicles operate in extreme environments where strength and durability are critical. Taram manufactures robust components that deliver consistent performance under high stress, vibration, and varying terrain conditions.',
                                image: '/images/off-highway-vehicles.jpg',
                                bgColor: 'bg-pink-50',
                                borderColor: 'border-pink-200'
                            },
                            { 
                                name: 'Engines', 
                                icon: '⚙️', 
                                index: 2,
                                description: 'Taram supplies precision components for engine applications where accuracy, material integrity, and thermal performance are essential. We support manufacturers across multiple engine platforms with components that meet demanding technical specifications.',
                                image: '/images/engines.jpg',
                                bgColor: 'bg-green-50',
                                borderColor: 'border-green-200'
                            },
                            { 
                                name: 'Defence', 
                                icon: '🛡️', 
                                index: 3,
                                description: 'The defence sector demands uncompromising quality, reliability, and confidentiality. Taram manufactures engineered components that meet stringent defence standards and specifications.',
                                image: '/images/defence.jpg',
                                bgColor: 'bg-purple-50',
                                borderColor: 'border-purple-200'
                            },
                            { 
                                name: 'Aviation', 
                                icon: '✈️', 
                                index: 4,
                                description: 'Aviation applications require extreme precision, lightweight strength, and absolute reliability. Taram delivers aerospace-grade components manufactured under controlled processes to meet the industry\'s exacting standards.',
                                image: '/images/aviation.jpg',
                                bgColor: 'bg-yellow-50',
                                borderColor: 'border-yellow-200'
                            },
                            { 
                                name: 'Construction', 
                                icon: '🏗️', 
                                index: 5,
                                description: 'Taram supports the construction industry by manufacturing heavy-duty components designed for strength, wear resistance, and long service life in demanding job-site conditions.',
                                image: '/images/construction.jpg',
                                bgColor: 'bg-indigo-50',
                                borderColor: 'border-indigo-200'
                            },
                            { 
                                name: 'Automotives', 
                                icon: '🚗', 
                                index: 6,
                                description: 'In the automotive sector, Taram manufactures precision components that meet high standards of quality, consistency, and cost efficiency. Our processes are optimized for both performance and scalability.',
                                image: '/images/automotives.jpg',
                                bgColor: 'bg-orange-50',
                                borderColor: 'border-orange-200'
                            }
                        ].map((vertical) => {
                            // Left 3 boxes (indices 0, 1, 2) - slide from left
                            // Right 3 boxes (indices 3, 4, 5) - slide from right
                            // Bottom 1 box (index 6) - slide from bottom
                            let animationProps: any;
                            if (vertical.index < 3) {
                                // Left 3 boxes - slide from left
                                animationProps = {
                                    initial: { opacity: 0, x: -100, scale: 0.9 },
                                    whileInView: { opacity: 1, x: 0, scale: 1 },
                                    transition: { 
                                        duration: 0.6, 
                                        delay: vertical.index * 0.1,
                                        type: "spring" as const,
                                        stiffness: 100
                                    }
                                };
                            } else if (vertical.index < 6) {
                                // Right 3 boxes - slide from right
                                animationProps = {
                                    initial: { opacity: 0, x: 100, scale: 0.9 },
                                    whileInView: { opacity: 1, x: 0, scale: 1 },
                                    transition: { 
                                        duration: 0.6, 
                                        delay: (vertical.index - 3) * 0.1,
                                        type: "spring" as const,
                                        stiffness: 100
                                    }
                                };
                            } else {
                                // Bottom 1 box - slide from bottom
                                animationProps = {
                                    initial: { opacity: 0, y: 100, scale: 0.9 },
                                    whileInView: { opacity: 1, y: 0, scale: 1 },
                                    transition: { 
                                        duration: 0.6, 
                                        delay: 0.3,
                                        type: "spring" as const,
                                        stiffness: 100
                                    }
                                };
                            }

                            return (
                                <motion.div
                                    key={vertical.index}
                                    {...animationProps}
                                    viewport={{ once: false, margin: "-50px" }}
                                    whileHover={{ 
                                        scale: 1.03,
                                        y: -5,
                                        transition: { duration: 0.2 }
                                    }}
                                    className={`${vertical.bgColor} ${vertical.borderColor} rounded-2xl shadow-lg border-2 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden ${
                                        vertical.index === 6 ? 'md:col-span-3' : ''
                                    }`}
                                >
                                    <div className="flex flex-col h-full">
                                        {/* Image Section */}
                                        <div className="w-full h-48 bg-gray-200 overflow-hidden">
                                            <img 
                                                src={vertical.image} 
                                                alt={vertical.name}
                                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                                                onError={(e) => {
                                                    const target = e.target as HTMLImageElement;
                                                    target.style.display = 'none';
                                                    const parent = target.parentElement;
                                                    if (parent) {
                                                        parent.className = `w-full h-48 ${vertical.bgColor} flex items-center justify-center`;
                                                        parent.innerHTML = `<div class="text-gray-400 text-sm">Image not available</div>`;
                                                    }
                                                }}
                                            />
                                        </div>
                                        
                                        {/* Content Section */}
                                        <div className="p-6 flex flex-col flex-grow">
                                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{vertical.name}</h3>
                                            <p className="text-gray-700 leading-relaxed text-sm md:text-base flex-grow">
                                                {vertical.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.section>

                {/* Key Differentiators Section - Scroll Stack */}
                <motion.section 
                    className="py-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: false, margin: "-100px" }}
                        transition={{ duration: 0.6, type: "spring" as const, stiffness: 100 }}
                        className="mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                            Key Differentiators
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl">
                            At Taram, our strength lies in combining deep engineering expertise with advanced manufacturing infrastructure and a strong focus on quality. These differentiators enable us to deliver precision-engineered solutions for critical and high-performance applications.
                        </p>
                    </motion.div>
                    
                    <ScrollStack
                        items={[
                            {
                                id: 'specialized-expertise',
                                title: 'Specialized Engineering Expertise',
                                image: '/images/specialized-expertise.jpg',
                                content: (
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                                            Specialized Engineering Expertise
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed mb-6 text-base md:text-lg">
                                            Taram is powered by specialists in Mechanical Engineering and Manufacturing, with over a decade of hands-on industry experience. Our expertise allows us to design, engineer, and manufacture complex components that meet stringent technical and performance requirements.
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {['Manufacturing specialists', 'engineering solutions', 'industrial engineering company'].map((keyword, idx) => (
                                                <span key={idx} className="px-3 py-1 text-xs md:text-sm bg-gray-100 text-gray-700 rounded-full border border-gray-300">
                                                    {keyword}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )
                            },
                            {
                                id: 'manufacturing-facility',
                                title: 'State-of-the-Art Manufacturing Facility',
                                image: '/images/manufacturing-facility.jpg',
                                content: (
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                                            State-of-the-Art Manufacturing Facility
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed mb-6 text-base md:text-lg">
                                            Our 5,000 sq. ft. manufacturing facility, located at the heart of Bangalore, is equipped with state-of-the-art machine tools. This infrastructure enables high efficiency, consistent quality, and timely delivery across varied project requirements.
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {['State-of-the-art manufacturing', 'CNC machining facility'].map((keyword, idx) => (
                                                <span key={idx} className="px-3 py-1 text-xs md:text-sm bg-gray-100 text-gray-700 rounded-full border border-gray-300">
                                                    {keyword}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )
                            },
                            {
                                id: 'precision-manufacturing',
                                title: 'Precision Manufacturing Capability',
                                image: '/images/precision-manufacturing.jpg',
                                content: (
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                                            Precision Manufacturing Capability
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed mb-6 text-base md:text-lg">
                                            We specialize in high-precision machining of complex components, with the capability to manufacture parts up to 1 meter in size while achieving accuracy up to 5 microns. Our controlled processes ensure repeatability, dimensional accuracy, and superior surface finish.
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {['Precision manufacturing', 'high-accuracy machining', 'micron-level accuracy'].map((keyword, idx) => (
                                                <span key={idx} className="px-3 py-1 text-xs md:text-sm bg-gray-100 text-gray-700 rounded-full border border-gray-300">
                                                    {keyword}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )
                            },
                            {
                                id: 'expert-team',
                                title: 'Expert Technical & Management Team',
                                image: '/images/expert-team.jpg',
                                content: (
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                                            Expert Technical & Management Team
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed mb-6 text-base md:text-lg">
                                            Taram is backed by a team of experienced engineers, skilled technicians, and proven managerial professionals. This strong technical and operational foundation ensures seamless project execution and reliable customer support.
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {['Expert engineering team', 'skilled manufacturing professionals'].map((keyword, idx) => (
                                                <span key={idx} className="px-3 py-1 text-xs md:text-sm bg-gray-100 text-gray-700 rounded-full border border-gray-300">
                                                    {keyword}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )
                            },
                            {
                                id: 'design-centre',
                                title: 'Advanced Design Centre',
                                image: '/images/design-centre.jpg',
                                content: (
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                                            Advanced Design Centre
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed mb-6 text-base md:text-lg">
                                            Our 2,500 sq. ft. Design Centre in Bangalore is fully equipped to support customers from the earliest stages of product development. We provide concept design, detailed engineering, and design optimization for manufacturability.
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {['Product design services', 'CAD CAM design'].map((keyword, idx) => (
                                                <span key={idx} className="px-3 py-1 text-xs md:text-sm bg-gray-100 text-gray-700 rounded-full border border-gray-300">
                                                    {keyword}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )
                            },
                            {
                                id: 'end-to-end',
                                title: 'End-to-End Engineering Solutions',
                                image: '/images/end-to-end-solutions.jpg',
                                content: (
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                                            End-to-End Engineering Solutions
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed mb-6 text-base md:text-lg">
                                            Taram offers complete end-to-end solutions, covering the entire product lifecycle — from product design and development to precision manufacturing and final delivery. This integrated approach reduces lead times, improves coordination, and ensures consistent quality.
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {['End-to-end engineering solutions', 'Turnkey engineering solutions'].map((keyword, idx) => (
                                                <span key={idx} className="px-3 py-1 text-xs md:text-sm bg-gray-100 text-gray-700 rounded-full border border-gray-300">
                                                    {keyword}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )
                            },
                            {
                                id: 'quality-certification',
                                title: 'Certified Quality Systems',
                                image: '/images/quality-certification.jpg',
                                content: (
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                                            Certified Quality Systems
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed mb-6 text-base md:text-lg">
                                            We operate under a robust Quality Management System and are ISO 9001:2008 certified by NVT Quality Certification Pvt. Ltd., partners of KEMA Quality (Netherlands). Our commitment to quality ensures compliance with customer, regulatory, and industry standards.
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {['ISO 9001 certified manufacturer', 'quality engineering company'].map((keyword, idx) => (
                                                <span key={idx} className="px-3 py-1 text-xs md:text-sm bg-gray-100 text-gray-700 rounded-full border border-gray-300">
                                                    {keyword}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )
                            }
                        ]}
                    />
                </motion.section>
                </div>

                <Footer />
            </div>
        </div>
    )
}

export default Home;
