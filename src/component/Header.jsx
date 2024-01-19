import React from "react";
import doctor from "../asset/doctor4.png";

const Header = () => {
  const scrollToSection = () => {
    const section = document.getElementById("booking");
    console.log(section);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mx-auto mb-10 overflow-hidden max-w-7xl lg:flex-row-reverse lg:h-screen ">
      <div className="w-full lg:h-full r">
        <img
          className=" opacity-50 lg:opacity-100 m-auto lg:ml-0 h-[400px] lg:w-full lg:h-full object-cover"
          src={doctor}
          alt=""
        />
      </div>
      <div className="absolute  flex lg:static  top-30 left-0 w-full h-[400px] lg:h-full p-6 items-center ">
        <div className="flex flex-col items-center justify-end w-full h-full p-2 mt-auto lg:h-full lg:justify-center">
          <div className="p-2 text-2xl text-center lg:text-8xl lg:text-left">
            Move Better Feel Better Live Better
          </div>

          <button
            onClick={scrollToSection}
            className="p-2 px-10 mt-5 font-bold text-black rounded-lg hover:bg-slate-500 bg-slate-300 lg:mr-auto lg:mt-20"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
