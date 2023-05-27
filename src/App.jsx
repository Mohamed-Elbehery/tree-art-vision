import { BrowserRouter } from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton";

import Header from "./components/Header";
import Landing from "./components/Landing/Landing";
import LandingBackground from "./components/Landing/LandingBackground";
import Arts from "./components/Arts/Arts";
import Sketches from "./components/Sketches/Sketches";
import Articles from "./components/Articles/Articles";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <SkeletonTheme baseColor="#404040" highlightColor="#525252">
      <BrowserRouter>
        <Header />
        <Landing />
        <LandingBackground />
        <Arts />
        <Sketches />
        <Articles />
        <Testimonials />
        <Footer />
      </BrowserRouter>
    </SkeletonTheme>
  );
}

export default App;
