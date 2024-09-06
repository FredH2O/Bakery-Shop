import "./App.css";
import CaptionCarousel from "./CaptionCarousel";
import NavBar from "./NavBar";
import HeroImage from "./HeroImage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <HeroImage />
      </header>
      <main className="App-main">
        <CaptionCarousel />
      </main>
    </div>
  );
}

export default App;
