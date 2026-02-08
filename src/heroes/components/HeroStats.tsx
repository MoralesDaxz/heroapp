import { useHeroSummary } from "../hooks/useHeroSummary";
import { Heart, Trophy, Users, Zap } from "lucide-react";
import { HeroStatCard } from "./HeroStatCard";
import { Badge } from "@/components/ui/badge";
import { FavoriteHeroContext } from "../context/FavoriteHeroContext";
import { use } from "react";
import { useHomePageParams } from "../hooks/useHomePageParams";

export const HeroStats = () => {
  const { handleTab } = useHomePageParams();
  const { data: summary } = useHeroSummary();
  const { favoriteCount } = use(FavoriteHeroContext);
  const porcentageFavorites = summary
    ? ((favoriteCount / summary.totalHeroes) * 100).toFixed(1)
    : "0";
 
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <div onClick={() => handleTab("all", "all")} className="cursor-pointer">
        <HeroStatCard
          title={"Total Characters"}
          icon={<Users className="h-4 w-4 text-muted-foreground" />}
          children={
            <>
              <div className="text-2xl font-bold">{summary?.totalHeroes}</div>
              <div className="flex gap-1 mt-2">
                <Badge className="text-xs text-white">
                  {summary?.heroCount} Heroes
                </Badge>
                <Badge variant="destructive" className="text-xs">
                  {summary?.villainCount} Villains
                </Badge>
              </div>
            </>
          }
        />
      </div>
      <div
        className="cursor-pointer"
        onClick={() => handleTab("favorites", "favorites")}
      >
        <HeroStatCard
          title={"Favorites"}
          icon={<Heart className="h-4 w-4 text-muted-foreground" />}
          children={
            <>
              <div className="text-2xl font-bold text-red-600">
                {favoriteCount}
              </div>
              <p className="text-xs text-muted-foreground">
                {porcentageFavorites}% of total
              </p>
            </>
          }
        />
      </div>
      <HeroStatCard
        title={"Strongest"}
        icon={<Zap className="h-4 w-4 text-muted-foreground" />}
        children={
          <>
            <div className="text-lg font-bold">
              {summary?.strongestHero.alias}
            </div>
            <p className="text-xs text-muted-foreground">
              Strength: {summary?.strongestHero.strength}/10
            </p>
          </>
        }
      />
      <HeroStatCard
        title={"Smartest"}
        icon={<Trophy className="h-4 w-4 text-muted-foreground" />}
        children={
          <>
            <div className="text-lg font-bold">
              {summary?.smartestHero.alias}
            </div>
            <p className="text-xs text-muted-foreground">
              Intelligence: {summary?.smartestHero.intelligence}/10
            </p>
          </>
        }
      />
    </div>
  );
};
