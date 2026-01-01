import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Customers = () => {
    return (
        <div className="min-h-screen overflow-x-hidden bg-white">
            <Navigation />
            
            {/* Main Content Area */}
            <div className="ml-64 min-h-screen">
                {/* Hero Section */}
                <section className="pt-20 pb-12 px-8">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">Our Customers</h1>
                    <p className="text-xl text-gray-600">Trusted Partners Across Industries - Building Success Together</p>
                </section>

                {/* Customers Section */}
                <section className="px-8 py-8">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Our Main Customers</h2>
                    <p className="text-lg text-gray-600 mb-8">
                        We are proud to serve leading companies across various industries including Railways, 
                        Defence, Aviation, Automotive, and more.
                    </p>

                    {/* Industry Sectors */}
                    <div className="space-y-0">
                        {[
                            { name: 'Railways', count: '50+', icon: '🚂' },
                            { name: 'Defence', count: '30+', icon: '🛡️' },
                            { name: 'Aviation', count: '25+', icon: '✈️' },
                            { name: 'Automotive', count: '40+', icon: '🚗' },
                            { name: 'Construction', count: '35+', icon: '🏗️' },
                            { name: 'Engineering', count: '60+', icon: '⚙️' }
                        ].map((sector, index) => (
                            <div
                                key={index}
                                className="py-6 border-b border-gray-200 hover:bg-gray-50 transition-colors"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <div className="text-4xl">{sector.icon}</div>
                                        <h3 className="text-xl font-semibold text-gray-900">{sector.name}</h3>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-2xl font-bold text-blue-400">{sector.count}</p>
                                        <p className="text-sm text-gray-400">Active Customers</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="px-8 py-8">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Why Customers Choose Us</h2>
                    <div className="space-y-0">
                        {[
                            { title: 'Quality Excellence', desc: 'ISO 9001-2008 certified processes ensuring highest quality standards', icon: '⭐' },
                            { title: 'Timely Delivery', desc: 'Commitment to meeting deadlines and exceeding expectations', icon: '⚡' },
                            { title: 'Expert Solutions', desc: 'Over a decade of experience in mechanical engineering', icon: '💼' }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="py-6 border-b border-gray-200 hover:bg-gray-50 transition-colors"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="text-4xl flex-shrink-0">{item.icon}</div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                                        <p className="text-gray-600">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <Footer />
            </div>
        </div>
    );
};

export default Customers;
