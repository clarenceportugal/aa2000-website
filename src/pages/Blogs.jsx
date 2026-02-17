import React from 'react';
import { motion } from 'framer-motion';

const blogs = [
    {
        id: 1,
        title: "5 Reasons Why 4K CCTV is a Game Changer",
        excerpt: "Discover how ultra-high definition cameras provide irrefutable evidence and clearer insights.",
        date: "Feb 15, 2026",
        category: "CCTV",
        image: "https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&q=80&w=500"
    },
    {
        id: 2,
        title: "Fire Safety Checklist for Your Home",
        excerpt: "Don't wait for a disaster. Follow these simple steps to ensure your fire alarm system is ready.",
        date: "Feb 10, 2026",
        category: "Safety",
        image: "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&q=80&w=500"
    },
    {
        id: 3,
        title: "Smart Alarms vs Traditional Systems",
        excerpt: "Why upgrading to a smart app-controlled alarm system gives you better control and peace of mind.",
        date: "Jan 28, 2026",
        category: "Technology",
        image: "https://images.unsplash.com/photo-1558002038-109177381792?auto=format&fit=crop&q=80&w=500"
    }
];

const Blogs = () => {
    return (
        <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-slate-900 mb-2 text-center">Security Insights</h1>
                <p className="text-slate-600 text-center mb-12">Latest news, tips, and technology updates.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <motion.article
                            key={blog.id}
                            whileHover={{ y: -5 }}
                            className="bg-white-light rounded-2xl overflow-hidden border border-slate-200/50 hover:border-aa-blue/30 transition-all shadow-lg"
                        >
                            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-3 text-xs text-aa-cyan font-bold uppercase tracking-wider">
                                    <span>{blog.category}</span>
                                    <span>{blog.date}</span>
                                </div>
                                <h2 className="text-xl font-bold text-slate-900 mb-3 hover:text-aa-blue transition-colors cursor-pointer">{blog.title}</h2>
                                <p className="text-slate-600 text-sm mb-4">{blog.excerpt}</p>
                                <button className="text-aa-blue font-semibold text-sm hover:underline">Read More →</button>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blogs;
