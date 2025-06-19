import Home from "../components/Home";
import AboutMe from "../components/AboutMe";
import Portfolio from "@/components/Portfolio";
import Contact from "../components/Contact";
import Navbar from "@/components/Navbar";

export default function MainPage() {
  return (
    <>
      <Navbar />
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
