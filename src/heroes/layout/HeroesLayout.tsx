import { CustomMenu } from "@/components/custom/CustomMenu";
import { Outlet } from "react-router";

export const HeroesLayout = () => {
  return (
    <div className="min-h-dvh bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <section className="w-full sm:max-w-6xl mx-auto p-6">
        <CustomMenu />
        <Outlet />
      </section>
    </div>
  );
};
