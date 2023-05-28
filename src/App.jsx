import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Sketches from "./pages/Sketches";
import DecorativePieces from "./pages/DecorativePieces";
import Workshops from "./pages/Workshops";
import About from "./pages/About";

function App() {
  return (
    <SkeletonTheme baseColor="#404040" highlightColor="#525252">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sketches" element={<Sketches />} />
          <Route path="/decorative-pieces" element={<DecorativePieces />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/about-us" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </SkeletonTheme>
  );
}

export default App;
