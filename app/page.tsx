

'use client';

import React, { useState } from 'react';
import { HugeiconsIcon } from "@hugeicons/react";
import { 
  Mortarboard01Icon, 
  CalculatorIcon, 
  LockIcon, 
  Clock01Icon, 
  Ticket01Icon, 
  CheckmarkCircle02Icon, 
  Loading03Icon,
  ArrowRight01Icon
} from "@hugeicons/core-free-icons";

export default function FFOStudentPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    university: '',
    email: ''
  });
  const [error, setError] = useState('');

  const handleJoin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      const response = await fetch('https://korensi-nest-backend.onrender.c/waitlist/join', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Something went wrong');
      }

      setShowSuccess(true);
      setFormData({ firstName: '', university: '', email: '' });
    } catch (err: any) {
      setError(err.message || 'Failed to join waitlist. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="selection:bg-emerald-500/30">
      {/* Top Notice */}
      {/* <div className="w-full bg-emerald-500 text-slate-900 py-2 overflow-hidden whitespace-nowrap border-b border-emerald-400">
        <div className="flex animate-marquee font-bold text-xs uppercase tracking-widest">
          <span className="mx-4">Batch #001: First Semester Cohort</span>
          <span className="mx-4">Limited to 100 Students</span>
          <span className="mx-4">Fractionalize Your Allowance</span>
          <span className="mx-4">No More Broke Weeks</span>
          <span className="mx-4">Batch #001: First Semester Cohort</span>
          <span className="mx-4">Limited to 100 Students</span>
          <span className="mx-4">Fractionalize Your Allowance</span>
          <span className="mx-4">No More Broke Weeks</span>
        </div>
      </div> */}

      {/* Navigation */}
      <nav className="w-full py-6 px-6 md:px-12 flex justify-between items-center glass-card sticky top-0 z-50">
        <div className="flex items-center gap-3">
          {/* Logo Placeholder */}
          <img className='w-15 h-15' src="/ffologo.png" alt="FFO Logo" />
          <div className="text-2xl font-bold tracking-tighter">
            <span className="text-white">FFO</span>
          </div>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400 uppercase tracking-widest">
          <a href="#how" className="hover:text-emerald-400 transition-colors">The System</a>
          <a href="#join" className="hover:text-emerald-400 transition-colors">The Beta</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-12 md:pt-24 pb-20 px-3 max-w-7xl mx-auto">

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-8xl font-bold mb-8 leading-tight tracking-tight">
              Stop Going Broke <br />
              <span className="text-gradient">By The 15th.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto md:mx-0 mb-10">
              For Food Only (FFO) fractionalizes your monthly allowance into <span className="text-white font-semibold">guaranteed daily payouts</span>. Eat well on Day 1 and Day 30.
            </p>

            <div className="flex flex-col md:flex-row items-center gap-6">
              <a href="#join" className="payout-glow text-white px-6 py-5 rounded-[30] font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2">
                Secure My Daily Payout
                <HugeiconsIcon icon={ArrowRight01Icon} size={20} />
              </a>
              {/* <p className="text-xs text-gray-500 flex items-center gap-2 uppercase tracking-widest">
                <HugeiconsIcon icon={Mortarboard01Icon} size={14} className="text-emerald-500" />
                Only for the founding 100 students
              </p> */}
            </div>
          </div>

          {/* Right Side: Hero Image - Hidden on mobile */}
          <div className="relative hidden md:flex justify-center items-center">
            {/* Detached 3D Shadow / Glow */}
            <div className="absolute bottom-[-20px] w-[60%] h-[40px] bg-emerald-500/20 blur-[50px] rounded-[100%] animate-pulse" />
            
            <div className="relative z-10 w-full max-w-lg transform hover:-translate-y-4 transition-transform duration-700 ease-in-out">
              <img className='w-full h-auto object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.6)]' src="hero5.png" alt="FFO Hero" />
            </div>
          </div>
        </div>
      </section>

      {/* Problem / Agitation */}
      <section className="py-24 px-6 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">The &quot;Allowance Curse&quot; is real.</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8 rounded-3xl border-l-4 border-l-red-500/50">
              <p className="text-gray-400 leading-relaxed mb-4">You get your allowance, feel rich for a week, and then spend the rest of the month taking G4oxide.</p>
              <span className="text-red-400 text-sm font-bold">— Week 3 Reality</span>
            </div>
            <div className="glass-card p-8 rounded-3xl border-l-4 border-l-emerald-500/50">
              <p className="text-gray-400 leading-relaxed mb-4">FFO divides your allowance by the days in the month. We pay you your &quot;Survival Funds&quot; daily.</p>
              <span className="text-emerald-400 text-sm font-bold">— The FFO Solution</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Needle Quote */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="serif italic text-4xl md:text-5xl text-gray-300 leading-relaxed mb-8">
            &quot;Everybody wants to enjoy the results of discipline... but not everyone is ready to go under <span className="text-emerald-500 underline underline-offset-8">the needle</span> of discipline.&quot;
          </div>
          <p className="text-emerald-400 font-bold uppercase tracking-widest text-sm">We are the needle that stitches your month together.</p>
        </div>
      </section>

      {/* How it Works */}
      <section id="how" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">How FFO Keeps You Fed</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-20 h-20 bg-emerald-500/10 rounded-3xl flex items-center justify-center mx-auto mb-6 text-emerald-400">
              <HugeiconsIcon icon={CalculatorIcon} size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4">Fractionalize</h3>
            <p className="text-gray-400 text-sm">Input your allowance. FFO calculates your &quot;Daily Survival Payout&quot; automatically.</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-emerald-500/10 rounded-3xl flex items-center justify-center mx-auto mb-6 text-emerald-400">
              <HugeiconsIcon icon={LockIcon} size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4">The Vault</h3>
            <p className="text-gray-400 text-sm">Funds for the end of the month are locked. Your future self will thank you.</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-emerald-500/10 rounded-3xl flex items-center justify-center mx-auto mb-6 text-emerald-400">
              <HugeiconsIcon icon={Clock01Icon} size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4">Schedule Sync</h3>
            <p className="text-gray-400 text-sm">Daily segment payouts for Breakfast, Lunch, and Dinner. No impulse snacking.</p>
          </div>
        </div>
      </section>

      {/* Join Waitlist */}
      <section id="join" className="py-32 px-6">
        <div className="max-w-4xl mx-auto glass-card rounded-[40px] p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 text-6xl text-emerald-500/10 opacity-50">
            <HugeiconsIcon icon={Ticket01Icon} size={80} className="rotate-12" />
          </div>
          
          <div className="relative z-10 max-w-xl">
            <h2 className="text-4xl font-bold mb-4">Join the FFO Beta</h2>
            <p className="text-gray-400 mb-10">We are building FFO specifically for students who are tired of the "SAPA lifestyle". We are currently in closed beta and looking for 100 students to test our fractionalization algorithm and give us feedback.</p>

            {/* Spots Counter */}
            {/* <div className="mb-10 p-6 bg-white/5 rounded-2xl border border-white/5 animate-pulse-custom">
              <div className="flex justify-between text-xs font-bold mb-3">
                <span className="text-gray-500">Student Beta Capacity</span>
                <span className="text-emerald-400">89 / 100</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full w-[89%] rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>
              </div>
              <p className="text-xs text-red-400 font-bold mt-4">🚨 Only 11 spots remaining for this semester.</p>
            </div> */}

            <form className="space-y-4" onSubmit={handleJoin}>
              <div className="grid md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="First Name" 
                  required 
                  className="w-full bg-slate-900 border border-white/10 px-6 py-4 rounded-xl focus:border-emerald-500 outline-none transition-all"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
                <input 
                  type="text" 
                  placeholder="University" 
                  required 
                  className="w-full bg-slate-900 border border-white/10 px-6 py-4 rounded-xl focus:border-emerald-500 outline-none transition-all"
                  value={formData.university}
                  onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                />
              </div>
              <input 
                type="email" 
                placeholder="Student Email" 
                required 
                className="w-full bg-slate-900 border border-white/10 px-6 py-4 rounded-xl focus:border-emerald-500 outline-none transition-all"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              {error && <p className="text-red-400 text-sm text-center">{error}</p>}
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full payout-glow text-white py-5 rounded-xl font-bold text-lg hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <HugeiconsIcon icon={Loading03Icon} className="animate-spin" size={24} />
                    Processing...
                  </>
                ) : (
                  "Secure My Spot"
                )}
              </button>
              <p className="text-center text-gray-500 text-xs">Fractionalize your budget. Focus on your grades.</p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center text-gray-600 text-sm">
        <p>&copy; 2026 For Food Only (FFO). All rights reserved.</p>
        <p className="mt-2 flex items-center justify-center gap-2">
          <span className="w-1 h-1 bg-emerald-500 rounded-full"></span>
          Discipline is freedom.
          <span className="w-1 h-1 bg-emerald-500 rounded-full"></span>
        </p>
      </footer>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-slate-950/90 backdrop-blur-md z-[100] flex items-center justify-center p-6 text-center">
          <div className="max-w-sm">
            <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-950">
              <HugeiconsIcon icon={CheckmarkCircle02Icon} size={40} />
            </div>
            <h2 className="text-3xl font-bold mb-4">You&apos;re in the 100.</h2>
            <p className="text-gray-400 mb-8">We&apos;ve sent a survival package to your student email. Get ready to master your allowance.</p>
            <button 
              onClick={() => setShowSuccess(false)} 
              className="text-emerald-400 font-bold underline underline-offset-8"
            >
              Return Home
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

