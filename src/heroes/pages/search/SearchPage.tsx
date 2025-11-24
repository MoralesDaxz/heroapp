import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import React from "react";
import { SearchControls } from "./ui/SearchControls";

const SearchPage = () => {
  return (
    <div>
      <CustomJumbotron
        title={"Search for heroes"}
        description={
          "Discover, explore, and manage your favorite superheroes and villains"
        }
      />
      
      <HeroStats />
      <SearchControls/>
    </div>
  );
};
export default SearchPage;
