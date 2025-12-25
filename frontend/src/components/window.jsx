import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { MessageCircle, BookOpen, Star, Send, ShieldCheck, ArrowRight, Ghost } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const VentCard = ({ text, rotation, x, y, delay }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
        whileInView={{ opacity: 1, scale: 1, x, y, rotate: rotation }}
        whileHover={{ scale: 1.1, rotate: 0, zIndex: 50 }}
        transition={{ delay, duration: 0.8 }}
        className="absolute glass-panel p-6 rounded-xl w-64 text-center cursor-pointer hover:bg-white/10 transition-colors"
    >
        <Ghost className="w-8 h-8 text-lavender mx-auto mb-3 opacity-70" />
        <p className="text-white/90 font-medium italic">"{text}"</p>
    </motion.div>
);

const VentWallSection = () => {
    const navigate = useNavigate();
    return (
        <section className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center py-20 bg-midnight">
            {/* Starry Background */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(50)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-white animate-pulse"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            width: `${Math.random() * 3}px`,
                            height: `${Math.random() * 3}px`,
                            animationDelay: `${Math.random() * 5}s`,
                            opacity: Math.random() * 0.7
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 mb-20 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">The Vent Wall</h2>
                <p className="text-lavender/80">Anonymous. Safe. You are not alone.</p>
            </div>

            <div className="relative w-full max-w-5xl h-[500px] flex items-center justify-center">
                <VentCard text="Is anyone else failing Calculus? Help." rotation={-10} x={-300} y={-100} delay={0.2} />
                <VentCard text="I miss my warm home food :(" rotation={5} x={-150} y={150} delay={0.4} />
                <VentCard text="My roommate sets 5 alarms and wakes up for NONE." rotation={-5} x={150} y={-120} delay={0.6} />
                <VentCard text="Just aced my first presentation!! OMG" rotation={12} x={320} y={80} delay={0.8} />
                <VentCard text="Why is laundry so confusing?" rotation={-15} x={0} y={0} delay={0.1} />
            </div>

            <button className="relative z-10 mt-10 px-8 py-3 border border-lavender/50 text-lavender rounded-full hover:bg-lavender hover:text-midnight transition-all uppercase tracking-widest text-sm font-bold cursor-pointer" onClick={() => navigate('/login')}>
                Share a Vent
            </button>
        </section>
    )
}

export default VentWallSection;