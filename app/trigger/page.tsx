'use client';

import React, { useState } from 'react';
import { HugeiconsIcon } from "@hugeicons/react";
import { 
  Ticket01Icon, 
  Loading03Icon, 
  CheckmarkCircle02Icon,
} from "@hugeicons/core-free-icons";

export default function TriggerLaunchPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleTrigger = async () => {
    if (!confirm('Are you sure you want to trigger the Launch Email to ALL waitlist users?')) return;

    setIsSubmitting(true);
    setStatus('idle');
    setMessage('');
    
    try {
      const response = await fetch('https://korensi-nest-backend.onrender.com/waitlist/trigger-launch', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      setStatus('success');
      setMessage(data.message || 'Launch emails sent successfully!');
    } catch (err: any) {
      setStatus('error');
      setMessage(err.message || 'Failed to trigger launch emails.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">
      <div className="max-w-md w-full glass-card p-8 rounded-[40px] text-center">
        <div className="w-20 h-20 bg-emerald-500/10 rounded-3xl flex items-center justify-center mx-auto mb-8 text-emerald-400">
          <HugeiconsIcon icon={Ticket01Icon} size={40} />
        </div>

        <h1 className="text-3xl font-bold mb-4 text-gradient">Launch Day Trigger</h1>
        <p className="text-gray-400 mb-10">
          Click the button below to send the final "Launch Day" email to everyone on the waitlist. 
          This action cannot be undone.
        </p>

        {status === 'success' && (
          <div className="mb-8 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-emerald-400 flex items-center gap-3 justify-center">
            <HugeiconsIcon icon={CheckmarkCircle02Icon} size={20} />
            <span className="text-sm font-medium">{message}</span>
          </div>
        )}

        {status === 'error' && (
          <div className="mb-8 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-400 flex items-center gap-3 justify-center text-sm font-medium">
            {message}
          </div>
        )}

        <button 
          onClick={handleTrigger}
          disabled={isSubmitting}
          className="w-full payout-glow text-white py-5 rounded-2xl font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <HugeiconsIcon icon={Loading03Icon} className="animate-spin" size={24} />
              Sending Emails...
            </>
          ) : (
            <>
              <HugeiconsIcon icon={Ticket01Icon} size={24} />
              Trigger Launch Sequence
            </>
          )}
        </button>

        <p className="mt-8 text-xs text-gray-500 uppercase tracking-widest font-medium">
          Admin Use Only • FFO Beta Launch
        </p>
      </div>
    </main>
  );
}
