"use client";

import CocktailGrid from "@/components/CocktailGrid";
import { useFavorites } from "@/hooks/useFavorites";
import EmptyState from "@/components/EmptyState";

export default function FavoritesPage() {
  const { listFavorites } = useFavorites();
  const list = listFavorites();
  return (
    <div className="space-y-6">
      <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">Favorites</h1>
      {list.length ? <CocktailGrid items={list} /> : <EmptyState title="No favorites yet" hint="Mark any drink with the heart!" />}
    </div>
  );
}
