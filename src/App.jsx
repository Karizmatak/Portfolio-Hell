import Navbar from "./components/Navbar";
import Middle from "./components/Middle";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <div className="from-gray-900 to-red-950">
      <Navbar />
      <section id="home">
        <Middle />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
