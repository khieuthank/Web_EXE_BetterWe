import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = () => {
  const { pathName } = useLocation();

  useEffect(() => {
    window && window.scroll(0, 0);
    console.log("scroll top", pathName);
  }, [pathName]);
  return null;
};

export default ScrollTop;
