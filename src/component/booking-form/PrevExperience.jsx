import React, { useContext } from "react";
import { BookingContext } from "./BookingForm";

const PrevExperience = ({ prevStep, nextStep, handleInputChange }) => {
  const { formData } = useContext(BookingContext);

  return (
    <div className="p-2 text-black border rounded-md">
      <h2 className="my-4 text-lg text-center text-white">
        Write previous experience (if any)
      </h2>
      <label
        htmlFor="chiefComplaints"
        className="block mb-2 text-sm font-medium text-gray-600"
      >
        Previous Experience:
      </label>
      <textarea
        id="experience"
        name="experience"
        value={formData.experience}
        onChange={handleInputChange}
        rows="4"
        className="w-full p-2 mt-1 mb-4 border rounded-md resize-none"
      ></textarea>

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

export default PrevExperience;
