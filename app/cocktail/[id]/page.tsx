import Image from "next/image";
import Link from "next/link";
import { getCocktailById } from "@/lib/api";
import IngredientList from "@/components/IngredientList";
import FavoriteButton from "@/components/FavoriteButton";
import { Badge, SectionTitle } from "@/components/UI";

export default async function CocktailDetail({ params }: { params: { id: string } }) {
  const drink = await getCocktailById(params.id);
  if (!drink) return <div className="p-6 rounded-2xl border">Drink not found.</div>;

  return (
    <article className="grid lg:grid-cols-2 gap-6">
      <div className="card overflow-hidden">
        {drink.strDrinkThumb ? (
          <div className="relative aspect-[4/3]">
            <Image src={drink.strDrinkThumb} alt={drink.strDrink} fill className="object-cover" priority />
          </div>
        ) : <div className="aspect-[4/3] grid place-items-center bg-slate-100 dark:bg-slate-800">No image</div>}
      </div>

      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">{drink.strDrink}</h1>
          <FavoriteButton id={drink.idDrink} cocktail={drink} />
        </div>

        <div className="flex gap-2 text-sm">
          {drink.strAlcoholic && <Badge>{drink.strAlcoholic}</Badge>}
          {drink.strCategory && <Badge>{drink.strCategory}</Badge>}
          {drink.strGlass && <Badge>{drink.strGlass}</Badge>}
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
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
        </div>

        <div className="flex gap-2">
          <Link href="/random" className="rounded-xl bg-brand-600 text-white px-4 py-2">Random cocktail</Link>
          <Link href="/" className="rounded-xl border px-4 py-2">Back to search</Link>
        </div>
      </div>
    </article>
  );
}
