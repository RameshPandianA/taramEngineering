import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About = () => {
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
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">About Us</h1>
                    <p className="text-xl text-gray-600">Discover the Story Behind Taram Engineering's Excellence</p>
                </motion.section>

            {/* Company Background Section */}
            <section className="py-8">
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
                        Our Story
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-lg text-gray-600 leading-relaxed mb-8 space-y-4"
                    >
                        <p>
                            Taram was established in the year <span className="font-bold text-gray-900">1995</span> by a group of Engineering/Finance professionals having 
                            <span className="font-semibold text-gray-800"> two decades of work experience</span> from Industry leaders like TVS, Caterpillar, Fenner, Essar, BPL Mobile, Axis Aerospace, etc.
                        </p>
                        <p>
                            Taram's core competency of <span className="font-semibold text-gray-800">mechanical engineering</span> has been nursed and brought to maturity by the 
                            tireless efforts of the management team aided by skilled production team.
                        </p>
                    </motion.div>
                </motion.div>
            </section>


            {/* Promoters Section */}
            <section className="py-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-8 text-gray-900"
                >
                    Our Promoters
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                    {[
                        {
                            name: 'P.M. Vasudevan',
                            initials: 'P.M.V',
                            title: 'Mechanical Engineer',
                            qualification: 'Mechanical Engineer from Madras University',
                            experience: '25 years experience',
                            background: 'Has specialized and instrumental in establishing Supply Chain Management.',
                            companies: 'CMTI, TVS, L&T and HPL',
                            industries: 'Automotive, Light/Heavy Engineering Industries'
                        },
                        {
                            name: 'R. Karthikeyan',
                            initials: 'R.K',
                            title: 'Chartered Accountant',
                            qualification: 'Chartered Accountant',
                            experience: '25 years experience',
                            background: 'Specialist in Project finance and Treasury management. Instrumental in establishing various new projects and Resourcing of same.',
                            companies: 'Sundaram Clayton, Fenner, WIMCO, Essar Steel and Axis Aerospace & Technologies Private Limited',
                            industries: 'Director of Axis Aerospace & Technologies Private Limited'
                        },
                        {
                            name: 'A. Balasubramanian',
                            initials: 'A.B',
                            title: 'Cost Accountant',
                            qualification: 'Qualified Cost Accountant',
                            experience: '30 years experience',
                            background: 'Acknowledged for Costing/Systems and Administration.',
                            companies: 'TVS, Fenner, SIMCO Meters and National Rayon',
                            industries: 'Engineering field'
                        }
                    ].map((promoter, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow"
                        >
                            <div className="mb-4">
                                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                                    {promoter.initials}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{promoter.name}</h3>
                                <p className="text-lg font-semibold text-blue-600 mb-2">{promoter.title}</p>
                                <p className="text-sm text-gray-600 mb-3">{promoter.qualification}</p>
                            </div>
                            <div className="space-y-3">
                                <div>
                                    <p className="text-gray-700">
                                        <span className="font-semibold">{promoter.experience}</span> in {promoter.industries}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600 mb-2">
                                        <span className="font-semibold text-gray-700">Worked in:</span> {promoter.companies}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {promoter.background}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
                </div>

                <Footer />
            </div>
        </div>
    );
};

export default About;
