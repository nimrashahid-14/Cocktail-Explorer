"use client";

import { useLocalStorage } from "./useLocalStorage";
import { Cocktail } from "@/types/cocktail";

type FavMap = Record<string, Cocktail>;

export function useFavorites() {
  const [fav, setFav] = useLocalStorage<FavMap>("favorites", {});

  function isFavorite(id: string) {
    return Boolean(fav[id]);
  }
  function toggleFavorite(id: string, cocktail: Cocktail) {
    setFav(prev => {
      const copy = { ...prev };
      if (copy[id]) { delete copy[id]; return copy; }
      copy[id] = cocktail;
      return copy;
    });
    return !fav[id];
  }

  function listFavorites(): Cocktail[] {
    return Object.values(fav);
  }

  function remove(id: string) {
    setFav(prev => { const copy = { ...prev }; delete copy[id]; return copy; });
  }

  return { isFavorite, toggleFavorite, listFavorites, remove };
}
