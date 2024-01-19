import React, { useContext } from "react";
import { BookingContext } from "./BookingForm";

const Name = ({ nextStep, handleInputChange }) => {
  const { formData } = useContext(BookingContext);

  return (
    <div className="p-2 text-black border rounded-md">
      <h2 className="my-4 text-lg text-center text-white">
        Add name and phone number
      </h2>
      <label
        htmlFor="name"
        className="block mb-2 text-sm font-medium text-gray-600"
      >
        Name:
      </label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        className="w-full p-2 mt-1 mb-4 border rounded-md"
      />
      <label
        htmlFor="phone"
        className="block mb-2 text-sm font-medium text-gray-600"
      >
        Phone number:
      </label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleInputChange}
        className="w-full p-2 mt-1 mb-4 border rounded-md"
      />
      <div className="flex justify-end">
        <button
          onClick={nextStep}
          className="px-4 py-2 font-bold text-black rounded-md bg-slate-300 hover:bg-slate-500 focus:outline-none focus:shadow-outline-blue"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Name;
