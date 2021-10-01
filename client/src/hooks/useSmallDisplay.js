/* Custom hook to determine the screen size for responsiveness */
import { useState, useEffect } from "react";

const useSmallDisplay = () => {
  const [smallDisplay, setSmallDisplay] = useState(window.innerWidth < 980);

  useEffect(() => {
    const updateDisplay = () => setSmallDisplay(window.innerWidth < 980);

    window.addEventListener("resize", updateDisplay);
    return () => window.removeEventListener("resize", updateDisplay);
  });

  return smallDisplay;
};

export default useSmallDisplay;