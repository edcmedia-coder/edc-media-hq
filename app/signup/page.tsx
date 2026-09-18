'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Terminal, ShieldCheck, ArrowRight, UserPlus, Mail, Lock } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [orgName, setOrgName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      window.location.href = '/app';
    }, 1000);
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md bg-[#0D1017] border border-white/[0.1] rounded-[12px] p-8 space-y-8 shadow-2xl">
        <div className="space-y-3 text-center">
          <div className="w-12 h-12 rounded-[8px] bg-[#121620] border border-[#7C6CFF]/30 flex items-center justify-center mx-auto text-[#7C6CFF]">
            <UserPlus className="w-6 h-6" />
          </div>
          <span className="font-mono text-xs text-[#7C6CFF] tracking-[0.25em] uppercase">
            TENANT PROVISIONING
          </span>
          <h1 className="font-display text-2xl font-extrabold text-[#F4F7FA]">
            Initialize EDC SaaS Tenant
          </h1>
          <p className="font-body text-sm text-[#A4ACB8]">
            Deploy your dedicated autonomous software organization.
          </p>
        </div>

        <form onSubmit={handleSignup} className="space-y-4">
          <div className="space-y-1.5">
            <label className="font-mono text-xs text-[#A4ACB8] uppercase">Organization Name</label>
            <input
              type="text"
              required
              value={orgName}
              onChange={(e) => setOrgName(e.target.value)}
              placeholder="Acme Enterprise"
              className="w-full bg-[#050609] border border-white/[0.1] rounded-[6px] px-4 py-3 text-sm text-[#F4F7FA] placeholder-[#69717F] focus:outline-none focus:border-[#7C6CFF]"
            />
          </div>

          <div className="space-y-1.5">
            <label className="font-mono text-xs text-[#A4ACB8] uppercase">Operator Email</label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-[#69717F]" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="operator@acme.com"
                className="w-full bg-[#050609] border border-white/[0.1] rounded-[6px] pl-10 pr-4 py-3 text-sm text-[#F4F7FA] placeholder-[#69717F] focus:outline-none focus:border-[#7C6CFF]"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="font-mono text-xs text-[#A4ACB8] uppercase">Master Password</label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-3.5 w-4 h-4 text-[#69717F]" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full bg-[#050609] border border-white/[0.1] rounded-[6px] pl-10 pr-4 py-3 text-sm text-[#F4F7FA] placeholder-[#69717F] focus:outline-none focus:border-[#7C6CFF]"
              />
            </div>
          </div>

          <Button
            type="submit"
            variant="violet"
            size="lg"
            className="w-full mt-2"
            disabled={loading}
          >
            {loading ? 'Provisioning Tenant...' : 'Initialize Organization'}
          </Button>
        </form>

        <div className="text-center font-mono text-xs text-[#A4ACB8]">
          Already have an account?{' '}
          <Link href="/login" className="text-[#5CE1E6] hover:underline">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
