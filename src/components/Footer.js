import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container text-center">
        &copy; {new Date().getFullYear()} Luxury Stay Hotel. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;