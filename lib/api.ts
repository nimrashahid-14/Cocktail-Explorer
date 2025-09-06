import { Cocktail, APIList } from "@/types/cocktail";

const API_BASE = "https://www.thecocktaildb.com/api/json/v1/1";

async function safeFetch<T>(url: string): Promise<T> {
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error(`Fetch failed ${res.status}`);
  return res.json();
}

export async function searchCocktailsByName(q: string): Promise<Cocktail[]> {
  const data = await safeFetch<APIList<Cocktail>>(`${API_BASE}/search.php?s=${encodeURIComponent(q)}`);
  return data.drinks ?? [];
}

export async function getCocktailById(id: string): Promise<Cocktail | null> {
  const data = await safeFetch<APIList<Cocktail>>(`${API_BASE}/lookup.php?i=${encodeURIComponent(id)}`);
  return data.drinks?.[0] ?? null;
}

export async function getRandomCocktail(): Promise<Cocktail | null> {
  const data = await safeFetch<APIList<Cocktail>>(`${API_BASE}/random.php`);
  return data.drinks?.[0] ?? null;
}

export async function getCategories(): Promise<string[]> {
  const data = await safeFetch<{ drinks: { strCategory: string }[] }>(`${API_BASE}/list.php?c=list`);
  return (data.drinks ?? []).map(d => d.strCategory);
}

export async function filterByCategory(category: string): Promise<Cocktail[]> {
  const data = await safeFetch<{ drinks: { idDrink: string; strDrink: string; strDrinkThumb: string }[] | null }>(
    `${API_BASE}/filter.php?c=${encodeURIComponent(category)}`
  );
  return (data.drinks ?? []) as unknown as Cocktail[];
}
