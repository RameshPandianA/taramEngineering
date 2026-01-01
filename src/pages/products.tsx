import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Products = () => {
    const verticals = [
        { name: 'Railways', description: 'Complete solutions for railway components and systems', icon: '🚂' },
        { name: 'Off-Highway Vehicles', description: 'Heavy-duty vehicle components and assemblies', icon: '🚜' },
        { name: 'Engines', description: 'Precision engine components and parts', icon: '⚙️' },
        { name: 'Defence', description: 'Defence equipment and specialized components', icon: '🛡️' },
        { name: 'Aviation', description: 'Aerospace components meeting stringent quality standards', icon: '✈️' },
        { name: 'Construction', description: 'Construction machinery parts and equipment', icon: '🏗️' },
        { name: 'Automotives', description: 'Automotive components and assemblies', icon: '🚗' }
    ];

    const services = [
        {
            title: 'Product Design',
            description: 'Transform your vision into reality with our complete product design services',
            icon: '✏️'
        },
        {
            title: 'Engineering Analysis',
            description: 'Advanced structural, thermal, and fluid dynamics analysis',
            icon: '📊'
        },
        {
            title: 'Prototyping',
            description: 'Rapid prototyping and comprehensive testing services',
            icon: '🔧'
        },
        {
            title: 'Precision Manufacturing',
            description: 'World-class manufacturing with incredible 5-micron accuracy',
            icon: '🏭'
        },
        {
            title: 'Quality Assurance',
            description: 'ISO 9001-2008 certified quality processes',
            icon: '✅'
        },
        {
            title: 'End-to-End Solutions',
            description: 'Seamless solutions from design to delivery',
            icon: '🔄'
        }
    ];

    return (
        <div className="min-h-screen overflow-x-hidden bg-white">
            <Navigation />
            
            {/* Main Content Area */}
            <div className="ml-64 min-h-screen">
                {/* Hero Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="pt-20 pb-12 px-8"
                >
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">Products & Services</h1>
                    <p className="text-xl text-gray-600">Comprehensive Engineering Solutions Tailored to Your Success</p>
                </motion.section>

                {/* Business Verticals Section */}
                <section className="px-8 py-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-8 text-gray-900"
                    >
                        Business Verticals
                    </motion.h2>
                    <div className="space-y-0">
                        {verticals.map((vertical, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="py-6 border-b border-gray-200 hover:bg-gray-50 transition-colors"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="text-4xl flex-shrink-0">{vertical.icon}</div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold mb-2 text-gray-900">{vertical.name}</h3>
                                        <p className="text-gray-600">{vertical.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Our Services Section */}
                <section className="px-8 py-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-8 text-gray-900"
                    >
                        Our Services
                    </motion.h2>
                    <div className="space-y-0">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="py-6 border-b border-gray-200 hover:bg-gray-50 transition-colors"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="text-4xl flex-shrink-0">{service.icon}</div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold mb-2 text-gray-900">{service.title}</h3>
                                        <p className="text-gray-600">{service.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <Footer />
            </div>
        </div>
    );
};

export default Products;
