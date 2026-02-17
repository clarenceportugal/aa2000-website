import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { totalItems } = useCart();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Products', path: '/products' },
        { name: 'Blogs', path: '/blogs' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="bg-aa-navy/90 backdrop-blur-md sticky top-0 z-50 border-b border-aa-navy-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <ShieldCheck className="h-8 w-8 text-aa-blue" />
                        <span className="text-xl font-bold text-white tracking-wider">
                            AA2000 <span className="text-aa-blue">Security</span>
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-aa-slate hover:text-aa-cyan transition-colors duration-300 font-medium"
                            >
                                {link.name}
                            </Link>
                        ))}

                        <Link to="/redeem" className="btn-primary px-4 py-2 rounded-md bg-aa-blue text-white hover:bg-aa-blue-dark transition-colors shadow-md shadow-aa-blue/20">
                            Redeem Code
                        </Link>

                        <Link to="/cart" className="relative p-2 text-aa-slate hover:text-aa-cyan transition-colors">
                            <ShoppingCart className="h-6 w-6" />
                            {totalItems > 0 && (
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center border-2 border-aa-navy">
                                    {totalItems}
                                </span>
                            )}
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-aa-slate hover:text-white focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-aa-navy border-b border-aa-navy-light overflow-hidden"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-aa-slate hover:text-white hover:bg-aa-navy-light"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                to="/redeem"
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-2 mt-4 text-center rounded-md bg-aa-blue text-white font-medium shadow-md shadow-aa-blue/20"
                            >
                                Redeem Code
                            </Link>
                            <Link
                                to="/cart"
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-2 text-center text-aa-slate hover:text-white flex items-center justify-center space-x-2"
                            >
                                <ShoppingCart className="h-4 w-4" />
                                <span>Cart ({totalItems})</span>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
