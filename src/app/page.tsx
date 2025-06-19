import Home from "../components/Home";
import AboutMe from "../components/AboutMe";
import Portfolio from "@/components/Portfolio";
import Contact from "../components/Contact";
import Navbar from "@/components/Navbar";

export default function MainPage() {
  return (
    <>
      <Navbar />
      <div className="fixed inset-0 flex justify-center items-center pointer-events-none z-[-1]">
        <div className="circle-animate circle-1"></div>
        <div className="circle-animate circle-2"></div>
        <div className="circle-animate circle-3"></div>
      </div>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <AboutMe />
      </section>
      <section id="my-works">
        <Portfolio />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}
