import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Home } from "./components/Home";
import NavBar from "./components/NavBar";
import { Portfolio } from "./components/Portfolio.jsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
    </div>
  );
}

export default App;
