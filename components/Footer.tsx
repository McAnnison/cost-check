import React from 'react';
import "../public/style/footer.css";
import Image from 'next/image'; 

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>CleanMate is dedicated to providing top-notch cleaning services to make your home sparkle.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><Image src="/icons8-facebook-30.png" alt="Facebook logo" width={50} height={50} /></a>
            <a href="#"><Image src="/icons8-x-50.png" alt="Twitter logo" width={50} height={50} /></a>
            <a href="#"><Image src="/icons8-instagram-50.png" alt="Instagram logo" width={50} height={50} /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 CleanMate. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;