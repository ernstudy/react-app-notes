import React from "react";

const year = new Date().getFullYear();


function Footer() {
  return (
    <footer>
      <p>&copy; {year} | Ernstudy</p>
    </footer>
  );
}

export default Footer;
