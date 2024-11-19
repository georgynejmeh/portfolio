import { useState, useEffect, ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
}

const TextReveal = ({ children, delay = 0 }: Props) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  if (!isLoaded) {
    return (
      <div className="py-1 m-1">
        <span className="opacity-0">{children}</span>
      </div>
    );
  }

  return (
    <div className="relative flex items-center py-1 m-1">
      {/* THEME: bg-stone-800 = background color V */}
      <div className="h-full absolute bg-sky-950 text-cover-animation overflow-hidden">
        <span className="opacity-0">{children}</span>
      </div>
      {/* THEME: bg-cyan-400 = primary/accent color V */}
      <div className="h-full absolute bg-cyan-500 text-animation overflow-hidden">
        <span className="opacity-0">{children}</span>
      </div>
      <span>{children}</span>
    </div>
  );
};

export default TextReveal;
