import Hero from "../components/sections/Hero";
import Skills from "../components/sections/Skills";
import Impact from "../components/sections/Impact";
import Testimonials from "../components/sections/Testimonials";
import Contact from "../components/sections/Contact";
import "../styles/Home.css";

function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Impact />
      <Testimonials />
      <Contact />
    </>
  );
}

export default Home;
