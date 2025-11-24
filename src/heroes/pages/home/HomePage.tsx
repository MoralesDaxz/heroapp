import { Heart } from "lucide-react";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "../search/ui/SearchControls";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";

export const HomePage = () => {
  return (
    <>
      <CustomJumbotron
        title={"Superhero Universe"}
        description={
          "Discover, explore, and manage your favorite superheroes and villains"
        }
      />
      <CustomBreadcrumbs currentPage="Heroes"/>
      {/* Stats */}
      <HeroStats />

      {/* Controls */}
      <SearchControls />

      {/* Advanced Filters */}

      {/* Tabs */}
      <Tabs value="all" className="mb-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All Characters (16)</TabsTrigger>
          <TabsTrigger value="favorites" className="flex items-center gap-2">
            <Heart className="h-4 w-4" />
            Favorites (3)
          </TabsTrigger>
          <TabsTrigger value="heroes">Heroes (12)</TabsTrigger>
          <TabsTrigger value="villains">Villains (2)</TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Character Grid */}
      <HeroGrid />

      {/* Pagination */}
      <CustomPagination totalPages={6} />
    </>
  );
};
