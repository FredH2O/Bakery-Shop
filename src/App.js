import "./App.css";
import CaptionCarousel from "./CaptionCarousel";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <main className="App-main">
        <CaptionCarousel />
      </main>
    </div>
  );
}

export default App;
