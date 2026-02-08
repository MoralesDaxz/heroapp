import { usePaginatedHero } from "@/heroes/hooks/usePaginatedHero";
import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "../search/ui/SearchControls";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";
import { useHomePageParams } from "@/heroes/hooks/useHomePageParams";
import HeroTabs from "@/heroes/components/HeroTabs";
import { useHeroSummary } from "@/heroes/hooks/useHeroSummary";
import { CustomLoader } from "@/components/custom/CustomLoader";
import { CustomSlowLoadNotice } from "@/components/custom/CustomSlowLoadNotice";

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
          <CustomLoader text={"Loading Heroes..."}>
            <CustomSlowLoadNotice isActive={isLoading || isFetching} />
          </CustomLoader>
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
