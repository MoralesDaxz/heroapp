import { usePaginatedHero } from "@/heroes/hooks/usePaginatedHero";
import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "../search/ui/SearchControls";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";
import { useHomePageParams } from "@/heroes/hooks/useHomePageParams";
import HeroTabs from "@/heroes/components/HeroTabs";
import { useHeroSummary } from "@/heroes/hooks/useHeroSummary";
import { Loader } from "lucide-react";

export const HomePage = () => {
  const { page, limit, category } = useHomePageParams();
  const { data: heroesResponse } = usePaginatedHero(+page, +limit, category);
  const { isFetching, isLoading } = useHeroSummary();
  return (
    <>
      <CustomJumbotron
        title={"Superhero Universe"}
        description={
          "Discover, explore, and manage your favorite superheroes and villains"
        }
      />
      <CustomBreadcrumbs currentPage="Heroes" />

      {isLoading || isFetching ? (
        <>
          <div className="w-full text-center py-10 text-lg font-medium">
            Loading Heroes...
          </div>
          <Loader width={50} height={50} className="mx-auto animate-spin" />
        </>
      ) : (
        <>
          <HeroStats />
          <SearchControls />
          <HeroTabs heroes={heroesResponse?.heroes} />
          <CustomPagination totalPages={heroesResponse?.pages ?? 1} />
        </>
      )}
    </>
  );
};
