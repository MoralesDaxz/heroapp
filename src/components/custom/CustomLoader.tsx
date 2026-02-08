import { Loader } from "lucide-react";
import type { ReactElement } from "react";
interface Props {
  text?: string;
  children?: ReactElement;
}
export const CustomLoader = ({ text, children }: Props) => {
  return (
    <>
      <div className="w-full text-center py-10 text-lg font-medium">{text}</div>
      <Loader width={60} height={60} className="mx-auto animate-spin" />
      {children}
    </>
  );
};
