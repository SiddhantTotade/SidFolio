import { About } from "./components/About";
import { AchievementsAndCertificates } from "./components/AchievementAndCertificates";
import { Contact } from "./components/Contact";
import { Development } from "./components/Development";
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
      <Development />
      <AchievementsAndCertificates />
      <Contact />
    </div>
  );
}

export default App;
