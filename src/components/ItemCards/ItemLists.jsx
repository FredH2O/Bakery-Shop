import ItemCards from "./ItemCards";

const itemList = [
  {
    img: "/images/cake1.png",
    alt: "Cake",
    title: "Black Gateu Wedding Cake",
    text: "A luxurious chocolate gateau, perfect for a sophisticated wedding celebration.",
    price: "€250",
  },
  {
    img: "/images/cake2.jpg",
    alt: "Cake",
    title: "Velvet Deluxe Wedding Cake",
    text: "A rich velvet cake layered with cream cheese frosting, ideal for a grand wedding.",
    price: "€230",
  },
  {
    img: "/images/cake3.jpg",
    alt: "Cake",
    title: "Elegant Dreams Wedding Cake",
    text: "An elegant wedding cake adorned with delicate floral decorations.",
    price: "€160",
  },
  {
    img: "/images/cake4.jpg",
    alt: "Cake",
    title: "Vanilla Flower Birthday Cake",
    text: "A classic vanilla cake with a beautiful floral design, perfect for birthdays.",
    price: "€50",
  },
  {
    img: "/images/cake5.jpg",
    alt: "Cake",
    title: "Carrot Cream Cake",
    text: "A moist carrot cake with cream cheese frosting, offering a delightful taste.",
    price: "€35",
  },
  {
    img: "/images/cake6.jpg",
    alt: "Cake",
    title: "Fruit Power Forest Cake",
    text: "A fruity forest cake topped with a mix of seasonal fruits and whipped cream.",
    price: "€35",
  },
  {
    img: "/images/cake7.jpg",
    alt: "Cake",
    title: "Elegant Wisdom Cake",
    text: "An elegant cake with a sophisticated design, ideal for special occasions.",
    price: "€150",
  },
  {
    img: "/images/cake8.jpg",
    alt: "Cake",
    title: "Blackberry Supreme Cake",
    text: "A rich cake infused with blackberry flavors and topped with a berry compote.",
    price: "€80",
  },
  {
    img: "/images/cake9.jpg",
    alt: "Cake",
    title: "Queen's Caramel Cake",
    text: "A decadent caramel cake with layers of smooth caramel frosting.",
    price: "€110",
  },
];

export default function ItemList({ onAddToCart }) {
  return (
    <div className="container container-icons">
      <div className="row items-card-container">
        {itemList.map((item, index) => (
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
