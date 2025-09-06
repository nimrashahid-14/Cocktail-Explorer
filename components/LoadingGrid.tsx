export default function LoadingGrid({ count = 8 }: { count?: number }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="card overflow-hidden">
          <div className="aspect-[4/3] skeleton" />
          <div className="p-3 space-y-2">
            <div className="h-4 w-2/3 rounded skeleton" />
            <div className="h-3 w-1/3 rounded skeleton" />
          </div>
        </div>
      ))}
    </div>
  );
}
