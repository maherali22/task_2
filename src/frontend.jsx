import React from "react";
import image from "../src/assets/image2.webp";

const Content = () => {
  return (
    <div className="relative flex items-start max-w-6xl max-auto p-100 rounded-lg">
      <div className="relative z-10 bg-green-100 p-8 rounded-lg top-10">
        <h1 className="text-2xl font-bold texxt-gray-800 mb-4">
          Architecture is a very important thing in building.
        </h1>
        <p className="text-gray-600 mb-6">
          Dominion dry make shall is is greater fish moving set seas open man
          which. Green make appear moveth fruit likeness
        </p>
        <button className="bg-blue-600 text-white  px-3 py-2 rounded hover:bg-blue-800 hover:text-gray-300 transitions">
          Read more
        </button>
      </div>

      <div
        className="absolute top-40
      right-0 w-2/4 h-auto"
      >
        <img src={image} alt="image" className="rounded-lg object-cover" />
      </div>
      

    </div>
  );
};
export default Content;
