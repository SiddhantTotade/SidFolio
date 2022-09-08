import { About } from "./components/About";
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
    </div>
  );
}

export default App;
