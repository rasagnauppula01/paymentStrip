import { useState } from "react";
import "./App.css";
import Subscriptions from "./subscription";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Success from "./subscription/Success";
import FailurePayment from "./subscription/Fail";

function App() {
  return (
    <div style={{ width: "100%" }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/success" element={<Success />} />
          <Route path="/fail" element={<FailurePayment />} />
          <Route path="/subscriptions" element={<Subscriptions />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
