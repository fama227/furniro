import React from "react";
import "./ShopFeatures.css";
import { FaTrophy, FaShieldAlt, FaShippingFast, FaHeadset } from "react-icons/fa";

const features = [
  {
    icon: <FaTrophy />,
    title: "High Quality",
    text: "crafted from top materials",
  },
  {
    icon: <FaShieldAlt />,
    title: "Warranty Protection",
    text: "Over 2 years",
  },
  {
    icon: <FaShippingFast />,
    title: "Free Shipping",
    text: "Order over 150 $",
  },
  {
    icon: <FaHeadset />,
    title: "24 / 7 Support",
    text: "Dedicated support",
  },
];

function ShopFeatures() {
  return (
    <div className="shop-features">
      {features.map((item, index) => (
        <div className="feature-item" key={index}>
          <div className="feature-icon">{item.icon}</div>
          <div>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShopFeatures;
