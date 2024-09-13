import "./ItemCards.css";

function ItemCards({ img, alt, title, text, price }) {
  return (
    <div className="card item-cards" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt={alt} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <p>{price}</p>
        <a href="#" className="btn btn-primary">
          Add to Cart
        </a>
      </div>
    </div>
  );
}

export default ItemCards;
