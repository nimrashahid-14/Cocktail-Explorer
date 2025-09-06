"use client";

import Image from "next/image";
import Link from "next/link";
import { Cocktail } from "@/types/cocktail";
import FavoriteButton from "./FavoriteButton";
import { Badge } from "./UI";

export default function CocktailCard({ cocktail }: { cocktail: Cocktail }) {
  return (
    <div className="card card-hover overflow-hidden group">
      <Link href={`/cocktail/${cocktail.idDrink}`} className="block relative aspect-[4/3]">
        {cocktail.strDrinkThumb ? (
          <Image
            src={cocktail.strDrinkThumb}
            alt={cocktail.strDrink}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
            priority={false}
          />
        ) : (
          <div className="h-full w-full grid place-items-center bg-slate-100 dark:bg-slate-800 text-slate-500">No image</div>
        )}
      </Link>
      <div className="p-3 flex items-center gap-2">
        <div className="flex-1">
          <div className="font-medium line-clamp-1">{cocktail.strDrink}</div>
          <div className="mt-1 text-xs text-slate-500 flex gap-2">
            {cocktail.strAlcoholic && <Badge>{cocktail.strAlcoholic}</Badge>}
            {cocktail.strCategory && <Badge>{cocktail.strCategory}</Badge>}
          </div>
        </div>
        <FavoriteButton id={cocktail.idDrink} cocktail={cocktail} />
      </div>
    </div>
  );
}
