import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Lock, ArrowLeft, ArrowRight, Eye, EyeOff, Hash, BookOpen, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const RegistrationPage = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        regNumber: '',
        year: '',
        branch: '',
        password: '',
        agreeToTerms: false
    });

    const handleRegister = async (e) => {
        e.preventDefault();

        const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
        if (!passwordRegex.test(formData.password)) {
            alert("Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character.");
            return;
        }

        setIsLoading(true);
        try {
            // Exclude agreeToTerms from the payload sent to backend
            const { agreeToTerms, ...registrationData } = formData;

            const response = await fetch('http://localhost:8080/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(registrationData)
            });
            const result = await response.json();
            if (response.ok) {
                alert("Registration successful! Redirecting to login...");
                setTimeout(() => {
                    navigate('/login');
                }, 1000);
            } else {
                alert(result.message || result.error || "Registration failed. Please try again.");
            }
        } catch (error) {
            console.error("Registration failed:", error);
            alert("An error occurred. Please check your connection and try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    return (
        <div className="min-h-screen w-full bg-[#0A192F] relative overflow-hidden flex items-center justify-center p-4">

            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[100px]" />
            </div>

            {/* Back Button */}
            <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => navigate('/')}
                className="absolute top-6 left-6 flex items-center gap-2 text-slate-400 hover:text-white transition-colors group z-20"
            >
                <div className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:bg-white/10">
                    <ArrowLeft size={18} />
                </div>
                <span className="text-sm font-medium text-white">Back to Landing</span>
            </motion.button>

            {/* Registration Card */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                className="w-full max-w-lg relative z-10"
            >
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">

                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-70" />

                    <div className="text-center mb-8">
                        <motion.h1 className="text-3xl font-bold text-white mb-2 tracking-tight">
                            Create Account
                        </motion.h1>
                        <motion.p className="text-slate-400 text-sm">
                            Join our community to get started
                        </motion.p>
                    </div>

                    <form onSubmit={handleRegister} className="space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Name */}
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1">Full Name</label>
                                <div className="relative group">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-indigo-400 transition-colors" size={18} />
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        className="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white focus:outline-none focus:border-indigo-500/50 focus:bg-black/40 transition-all text-sm"
                                    />
                                </div>
                            </div>

                            {/* Registration Number */}
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1">Reg. Number</label>
                                <div className="relative group">
                                    <Hash className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-indigo-400 transition-colors" size={18} />
                                    <input
                                        type="text"
                                        name="regNumber"
                                        required
                                        onChange={handleChange}
                                        placeholder="1230XXXX"
                                        className="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white focus:outline-none focus:border-indigo-500/50 focus:bg-black/40 transition-all text-sm"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Year */}
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1">Current Year</label>
                                <div className="relative group">
                                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-indigo-400 transition-colors" size={18} />
                                    <select
                                        name="year"
                                        required
                                        onChange={handleChange}
                                        className="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white focus:outline-none focus:border-indigo-500/50 focus:bg-black/40 transition-all text-sm appearance-none"
                                    >
                                        <option value="" className="bg-slate-900">Select Year</option>
                                        <option value="1" className="bg-slate-900">1st Year</option>
                                        <option value="2" className="bg-slate-900">2nd Year</option>
                                        <option value="3" className="bg-slate-900">3rd Year</option>
                                        <option value="4" className="bg-slate-900">4th Year</option>
                                    </select>
                                </div>
                            </div>

                            {/* Branch */}
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1">Branch</label>
                                <div className="relative group">
                                    <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-indigo-400 transition-colors" size={18} />
                                    <input
                                        type="text"
                                        name="branch"
                                        required
                                        onChange={handleChange}
                                        placeholder="e.g. CSE"
                                        className="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white focus:outline-none focus:border-indigo-500/50 focus:bg-black/40 transition-all text-sm"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Password */}
                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1">Password</label>
                            <div className="relative group">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-indigo-400 transition-colors" size={18} />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    required
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    className="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-11 pr-12 text-white focus:outline-none focus:border-indigo-500/50 focus:bg-black/40 transition-all text-sm"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        {/* Terms and Conditions */}
                        <div className="flex items-start gap-3 ml-1">
                            <input
                                type="checkbox"
                                name="agreeToTerms"
                                required
                                id="terms"
                                onChange={handleChange}
                                className="mt-1 w-4 h-4 rounded border-white/10 bg-black/20 text-indigo-600 focus:ring-indigo-500/50"
                            />
                            <label htmlFor="terms" className="text-xs text-slate-400 leading-relaxed cursor-pointer select-none">
                                I agree to the <span className="text-indigo-400 hover:underline">Terms of Service</span> and <span className="text-indigo-400 hover:underline">Privacy Policy</span>.
                            </label>
                        </div>

                        {/* Submit Button */}
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>
                                    Create Account <ArrowRight size={20} />
                                </>
                            )}
                        </motion.button>
                    </form>
                </div>

                <motion.p className="text-center text-slate-500 text-sm mt-6">
                    Already have an account? <span onClick={() => navigate('/login')} className="text-white font-medium cursor-pointer hover:underline underline-offset-4">Sign In</span>
                </motion.p>
            </motion.div>
        </div>
    );
};

export default RegistrationPage;