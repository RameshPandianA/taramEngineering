import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ChromaGrid from '../components/ChromaGrid';

const Facilities = () => {
    const manufacturingItems = [
        {
            image: '/images/milling-machine.jpg',
            title: 'Milling Machines',
            subtitle: 'Conventional Machines',
            description: 'Max Speed: 2200 RPM - Max Movement X-1000/Y-400/Z-300',
            borderColor: '#3B82F6',
            gradient: 'linear-gradient(145deg, #3B82F6, #1E40AF)'
        },
        {
            image: '/images/lathe.jpg',
            title: 'Lathe',
            subtitle: 'Conventional Machines',
            description: 'Max Speed: 2200 RPM - Max swing: 500 mm',
            borderColor: '#10B981',
            gradient: 'linear-gradient(145deg, #10B981, #059669)'
        },
        {
            image: '/images/pillar-drilling-machine.jpg',
            title: 'Pillar Drilling Machines',
            subtitle: 'Conventional Machines',
            description: 'Max Length: 680mm - Max Dia - 45mm',
            borderColor: '#F59E0B',
            gradient: 'linear-gradient(145deg, #F59E0B, #D97706)'
        },
        {
            image: '/images/cylindrical-grinding-machine.jpg',
            title: 'Cylindrical Grinding Machine',
            subtitle: 'Conventional Machines',
            description: 'Max Length: 1.2 mts - Max Dia - 200mm',
            borderColor: '#8B5CF6',
            gradient: 'linear-gradient(145deg, #8B5CF6, #7C3AED)'
        },
        {
            image: '/images/id-honing-machine.jpg',
            title: 'ID Honing Machine',
            subtitle: 'Conventional Machines',
            description: 'Max Dia - 80mm',
            borderColor: '#EC4899',
            gradient: 'linear-gradient(145deg, #EC4899, #DB2777)'
        },
        {
            image: '/images/cnc-lathe-1.jpeg',
            title: 'CNC Lathes',
            subtitle: 'CNC Machines',
            description: 'Max Speed: 3000 RPM - Max Length X-725 mm/Z-450mm - Max Dia: 250mm - Accuracy: 5-10 Microns',
            borderColor: '#06B6D4',
            gradient: 'linear-gradient(145deg, #06B6D4, #0891B2)'
        },
        {
            image: '/images/vmc-1.jpg',
            title: 'VMCs - Machines',
            subtitle: 'CNC Machines',
            description: 'Max Length: X-850mm/Y-500mm/Z-600mm - Max Speed: 8000 RPM - Accuracy: 5-10 Microns',
            borderColor: '#EF4444',
            gradient: 'linear-gradient(145deg, #EF4444, #DC2626)'
        },
        {
            image: '/images/cmm-machine.jpg',
            title: 'Quality Infrastructure',
            subtitle: 'Quality Control',
            description: '2D digital Height Gauge, Air Gauges, Digital Verniers, Micrometers, Bore Dial Gauges, Snap Gauges, Ready access to CMM, Periodical calibration',
            borderColor: '#14B8A6',
            gradient: 'linear-gradient(145deg, #14B8A6, #0D9488)'
        },
        {
            image: '/images/design-centre.jpg',
            title: 'Design Infrastructure',
            subtitle: 'Design Centre',
            description: '2500 sq ft state of the art Design centre at Bangalore - Fully Air conditioned with Fire Protection - 24 x 7 Security - UPS and Generator back-up - Leased line connectivity - Server based LAN - Firewall - Licensed Software: Unigraphics/DELCAM',
            borderColor: '#6366F1',
            gradient: 'linear-gradient(145deg, #6366F1, #4F46E5)'
        }
    ];

    return (
        <div className="min-h-screen bg-white">
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
                        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">
                            Manufacturing Infrastructure
                        </h1>
                        <p className="text-xl text-gray-600">
                            State-of-the-art facilities powering precision engineering excellence
                        </p>
                    </motion.section>

                    {/* ChromaGrid Section */}
                    <section className="py-8">
                        <div style={{ minHeight: '800px', position: 'relative' }}>
                            <ChromaGrid 
                                items={manufacturingItems}
                                radius={300}
                                damping={0.45}
                                fadeOut={0.6}
                                ease="power3.out"
                            />
                        </div>
                    </section>

                    {/* Quality Certification */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="py-8"
                    >
                        <div className="p-8 rounded-2xl border border-gray-200 bg-gray-50">
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">Quality Certification</h2>
                            <p className="text-lg leading-relaxed text-gray-600">
                                Accredited with <strong className="text-blue-600">ISO 9001-2008</strong> certification by NVT Quality Certification Pvt. Ltd. 
                                (Partners of Kema Quality – Netherlands).
                            </p>
                        </div>
                    </motion.section>
                </div>

                <Footer />
            </div>
        </div>
    );
};

export default Facilities;
