import { useSearchParams } from "react-router";

export const useHomePageParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const activeTab = searchParams.get("tab") ?? "all";
  const page = searchParams.get("page") ?? "1";
  const limit = searchParams.get("limit") ?? "6";
  const category = searchParams.get("category") ?? "all";
  const validTab = ["all", "favorites", "heroes", "villains"];
  const includeTab = validTab.includes(activeTab) ? activeTab : "all";

  const handleTab = (param: string, category: string) => {
    setSearchParams((prev) => {
      prev.set("tab", param);
      prev.set("category", category);
      prev.set("page", "1");

      return prev;
    });
  };

  return { page, limit, category, includeTab, handleTab };
};
