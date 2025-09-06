import SearchBar from "@/components/SearchBar";
import CategoryFilter from "@/components/CategoryFilter";
import CocktailGrid from "@/components/CocktailGrid";
import LoadingGrid from "@/components/LoadingGrid";
import EmptyState from "@/components/EmptyState";
import { SectionTitle } from "@/components/UI";
import { getCategories, searchCocktailsByName, filterByCategory } from "@/lib/api";

export default async function Home({ searchParams }: { searchParams: { q?: string; category?: string } }) {
  const q = (searchParams?.q ?? "").trim();
  const category = (searchParams?.category ?? "").trim();

  const [categories, results] = await Promise.all([
    getCategories(),
    q ? searchCocktailsByName(q) : (category ? filterByCategory(category) : Promise.resolve([])),
  ]);

  const hasQuery = Boolean(q || category);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <SearchBar />
      </div>

      <div>
        <SectionTitle>Filter by Category</SectionTitle>
        <CategoryFilter categories={categories} />
      </div>

      {hasQuery ? (
        results.length ? (
          <>
            <SectionTitle>Results {q ? `for “${q}”` : `in “${category}”`}</SectionTitle>
            <CocktailGrid items={results} />
          </>
        ) : (
          <EmptyState title="No results" hint="Try another search term or pick a different category." />
        )
      ) : (
        <>
          <SectionTitle>How to start</SectionTitle>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="card p-5">
              <div className="font-medium mb-1">Search</div>
              <p className="text-sm text-slate-500">Type a drink name (e.g., Margarita, Mojito) or pick a category above.</p>
            </div>
            <div className="card p-5">
              <div className="font-medium mb-1">Feeling lucky?</div>
              <p className="text-sm text-slate-500">Hit “Surprise me” in the header to get a random cocktail.</p>
            </div>
          </div>
          <div className="mt-2 text-xs text-slate-500">Tip: Press “/” to focus search.</div>
          <LoadingGrid count={0} />
        </>
      )}
    </div>
  );
}
