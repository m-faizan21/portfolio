import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useState , useEffect} from "react";

const navLinks = [
  {href:"#about", label:"About"},
  {href:"#projects", label:"Projects"},
  {href:"#experience", label:"Experience"},
  {href:"#testimonials", label:"Testimonials"},
  // {href:"#contact", label:"Contact"},
]

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);


  // --- SMOOTH SCROLL LOGIC ---
const handleScrollTo = (e, href) => {
    e.preventDefault();
    
    // 1. Pehle '#' hatao
    const targetId = href.replace('#', ''); 
    
    // 2. Element dhoondo
    const element = document.getElementById(targetId);
    
    // 3. Agar element mila, tabhi scroll karo (Crash prevention)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", href);
    } else {
      console.warn(`Bhai, id="${targetId}" wala section nahi mila!`);
    }
    
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  },[]);
  return (
  <header className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"} z-50`}>
    <nav className="container mx-auto px-6 flex items-center justify-between">
      <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">
        MF<span className="text-primary">.</span>
      </a>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-1"> 
        <div className="glass rounded-full px-2 py-1 flex  items-center gap-1">
          {navLinks.map((link, index) => (
            <a key={index} href={link.href} onClick={(e) => handleScrollTo(e, link.href)} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-surface rounded-full">
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="hidden md:block">
          
        <a href="#contact" onClick={(e) => handleScrollTo(e, '#contact')}>
          <Button size="sm">Contact Me</Button>
        </a>
       
      </div>

      {/* Mobile  Menu button */}
      <button className="md:hidden p-2 text-foreground" onClick={()=> setIsMobileMenuOpen((prev)=> !prev)}>
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </nav>
    {/* Mobile Menu */}
    {isMobileMenuOpen && (
      <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
            <a key={index} href={link.href} onClick={(e) => handleScrollTo(e, link.href)} className=" text-lg text-muted-foreground hover:text-foreground py-2">
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={(e) => handleScrollTo(e, '#contact')}>
            <Button size="sm">Contact Me</Button>
          </a>
          </div>
    </div>)}
  </header>
);
};
    