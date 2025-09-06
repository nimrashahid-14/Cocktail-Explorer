"use client";

import Link from "next/link";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "./UI";

export function Header() {
  const pathname = usePathname();
  const sp = useSearchParams();
  const router = useRouter();

  return (
    <header className="border-b border-black/5 dark:border-white/10 sticky top-0 z-40 backdrop-blur bg-white/70 dark:bg-slate-900/60">
      <div className="container flex items-center gap-4 py-3">
        <Link href="/" className="font-bold tracking-tight text-xl">🍹 Cocktail Explorer</Link>

        <nav className="ml-auto flex items-center gap-1 text-sm">
          {[
            { href: "/", label: "Home" },
            { href: "/random", label: "Random" },
            { href: "/favorites", label: "Favorites" },
          ].map((item) => {
            const active = pathname === item.href;
            return (
              <Link key={item.href} href={item.href}
                className={cn("px-3 py-2 rounded-xl transition-colors hover:bg-slate-100 dark:hover:bg-slate-800",
                              active && "bg-slate-100 dark:bg-slate-800")}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push(`/random?from=${encodeURIComponent(pathname + "?" + sp.toString())}`)}
          className="hidden sm:inline-flex rounded-xl bg-brand-600 text-white px-4 py-2 focus-ring">
          Surprise me
        </motion.button>
      </div>
    </header>
  );
}
