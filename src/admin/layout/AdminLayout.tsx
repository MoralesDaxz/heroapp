import React from "react";
import { Outlet } from "react-router";

export const AdminLayout = () => {
  return (
    <section className="min-h-dvh bg-gray-400">
      <Outlet />
    </section>
  );
};
