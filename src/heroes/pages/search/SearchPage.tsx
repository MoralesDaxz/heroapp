import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";

import { SearchControls } from "./ui/SearchControls";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";
import { useSearchParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { searchHeroesAction } from "@/heroes/actions/search-heroes.action";
import { HeroGrid } from "@/heroes/components/HeroGrid";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name") ?? undefined;
  const strength = searchParams.get("strength") ?? undefined;

  const { data: wantedHeroes = [] } = useQuery({
    queryKey: ["search", { name, strength }],
    queryFn: () => searchHeroesAction({ name, strength }),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
  return (
    <div>
      <CustomJumbotron
        title={"Search for heroes"}
        description={
          "Discover, explore, and manage your favorite superheroes and villains"
        }
      />
      <CustomBreadcrumbs currentPage="Search heroes" />
      <HeroStats />
      <SearchControls />
      <HeroGrid heroes={wantedHeroes} />
    </div>
  );
};
export default SearchPage;
