import Contact from "./components/Contact/Contact";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Testimonials from "./components/Testimonials/Testimonials";
import Works from "./components/Works/Works";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="sections">
        <Intro />
        <About />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
