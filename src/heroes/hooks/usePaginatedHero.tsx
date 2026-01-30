import { useQuery } from "@tanstack/react-query";
import { getHeroesByPageAction } from "../actions/get-heroes-by-pages.action";

export const usePaginatedHero = (
  page: number,
  limit: number,
  category: string
) => {
  return useQuery({
    queryKey: ["heroes", category, { page, limit, category }],
    queryFn: () => getHeroesByPageAction(page, limit, category),
    staleTime: 1000 * 60 * 5,
  });
};
