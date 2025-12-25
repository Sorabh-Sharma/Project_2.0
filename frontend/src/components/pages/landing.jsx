import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { MessageCircle, BookOpen, Star, Send, ShieldCheck, ArrowRight, Ghost } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import LaptopSection from '../laptop';
import NotebookSection from '../notebook';
import VentWallSection from '../window';

/* -------------------------------------------------------------------------- */
/*                                  MAIN APP                                  */
/* -------------------------------------------------------------------------- */

export default function UniversityLandingPage() {
    const { scrollYProgress } = useScroll();
    const background = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        ["#0A192F", "#FFFBEB", "#0A192F"]
    );

    const navigate = useNavigate();
    return (
        
        <motion.main className="w-full relative">

            {/* Navigation / Header */}
            <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-6 mix-blend-difference text-white">
                <div className="text-2xl font-black tracking-tighter">HOSTEL<span className="text-amber">OS</span></div>
                <button className="px-6 py-2 bg-white text-black font-bold rounded-full text-sm hover:opacity-90 cursor-pointer" onClick={()=>navigate('/login')}>
                    Login with .edu
                </button>
            </nav>

            <LaptopSection />
            <NotebookSection />
            <VentWallSection />

            {/* Footer */}
            <footer className="bg-black py-20 text-center border-t border-white/10">
                <h2 className="text-3xl font-bold mb-6">Ready to survive and thrive?</h2>
                <div className="flex justify-center gap-4">
                    <button className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors flex items-center gap-2 cursor-pointer" onClick={() => navigate('/login')}>
                        Get Started <ArrowRight size={20} />
                    </button>
                </div>
                <p className="mt-10 text-gray-500 text-sm">© 2024 University Hostel OS. All rights reserved.</p>
            </footer>

        </motion.main>
    );
}
