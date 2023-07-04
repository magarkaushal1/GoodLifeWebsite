import React from "react";
import { Navbar } from "./components/Navbar";
import "./assets/App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Japan from "./page/study/Japan";
import Foooter from "./components/Foooter";
import Australia from "./page/study/Australia";
import Uk from "./page/study/Uk";
import Canada from "./page/study/Canada";
import ContactUs from "./page/ContactUs";
import About from "./page/About";
import StudyAbroad from "./page/StudyAbroad";
import Services from "./page/Services";
import Gallery from "./page/Gallery";
import Testimonial from "./page/Testimonial";
import Signup from "./page/Signup";
import Login from "./page/Login"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/admin/signup" element={<Signup />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/studyinjapan" element={<Japan />} />
        <Route path="/studyinaustralia" element={<Australia />} />
        <Route path="/studyinuk" element={<Uk />} />
        <Route path="/studyincanada" element={<Canada />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/studyabroad" element={<StudyAbroad />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/testimonial" element={<Testimonial />} />
      </Routes>
      <Foooter />
    </>
  );
}

export default App;
