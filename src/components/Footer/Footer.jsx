import "./Footer.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import ShopLinks from "./ShopLinks";
import QuickLinks from "./QuickLinks";
import OpeningHours from "./OpeningHours";

export default function Footer() {
  const locations = [
    "Moore Shopping Centre Branch",
    "Kilkullen Road Branch",
    "Loughlane View Branch",
  ];

  const shopLinks = [
    { href: "#", text: "Best Seller Cakes" },
    { href: "#", text: "Birthdays & Occasions" },
    { href: "#", text: "Treats & Bakes" },
    { href: "#", text: "Halloween Cakes" },
    { href: "#", text: "Cream Cakes" },
    { href: "#", text: "Christmas Cakes" },
    { href: "#", text: "Wedding & Baby" },
    { href: "#", text: "Specialty Cakes" },
  ];

  const quickLinks = [
    { href: "#", text: "About Us" },
    { href: "#", text: "Deliveries" },
    { href: "#", text: "Catering" },
    { href: "#", text: "FAQs" },
    { href: "#", text: "Allergens" },
    { href: "#", text: "Career" },
    { href: "#", text: "Policy" },
    { href: "#", text: "Custom Orders" },
  ];

  return (
    <footer className="container-fluid text-center">
      <div className="row row-footer">
        <div className="col-12 col-md">
          <ShopLinks title="Shop" shopLinks={shopLinks} />
        </div>
        <div className="col-12 col-md">
          <QuickLinks title="Quick Links" quickLinks={quickLinks} />
        </div>
        <div className="contact col-12 col-md">
          <h3>{locations[0]}</h3>
          <OpeningHours />
        </div>
        <div className="contact col-12 col-md">
          <h3>{locations[1]}</h3>
          <OpeningHours />
        </div>
        <div className="contact col-12 col-md">
          <h3>{locations[2]}</h3>
          <OpeningHours />
        </div>
      </div>
      <p>
        <i class="bi bi-code"></i>
        FredH2O
        <i class="bi bi-code-slash"></i>
      </p>
    </footer>
  );
}
