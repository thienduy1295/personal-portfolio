import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      Copyright © {new Date().getFullYear()} - Portfolio developed by Duy Cao
    </div>
  );
}

export default Footer;
