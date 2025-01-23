import React from "react";
import { Link } from "react-router-dom";
import img from "../src/assets/img.webp"
export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        height: "90vh",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "black",
        backgroundImage:{img},
        backgroundColor:"lightblue"
      }}
    >
      <h1>Payment Gateway Integration for Premium Subscriptions</h1>
      <Link
        style={{ color: "black", textDecoration: "underline" }}
        to="/subscriptions"
      >
        Click here for Subscriptions Plans
      </Link>
    </div>
  );
}
