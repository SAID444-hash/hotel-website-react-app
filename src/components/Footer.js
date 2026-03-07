import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-5">
      <div className="container">
        <p className="mb-1">&copy; {new Date().getFullYear()} Luxury Stay Hotel. All rights reserved.</p>
        <p>
          Follow us:{" "}
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-warning mx-1">Facebook</a>|
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-warning mx-1">Instagram</a>|
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-warning mx-1">Twitter</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;