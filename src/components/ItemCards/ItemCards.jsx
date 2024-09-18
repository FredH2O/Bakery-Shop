import "./ItemCards.css";

function ItemCards({ img, alt, title, text, price, onAddToCart, ...props }) {
  //console.log('onAddToCart prop:', onAddToCart);
  return (
    <div className="card item-cards" style={{ width: "18rem" }} {...props}>
      <img src={img} className="card-img-top" alt={alt} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <p className={price.classes}>{price.value}</p>
        <button
          className="btn btn-primary buy-btn"
          onClick={() => onAddToCart({ img, title, price })}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ItemCards;
