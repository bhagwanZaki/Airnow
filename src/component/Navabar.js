import React from "react";

// custom css
import "../css/navbar.css";

// imgs
import bg from "../assets/img/helpCenter.png"

// icons
import logo from "../assets/logo/logo.png";
import dashboard from "../assets/logo/dashboard.png";
import money from "../assets/logo/money.png";
import web from "../assets/logo/www.png";
import affiliate from "../assets/logo/affiliate.png";
import tickets from "../assets/logo/tickets.png";
import faq from "../assets/logo/faq.png";

function Navabar() {
  const NavItem = ({ icon, label }) => {
    return (
      <div className="navLink">
        <img src={icon} className="navItemLogo" alt="nav-item-logo" /> {label}
      </div>
    );
  };
  return (
    <div className="navSec">
      <div className="navDiv">
        <div className="navHeader">
          <img src={logo} className="logo" alt="logo" />
          <h3>Airnow</h3>
        </div>
        <div className="navLinks">
          <div className="navSecHead">MANAGE</div>
          <NavItem icon={dashboard} label="Proxy" />
          <NavItem icon={money} label="Balance" />
          <NavItem icon={web} label="Online check" />
          <NavItem icon={affiliate} label="Affiliate system" />
          <div className="navSecHead">SUPPORT</div>
          <NavItem icon={tickets} label="Tickets" />
          <NavItem icon={faq} label="FAQ" />
        </div>
      </div>
      <div className="helpCenterContainer">
        <h2>
          Help Center
        </h2>
        <h3>
          Visit out help center
        </h3>
        <button className="btn">
          Start
        </button>
        <img src={bg} className="bg" alt="help-center" />
      </div>
    </div>
  );
}

export default Navabar;
