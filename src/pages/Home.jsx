import Landing from "../components/Landing/Landing";
import LandingBackground from "../components/Landing/LandingBackground";
import Arts from "../components/Arts/Arts";
import Sketches from "../components/Sketches/Sketches";
import Articles from "../components/Articles/Articles";
import Testimonials from "../components/Testimonials/Testimonials";
import { useRef } from "react";

const Home = () => {
  const artRef = useRef(null);

  return (
    <main>
      {/* fixed background */} <LandingBackground />
      <Landing artRef={artRef} />
      <Arts artRef={artRef} />
      <Sketches />
      <Articles />
      <Testimonials />
    </main>
  );
};

export default Home;
