"use client";
import "../public/style/footer.css";
import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          {/* Quick Links Section */}
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-list">
            <li><a href="#" className="footer-link">Home</a></li>
            <li><a href="#" className="footer-link">About Us</a></li>
            <li><a href="#" className="footer-link">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          {/* Our Services Section */}
          <h3 className="footer-title">Our Services</h3>
          <ul className="footer-list">
            <li><a href="#" className="footer-link">Home Cleaning</a></li>
            <li><a href="#" className="footer-link">Office Cleaning</a></li>
            <li><a href="#" className="footer-link">Deep Cleaning</a></li>
            <li><a href="#" className="footer-link">Move In/Out Cleaning</a></li>          </ul>
        </div>

        <div className="footer-section">
          {/* Contact Us Section */}
          <h3 className="footer-title">Contact Us</h3>
          <ul className="footer-list">
            <li>
              <Image src="/location.gif" alt="Location Icon" width={20} height={20} priority />
              Accra Digital Center
            </li>
            <li>
              <Image src="/phone.png" alt="Phone Icon" width={20} height={20} />
              +233 206 837 999
            </li>
            <li>
              <Image src="/email.gif" alt="Email Icon" width={20} height={20} />
              <a href="mailto:info@cleanmate.com" className="footer-link">info@cleanmate.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 CleanMate. All rights reserved.</p>
        <div className="footer-policies">
          <a href="#" className="footer-link">Privacy Policy</a>
          <a href="#" className="footer-link">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;