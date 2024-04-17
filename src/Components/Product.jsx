import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Finalmatch from "../Finalmatch.jsx";
import { Environment, OrbitControls } from "@react-three/drei";
import "./Product.css"
const Product = () => {
  return (
    <>
      {/* <div className="model">
        <Canvas
          camera={{
            fov: 2,

            position: [50, 60, 11],
          }}
        >
          <ambientLight intensity={1} />
          <OrbitControls autoRotate={false} enableZoom={false} />
          <Suspense fallback={null}>
            <Finalmatch />
          </Suspense>
          <Environment preset="city" />
       
        </Canvas>
      </div> */}

      <div className="container border main-container" id="topic1">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 d-flex align-items-center justify-content-center ">
            
        
          
            <div className="model">
              <Canvas
                camera={{
                  fov: 2,

                  position: [50, 60, 11],
                }}
              >
                <ambientLight intensity={1} />
                <OrbitControls autoRotate={false} enableZoom={false} />
                <Suspense fallback={null}>
                  <Finalmatch />
                </Suspense>
                <Environment preset="city" />
              </Canvas>
            </div>
          </div>
          <div className="col-lg-6 mt-2">
            <div>
              <h2 className="top-heading">Match Box</h2>
              <p className="top-para">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati omnis ipsa hic, vitae nihil harum quo illum illo iste rem atque dignissimos, velit repellendus. Deserunt quod distinctio adipisci libero iusto voluptatem sint accusamus nobis sed rem consequatur cumque qui incidunt consequuntur expedita aliquam, voluptates iure minima vel! Laudantium ea omnis quaerat aut delectus quo, in quisquam commodi nihil est rem error. Deleniti consectetur impedit aliquam iure laudantium perferendis atque similique voluptates amet voluptas excepturi voluptatibus, distinctio cumq
              </p>
              <button type="button" className="btn btn-primary ">Add to cart</button><button type="button" className="btn btn-success mx-5">Buy Now</button>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default Product;
