import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Lock, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Background Gradient/Image */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-aa-navy via-aa-navy-light to-aa-blue-dark opacity-90"></div>
                    {/* Optional: Add a background image here with object-cover */}
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight"
                    >
                        Securing Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-aa-cyan to-aa-blue">Future</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-white mb-10 max-w-3xl mx-auto"
                    >
                        Advanced technology solutions for home and business.
                        CCTV, Fire Alarms, and Intrusion Detection tailored to your needs.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
                    >
                        <Link to="/contact" className="px-8 py-4 bg-aa-blue text-slate-900 rounded-full font-bold text-lg hover:bg-aa-blue-dark transition-all transform hover:scale-105 shadow-lg shadow-aa-blue/30">
                            Free Quotation
                        </Link>
                        <Link to="/contact" className="px-8 py-4 bg-transparent border-2 border-aa-cyan text-aa-cyan rounded-full font-bold text-lg hover:bg-aa-cyan/10 transition-all transform hover:scale-105">
                            Free Site Assessment
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Services/Products Preview */}
            <section className="py-20 bg-white-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Core Solutions</h2>
                        <p className="text-slate-600 text-lg">Comprehensive security tailored for every environment.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Shield className="h-12 w-12 text-aa-cyan" />,
                                title: "CCTV Surveillance",
                                desc: "High-definition monitoring customized for your premises. Remote viewing and AI analytics."
                            },
                            {
                                icon: <Zap className="h-12 w-12 text-aa-blue" />,
                                title: "Fire Detection",
                                desc: "Early warning systems to protect lives and property. Integrated smoke and heat sensors."
                            },
                            {
                                icon: <Lock className="h-12 w-12 text-aa-cyan" />,
                                title: "Burglar Alarms",
                                desc: "State-of-the-art intrusion detection. Motion sensors, glass break detectors, and smart alerts."
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -10 }}
                                className="bg-white p-8 rounded-2xl border border-slate-200-light shadow-xl hover:shadow-2xl hover:border-aa-blue/30 transition-all"
                            >
                                <div className="mb-6 bg-white-light/50 w-20 h-20 rounded-full flex items-center justify-center">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                                <p className="text-slate-600 mb-6">{item.desc}</p>
                                <Link to="/products" className="flex items-center text-aa-blue hover:text-aa-cyan font-semibold">
                                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Redeem Code CTA */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-aa-blue/10 skew-y-3 transform origin-bottom-left"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="bg-gradient-to-r from-aa-blue-dark to-aa-navy p-12 rounded-3xl border border-aa-blue/20 shadow-2xl flex flex-col md:flex-row items-center justify-between">
                        <div className="mb-8 md:mb-0 md:mr-8 text-center md:text-left">
                            <h2 className="text-3xl font-bold text-white mb-4">Have a Promo Code?</h2>
                            <p className="text-white text-lg max-w-xl">
                                Redeem special discount codes from our partners and content creators to get exclusive deals on our security packages.
                            </p>
                        </div>
                        <Link to="/redeem" className="px-8 py-4 bg-white text-aa-navy-light rounded-full font-bold text-lg hover:bg-aa-cyan hover:text-aa-navy transition-all shadow-lg transform hover:scale-105">
                            Redeem Now
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
