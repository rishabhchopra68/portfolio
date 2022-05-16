import Contact from "./components/Contact/Contact";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import Testimonials from "./components/Testimonials/Testimonials";
import Works from "./components/Works/Works";
import "./app.scss";
import PortfolioContextProvider from "./context/PortfolioContext";

function App() {
  document.getElementById("profile-pic") &&
    document.getElementById("profile-pic").remove();
  return (
    <PortfolioContextProvider>
      <div className="app">
        <Navbar />
        <div className="sections">
          <Intro />
          <Works />
          <Testimonials />
          <Contact />
        </div>
      </div>
    </PortfolioContextProvider>
  );
}

export default App;
