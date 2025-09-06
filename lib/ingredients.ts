import { Cocktail } from "@/types/cocktail";

export type IngredientRow = { ingredient: string; measure: string | null };

export function extractIngredients(drink: Cocktail): IngredientRow[] {
  const out: IngredientRow[] = [];
  for (let i = 1; i <= 15; i++) {
    const ingredient = (drink as any)[`strIngredient${i}`];
    const measure = (drink as any)[`strMeasure${i}`];
    if (ingredient && String(ingredient).trim().length) {
      out.push({ ingredient, measure: measure?.trim() || null });
    }
  }
  return out;
}
