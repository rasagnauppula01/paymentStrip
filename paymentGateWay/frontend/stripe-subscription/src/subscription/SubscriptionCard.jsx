import React from "react";
import axios from "axios";

const handlePayment = async (duration, pkg) => {
  console.log({ duration, pkg });
  const response = await axios({
    method: "post",
    url: `http://localhost:8080/create-subscription`,
    data: {
      plan_name: pkg,
      duration: duration,
    },
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log({data: response.data});
  
  if (response.data) {
    window.location.href = response.data?.session?.url;
  }
};

const SubscriptionCard = ({
  type,
  price,
  duration,
  features,
  bgColor,
  pkg,
}) => {
  return (
    <div className="card" style={{ backgroundColor: bgColor }}>
      <h2 className="card-type">{type}</h2>
      <h3 className="card-price">
      ₹{price} <span className="card-duration">/{duration}</span>
      </h3>
      <ul className="card-features">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button
        onClick={() => handlePayment(duration, pkg)}
        className="card-button"
      >
        Choose Plan
      </button>
    </div>
  );
};

export default SubscriptionCard;
