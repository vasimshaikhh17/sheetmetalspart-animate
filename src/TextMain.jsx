import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import item1 from "./assets/item1.png";
import "./Text.css";
// import man from "../asset/man.png"
const TextMain = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const initialstate = 0;

  const [number, setnumber] = useState(initialstate);
  const increase = () => {
    setnumber(number + 1);
  };
  const decrease = () => {
    setnumber(number - 1);
  };
  const reset = () => {
    setnumber(initialstate);
  };

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="body bg-black">
        <div id="home" className="mainSec text-wrapper">
          <motion.p initial={{ x: -2000 }} animate={{ x: 0 }} className="text">
            KHYATI
          </motion.p>
          <motion.p initial={{ x: 2000 }} animate={{ x: 0 }} className="text2">
            Industries
          </motion.p>

          <div
            className="home_img2"
            style={{
              transform: `translate3d(0px, ${scrollPosition * 0.4}px, 0px)`,
            }}
          >
            <img src={item1} width={300} alt="" />
          </div>

          <div
            className="home_img5 "
            style={{
              transform: `translate3d(${scrollPosition * 1.8}px, ${
                scrollPosition * -0.4
              }px, 0px)`,
            }}
          >
            <img src={item1} width={300} alt="" />
          </div>
          <div
            className="home_img9 "
            style={{
              transform: `translate3d(${scrollPosition * 8}px, ${
                scrollPosition * -4.5
              }px, 0px)`,
            }}
          >
            <img src={item1} width={300} alt="" />
          </div>
          <div
            className="home_img8 "
            style={{
              transform: `translate3d(${scrollPosition * -1}px, ${
                scrollPosition * 0.4
              }px, 0px)`,
            }}
          >
            <img src={item1} width={300} alt="" />
          </div>

          <div
            className="home_img7 "
            style={{
              transform: `translate3d(${scrollPosition * -5}px, ${
                scrollPosition * 2.5
              }px, 0px)`,
            }}
          >
            <img src={item1} width={300} alt="" />
          </div>

          <div
            className="home_img5 coloredBox"
            style={{
              transform: `translate3d(${scrollPosition * 1.3}px, ${
                scrollPosition * -0.3
              }px, 0px)`,
            }}
          ></div>
          <div
            className="logo_full coloredBox"
            style={{ opacity: scrollPosition > 100 ? 1 : 0 }}
          ></div>
          <div
            className="home_img6 "
            style={{
              transform: `translate3d(${scrollPosition * -0.6}px, ${
                scrollPosition * 0.1
              }px, 0px)`,
            }}
          >
            <img src={item1} width={300} alt="" />
          </div>
          <div
            className="home_img7 coloredBox"
            style={{
              transform: `translate3d(${scrollPosition * -0.6}px, ${
                scrollPosition * 0.1
              }px, 0px)`,
            }}
          ></div>
        </div>
</div>
    </>
  );
};

export default TextMain;
