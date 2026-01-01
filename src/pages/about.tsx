import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About = () => {
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
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">About Us</h1>
                    <p className="text-xl text-gray-600">Discover the Story Behind Taram Engineering's Excellence</p>
                </motion.section>

            {/* Mission Section */}
            <section className="px-8 py-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
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
                        className="text-lg text-gray-600 leading-relaxed mb-8"
                    >
                        To become the <span className="text-yellow-300 font-bold">most valued Partner</span> for Customers around the world in Mechanical Engineering 
                        Design and Manufacture at <span className="text-pink-300 font-bold">competitive cost</span> and with <span className="text-purple-300 font-bold">highest Quality Standards</span>.
                    </motion.p>
                    
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl font-bold mb-4 text-white"
                    >
                        🌟 Who We Are
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-lg leading-relaxed text-gray-600"
                    >
                        Taram Engineering stands as a <span className="text-blue-300 font-bold">pioneering force</span> in mechanical engineering design and manufacturing services. 
                        With <span className="text-indigo-300 font-bold">over a decade of exceptional experience</span>, we have carved our niche as a trusted, reliable partner 
                        for industry leaders across diverse sectors including Railways, Defence, Aviation, Automotive, and beyond.
                    </motion.p>
                </motion.div>
            </section>

            {/* Values Section */}
            <section className="px-8 py-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-8 text-gray-900"
                >
                    Our Core Values
                </motion.h2>
                <div className="space-y-0">
                    {[
                        { title: 'Quality Excellence', desc: 'Uncompromising commitment to quality in every project', icon: '🎯' },
                        { title: 'True Partnership', desc: 'Building lasting relationships with our clients', icon: '🤝' },
                        { title: 'Innovation First', desc: 'Continuous improvement and technological advancement', icon: '💡' }
                    ].map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="py-6 border-b border-gray-200 hover:bg-gray-50 transition-colors"
                        >
                            <div className="flex items-start space-x-4">
                                <div className="text-4xl flex-shrink-0">{value.icon}</div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{value.title}</h3>
                                    <p className="text-gray-600">{value.desc}</p>
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

export default About;
