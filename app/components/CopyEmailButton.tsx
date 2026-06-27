'use client';

import { useState, useEffect } from 'react';
import { Copy, Check } from 'lucide-react';

interface CopyEmailButtonProps {
  email: string;
  copyLabel?: string;
  copiedLabel?: string;
}

export default function CopyEmailButton({ email, copyLabel, copiedLabel }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      // fallback: silently fail if clipboard API is unavailable
    }
  };

  return (
    <button
      onClick={handleCopy}
      aria-label={copied ? (copiedLabel ?? 'Email copied!') : (copyLabel ?? 'Copy email')}
      title={copied ? (copiedLabel ?? 'Email copied!') : (copyLabel ?? 'Copy email')}
      className="inline-flex items-center justify-center text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-colors"
    >
      {copied ? <Check size={18} /> : <Copy size={18} />}
    </button>
  );
}
