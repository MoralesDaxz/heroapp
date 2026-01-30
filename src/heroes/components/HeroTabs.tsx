import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useHomePageParams } from "../hooks/useHomePageParams";
import { useHeroSummary } from "../hooks/useHeroSummary";
import { FavoriteHeroContext } from "../context/FavoriteHeroContext";
import { HeroGrid } from "./HeroGrid";
import type { HeroesResponse } from "../types/get-heroes.response";
import { use } from "react";

interface Props {
  heroes?: HeroesResponse["heroes"];
}

const HeroTabs = ({ heroes }: Props) => {

  const { includeTab, handleTab } = useHomePageParams();
  const { data: summary } = useHeroSummary();
  const { favoriteCount, favorites } = use(FavoriteHeroContext);
  
  return (
    <Tabs value={includeTab} className="mb-8">
      <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-4">
        <TabsTrigger value="all" onClick={() => handleTab("all", "all")}>
          All Characters ({summary?.totalHeroes})
        </TabsTrigger>
        <TabsTrigger
          value="favorites"
          onClick={() => handleTab("favorites", "favorites")}
        >
          Favorites ({favoriteCount})
        </TabsTrigger>
        <TabsTrigger value="heroes" onClick={() => handleTab("heroes", "hero")}>
          Heroes ({summary?.heroCount})
        </TabsTrigger>
        <TabsTrigger
          value="villains"
          onClick={() => handleTab("villains", "villain")}
        >
          Villains ({summary?.villainCount})
        </TabsTrigger>
      </TabsList>
      <TabsContent value="all">
        <h1>All Characters</h1>
        <HeroGrid heroes={heroes ?? []} />
      </TabsContent>
      <TabsContent value="favorites">
        <h1>Favorites</h1>
        <HeroGrid heroes={favorites ?? []} />
      </TabsContent>
      <TabsContent value="heroes">
        <h1>Heroes</h1>
        <HeroGrid heroes={heroes ?? []} />
      </TabsContent>
      <TabsContent value="villains">
        <h1>Villains</h1>
        <HeroGrid heroes={heroes ?? []} />
      </TabsContent>
    </Tabs>
  );
};

export default HeroTabs;
