import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { MessageCircle, BookOpen, Star, Send, ShieldCheck, ArrowRight, Ghost } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

/* -------------------------------------------------------------------------- */
/*                                 STAGE 1: LAPTOP                            */
/* -------------------------------------------------------------------------- */

const LaptopSection = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: false, amount: 0.3 });
    const navigate = useNavigate();

    const messages = [
        { id: 1, text: "Hey! Just moved in. feeling a bit lost lol", sender: "junior", delay: 0.5 },
        { id: 2, text: "Welcome to hydration station! Don't worry, we've all been there.", sender: "senior", delay: 1.5 },
        { id: 3, text: "Any tips for surviving 8am lectures?", sender: "junior", delay: 2.5 },
        { id: 4, text: "Coffee. Lots of it. And find a bus buddy!", sender: "senior", delay: 3.5 },
    ];

    return (
        <section ref={containerRef} className="min-h-screen flex items-center justify-center p-4 md:p-10 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full bg-midnight -z-20"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-900/30 rounded-full blur-[100px] -z-10"></div>

            <motion.div
                initial={{ scale: 0.8, opacity: 0, rotateX: 20 }}
                animate={isInView ? { scale: 1, opacity: 1, rotateX: 0 } : {}}
                transition={{ duration: 1, type: "spring" }}
                className="w-full max-w-4xl aspect-[16/10] bg-gray-900 rounded-2xl border-4 border-gray-800 shadow-2xl relative flex flex-col overflow-hidden"
            >
                {/* Laptop Cam & Bezel */}
                <div className="h-8 bg-gray-800 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                </div>

                {/* Screen Content */}
                <div className="flex-1 bg-gradient-to-br from-slate-900 to-slate-800 p-6 flex flex-col relative overflow-hidden">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-indigo-600 rounded-lg">
                                <ShieldCheck className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h2 className="font-bold text-xl text-white">Senior-Junior Bridge</h2>
                                <p className="text-xs text-indigo-300">Online • 428 Students</p>
                            </div>
                        </div>
                    </div>

                    {/* Chat Area */}
                    <div className="flex-1 flex flex-col gap-4 overflow-y-auto px-2">
                        {messages.map((msg) => (
                            <motion.div
                                key={msg.id}
                                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                                transition={{ delay: msg.delay, duration: 0.5 }}
                                className={`max-w-[80%] p-4 rounded-2xl backdrop-blur-md border border-white/5 ${msg.sender === 'junior'
                                    ? 'self-start bg-slate-700/50 text-slate-100 rounded-tl-sm'
                                    : 'self-end bg-indigo-600/80 text-white rounded-tr-sm'
                                    }`}
                            >
                                <p className="text-sm md:text-base font-medium">{msg.text}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Input Simulation */}
                    <div className="mt-6 relative">
                        <div className="h-12 bg-white/5 rounded-full border border-white/10 flex items-center px-4">
                            <span className="text-gray-500 text-sm animate-pulse">Type a message...</span>
                        </div>
                    </div>
                </div>

                <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/5 to-transparent mix-blend-overlay"></div>
            </motion.div>

            <div className="absolute bottom-10 text-center w-full">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 4.5 }}
                    className="text-4xl md:text-6xl font-black italic tracking-tight mb-4"
                >
                    Don't Navigate <span className="text-amber">Uni Alone.</span>
                </motion.h1>
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 4.7 }}
                    className="px-8 py-3 bg-amber text-midnight font-bold rounded-full hover:scale-105 transition-transform cursor-pointer"
                    onClick={() => navigate('/login')}
                >
                    Find a Big Sibling
                </motion.button>
            </div>
        </section>
    );
};

export default LaptopSection;