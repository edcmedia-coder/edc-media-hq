'use client';

import React, { useState } from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { Terminal, CheckCircle2, ShieldCheck, Mail, AlertTriangle, Loader2 } from 'lucide-react';

interface SubmissionResult {
  dispatchId: string;
  timestamp: string;
  inquiryType: string;
  recipient: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    inquiryType: 'BUILD',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<SubmissionResult | null>(null);
  const [generalError, setGeneralError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const validateClientSide = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please provide your name (at least 2 characters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid work email address.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide brief context (minimum 10 characters).';
    }
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setGeneralError(null);

    const clientErrors = validateClientSide();
    if (Object.keys(clientErrors).length > 0) {
      setFieldErrors(clientErrors);
      return;
    }

    setFieldErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        if (data.fieldErrors) {
          setFieldErrors(data.fieldErrors);
        }
        setGeneralError(data.error || 'Failed to transmit inquiry. Please try again.');
        setIsSubmitting(false);
        return;
      }

      setSubmitSuccess({
        dispatchId: data.dispatchId,
        timestamp: data.timestamp,
        inquiryType: data.inquiryType,
        recipient: data.recipient,
      });
    } catch (err) {
      setGeneralError('Network error connecting to EDC dispatch apex. Please check connection or use direct email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitSuccess(null);
    setGeneralError(null);
    setFieldErrors({});
    setFormData({
      name: '',
      email: '',
      organization: '',
      inquiryType: 'BUILD',
      message: '',
    });
  };

  const directMailtoUrl = `mailto:contact@edcmediahq.xyz?subject=${encodeURIComponent(
    `[${formData.inquiryType}] Inception Inquiry from ${formData.name || 'Partner'}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\nOrganization: ${formData.organization}\n\nBrief:\n${formData.message}`
  )}`;

  return (
    <main className="py-12 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="INQUIRY DISPATCH"
        title="CONTACT EDC MEDIA"
        subtitle="Initiate direct communications with the product architects and engineering teams at EDC Media HQ."
      />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Contact Form */}
        <div className="md:col-span-7">
          <div className="p-6 sm:p-8 rounded-[8px] bg-[#090B10] border border-white/[0.08]">
            {submitSuccess ? (
              <div className="py-8 text-center space-y-5">
                <div className="w-12 h-12 rounded-full bg-[#5CE1E6]/10 border border-[#5CE1E6]/40 flex items-center justify-center mx-auto text-[#5CE1E6]">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-mono text-xs text-[#5CE1E6] tracking-widest uppercase block mb-1">
                    VERIFIED TRANSMISSION
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#F4F7FA]">
                    DISPATCH LOGGED
                  </h3>
                </div>

                <div className="p-4 rounded-[6px] bg-[#0D1017] border border-white/[0.06] text-left font-mono text-xs space-y-2">
                  <div className="flex justify-between">
                    <span className="text-[#69717F]">DISPATCH ID:</span>
                    <span className="text-[#5CE1E6] font-semibold">{submitSuccess.dispatchId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#69717F]">ROUTING:</span>
                    <span className="text-[#F4F7FA]">{submitSuccess.inquiryType} ARCHITECTURE</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#69717F]">RECORDED AT:</span>
                    <span className="text-[#A4ACB8]">{new Date(submitSuccess.timestamp).toLocaleTimeString()}</span>
                  </div>
                </div>

                <p className="font-body text-sm text-[#A4ACB8] max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#F4F7FA]">{formData.name}</strong>. An EDC lead product architect will review your brief.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Button
                    onClick={handleReset}
                    variant="secondary"
                    size="sm"
                    className="w-full sm:w-auto justify-center"
                  >
                    SEND ANOTHER MESSAGE
                  </Button>
                  <Button
                    href={directMailtoUrl}
                    isExternal
                    variant="ghost"
                    size="sm"
                    className="w-full sm:w-auto justify-center"
                  >
                    OPEN IN EMAIL CLIENT
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {generalError && (
                  <div className="p-3.5 rounded-[6px] bg-red-950/40 border border-red-500/40 flex items-start gap-3 text-red-200 text-xs font-mono">
                    <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <span>{generalError}</span>
                      <div className="mt-2">
                        <a
                          href={directMailtoUrl}
                          className="text-[#5CE1E6] underline hover:text-white"
                        >
                          Click here to dispatch directly via your email client
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                <div>
                  <label
                    htmlFor="contact-name"
                    className="block font-mono text-xs uppercase tracking-wider text-[#A4ACB8] mb-1.5"
                  >
                    NAME *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    autoComplete="name"
                    disabled={isSubmitting}
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (fieldErrors.name) setFieldErrors({ ...fieldErrors, name: '' });
                    }}
                    placeholder="Enter your name"
                    className={`w-full px-4 py-2.5 rounded-[4px] bg-[#0D1017] border text-sm text-[#F4F7FA] placeholder-[#69717F] focus:outline-none transition-colors ${
                      fieldErrors.name
                        ? 'border-red-500/60 focus:border-red-400'
                        : 'border-white/[0.1] focus:border-[#5CE1E6]'
                    }`}
                  />
                  {fieldErrors.name && (
                    <p className="mt-1 text-[11px] font-mono text-red-400">{fieldErrors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block font-mono text-xs uppercase tracking-wider text-[#A4ACB8] mb-1.5"
                  >
                    WORK EMAIL *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    inputMode="email"
                    required
                    autoComplete="email"
                    disabled={isSubmitting}
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (fieldErrors.email) setFieldErrors({ ...fieldErrors, email: '' });
                    }}
                    placeholder="name@company.com"
                    className={`w-full px-4 py-2.5 rounded-[4px] bg-[#0D1017] border text-sm text-[#F4F7FA] placeholder-[#69717F] focus:outline-none transition-colors ${
                      fieldErrors.email
                        ? 'border-red-500/60 focus:border-red-400'
                        : 'border-white/[0.1] focus:border-[#5CE1E6]'
                    }`}
                  />
                  {fieldErrors.email && (
                    <p className="mt-1 text-[11px] font-mono text-red-400">{fieldErrors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-org"
                    className="block font-mono text-xs uppercase tracking-wider text-[#A4ACB8] mb-1.5"
                  >
                    ORGANIZATION / PRODUCT
                  </label>
                  <input
                    id="contact-org"
                    type="text"
                    autoComplete="organization"
                    disabled={isSubmitting}
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="Company or venture name"
                    className="w-full px-4 py-2.5 rounded-[4px] bg-[#0D1017] border border-white/[0.1] text-sm text-[#F4F7FA] placeholder-[#69717F] focus:outline-none focus:border-[#5CE1E6] transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-type"
                    className="block font-mono text-xs uppercase tracking-wider text-[#A4ACB8] mb-1.5"
                  >
                    PILLAR INQUIRY
                  </label>
                  <select
                    id="contact-type"
                    disabled={isSubmitting}
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-[4px] bg-[#0D1017] border border-white/[0.1] text-sm text-[#F4F7FA] focus:outline-none focus:border-[#5CE1E6] transition-colors cursor-pointer"
                  >
                    <option value="BUILD">BUILD — Software & BuildOS Architecture</option>
                    <option value="INTELLIGENCE">INTELLIGENCE — Audio AI & Research Synthesis</option>
                    <option value="AUTOMATION">AUTOMATION — Operations & Autonomous Workflows</option>
                    <option value="LABS">LABS — Research Collaboration</option>
                    <option value="GENERAL">GENERAL — Corporate & Advisory</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-msg"
                    className="block font-mono text-xs uppercase tracking-wider text-[#A4ACB8] mb-1.5"
                  >
                    BRIEF & CONTEXT *
                  </label>
                  <textarea
                    id="contact-msg"
                    required
                    rows={4}
                    disabled={isSubmitting}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (fieldErrors.message) setFieldErrors({ ...fieldErrors, message: '' });
                    }}
                    placeholder="Describe what you are aiming to build or automate..."
                    className={`w-full px-4 py-2.5 rounded-[4px] bg-[#0D1017] border text-sm text-[#F4F7FA] placeholder-[#69717F] focus:outline-none transition-colors resize-none ${
                      fieldErrors.message
                        ? 'border-red-500/60 focus:border-red-400'
                        : 'border-white/[0.1] focus:border-[#5CE1E6]'
                    }`}
                  />
                  {fieldErrors.message && (
                    <p className="mt-1 text-[11px] font-mono text-red-400">{fieldErrors.message}</p>
                  )}
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    disabled={isSubmitting}
                    className="w-full justify-center"
                    iconLeft={isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : undefined}
                  >
                    {isSubmitting ? 'TRANSMITTING TO EDC APEX...' : 'TRANSMIT INQUIRY →'}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Transmission Notes & Details */}
        <div className="md:col-span-5 space-y-6">
          <div className="p-6 rounded-[8px] bg-[#090B10] border border-white/[0.08]">
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#F4F7FA] font-semibold mb-4 border-b border-white/[0.06] pb-2">
              DISPATCH PROTOCOL
            </h3>
            <ul className="space-y-4 text-xs font-mono text-[#A4ACB8]">
              <li className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#5CE1E6] shrink-0 mt-0.5" />
                <span>Zero unsolicited commercial marketing. Direct technical response.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Terminal className="w-4 h-4 text-[#5CE1E6] shrink-0 mt-0.5" />
                <span>Direct routing to lead product architects and senior systems engineers.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#7C6CFF] shrink-0 mt-0.5" />
                <span>Primary domain: <strong className="text-[#F4F7FA]">edcmediahq.xyz</strong></span>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-white/[0.06]">
              <span className="font-mono text-[10px] text-[#69717F] block uppercase mb-2">
                DIRECT EMAIL TRANSMISSION:
              </span>
              <a
                href="mailto:contact@edcmediahq.xyz"
                className="inline-flex items-center gap-2 font-mono text-xs text-[#5CE1E6] hover:text-white transition-colors"
              >
                <span>contact@edcmediahq.xyz</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
