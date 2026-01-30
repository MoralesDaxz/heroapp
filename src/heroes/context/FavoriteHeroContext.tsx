import {
  createContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";
import type { Hero } from "../types/hero.interface";

interface FavoriteHeroContext {
  //state
  favorites: Hero[];
  favoriteCount: number;

  //methods
  toggleFavorite: (hero: Hero) => void;
  isFavorite: (id: string) => boolean;
}
// eslint-disable-next-line react-refresh/only-export-components
export const FavoriteHeroContext = createContext({} as FavoriteHeroContext);

const getFavoritesFromLocalStorage = (): Hero[] => {
  const favoriteLS = localStorage.getItem("favoritesHeroes");
  return favoriteLS ? JSON.parse(favoriteLS) : [];
};

export const FavoriteHeroProvider = ({ children }: PropsWithChildren) => {
  const [favorites, setFavorites] = useState<Hero[]>(
    getFavoritesFromLocalStorage(),
  );

  const toggleFavorite = (hero: Hero) => {
    const isHeroFavorite = favorites.find((h: Hero) => h.id === hero.id);
    if (isHeroFavorite) {
      const newFavoriteHero = favorites.filter((h: Hero) => h.id !== hero.id);
      setFavorites(newFavoriteHero);
      return;
    }
    setFavorites([...favorites, hero]);
  };
  const isFavorite = (id:string) => {
    const isHero = favorites.some((hero) => hero.id === id);
     return isHero
   
  };
  useEffect(() => {
    localStorage.setItem("favoritesHeroes", JSON.stringify(favorites));
  }, [favorites]);
  return (
    <FavoriteHeroContext
      value={{
        favoriteCount: favorites.length,
        favorites: favorites,
        isFavorite: isFavorite,
        toggleFavorite: toggleFavorite,
      }}
    >
      {children}
    </FavoriteHeroContext>
  );
};
