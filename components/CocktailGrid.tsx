"use client";

import { Cocktail } from "@/types/cocktail";
import CocktailCard from "./CocktailCard";
import { motion } from "framer-motion";

export default function CocktailGrid({ items }: { items: Cocktail[] }) {
  if (!items?.length) return null;
  return (
    <motion.div
      layout
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {items.map((c, i) => (
        <motion.div key={c.idDrink}
          initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: i * 0.03 }}>
          <CocktailCard cocktail={c} />
        </motion.div>
      ))}
    </motion.div>
  );
}
