import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [shownav, setShownav] = useState(false);
  const handleShow = () => {
    console.log(shownav);
    setShownav((prev) => !prev);
  };
  const scrollToSection = () => {
    const section = document.getElementById("booking");
    console.log(section);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
    setShownav(false);
  };
  return (
    <div className="flex flex-col mx-auto z-1 max-w-7xl">
      <div className="flex items-center justify-between h-20 p-4 ">
        <div className="p-4 text-4xl font-extrabold lg:mx-10 ">Logo</div>
        <div className="">
          <div className="items-center hidden p-6 font-bold text-md lg:flex">
            <div className="mx-10">Home</div>
            <div className="mx-10">Contact</div>
            <div className="mx-10">About</div>
            <button
              onClick={scrollToSection}
              className="p-2 px-4 mx-10 text-black border rounded-lg hover:bg-slate-500 bg-slate-300"
            >
              Book Now
            </button>
          </div>
          <div
            onClick={handleShow}
            className="flex p-2 cursor-pointer z-999 lg:hidden "
          >
            {!shownav ? (
              <GiHamburgerMenu className="" color="#fff " size="1.5rem" />
            ) : (
              <RxCross2 color="#fff " size="1.5rem" />
            )}
          </div>
        </div>
      </div>
      <div
        className={`gap-1 items-start flex overflow-hidden flex-col  w-full  ${
          shownav ? "h-40" : "h-0"
        }`}
      >
        <div className="p-1 px-2 mx-6 font-bold text-md">Home</div>
        <div className="p-1 px-2 mx-6 font-bold text-md">Contact</div>
        <div className="p-1 px-2 mx-6 font-bold text-md">About</div>
        <button
          onClick={scrollToSection}
          className="p-2 px-4 mx-6 font-bold text-black border rounded-lg hover:bg-slate-500 bg-slate-300"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Navbar;
