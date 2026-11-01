import Footer from "./components/Footer";
import Header from "./components/Header";

import Hero from "./section/Hero";
import About from "./section/About";
import Favorites from "./section/Favorite";
import Portfolio from "./section/Portfolio";
import Contact from "./section/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-[#F4F2FB] font-body text-[#23204A] antialiased">
      <Header />
      
      <main>
        <Hero />
        <About />
        <Favorites />
        <Portfolio />
        <Contact />
      </main>
      
      <Footer />
      
    </div>
  );
}
