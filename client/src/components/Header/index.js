import React, { useState } from "react";
import BarsMenu from "./BarsMenu";
import Navbar from "./Navbar";

const Header = ({ smallDisplay }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return smallDisplay ? (
    <BarsMenu sidebar={showSidebar} setShowSidebar={setShowSidebar} />
  ) : (
    <Navbar />
  );
};

export default Header;
