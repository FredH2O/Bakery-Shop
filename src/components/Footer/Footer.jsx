import "./Footer.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Footer() {
  const openingHours = (
    <>
      <p>
        <b>Tel: </b> &#40;01&#41; 444 9973 / &#40;01&#41; 477 8422
      </p>
      <br />
      <h5>Opening Hours</h5>
      <p>Monday - Friday</p>
      <p>8:00 AM - 6:30 PM</p>
      <p>Saturday</p>
      <p>11:00 AM - 5:30 PM</p>
      <p>Sunday</p>
      <p>11:00 AM - 3:00 PM</p>
      <a href="" className="footer-links">
        <i className="bi bi-caret-right-fill"></i> VIEW MAP
      </a>
    </>
  );

  return (
    <footer className="container-fluid text-center">
      <div className="row row-footer">
        <div className="col-12 col-md">
          <h3>Shop</h3>
          <a href="" className="footer-links">
            <i className="bi bi-caret-right-fill"></i> Best Seller Cakes
          </a>
          <a href="" className="footer-links">
            <i className="bi bi-caret-right-fill"></i> Birthday & Occasions
          </a>
          <a href="" className="footer-links">
            <i className="bi bi-caret-right-fill"></i> Cakes,Treats & Bakes
          </a>
          <a href="" className="footer-links">
            <i className="bi bi-caret-right-fill"></i> Halloween Cakes
          </a>
          <a href="" className="footer-links">
            <i className="bi bi-caret-right-fill"></i> Fresh Cream Cakes
          </a>
          <a href="" className="footer-links">
            <i className="bi bi-caret-right-fill"></i> Christmas Cakes
          </a>
          <a href="" className="footer-links">
            <i className="bi bi-caret-right-fill"></i> Wedding & Baby
          </a>
          <a href="" className="footer-links">
            <i className="bi bi-caret-right-fill"></i> Specialty
          </a>
        </div>
        <div className="col-12 col-md">
          <h3>Quick Links</h3>
          <a href="" className="footer-links">
            <i className="bi bi-caret-right-fill"></i> About Us
          </a>
          <a href="" className="footer-links">
            <i className="bi bi-caret-right-fill"></i> Deliveries
          </a>
          <a href="" className="footer-links">
            <i className="bi bi-caret-right-fill"></i> Catering
          </a>
          <a href="" className="footer-links">
            <i className="bi bi-caret-right-fill"></i> FAQs
          </a>
          <a href="" className="footer-links">
            <i className="bi bi-caret-right-fill"></i> Allergens
          </a>
          <a href="" className="footer-links">
            <i className="bi bi-caret-right-fill"></i> Custom Orders
          </a>
          <a href="" className="footer-links">
            <i className="bi bi-caret-right-fill"></i> Policy
          </a>
          <a href="" className="footer-links">
            <i className="bi bi-caret-right-fill"></i> Send a Cake
          </a>
        </div>
        <div className="contact col-12 col-md">
          <h3>Moore Shopping Center Branch</h3>
          {openingHours}
        </div>
        <div className="contact col-12 col-md">
          <h3>Kilkullen Road Branch</h3>
          {openingHours}
        </div>
        <div className="contact col-12 col-md">
          <h3>Loughlane View Branch</h3>
          {openingHours}
        </div>
      </div>
    </footer>
  );
}
