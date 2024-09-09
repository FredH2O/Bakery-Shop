import "./App.css";
import GridCards from "../GridCards/GridCards"; // Adjusted path
import NavBar from "../NavBar/NavBar"; // Adjusted path
import HeroImage from "../HeroImage/HeroImage"; // Adjusted path

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
