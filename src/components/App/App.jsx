import "./App.css";
import GridCards from "../GridCards/GridCards";
import NavBar from "../NavBar/NavBar";
import HeroImage from "../HeroImage/HeroImage";
import IconDetails from "../IconDetails/IconDetails";
import Footer from "../Footer/Footer";
import ItemList from "../ItemCards/ItemLists";
import ReviewCarousel from "../ReviewCarousel/ReviewCarousel";

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <HeroImage />
      </header>
      <main className="App-main">
        <IconDetails />
        <GridCards />
        <ReviewCarousel />
        <ItemList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
