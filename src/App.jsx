import React from "react";
import "./App.css";

import paralleximg from "./asset/parallexmain.png";
import TextMain from "./Components/TextMain";
const App = () => {
  return (
    <>
    <TextMain/>
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
      <div className="element">
        <img className="card-img" src={paralleximg} alt="a lighthouse" />
        <img className="card-img" src={paralleximg} class="alt" alt="an old city" />
        <img className="card-img" src={paralleximg} alt="a lighthouse" />
        <img className="card-img" src={paralleximg} class="alt" alt="an old city" />
      </div>

    </>
  );
};

export default App;
