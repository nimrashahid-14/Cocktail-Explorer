export type Cocktail = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string | null;
  strInstructions: string | null;
  strCategory: string | null;
  strAlcoholic: string | null;
  strGlass: string | null;
  [key: string]: any;
};

export type APIList<T> = { drinks: T[] | null };
