import React from "react";
import ShuffleHero from "./ShuffleHero";
import Example from "./Example";
import { TextParallaxContentExample } from "./TextParallaxContentExample";
import { ShiftingDropDown } from "./ShiftingDropDown";
import { Example2 } from "./Example2";
import ParticlesContainer from "./ParticlesContainer";
import { HoverImageLinks } from "./HoverImageLinks";

import IconSideNav from "./IconSideNav";
import TextMain from "./TextMain";
import { Example3 } from "./Example3";
import Products from "./Products";
import ImageGallery from "./ImageGallery";
import Contact from "./Contact";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <>
      <div>
        <Navbar/>
        {/* <ShiftingDropDown/>  */}
        {/* <IconSideNav/> */}
        <TextMain />
        {/* <ShuffleHero /> */}
        {/* <Contact/> */}

        <ShuffleHero />
        <Example2 />
        <Example />
        {/* <TextParallaxContentExample/> */}
        <HoverImageLinks />
        <Example3 />
        <Products />
        <ImageGallery />
      </div>
      <ParticlesContainer />
    </>
  );
};

export default App;
