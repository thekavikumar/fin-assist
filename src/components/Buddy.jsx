/* eslint-disable */
import React from "react";
import email from "./email.png";

function Buddy() {
  return (
    <>
      <div className="container">
        <h1>Subscribe to Our Newsletter</h1>
        <div className="main-class">
          <div className="details">
            <h2>✨ You will be notified about all the events.</h2>
            <h2>✨ You will be given access to the paid features.</h2>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
            />
            <button type="submit">Sign Up</button>
          </div>
          <img src={email} alt="logo" className="emailicon" />
        </div>
      </div>
    </>
  );
}

export default Buddy;
/* eslint-enable */
