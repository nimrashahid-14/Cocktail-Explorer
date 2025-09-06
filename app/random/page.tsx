import { getRandomCocktail } from "@/lib/api";
import Link from "next/link";
import Image from "next/image";
import IngredientList from "@/components/IngredientList";
import FavoriteButton from "@/components/FavoriteButton";
import { SectionTitle, Badge } from "@/components/UI";

export const dynamic = "force-dynamic";

export default async function RandomPage() {
  const drink = await getRandomCocktail();
  if (!drink) return <div className="p-6 rounded-2xl border">No random drink available.</div>;

  return (
    <div className="space-y-6">
      <div className="flex items-start gap-3">
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">{drink.strDrink}</h1>
        <FavoriteButton id={drink.idDrink} cocktail={drink} />
      </div>

      <div className="flex gap-2 text-sm">
        {drink.strAlcoholic && <Badge>{drink.strAlcoholic}</Badge>}
        {drink.strCategory && <Badge>{drink.strCategory}</Badge>}
        {drink.strGlass && <Badge>{drink.strGlass}</Badge>}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="card overflow-hidden">
          {drink.strDrinkThumb ? (
            <div className="relative aspect-[4/3]">
              <Image src={drink.strDrinkThumb} alt={drink.strDrink} fill className="object-cover" priority />
            </div>
          ) : <div className="aspect-[4/3] grid place-items-center bg-slate-100 dark:bg-slate-800">No image</div>}
        </div>
        <div className="space-y-4">
          <div className="card p-4">
            <SectionTitle>Ingredients</SectionTitle>
            <IngredientList drink={drink} />
          </div>
          <div className="card p-4">
            <SectionTitle>Instructions</SectionTitle>
            <p className="text-sm leading-6 text-slate-700 dark:text-slate-300 whitespace-pre-line">
              {drink.strInstructions || "—"}
            </p>
          </div>
          <div className="flex gap-2">
            <Link href="/random" className="rounded-xl bg-brand-600 text-white px-4 py-2">Get another</Link>
            <Link href={`/cocktail/${drink.idDrink}`} className="rounded-xl border px-4 py-2">Open details</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
