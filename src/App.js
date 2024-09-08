import "./App.css";
import GridCards from "./GridCards";
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
        <GridCards />
      </main>
    </div>
  );
}

export default App;
