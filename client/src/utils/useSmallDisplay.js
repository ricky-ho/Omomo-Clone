import { useState, useEffect } from "react";

const useSmallDisplay = () => {
  const [smallDisplay, setSmallDisplay] = useState(window.innerWidth < 850);

  useEffect(() => {
    const updateDisplay = () => setSmallDisplay(window.innerWidth < 850);

    window.addEventListener("resize", updateDisplay);
    return () => window.removeEventListener("resize", updateDisplay);
  });

  return smallDisplay;
};

export default useSmallDisplay;
