import ItemCards from "./ItemCards";

const itemList = [
  {
    img: "/images/cake1.png",
    alt: "Cake",
    title: "Black Gateu Wedding Cake",
    text: "A luxurious chocolate gateau, perfect for a sophisticated wedding celebration.",
    price: "€150",
  },
  {
    img: "/images/cake2.jpg",
    alt: "Cake",
    title: "Velvet Deluxe Wedding Cake",
    text: "A rich velvet cake layered with cream cheese frosting, ideal for a grand wedding.",
    price: "€150",
  },
  {
    img: "/images/cake3.jpg",
    alt: "Cake",
    title: "Elegant Dreams Wedding Cake",
    text: "An elegant wedding cake adorned with delicate floral decorations.",
    price: "€150",
  },
  {
    img: "/images/cake4.jpg",
    alt: "Cake",
    title: "Vanilla Flower Birthday Cake",
    text: "A classic vanilla cake with a beautiful floral design, perfect for birthdays.",
    price: "€150",
  },
  {
    img: "/images/cake5.jpg",
    alt: "Cake",
    title: "Carrot Cream Cake",
    text: "A moist carrot cake with cream cheese frosting, offering a delightful taste.",
    price: "€150",
  },
  {
    img: "/images/cake6.jpg",
    alt: "Cake",
    title: "Fruit Power Forest Cake",
    text: "A fruity forest cake topped with a mix of seasonal fruits and whipped cream.",
    price: "€150",
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
    price: "€150",
  },
  {
    img: "/images/cake9.jpg",
    alt: "Cake",
    title: "Queen's Caramel Cake",
    text: "A decadent caramel cake with layers of smooth caramel frosting.",
    price: "€150",
  },
];

export default function ItemList() {
  return (
    <div className="container">
      <div className="row">
        {itemList.map((item, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <ItemCards
              img={item.img}
              alt={item.alt}
              title={item.title}
              text={item.text}
              price={item.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
