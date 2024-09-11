import "./App.css";
import GridCards from "../GridCards/GridCards";
import NavBar from "../NavBar/NavBar";
import HeroImage from "../HeroImage/HeroImage";
import IconDetails from "../IconDetails/IconDetails";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <HeroImage />
      </header>
      <main className="App-main">
        <IconDetails />
        <GridCards />
      </main>
      <Footer />
    </div>
  );
}

export default App;
