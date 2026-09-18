'use client';

import React, { useEffect } from 'react';
import { AlertTriangle, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Subsystem Runtime Exception:', error);
  }, [error]);

  return (
    <main className="min-h-[70vh] flex items-center justify-center px-4 py-20 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-14 h-14 rounded-[8px] bg-[#090B10] border border-red-500/30 flex items-center justify-center mx-auto text-red-400">
          <AlertTriangle className="w-7 h-7" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs text-red-400 tracking-[0.25em] uppercase">
            RUNTIME EXCEPTION CAUGHT
          </span>
          <h1 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-[#F4F7FA]">
            SYSTEM HALTED
          </h1>
          <p className="font-body text-sm text-[#A4ACB8] leading-relaxed">
            An unexpected error occurred during execution. Subsystem states have been isolated.
          </p>
        </div>

        <div className="pt-2 flex items-center justify-center gap-4">
          <Button
            onClick={() => reset()}
            variant="primary"
            size="md"
            iconLeft={<RotateCcw className="w-3.5 h-3.5" />}
          >
            RETRY EXECUTION
          </Button>
          <Button href="/" variant="secondary" size="md">
            RETURN TO HQ
          </Button>
        </div>
      </div>
    </main>
  );
}
