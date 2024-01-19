import React, { useContext } from "react";
import { BookingContext } from "./BookingForm";

const Age = ({ nextStep, prevStep, handleInputChange }) => {
  const { formData } = useContext(BookingContext);
  return (
    <div className="p-2 text-black border rounded-md ">
      <h2 className="my-4 text-lg text-center text-white">
        Add age, city and company
      </h2>
      <label
        htmlFor="name"
        className="block mb-2 text-sm font-medium text-gray-600"
      >
        Age:
      </label>
      <input
        type="text"
        id="age"
        name="age"
        value={formData.age}
        onChange={handleInputChange}
        className="w-full p-2 mt-1 mb-4 border rounded-md"
      />
      <label
        htmlFor="city"
        className="block mb-2 text-sm font-medium text-gray-600"
      >
        City:
      </label>
      <select
        id="city"
        name="city"
        value={formData.city}
        onChange={handleInputChange}
        className="w-full p-2 mt-1 mb-4 border rounded-md"
      >
        <option value="" disabled>
          Select a city
        </option>
        <option value="Delhi">Delhi</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Mumbai">Mumbai</option>
      </select>

      <label
        htmlFor="company"
        className="block mb-2 text-sm font-medium text-gray-600"
      >
        Company:
      </label>
      <input
        type="text"
        id="company"
        name="company"
        value={formData.company}
        onChange={handleInputChange}
        className="w-full p-2 mt-1 mb-4 border rounded-md"
      />
      <div className="flex justify-between">
        <button
          onClick={prevStep}
          className="px-4 py-2 font-bold text-black rounded-md bg-slate-300 hover:bg-slate-500 focus:outline-none focus:shadow-outline-blue"
        >
          Previous
        </button>
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

export default Age;
