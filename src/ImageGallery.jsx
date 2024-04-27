import React from 'react';
import TestCanvas from "./TestCanvas.jsx";
import Test2 from "./Test2.jsx";

const componentsData = [
  { name: 'TestCanvas 1', description: 'TestCanvas Description 1' },
  { name: 'Test2', description: 'Test2 Description' },
  // Add more objects as needed
];

const ImageGallery = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {componentsData.map((component, index) => (
            <div key={index} className="w-full">
              <div className="border p-4">
                {component.name === 'TestCanvas 1' && <TestCanvas />}
                {component.name === 'Test2' && <Test2 />}
                {/* Add more conditions for other components */}
                <div className="text-sm">
                  <p className="font-semibold">{component.name}</p>
                  <p className="text-gray-600">{component.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
