import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import paralleximg from "../asset/parallexmain.png";
import "../Components/Text.css";
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
      <div className="body">
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
            <img src={paralleximg} width={300} alt="" />
          </div>

          <div
            className="home_img5 "
            style={{
              transform: `translate3d(${scrollPosition * 1.8}px, ${
                scrollPosition * -0.4
              }px, 0px)`,
            }}
          >
            <img src={paralleximg} width={300} alt="" />
          </div>
          <div
            className="home_img9 "
            style={{
              transform: `translate3d(${scrollPosition * 8}px, ${
                scrollPosition * -4.5
              }px, 0px)`,
            }}
          >
            <img src={paralleximg} width={300} alt="" />
          </div>
          <div
            className="home_img8 "
            style={{
              transform: `translate3d(${scrollPosition * -1}px, ${
                scrollPosition * 0.4
              }px, 0px)`,
            }}
          >
            <img src={paralleximg} width={300} alt="" />
          </div>

          <div
            className="home_img7 "
            style={{
              transform: `translate3d(${scrollPosition * -5}px, ${
                scrollPosition * 2.5
              }px, 0px)`,
            }}
          >
            <img src={paralleximg} width={300} alt="" />
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
            <img src={paralleximg} width={300} alt="" />
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

        <main>
          <section className="info-section">
            <h1>Welcome to the world of Metal Parts</h1>
            <div className="right-part">
              <div className="main-grid d-flex">
                <div className="box">
                  <div className="bg-img">
                    <img src={paralleximg} alt="VFX" />
                  </div>
                </div>
                <div className="box">
                  <div className="bg-img">
                    <img src={paralleximg} alt="Photography" />
                  </div>
                </div>
                <div className="box">
                  <div className="bg-img">
                    <img src={paralleximg} alt="VFX" />
                  </div>
                </div>
                <div className="box">
                  <div className="bg-img">
                    <img src={paralleximg} alt="VFX" />
                  </div>
                </div>
                <div className="box">
                  <div className="bg-img">
                    <img src={paralleximg} alt="VFX" />
                  </div>
                </div>
                <div className="box">
                  <div className="bg-img">
                    <img src={paralleximg} alt="VFX" />
                  </div>
                </div>
                <div className="box">
                  <span>TOP PRODUCTS</span>
                </div>
                <div className="box">
                  <div className="bg-img">
                    <img src={paralleximg} />
                  </div>
                </div>
              </div>

              <div className="bg-circle-h-line">
                <img
                  src="https://www.yudiz.com/codepen/photography-banner/circle-ring.svg"
                  alt="Horizontal-circle"
                />
                <img
                  src="https://www.yudiz.com/codepen/photography-banner/circle-ring.svg"
                  alt="Horizontal-circle"
                />
                <img
                  src="https://www.yudiz.com/codepen/photography-banner/circle-ring.svg"
                  alt="Horizontal-circle"
                />
              </div>
              <div className="bg-dash-circle">
                <img
                  src="https://www.yudiz.com/codepen/photography-banner/dash-circle.svg"
                  alt="dash-circle"
                />
              </div>
            </div>
          </section>
        </main>
      </div>
      <div class="animation-example">
        <div class="item">
          <div class="line"></div>
          <div class="dot"></div>
          <div class="circle"></div>
        </div>
        <div class="item">
          <div class="line"></div>
          <div class="dot"></div>
          <div class="circle"></div>
        </div>
        <div class="item">
          <div class="line"></div>
          <div class="dot"></div>
          <div class="circle"></div>
        </div>
        <div class="item">
          <div class="line"></div>
          <div class="dot"></div>
          <div class="circle"></div>
        </div>
        <div class="item -type2">
          <div class="line"></div>
          <div class="dot"></div>
          <div class="circle"></div>
        </div>
        <div class="item -type2">
          <div class="line"></div>
          <div class="dot"></div>
          <div class="circle"></div>
        </div>
        <div class="item -type2">
          <div class="line"></div>
          <div class="dot"></div>
          <div class="circle"></div>
        </div>
        <div class="item -type2">
          <div class="line"></div>
          <div class="dot"></div>
          <div class="circle"></div>
        </div>
        <div class="center">
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
      </div>
      <div class="container">
        <div class="square black">
          <div class="square">
            <div class="square black">
              <div class="square">
                <div class="square black">
                  <div class="square">
                    <div class="square black">
                      <div class="square">
                        <div class="square black">
                          <div class="square">
                            <div class="square black">
                              <div class="square">
                                <div class="square black">
                                  <div class="square">
                                    <div class="square black">
                                      <div class="square">
                                        <div class="square black">
                                          <div class="square">
                                            <div class="square black">
                                              <div class="square">
                                                <div class="square black">
                                                  <div class="square">
                                                    <div class="square black">
                                                      <div class="square">
                                                        <div class="square black">
                                                          <div class="square">
                                                            <div class="square black">
                                                              <div class="square">
                                                                <div class="square black"></div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TextMain;
