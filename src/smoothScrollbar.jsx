import Scrollbar from "smooth-scrollbar";
import { useEffect } from "react";

const SmoothScroll = () => {
  useEffect(() => {
    Scrollbar.init(document.body, {
      damping: 0.1, // Smoothness
      thumbMinSize: 20, // Minimum thumb size
    });
  }, []);

  return null;
};

export default SmoothScroll;
