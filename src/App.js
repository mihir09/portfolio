import "./styles.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import Resume from "./routes/Resume";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import aos from "aos";
import "aos/dist/aos.css";
import Github from "./routes/Github";

export default function App() {
  useEffect(() => {
    document.title = "Mihir Portfolio";
    aos.init();
    aos.refresh();
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/github" element={<Github />} />
      </Routes>
    </>
  );
}
