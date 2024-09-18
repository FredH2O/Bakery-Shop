import React from "react";
import ItemCards from "./ItemCards";
import { itemList } from "./Items";

function ItemList({ category, onAddToCart }) {
  const selectedItems = itemList[category] || [];

  return (
    <div className="container container-icons">
      <div className="row items-card-container">
        {selectedItems.map((item, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <ItemCards
              img={item.img}
              alt={item.alt}
              title={item.title}
              text={item.text}
              price={{ value: item.price, classes: "cost-price" }}
              onAddToCart={onAddToCart}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemList;
