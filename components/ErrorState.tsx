export default function ErrorState({ message = "Something went wrong." }: { message?: string }) {
  return (
    <div className="rounded-2xl border p-6 text-center">
      <div className="text-lg font-medium">Oops!</div>
      <div className="text-slate-500 mt-1">{message}</div>
    </div>
  );
}
