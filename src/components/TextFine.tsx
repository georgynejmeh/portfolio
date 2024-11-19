import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const TextFine = ({ children }: Props) => {
  return <span className="opacity-35">{children}</span>;
};

export default TextFine;
