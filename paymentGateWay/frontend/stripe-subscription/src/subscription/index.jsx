import React from "react";
import SubscriptionCard from "./SubscriptionCard";

const Subscriptions = () => {
  const subscriptionPlans = [
    {
      type: "Standard Monthly",
      price: 500,
      pkg: "standard",
      duration: "month",
      features: ["Feature 1", "Feature 2", "Feature 3"],
      bgColor: "#f6f7fb",
    },
    {
      type: "Standard Yearly",
      price: 5000,
      pkg: "standard",
      duration: "year",
      features: ["Feature 1", "Feature 2", "Feature 3"],
      bgColor: "#d1e7dd",
    },
  ];

  return (
    <div style={{ display: "flex", width: "100%" }}>
      {subscriptionPlans.map((plan, index) => (
        <SubscriptionCard
          key={index}
          type={plan.type}
          pkg={plan.pkg}
          price={plan.price}
          duration={plan.duration}
          features={plan.features}
          bgColor={plan.bgColor}
        />
      ))}
    </div>
  );
};

export default Subscriptions;
