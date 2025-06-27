import { useEffect, useState } from "react";

const PageWrapper = ({ children }) => {
  const [animateClass, setAnimateClass] = useState("fade-enter");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimateClass("fade-enter fade-enter-active");
    }, 10); // delay para que la clase active se aplique después del montaje
    return () => clearTimeout(timeout);
  }, []);

  return <div className={`${animateClass} min-h-screen`}>{children}</div>;
};

export default PageWrapper;
