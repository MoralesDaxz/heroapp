import { useSlowLoading } from "@/heroes/hooks/useSlowLoading";
import type { ReactElement } from "react";
import { Link } from "react-router";

interface Props {
  isActive: boolean;
  children?: ReactElement;
}

const BACKEND_URL = "https://nest-heroes-backend-pukq.onrender.com";

export const CustomSlowLoadNotice = ({ isActive, children }: Props) => {
  const isSlow = useSlowLoading({ isActive, delay: 15000 });

  if (!isSlow) return null;

  return (
    <div className="mt-4 text-center flex flex-col items-center justify-center ">
      <p>Is it taking too long?</p> 
      <p>The backend may be sleeping (free hosting).</p>
      
      <Link
        className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text font-medium p-2 rounded-2xl text-transparent hover:opacity-80 outline-1 mt-2"
        to={BACKEND_URL}
        target="_blank"
      >
        Go to backend page
      </Link>
      {children}
    </div>
  );
};
