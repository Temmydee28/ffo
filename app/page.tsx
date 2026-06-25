
'use client';
import React, { useState } from 'react';
import { HugeiconsIcon } from "@hugeicons/react";
import { 
  HelpCircleIcon,
  CreditCardIcon,
  SecurityIcon,
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
      const response = await fetch('https://korensi-nest-backend.onrender.com/waitlist/join', {
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
      {/* Navigation */}
      <nav className="w-full py-5 px-5 md:px-10 flex justify-between items-center glass-card sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <img className='w-10 h-10' src="/icon.png" alt="FFO Logo" />
          <div className="text-2xl font-bold tracking-tighter">
            <span className="text-white">FFO</span>
          </div>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400 uppercase tracking-widest">
          <a href="#home" className="hover:text-emerald-400 transition-colors">Home</a>
          <a href="#services" className="hover:text-emerald-400 transition-colors">Services</a>
          <a href="#about" className="hover:text-emerald-400 transition-colors">About Us</a>
          <a href="#join" className="hover:text-emerald-400 transition-colors">Waitlist</a>
        </div>
        <a href="#join" className="hidden md:block bg-emerald-500 hover:bg-emerald-600 text-slate-900 font-bold px-5 py-2.5 rounded-full text-xs uppercase tracking-wider transition-all">
          Join Waitlist
        </a>
      </nav>

      {/* Home (Hero) */}
      <section id="home" className="relative pt-12 md:pt-24 pb-20 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-8xl font-bold mb-8 leading-tight tracking-tight">
              Stop Going Broke <br />
              <span className="text-gradient">By The 15th.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto md:mx-0 mb-10">
              For Food Only (FFO) fractionalizes your monthly allowance into <span className="text-white font-semibold">guaranteed daily payouts</span>. Eat well on Day 1 and Day 30.
            </p>

            <div className="flex flex-col md:flex-row items-center gap-6">
              <a href="#join" className="payout-glow text-white px-6 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2 cursor-pointer">
                Secure My Daily Payout
                <HugeiconsIcon icon={ArrowRight01Icon} size={20} />
              </a>
              <p className="text-xs text-gray-500 flex items-center gap-2 uppercase tracking-widest">
                <HugeiconsIcon icon={Mortarboard01Icon} size={14} className="text-emerald-500" />
                Join the beta waitlist. Zero cost to join. Guaranteed survival.
              </p>
            </div>
          </div>

          <div className="relative hidden md:flex justify-center items-center">
            <div className="absolute bottom-[-20px] w-[60%] h-[40px] bg-emerald-500/20 blur-[50px] rounded-[100%] animate-pulse" />
            <div className="relative z-10 w-full max-w-lg transform hover:-translate-y-4 transition-transform duration-700 ease-in-out">
              <img className='w-full h-auto object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.6)]' src="/icon.png" alt="FFO Hero" />
            </div>
          </div>
        </div>
      </section>

      {/* Quote banner */}
      <section className="py-24 px-6 text-center border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-3xl mx-auto">
          <div className="serif italic text-4xl md:text-5xl text-gray-300 leading-relaxed mb-8">
            &quot;Everybody wants to enjoy the results of discipline... but not everyone is ready to go under <span className="text-emerald-500 underline underline-offset-8">the needle</span> of discipline.&quot;
          </div>
          <p className="text-emerald-400 font-bold uppercase tracking-widest text-sm">We are the needle that stitches your month together.</p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 border-b border-white/5 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">Our Services</h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          FFO provides a specialized micro-budgeting system tailored explicitly to help university students manage their monthly eating allowances without running dry.
        </p>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center bg-white/[0.02] p-8 rounded-3xl border border-white/5">
            <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-emerald-400">
              <HugeiconsIcon icon={CalculatorIcon} size={28} />
            </div>
            <h3 className="text-xl font-bold mb-4">Smart Budget Fractionalization</h3>
            <p className="text-gray-400 text-sm">
              Input your allowance and set your monthly targets. Our algorithms calculate your daily survival payouts automatically based on your customized meals-per-day profile.
            </p>
          </div>
          <div className="text-center bg-white/[0.02] p-8 rounded-3xl border border-white/5">
            <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-emerald-400">
              <HugeiconsIcon icon={LockIcon} size={28} />
            </div>
            <h3 className="text-xl font-bold mb-4">Locked Allowance Vaults</h3>
            <p className="text-gray-400 text-sm">
              Funds allocated for later in the semester are locked safely in your wallet. FFO ensures you cannot accidentally overspend today's allowances on impulse purchases.
            </p>
          </div>
          <div className="text-center bg-white/[0.02] p-8 rounded-3xl border border-white/5">
            <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-emerald-400">
              <HugeiconsIcon icon={Clock01Icon} size={28} />
            </div>
            <h3 className="text-xl font-bold mb-4">Automated Daily Disbursements</h3>
            <p className="text-gray-400 text-sm">
              Receive your allowance segments seamlessly on your dashboard every single day. Keep your spending regular, simple, and synced to your biological clock.
            </p>
          </div>
        </div>
      </section>

      {/* Paystack Business & Product Information (About) */}
      <section id="about" className="py-24 px-6 bg-white/[0.01]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest">Product Information</span>
            <h2 className="text-4xl font-bold mt-2">How FFO Operates</h2>
            <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
              For Food Only (FFO) is a specialized student micro-budgeting system. We build tools that make smart budgeting visual, practical, and highly disciplined for young adults.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-stretch">
            <div className="glass-card p-8 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <HugeiconsIcon icon={CreditCardIcon} size={24} className="text-emerald-400" />
                  <h3 className="text-xl font-bold">Payments & Transactions</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  We integrate standard banking channels using Paystack to let users fund their local FFO Wallet. These funds are saved securely, and daily payouts are systematically generated as allowances. Users scan and pay approved campus cafeterias/merchants through their locked daily payouts.
                </p>
              </div>
              <div className="border-t border-white/5 pt-4 text-xs text-gray-500">
                Authorized deposits and merchant settlements are processed securely via verified gateways.
              </div>
            </div>

            <div className="glass-card p-8 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <HugeiconsIcon icon={SecurityIcon} size={24} className="text-emerald-400" />
                  <h3 className="text-xl font-bold">Security, Verification & KYC</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Before a student can unlock virtual account details or initiate payouts, they must complete a multi-stage security check. This includes personal university details verification, valid ID document validation (NIN/BVN mapping), and configuring a secure transaction PIN.
                </p>
              </div>
              <div className="border-t border-white/5 pt-4 text-xs text-gray-500">
                100% compliance with local financial regulations and student privacy laws.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Waitlist */}
      <section id="join" className="py-24 px-6 max-w-4xl mx-auto">
        <div className="glass-card rounded-[40px] p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 text-6xl text-emerald-500/10 opacity-50">
            <HugeiconsIcon icon={Ticket01Icon} size={80} className="rotate-12" />
          </div>
          
          <div className="relative z-10 max-w-xl">
            <h2 className="text-4xl font-bold mb-4">Join the FFO Beta</h2>
            <p className="text-gray-400 mb-10">As FFO Beta Tester you get:<br/>. Exclusive &quot;Founding User&quot; badge in the app. <br/>. Early Access to FFO Premium Features. <br/>. A direct say in how we build the future of Student Fintech</p>

            <form className="space-y-4" onSubmit={handleJoin}>
              <div className="grid md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="First Name" 
                  required 
                  className="w-full bg-slate-900 border border-white/10 px-6 py-4 rounded-xl focus:border-emerald-500 outline-none transition-all text-white"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
                <input 
                  type="text" 
                  placeholder="University" 
                  required 
                  className="w-full bg-slate-900 border border-white/10 px-6 py-4 rounded-xl focus:border-emerald-500 outline-none transition-all text-white"
                  value={formData.university}
                  onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                />
              </div>
              <input 
                type="email" 
                placeholder="Student Email" 
                required 
                className="w-full bg-slate-900 border border-white/10 px-6 py-4 rounded-xl focus:border-emerald-500 outline-none transition-all text-white"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              {error && <p className="text-red-400 text-sm text-center">{error}</p>}
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full payout-glow text-white py-5 rounded-xl font-bold text-lg hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-3 cursor-pointer"
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
        <p className="text-xs text-gray-500 mt-2">For customer inquiries and payment disputes, please reach out to forfoodonly4fo@gmail.com.</p>
        <p className="mt-4 flex items-center justify-center gap-2">
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
              className="text-emerald-400 font-bold underline underline-offset-8 cursor-pointer"
            >
              Return Home
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

