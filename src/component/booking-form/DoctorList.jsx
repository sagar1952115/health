import React, { useContext, useEffect, useState } from "react";
import { BookingContext } from "./BookingForm";
import doctorsDataArray from "../../doctorData";

const DoctorList = ({ prevStep, handleInputChange, handleSubmit }) => {
  const [doctors, setDoctors] = useState([]);
  const [selected, setSelected] = useState(null);
  const {
    formData,
    formData: { doctorName },
    setFormData,
  } = useContext(BookingContext);
  const handleClick = (name) => {
    setSelected(name);
    setFormData({ ...formData, doctorName: name });
  };
  const {
    formData: { city },
  } = useContext(BookingContext);
  console.log(city);
  useEffect(() => {
    const filteredDoctors = doctorsDataArray.filter(
      (curr) => curr.city === city
    );
    setDoctors(filteredDoctors);
  }, []);
  return (
    <div className="p-2 text-white border rounded-md">
      <h2 className="my-4 text-lg text-center text-white">Choose Doctor</h2>
      <div className="flex flex-col flex-wrap justify-center gap-1 p-2 lg:flex-row ">
        {doctors.map((curr) => {
          return (
            <div
              onClick={() => handleClick(curr.name)}
              className={`cursor-pointer ${
                selected === curr.name ? "border-4 border-blue-400" : ""
              } p-2 flex flex-col border w-full lg:w-96  rounded-md`}
            >
              <div className="font-bold text-xxl">{curr.name}</div>
              <div className="text-sm">{curr.specialization}</div>
              <div className="text-sm italic font-light">{curr.city}</div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between p-2">
        <button
          onClick={prevStep}
          className="px-4 py-2 font-bold text-black rounded-md bg-slate-300 hover:bg-slate-500 focus:outline-none focus:shadow-outline-blue"
        >
          Previous
        </button>
        <button
          onClick={handleSubmit}
          className="px-4 py-2 font-bold text-black rounded-md bg-slate-300 hover:bg-slate-500 focus:outline-none focus:shadow-outline-blue"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default DoctorList;
