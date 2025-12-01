import { useQuery } from "@tanstack/react-query";
import { getHeroesByPageAction } from "@/heroes/actions/get-heroes-by-pages.action";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "../search/ui/SearchControls";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";
import { useSearchParams } from "react-router";

export const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const activeTab = searchParams.get("tab") ?? "all";
  const validTab = ["all", "favorites", "heroes", "villains"];
  const includeTab = validTab.includes(activeTab) ? activeTab : "all";
  
  const handleTab = (param: string) => {
    setSearchParams((prev) => {
      prev.set("tab", param);
      return prev;
    });
  };
  /* const [activeTab, setActiveTab] = useState<
    "all" | "favorites" | "heroes" | "villains"
  >("all"); */

  const { data: heroesResponse } = useQuery({
    queryKey: ["heroes"],
    queryFn: () => getHeroesByPageAction(),
    staleTime: 1000 * 60 * 5,
  });

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

      {/* Tabs */}
      <Tabs value={includeTab} className="mb-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all" onClick={() => handleTab("all")}>
            All Characters (16)
          </TabsTrigger>
          <TabsTrigger value="favorites" onClick={() => handleTab("favorites")}>
            Favorites (3)
          </TabsTrigger>
          <TabsTrigger value="heroes" onClick={() => handleTab("heroes")}>
            Heroes (12)
          </TabsTrigger>
          <TabsTrigger value="villains" onClick={() => handleTab("villains")}>
            Villains (2)
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <h1>All Characters</h1>
          <HeroGrid heroes={[]} />
        </TabsContent>
        <TabsContent value="favorites">
          <h1>Favorites</h1>
          <HeroGrid heroes={[]} />
        </TabsContent>
        <TabsContent value="heroes">
          <h1>Heroes</h1>
          <HeroGrid heroes={[]} />
        </TabsContent>
        <TabsContent value="villains">
          <h1>Villains</h1>
          <HeroGrid heroes={[]} />
        </TabsContent>
      </Tabs>

      {/* Character Grid */}
      <HeroGrid heroes={heroesResponse?.heroes ?? []} />

      {/* Pagination */}
      <CustomPagination totalPages={6} />
    </>
  );
};
