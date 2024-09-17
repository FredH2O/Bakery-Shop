import { useState } from "react";
import "./App.css";
import GridCards from "../GridCards/GridCards";
import NavBar from "../NavBar/NavBar";
import HeroImage from "../HeroImage/HeroImage";
import IconDetails from "../IconDetails/IconDetails";
import Footer from "../Footer/Footer";
import ItemList from "../ItemCards/ItemLists";
import ReviewCarousel from "../ReviewCarousel/ReviewCarousel";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addedToCart = (item) => {
    console.log("Adding to cart:", item);
    setCartItems((prev) => [...prev, item]);
  };

  return (
    <div className="App">
      <NavBar cartItemCount={cartItems.length} />
      <header className="App-header">
        <HeroImage />
      </header>
      <main className="App-main">
        <IconDetails />
        <GridCards />
        <ReviewCarousel />
        <ItemList onAddToCart={addedToCart} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
