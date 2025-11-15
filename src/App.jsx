import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import "./index.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Education from "./Pages/Education";
import Experience from "./Pages/Experience";
import AnimatedBackground from "./components/Background";
import Navbar from "./components/Navbar";
import Portofolio from "./Pages/Portofolio";
import ContactPage from "./Pages/Contact";
import ProjectDetails from "./components/ProjectDetail";
import WelcomeScreen from "./Pages/WelcomeScreen";
import { AnimatePresence } from 'framer-motion';
import NotFoundPage from "./Pages/404";
import { useTheme } from "./context/ThemeContext";

const LandingPage = ({ showWelcome, setShowWelcome }) => {
  return (
    <>
      <AnimatePresence mode="wait">
        {showWelcome && (
          <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
        )}
      </AnimatePresence>

      {!showWelcome && (
        <>
          <Navbar />
          <AnimatedBackground />
          <Home />
          <About />
          <Portofolio />
          <Education />
          <Experience />
          <ContactPage />
          <footer>
            <center>
              <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center" />
              <span className="block text-sm pb-4 text-gray-500 text-center dark:text-gray-400">
                © 2025{" "}
                <a href="https://flowbite.com/" className="hover:underline">
                  Elfa Dwi Cahyani 
                </a>
                . All Rights Reserved.
              </span>
            </center>
          </footer>
        </>
      )}
    </>
  );
};

const ProjectPageLayout = () => {
  const { isDark } = useTheme();
  
  return (
    <div className={`min-h-screen ${isDark ? 'bg-slate-900' : 'bg-white'} transition-colors duration-300`}>
      <Navbar />
      <AnimatedBackground />
      <ProjectDetails />
      <footer>
        <center>
          <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center" />
          <span className="block text-sm pb-4 text-gray-500 text-center dark:text-gray-400">
            © 2025{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Elfa Dwi Cahyani
            </a>
            . All Rights Reserved.
          </span>
        </center>
      </footer>
    </div>
  );
};

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen ${isDark ? 'bg-slate-900' : 'bg-white'} transition-colors duration-300`}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage showWelcome={showWelcome} setShowWelcome={setShowWelcome} />} />
          <Route path="/project/:id" element={<ProjectPageLayout />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;