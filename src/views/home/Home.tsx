import { ScrollTop } from "primereact/scrolltop";
import About from "../about/About";
import Experiences from "../experiences/Experiences";
import Skills from "../skills/Skills";
import Contact from "../contact/Contact";
import Projects from "../projects/Projects";

export default function Home() {
  return (
    <>
      <About />
      <Experiences />
      <ScrollTop />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
