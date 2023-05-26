import { BrowserRouter } from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton";

import Header from "./components/Header";
import Landing from "./components/Landing/Landing";
import LandingBackground from "./components/Landing/LandingBackground";
import Arts from "./components/Arts/Arts";
import Sketches from "./components/Sketches/Sketches";

function App() {
  return (
    <SkeletonTheme baseColor="#404040" highlightColor="#525252">
      <BrowserRouter>
        <Header />
        <Landing />
        <LandingBackground />
        <Arts />
        <Sketches />
      </BrowserRouter>
    </SkeletonTheme>
  );
}

export default App;
