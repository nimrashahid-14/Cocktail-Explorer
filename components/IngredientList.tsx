import { extractIngredients } from "@/lib/ingredients";

export default function IngredientList({ drink }: { drink: any }) {
  const rows = extractIngredients(drink);
  return (
    <ul className="space-y-1">
      {rows.map((r, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className="mt-1 h-2 w-2 rounded-full bg-brand-500" />
          <span className="text-sm">
            <span className="font-medium">{r.ingredient}</span>
            {r.measure ? <span className="text-slate-500"> — {r.measure}</span> : null}
          </span>
        </li>
      ))}
    </ul>
  );
}
