import { useState } from "react";
import "./App.css";
import GridCards from "../GridCards/GridCards";
import NavBar from "../NavBar/NavBar";
import HeroImage from "../HeroImage/HeroImage";
import IconDetails from "../IconDetails/IconDetails";
import Footer from "../Footer/Footer";
import ItemList from "../ItemCards/ItemLists";
import ReviewCarousel from "../ReviewCarousel/ReviewCarousel";
import Categories from "../Categories/Categories";
import Modal from "../Modal/Modal";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [category, setCategory] = useState("cakes");

  const addedToCart = (item) => {
    console.log("Adding to cart:", item);
    setCartItems((prev) => [...prev, item]);
  };

  return (
    <div className="App">
      <Modal cartItems={cartItems} />
      <NavBar cartItemCount={cartItems.length} />
      <header className="App-header">
        <HeroImage />
      </header>
      <main className="App-main">
        <IconDetails />
        <GridCards />
        <ReviewCarousel />
        <Categories setCategory={setCategory} />
        <div className="collapse" id={`collapse-${category}`}>
          <div className="card card-body">
            <ItemList category={category} onAddToCart={addedToCart} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
