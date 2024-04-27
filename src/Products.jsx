import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Finalmatch from "./Components/Finalmatch";
import Scene from "./Components/Scene";
import { Environment, OrbitControls } from "@react-three/drei";
import Test2 from "./Test2";
import TestCanvas from "./TestCanvas";
const Products   = () => {
  return (
    <>
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          {/* <img
            src="https://via.placeholder.com/300"
            alt="Example Product"
            className="rounded-lg w-full mb-4 md:mb-0 md:w-64"
          /> */}
          {/* <Canvas
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
              </Canvas> */}
              <TestCanvas/>

              
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-2xl font-bold mb-2">Example Product</h2>
          <p className="text-gray-700 text-lg mb-4">
            This is a sample product description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil necessitatibus, eius suscipit perferendis, doloribus sit labore tempora iure mollitia distinctio itaque similique. Molestias voluptas quaerat atque provident nostrum architecto dicta.
          </p>
          <div className="flex items-center mb-4">
            <span className="text-gray-700 font-bold mr-2">$</span>
            <span className="text-3xl font-bold">99.99</span>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>

    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 md:pr-8">
          <h2 className="text-2xl font-bold mb-2">Example Product</h2>
          <p className="text-gray-700 text-lg mb-4">
            This is a sample product description Lorem ipsum dolor sit amet consectetur adipisicing elit. Error adipisci sequi velit voluptate dignissimos ipsam, veritatis dolor ratione nobis, totam maxime iusto at ipsum fugiat eaque illum omnis expedita debitis.
          </p>
          <div className="flex items-center mb-4">
            <span className="text-gray-700 font-bold mr-2">$</span>
            <span className="text-3xl font-bold">99.99</span>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Add to Cart
          </button>
        </div>
        <div className="md:w-1/2">
          {/* <img
            src="https://via.placeholder.com/300"
            alt="Example Product"
            className="rounded-lg w-full"
          /> */}
            {/* <Canvas
                camera={{
                  fov: 2,

                  position: [50, 60, 11],
                }}
              >
                <ambientLight intensity={1} />
                <OrbitControls autoRotate={false} enableZoom={false} />
                <Suspense fallback={null}>
            
                  <Scene/>
                </Suspense>
                <Environment preset="city" />
              </Canvas> */}
              <Test2/>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default Products;
