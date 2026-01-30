import React from "react";
import { RouterProvider } from "react-router";
import { appRouter } from "./router/app.router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { FavoriteHeroProvider } from "./heroes/context/FavoriteHeroContext";
const HeroesApp = () => {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <FavoriteHeroProvider>
          <RouterProvider router={appRouter} />
          <ReactQueryDevtools initialIsOpen={true} />
        </FavoriteHeroProvider>
      </QueryClientProvider>
    </>
  );
};

export default HeroesApp;
