import { ScrollTop } from "primereact/scrolltop";
import About from "../about/About";
import Experiences from "../experiences/Experiences";
import Skills from "../skills/Skills";
import Gallery from "../projects/Projects";
import Contact from "../contact/Contact";

export default function Home() {
  return (
    <>
      <About />
      <Experiences />
      <ScrollTop />
      <Skills />
      <Gallery />
      <Contact />
    </>
  );
}
