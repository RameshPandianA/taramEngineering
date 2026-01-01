import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Facilities = () => {
    const facilities = [
        {
            title: 'Manufacturing Facility',
            description: '5000 sqft of Factory with state-of-art Machine Tools located at the centre of Bangalore.',
            specs: ['5000 sqft', 'State-of-art Machine Tools', 'Central Bangalore Location'],
            icon: '🏭'
        },
        {
            title: 'Design Centre',
            description: 'Well equipped Design Centre in Bangalore with 2500 sqft space.',
            specs: ['2500 sqft', 'Fully Equipped', 'Modern Design Tools'],
            icon: '💻'
        },
        {
            title: 'Precision Capabilities',
            description: 'Ability to machine components upto 1 meter and with accuracy of 5 microns.',
            specs: ['Up to 1 meter components', '5 micron accuracy', 'High Precision'],
            icon: '⚙️'
        }
    ];

    const capabilities = [
        { name: 'CNC Machining', icon: '🔩' },
        { name: 'Precision Engineering', icon: '📐' },
        { name: 'Quality Testing', icon: '🔬' },
        { name: 'CAD/CAM Design', icon: '💻' },
        { name: 'Prototype Development', icon: '🛠️' },
        { name: 'Assembly Services', icon: '🔧' }
    ];

    return (
        <div className="min-h-screen overflow-x-hidden bg-white">
            <Navigation />
            
            {/* Main Content Area */}
            <div className="ml-64 min-h-screen">
                {/* Hero Section */}
                <section className="pt-20 pb-12 px-8">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">Our Facilities</h1>
                    <p className="text-xl text-gray-600">World-Class Infrastructure Powering Engineering Excellence</p>
                </section>

                {/* Main Facilities */}
                <section className="px-8 py-8">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Our Facilities</h2>
                    <div className="space-y-0">
                        {facilities.map((facility, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="py-6 border-b border-gray-200 hover:bg-gray-50 transition-colors"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="text-4xl flex-shrink-0">{facility.icon}</div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold mb-2 text-gray-900">{facility.title}</h3>
                                        <p className="text-gray-600 mb-4">{facility.description}</p>
                                        <ul className="space-y-2">
                                            {facility.specs.map((spec, i) => (
                                                <li key={i} className="flex items-center text-gray-600">
                                                    <span className="text-blue-400 mr-2">✓</span>
                                                    {spec}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Capabilities */}
                <section className="px-8 py-8">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Our Capabilities</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {capabilities.map((capability, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 rounded-xl text-center border border-gray-200 hover:bg-gray-50 transition-colors"
                            >
                                <div className="text-4xl mb-3">{capability.icon}</div>
                                <h3 className="text-sm font-semibold text-gray-900">{capability.name}</h3>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Quality Certification */}
                <section className="px-8 py-8">
                    <div className="p-8 rounded-2xl border border-gray-200 bg-gray-50">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900">Quality Certification</h2>
                        <p className="text-lg leading-relaxed text-gray-600">
                            Accredited with <strong className="text-blue-400">ISO 9001-2008</strong> certification by NVT Quality Certification Pvt. Ltd. 
                            (Partners of Kema Quality – Netherlands).
                        </p>
                    </div>
                </section>

                <Footer />
            </div>
        </div>
    );
};

export default Facilities;
