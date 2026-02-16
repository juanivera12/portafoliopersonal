import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen text-white selection:bg-green-500 selection:text-black">
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
