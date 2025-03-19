"use client";
import React from 'react';
import Link from 'next/link'; 
import "../public/style/header.css";
const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>CleanMate</h1>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/calculator">Calculator</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;