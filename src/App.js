import "./App.css";
import "./styles/nav.css";
import { Header } from "./components/Header";
import { Aboutme } from "./components/Aboutme";
import { Skills } from "./components/Skills";
import { WorkExperience } from "./components/WorkExperience";
import { Portfolio } from "./components/Portfolio";
import { Contact } from "./components/Contact";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="main-container">
      <Nav />
      <Header />
      <Aboutme />
      <Skills />
      <WorkExperience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
