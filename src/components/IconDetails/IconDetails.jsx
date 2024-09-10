import React from "react";
import { ReactComponent as CertificateIcon } from "../../icons/certificate.svg";
import { ReactComponent as DeliveryIcon } from "../../icons/delivery.svg";
import { ReactComponent as CalendarIcon } from "../../icons/calendar.svg";
import { ReactComponent as AwardIcon } from "../../icons/award.svg";
import "./IconDetails.css";

export default function IconDetails() {
  return (
    <div className="grid text-center">
      <div className="icon-container g-col-6 g-col-md-4">
        <CertificateIcon className="icon" />
        <h4>Certified Bakers</h4>
      </div>
      <div className="icon-container g-col-6 g-col-md-4">
        <DeliveryIcon className="icon" />
        <h4>Fast Delivery</h4>
      </div>
      <div className="icon-container g-col-6 g-col-md-4">
        <CalendarIcon className="icon" />
        <h4>20+ Years Business</h4>
      </div>
      <div className="icon-container g-col-6 g-col-md-4">
        <AwardIcon className="icon" />
        <h4>Award Winning Cakes</h4>
      </div>
    </div>
  );
}
