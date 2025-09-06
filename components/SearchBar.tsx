"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

type Props = { placeholder?: string; };
export default function SearchBar({ placeholder = "Search cocktails (e.g., Margarita)" }: Props) {
  const router = useRouter();
  const sp = useSearchParams();
  const [term, setTerm] = useState(sp.get("q") ?? "");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "/") { e.preventDefault(); inputRef.current?.focus(); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams(sp.toString());
    if (term.trim()) params.set("q", term.trim()); else params.delete("q");
    router.push(`/?${params.toString()}`);
  }

  return (
    <form onSubmit={submit} className="flex w-full gap-2">
      <input
        ref={inputRef}
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        className="flex-1 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-900/60 px-4 py-3 shadow-sm focus-ring"
        placeholder={placeholder}
        aria-label="Search cocktails"
      />
      <motion.button whileTap={{ scale: 0.96 }} type="submit"
        className="rounded-xl px-4 py-3 bg-brand-600 text-white focus-ring">
        Search
      </motion.button>
    </form>
  );
}
