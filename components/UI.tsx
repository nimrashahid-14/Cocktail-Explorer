import clsx from "clsx";
export const cn = (...a: any[]) => clsx(a);

export function Badge({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex items-center rounded-full bg-slate-100 dark:bg-slate-800 px-2.5 py-1 text-xs">{children}</span>;
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-3">{children}</h2>;
}
