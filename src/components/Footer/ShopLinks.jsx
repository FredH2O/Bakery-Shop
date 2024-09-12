import React from "react";

export default function ShopLinks(props) {
  return (
    <React.Fragment>
      <h3>{props.title}</h3>
      {props.shopLinks.map((link, index) => (
        <a key={index} href={link.href} className="footer-links">
          <i className="bi bi-caret-right-fill"></i>
          {link.text}
        </a>
      ))}
    </React.Fragment>
  );
}
