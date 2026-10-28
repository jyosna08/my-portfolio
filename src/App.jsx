import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Training from "./components/Training";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Stack from "./components/Stack";
import Contact from "./components/Contact";


// App just stacks the components in order. Each one is a separate file.
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Training />
        <Education />
        <Projects />
        <Stack />
        <Contact />
      </main>
    </>
  );
}
