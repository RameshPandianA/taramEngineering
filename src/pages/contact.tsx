import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Contact = () => {
    return (
        <div className="min-h-screen overflow-x-hidden bg-white">
            <Navigation />
            
            {/* Main Content Area */}
            <div className="ml-64 min-h-screen">
                {/* Hero Section */}
                <section className="pt-20 pb-12 px-8">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">Contact Us</h1>
                    <p className="text-xl text-gray-600">Let's Start a Conversation - Your Engineering Partner Awaits</p>
                </section>

                {/* Contact Section */}
                <section className="px-8 py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-gray-900">Send us a Message</h2>
                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-300">
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                                        placeholder="+91 XXXXXXXXXX"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={6}
                                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                                        placeholder="Tell us about your project requirements..."
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-3 px-6 rounded-lg font-bold bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-gray-900">Get in Touch</h2>
                            <div className="space-y-6">
                                <div className="p-6 rounded-xl border border-gray-200 bg-gray-50">
                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Office Address</h3>
                                    <p className="leading-relaxed text-gray-600">
                                        <strong>Location:</strong> Bangalore, India<br />
                                        <strong>Factory:</strong> 5000 sqft<br />
                                        <strong>Design Centre:</strong> 2500 sqft
                                    </p>
                                </div>

                                <div className="p-6 rounded-xl border border-gray-700 bg-gray-800/50">
                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Contact Information</h3>
                                    <div className="space-y-3">
                                        <p className="text-gray-600">
                                            <span className="font-bold">Email:</span> info@taram.in
                                        </p>
                                        <p className="text-gray-300">
                                            <span className="font-bold">Website:</span> www.taram.in
                                        </p>
                                    </div>
                                </div>

                                <div className="p-6 rounded-xl border border-gray-700 bg-gray-800/50">
                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Business Hours</h3>
                                    <p className="leading-relaxed text-gray-600">
                                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                                        Saturday: 9:00 AM - 1:00 PM<br />
                                        Sunday: Closed
                                    </p>
                                </div>

                                <div className="p-6 rounded-xl border border-gray-700 bg-gray-800/50">
                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Why Choose Us?</h3>
                                    <ul className="space-y-2">
                                        {[
                                            'Over a decade of experience',
                                            'ISO 9001-2008 Certified',
                                            '5-micron precision manufacturing',
                                            'End-to-end solutions'
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center text-gray-600">
                                                <span className="text-blue-400 mr-2 font-bold">✓</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </div>
    );
};

export default Contact;
