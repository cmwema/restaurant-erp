import HeroSection from "./HeroSection";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import RowContainer from "./RowContainer";
import MenuContainer from "./MenuContainer";
import { useStateValue } from "../context/StateProvider";

function MainContainer() {
  const [{ foodItems, cartShow }, dispatch] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {}, [scrollValue, cartShow]);
  return (
    <>
      <HeroSection />
      <MenuContainer />
    </>
  );
}

export default MainContainer;
