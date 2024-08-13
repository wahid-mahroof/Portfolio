import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";

export default function () {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <Resume />
        <Experience />
        <Contact />
        <Footer />
      </div>
      <Toaster />
    </>
  );
}
