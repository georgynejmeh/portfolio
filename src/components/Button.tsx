import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Button = ({ children }: Props) => {
  return (
    <button className="button min-w-32">
      <span className="button_lg">
        <span className="button_sl"></span>
        <span className="button_text">{children}</span>
      </span>
    </button>
  );
};

export default Button;
