import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Customers = () => {
    const customers = [
        {
            name: 'VOLVO',
            logo: '/images/volvo-logo.png',
            industry: 'Automotive & Construction',
            description: 'Leading manufacturer of trucks, buses, construction equipment, and marine engines',
            color: '#003057',
            gradient: 'linear-gradient(135deg, #003057, #004080)'
        },
        {
            name: 'Faiveley TRANSPORT',
            logo: '/images/faiveley-logo.png',
            industry: 'Railway Systems',
            description: 'Global leader in railway equipment and systems',
            color: '#E31E24',
            gradient: 'linear-gradient(135deg, #E31E24, #C41E3A)'
        },
        {
            name: 'WIPRO',
            subtitle: 'Applying Thought',
            logo: '/images/wipro-logo.png',
            industry: 'Technology & Engineering',
            description: 'Premier technology services and consulting company',
            color: '#0066CC',
            gradient: 'linear-gradient(135deg, #0066CC, #004C99)'
        },
        {
            name: 'VST TILLERS',
            logo: '/images/vst-tillers-logo.jpg',
            industry: 'Agriculture & Power Equipment',
            description: 'Manufacturer of agricultural machinery and power tillers',
            color: '#00A651',
            gradient: 'linear-gradient(135deg, #00A651, #008040)'
        },
        {
            name: 'BHARAT ELECTRONICS',
            subtitle: 'भारत इलेक्ट्रॉनिक्स | BHARAT ELECTRONICS LTD.',
            logo: '/images/bharat-electronics-logo.png',
            industry: 'Defence & Aerospace',
            description: 'Navratna Defence PSU specializing in electronic systems',
            color: '#1E3A8A',
            gradient: 'linear-gradient(135deg, #1E3A8A, #1E40AF)'
        },
        {
            name: 'BEML',
            subtitle: 'बी ई एम एल | NEW FRONTIERS. NEW DREAMS',
            logo: '/images/beml-logo.png',
            industry: 'Defence & Heavy Engineering',
            description: 'Navratna PSU manufacturing defence, mining, and construction equipment',
            color: '#DC2626',
            gradient: 'linear-gradient(135deg, #DC2626, #B91C1C)'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { 
            opacity: 0, 
            y: 50,
            scale: 0.9
        },
        visible: { 
            opacity: 1, 
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: [0.6, -0.05, 0.01, 0.99] as const
            }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <Navigation />
            
            {/* Main Content Area */}
            <div className="pt-24 md:pt-28 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Hero Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="pb-12 text-center"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">
                            Our Valued Customers
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Trusted by industry leaders across Automotive, Defence, Railways, Technology, and Agriculture sectors
                        </p>
                    </motion.section>

                    {/* Customers Grid */}
                    <motion.section
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="py-8"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {customers.map((customer, index) => (
                                <motion.div
                                    key={index}
                                    variants={cardVariants}
                                    whileHover={{ 
                                        y: -10,
                                        scale: 1.02,
                                        transition: { duration: 0.2 }
                                    }}
                                    className="group relative"
                                >
                                    <div 
                                        className="relative h-full rounded-2xl overflow-hidden shadow-lg bg-white border-2 transition-all duration-300"
                                        style={{
                                            borderColor: customer.color,
                                            boxShadow: `0 10px 30px -5px ${customer.color}40`
                                        }}
                                    >
                                        {/* Gradient Background */}
                                        <div 
                                            className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300"
                                            style={{ background: customer.gradient }}
                                        />
                                        
                                        {/* Content */}
                                        <div className="relative p-6 md:p-8 h-full flex flex-col">
                                            {/* Logo Section */}
                                            <div className="mb-6 flex items-center justify-center h-32 bg-gray-50 rounded-xl p-4 group-hover:bg-white transition-colors duration-300">
                                                <img 
                                                    src={customer.logo} 
                                                    alt={customer.name}
                                                    className="max-h-20 max-w-full object-contain filter group-hover:scale-110 transition-transform duration-300"
                                                    onError={(e) => {
                                                        const target = e.target as HTMLImageElement;
                                                        const parent = target.parentElement;
                                                        if (parent) {
                                                            parent.innerHTML = `
                                                                <div class="text-4xl font-bold" style="color: ${customer.color}">
                                                                    ${customer.name.split(' ').map((word: string) => word[0]).join('')}
                                                                </div>
                                                            `;
                                                        }
                                                    }}
                                                />
                                            </div>

                                            {/* Company Info */}
                                            <div className="flex-grow">
                                                <h3 
                                                    className="text-2xl font-bold mb-2"
                                                    style={{ color: customer.color }}
                                                >
                                                    {customer.name}
                                                </h3>
                                                {customer.subtitle && (
                                                    <p className="text-sm text-gray-600 mb-3 font-medium">
                                                        {customer.subtitle}
                                                    </p>
                                                )}
                                                <p className="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wide">
                                                    {customer.industry}
                                                </p>
                                                <p className="text-sm text-gray-600 leading-relaxed">
                                                    {customer.description}
                                                </p>
                                            </div>

                                            {/* Decorative Element */}
                                            <div 
                                                className="mt-4 h-1 rounded-full"
                                                style={{ background: customer.gradient }}
                                            />
                                        </div>

                                        {/* Hover Glow Effect */}
                                        <div 
                                            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
                                            style={{ 
                                                background: `radial-gradient(circle at center, ${customer.color}, transparent)`,
                                                filter: 'blur(20px)'
                                            }}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Stats Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="py-12 mt-12"
                    >
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-white">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                                <div>
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2, type: "spring" }}
                                        className="text-5xl md:text-6xl font-bold mb-2"
                                    >
                                        6+
                                    </motion.div>
                                    <p className="text-lg opacity-90">Industry Leaders</p>
                                </div>
                                <div>
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4, type: "spring" }}
                                        className="text-5xl md:text-6xl font-bold mb-2"
                                    >
                                        5+
                                    </motion.div>
                                    <p className="text-lg opacity-90">Industry Sectors</p>
                                </div>
                                <div>
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.6, type: "spring" }}
                                        className="text-5xl md:text-6xl font-bold mb-2"
                                    >
                                        100%
                                    </motion.div>
                                    <p className="text-lg opacity-90">Customer Satisfaction</p>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* Trust Badge */}
                    <motion.section
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="py-8 text-center"
                    >
                        <div className="inline-flex items-center space-x-3 px-6 py-4 bg-gray-100 rounded-full">
                            <span className="text-2xl">🏆</span>
                            <p className="text-gray-700 font-medium">
                                Trusted by leading companies across multiple industries
                            </p>
                        </div>
                    </motion.section>
                </div>

                <Footer />
            </div>
        </div>
    );
};

export default Customers;
