import React from "react";
import "../css/navbar.css";

function Navabar() {
  return (
    <div className="navSec">
      <div className="navHeader">
        <h3>Airnow</h3>
      </div>
      <div className="navLinks">
        <div className="navSecHead">MANAGE</div>
        <div className="navLink">Proxy</div>
        <div className="navLink">Balance</div>
        <div className="navLink">Online check</div>
        <div className="navLink">Affiliate system</div>
        <div className="navSecHead">SUPPORT</div>
        <div className="navLink">Tickets</div>
        <div className="navLink">FAQ</div>
      </div>
    </div>
  );
}

export default Navabar;
