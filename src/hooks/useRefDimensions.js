
import { useEffect, useState } from "react";

const useRefDimensions = () => {
  const [windowSize, setWindowSize] = useState({
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
});

  useEffect(() => {
    const windowSizeHandler = () => {
      setWindowSize({innerHeight: window.innerHeight, innerWidth: window.innerWidth});
    };
    window.addEventListener("resize", windowSizeHandler);

    return () => {
      window.removeEventListener("resize", windowSizeHandler);
    };
  }, []);

  return windowSize;
};

export default useRefDimensions;
