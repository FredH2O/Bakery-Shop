import React from "react";

export default function QuickLinks(props) {
  return (
    <>
      <h3>{props.title}</h3>
      {props.quickLinks.map((link, index) => (
        <a key={index} href={link.href} className="footer-links">
          <i className="bi bi-caret-right-fill"></i> {link.text}
        </a>
      ))}
    </>
  );
}
