"use client";

import { useFavorites } from "@/hooks/useFavorites";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Cocktail } from "@/types/cocktail";

export default function FavoriteButton({ id, cocktail }: { id: string; cocktail: Cocktail }) {
  const { isFavorite, toggleFavorite } = useFavorites();

  function onClick() {
    const added = toggleFavorite(id, cocktail);
    toast(added ? "Added to favorites" : "Removed from favorites");
  }

  const active = isFavorite(id);
  return (
    <motion.button whileTap={{ scale: 0.9 }}
      aria-label={active ? "Remove from favorites" : "Add to favorites"}
      onClick={onClick}
      className={`rounded-full p-2 ${active ? "text-red-500" : "text-slate-500 hover:text-red-500"}`}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.6">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    </motion.button>
  );
}
