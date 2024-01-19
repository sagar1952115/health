import React from "react";

const TestimonialCard = ({ data }) => {
  const { image, content, name } = data;
  return (
    <div className="p-2 bg-gray-700 rounded-md shadow-md h-96">
      <div className="flex items-center justify-center h-1/2">
        <img className="w-32 h-32 rounded-full" src={image} alt="" />
      </div>
      <div className="p-2 ">
        <h1 className="my-2 text-2xl font-bold">{name}</h1>
        <p className="text-sm">{content}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
