import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Home = () => {
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
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">Welcome to Taram Engineering</h1>
                    <p className="text-xl text-gray-600">Transforming Ideas into Engineering Excellence - Your Trusted Partner in Mechanical Design & Manufacturing</p>
                </motion.section>

                {/* Mission Section */}
                <section className="px-8 py-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-6 text-gray-900"
                    >
                        Our Mission
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-lg text-gray-300 leading-relaxed max-w-4xl"
                    >
                        To become the <span className="text-yellow-300 font-bold">most valued Partner</span> for Customers around the world in Mechanical Engineering 
                        Design and Manufacture at <span className="text-pink-300 font-bold">competitive cost</span> and with <span className="text-purple-300 font-bold">highest Quality Standards</span>.
                    </motion.p>
                </section>

                {/* Business Verticals Section */}
                <section className="px-8 py-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-8 text-white"
                    >
                        Business Verticals Serviced
                    </motion.h2>
                    <div className="space-y-0">
                        {[
                            { name: 'Railways', icon: '🚂' },
                            { name: 'Off-Highway Vehicles', icon: '🚜' },
                            { name: 'Engines', icon: '⚙️' },
                            { name: 'Defence', icon: '🛡️' },
                            { name: 'Aviation', icon: '✈️' },
                            { name: 'Construction', icon: '🏗️' },
                            { name: 'Automotives', icon: '🚗' }
                        ].map((vertical, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="py-6 border-b border-gray-200 hover:bg-gray-50 transition-colors"
                            >
                                <div className="flex items-center space-x-4">
                                    <div className="text-4xl">{vertical.icon}</div>
                                    <h3 className="text-xl font-semibold text-gray-900">{vertical.name}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Key Differentiators Section */}
                <section className="px-8 py-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-8 text-white"
                    >
                        Key Differentiators
                    </motion.h2>
                    <div className="space-y-0">
                        {[
                            {
                                title: 'Specialized Expertise',
                                description: 'Specialists in Mechanical Engineering and Manufacturing with experience over a decade.',
                                icon: '🎯'
                            },
                            {
                                title: 'State-of-the-Art Facility',
                                description: '5000 sqft of Factory with state-of-art Machine Tools located at the centre of Bangalore.',
                                icon: '🏭'
                            },
                            {
                                title: 'Precision Manufacturing',
                                description: 'Ability to machine components upto 1 meter and with accuracy of 5 microns.',
                                icon: '⚙️'
                            },
                            {
                                title: 'Expert Team',
                                description: 'Proven Technical and Managerial Talent.',
                                icon: '👥'
                            },
                            {
                                title: 'Design Centre',
                                description: 'Well equipped Design Centre in Bangalore with 2500 sqft space.',
                                icon: '💻'
                            },
                            {
                                title: 'End-to-End Solutions',
                                description: 'Ability to provide end-to-end solution (ie) Product Design to Development.',
                                icon: '🔄'
                            },
                            {
                                title: 'Quality Certification',
                                description: 'Accredited with ISO 9001-2008 certification by NVT Quality Certification Pvt. Ltd. (Partners of Kema Quality – Netherlands).',
                                icon: '✅'
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="py-6 border-b border-gray-200 hover:bg-gray-50 transition-colors"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="text-4xl flex-shrink-0">{item.icon}</div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                                        <p className="text-gray-600">{item.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <Footer />
            </div>
        </div>
    )
}

export default Home;
