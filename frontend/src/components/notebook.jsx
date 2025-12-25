import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { MessageCircle, BookOpen, Star, Send, ShieldCheck, ArrowRight, Ghost } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const NotebookSection = () => {
    const navigate = useNavigate();
    return (
        <section className="min-h-screen bg-amber-50 flex items-center justify-center p-4 md:p-20 relative text-slate-800">

            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Text Content */}
                <div className="space-y-6 z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-5xl md:text-7xl font-hand font-bold text-midnight mb-2">The Unofficial</h2>
                        <h2 className="text-5xl md:text-7xl font-hand font-bold text-indigo-600 underline decoration-wavy decoration-amber">Survival Guide</h2>
                    </motion.div>
                    <p className="text-lg font-inter text-slate-600 max-w-md">
                        Forget the official handbook. This is the real deal. Written by students, for students.
                    </p>
                </div>

                {/* Notebook Component */}
                <motion.div
                    initial={{ rotate: 5, opacity: 0, y: 50 }}
                    whileInView={{ rotate: -2, opacity: 1, y: 0 }}
                    transition={{ type: "spring", bounce: 0.4 }}
                    className="bg-white w-full aspect-[4/5] md:aspect-[3/4] rounded-sm shadow-2xl relative overflow-hidden border-l-8 border-l-slate-200"
                    style={{
                        backgroundImage: 'linear-gradient(#e2e8f0 1px, transparent 1px)',
                        backgroundSize: '100% 2rem'
                    }}
                >
                    {/* Ring Binding */}
                    <div className="absolute top-0 left-2 w-8 h-full flex flex-col justify-start gap-4 py-4 z-20">
                        {[...Array(10)].map((_, i) => (
                            <div key={i} className="w-6 h-6 rounded-full bg-gray-300 border-2 border-gray-400 shadow-inner"></div>
                        ))}
                    </div>

                    {/* Hand-drawn content */}
                    <div className="p-12 pl-16 pt-16 font-hand text-2xl md:text-3xl text-slate-700 leading-loose">
                        <ul className="space-y-6 list-disc list-outside ml-4">
                            <motion.li
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                How to pass <span className="bg-yellow-200 px-1 transform -rotate-1 inline-block">CS101</span> without crying.
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                The <span className="text-red-500 font-bold">ONLY</span> 2 AM coffee spot that has Wi-Fi.
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 }}
                            >
                                Burnout hacks (nap everywhere).
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.8 }}
                                className="text-indigo-600 cursor-pointer"
                                onClick={() => navigate('/login')}
                            >  
                                <u>Read more secrets -&gt;</u>
                                
                            </motion.li>
                        </ul>

                        {/* Doodles */}
                        <div className="absolute bottom-10 right-10 rotate-12 opacity-50">
                            <span className="text-6xl text-purple-400">★</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default NotebookSection;