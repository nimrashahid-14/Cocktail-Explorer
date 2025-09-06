export default function EmptyState({ title, hint }: { title: string; hint?: string }) {
  return (
    <div className="text-center py-12">
      <div className="text-xl font-medium">{title}</div>
      {hint && <div className="text-slate-500 mt-2">{hint}</div>}
    </div>
  );
}
