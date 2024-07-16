import React from "react";
import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';
import Education from "./components/Education";
import ImageGallery from "./components/ImageGallery";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative w-full min-h-screen bg-[#030014]">
        <div className="relative z-0">
          <StarsCanvas />
        </div>
        <div className="relative z-[0] bg-[#030014]">
          <Hero />
        </div>
        <div className="relative z-20">
          <Navbar />
          <About />
          <Education />
          <Experience />
          <ImageGallery />
          <Works />
          {/* <Contact /> */}
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;