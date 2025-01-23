import React from "react";
import { Link } from "react-router-dom";

const FailurePayment = () => {
  return (
    <div className="failure-payment-container">
      <div className="failure-card">
        ❌<h1 className="failure-title">Payment Failed</h1>
        <p className="failure-message">
          Oops! Something went wrong with your payment. Please try again.
        </p>
        <Link to="/" className="failure-button">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default FailurePayment;
