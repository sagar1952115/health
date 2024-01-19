import React, { useContext } from "react";
import Navbar from "./component/Navbar";
import Header from "./component/Header";
import Testimonial from "./component/Testimonial";
import Footer from "./component/Footer";
import BookingForm from "./component/booking-form/BookingForm";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <BookingForm />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Homepage;
