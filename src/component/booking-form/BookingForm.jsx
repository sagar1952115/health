import React, { createContext, useState } from "react";
import Name from "./Name";
import Age from "./Age";
import Complaints from "./Complaints";
import PrevExperience from "./PrevExperience";
import DoctorList from "./DoctorList";

export const BookingContext = createContext({});

const formStructure = {
  name: "",
  phone: "",
  age: "",
  city: "",
  company: "",
  chiefComplaints: "",
  experience: "",
  doctorName: "",
};

const BookingForm = () => {
  const [formData, setFormData] = useState(formStructure);
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    const phoneRegex = /^\d{10}$/;
    const ageRegex = /^[1-9][0-9]*$/;
    if (currentStep === 1) {
      if (formData.name === "") {
        alert("Name field can not be empty");
        return;
      }
      if (!phoneRegex.test(formData.phone)) {
        alert("Enter valid phone number");
        return;
      }
      setCurrentStep(currentStep + 1);
    }
    if (currentStep === 2) {
      if (!ageRegex.test(formData.age)) {
        alert("Invalid age");
        return;
      }
      if (formData.city === "") {
        alert("City can not be empty");
        return;
      }
      if (formData.company === "") {
        alert("Company can not be empty");
        return;
      }
      setCurrentStep(currentStep + 1);
    }
    if (currentStep === 3) {
      if (formData.chiefComplaints === "") {
        alert("Cheif complaints can not be empty");
        return;
      }
      if (formData.age < 40) {
        setCurrentStep(currentStep + 2);
      } else {
        setCurrentStep(currentStep + 1);
      }
    }
    if (currentStep === 4) {
      setCurrentStep(currentStep + 1);
    }
    if (currentStep === 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSubmit = () => {
    if (formData.doctorName === "") {
      alert("Select doctor to book appointment.");
      return;
    }
    console.log(formData);
    alert("Form submitted successfully.");
    setFormData(formStructure);
    setCurrentStep(1);
  };

  const prevStep = () => {
    if (currentStep === 5 && formData.age < 40) {
      setCurrentStep(currentStep - 2);
    } else {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Name nextStep={nextStep} handleInputChange={handleInputChange} />
        );
      case 2:
        return (
          <Age
            nextStep={nextStep}
            prevStep={prevStep}
            handleInputChange={handleInputChange}
          />
        );
      case 3:
        return (
          <Complaints
            nextStep={nextStep}
            prevStep={prevStep}
            handleInputChange={handleInputChange}
          />
        );
      case 4:
        return (
          <PrevExperience
            nextStep={nextStep}
            prevStep={prevStep}
            handleInputChange={handleInputChange}
          />
        );
      case 5:
        return (
          <DoctorList
            prevStep={prevStep}
            handleSubmit={handleSubmit}
            handleInputChange={handleInputChange}
          />
        );
      default:
        return null;
    }
  };

  return (
    <BookingContext.Provider value={{ formData, setFormData }}>
      <section id="booking" className="max-w-3xl p-2 mx-auto space-y-4">
        <p className="text-4xl font-semibold text-center ">
          Book an appointment
        </p>
        <div className="p-5">{renderStep()}</div>
      </section>
    </BookingContext.Provider>
  );
};

export default BookingForm;
