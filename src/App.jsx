import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Arts from "./components/Arts";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <BrowserRouter>
      <Wrapper />
      <Header />
      <Landing />
      <Arts />
    </BrowserRouter>
  );
}

export default App;
