import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Success = () => {
  const queryParams = new URLSearchParams(location.search);
  const sessionId = queryParams.get("session_id");

  const savePayment = async () => {
    const response = await axios({
      method: "POST",
      url: "http://localhost:8080/save-payment",
      data: { session_id: sessionId },
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log({ data: response.data });
  };

  useEffect(() => {
    if (sessionId) {
      savePayment();
    }
  }, [sessionId]);

  return (
    <div className="success-payment-container">
      <div className="success-card">
        ✅<h1 className="success-title">Payment Successful!</h1>
        <p className="success-message">
          Thank you for your purchase! Your payment has been processed
          successfully.
        </p>
        <Link to="/subscriptions" className="success-button">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default Success;
