"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function CategoryFilter({ categories }: { categories: string[] }) {
  const sp = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const active = sp.get("category") ?? "";

  function setCategory(cat: string) {
    const params = new URLSearchParams(sp.toString());
    if (!cat) params.delete("category"); else params.set("category", cat);
    params.delete("page");
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="flex gap-2 overflow-x-auto py-2">
      <button onClick={() => setCategory("")}
        className={`px-3 py-2 rounded-xl border ${!active ? "bg-slate-100 dark:bg-slate-800" : "hover:bg-slate-50 dark:hover:bg-slate-800/60"}`}>
        All
      </button>
      {categories.map(c => (
        <button key={c} onClick={() => setCategory(c)}
          className={`px-3 py-2 whitespace-nowrap rounded-xl border ${active===c ? "bg-slate-100 dark:bg-slate-800" : "hover:bg-slate-50 dark:hover:bg-slate-800/60"}`}>
          {c}
        </button>
      ))}
    </div>
  );
}
