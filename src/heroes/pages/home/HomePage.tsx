import { usePaginatedHero } from "@/heroes/hooks/usePaginatedHero";
import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "../search/ui/SearchControls";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";
import { useHomePageParams } from "@/heroes/hooks/useHomePageParams";
import HeroTabs from "@/heroes/components/HeroTabs";

export const HomePage = () => {
  const { page, limit, category } = useHomePageParams();
  const { data: heroesResponse } = usePaginatedHero(+page, +limit, category);

  return (
    <>
      <CustomJumbotron
        title={"Superhero Universe"}
        description={
          "Discover, explore, and manage your favorite superheroes and villains"
        }
      />
      <CustomBreadcrumbs currentPage="Heroes" />
      <HeroStats />
      <SearchControls />
      <HeroTabs heroes={heroesResponse?.heroes} />
      <CustomPagination totalPages={heroesResponse?.pages ?? 1} />
    </>
  );
};
