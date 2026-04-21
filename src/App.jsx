import { useEffect } from "react";

import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Testimonials } from "@/sections/Testimonials";
import { Contact } from "@/sections/Contact";
import { Footer } from "./layout/Footer";

function App() {

useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Delay ko 100ms kar diya taaki user ko home page dikhe hi nahi
      const timeoutId = setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          // 'smooth' hata kar 'auto' kar diya for instant jump
          element.scrollIntoView({ behavior: "auto", block: "start" });
        }
      }, 100); 

      return () => clearTimeout(timeoutId);
    }
  }, []);

return <div className="min-h-screen overflow-x-hidden">
  <Navbar />
  <main>
    <Hero />
    <About />
    <Projects />
    <Experience />
    <Testimonials />
    <Contact />
  </main>
  <Footer/>
</div>
}
export default App
