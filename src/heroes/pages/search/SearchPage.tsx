import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";

import { SearchControls } from "./ui/SearchControls";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";

const SearchPage = () => {
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
    </div>
  );
};
export default SearchPage;
