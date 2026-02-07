"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "../public/style/cal.css";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


const Calculator = () => {
  // State for all selections
  const [bedrooms, setBedrooms] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [livingRoomSize, setLivingRoomSize] = useState("small");
  const [kitchenSize, setKitchenSize] = useState("small");
  const [frequency, setFrequency] = useState("once");
  const [hasPets, setHasPets] = useState(false);
  const [extras, setExtras] = useState({
    garden: false,
    garage: false,
    gym: false
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const [showInvoice, setShowInvoice] = useState(false);

  // Price calculations
  const calculateCost = () => {
    const bedroomCost = bedrooms * 100;
    const bathroomCost = bathrooms * 95;
    
    const livingRoomCost = 
      livingRoomSize === "small" ? 50 : 
      livingRoomSize === "medium" ? 70 : 90;
    
    const kitchenCost = 
      kitchenSize === "small" ? 50 : 
      kitchenSize === "medium" ? 70 : 90;
    
    const petsCost = hasPets ? 100 : 0;
    
    const extrasCost = 
      (extras.garden ? 50 : 0) + 
      (extras.garage ? 50 : 0) + 
      (extras.gym ? 50 : 0);
    
    const frequencyMultiplier = 
      frequency === "once" ? 1 : 
      frequency === "weekly" ? 4 : 1; 
    
    const subtotal = 
      (bedroomCost + bathroomCost + livingRoomCost + kitchenCost + petsCost + extrasCost) * 
      frequencyMultiplier;
    
    return {
      bedroomCost,
      bathroomCost,
      livingRoomCost,
      kitchenCost,
      petsCost,
      extrasCost,
      frequencyMultiplier,
      subtotal
    };
  };

  const costs = calculateCost();

  const handleExtraChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExtras({
      ...extras,
      [e.target.name]: e.target.checked
    });
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowInvoice(true);
    const invoiceData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      bedrooms,
      bathrooms,
      livingRoomSize,
      kitchenSize,
      hasPets,
      extras,
      frequency,
      ...costs,
    };
   
    localStorage.setItem("invoiceData", JSON.stringify(invoiceData));
    
    window.open("../components/InvoicePage", "_blank"); 
  };

  const handleDownloadInvoice = () => {
    const invoiceHtml = `
      <html>
        <head>
          <title>Invoice - Clean Mate</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 40px; }
            h2, h3 { color: #28a745; }
            ul { list-style: none; padding: 0; }
            li { margin-bottom: 8px; }
            .footer { margin-top: 40px; color: #888; font-size: 0.9rem; }
          </style>
        </head>
        <body>
          <h2>Invoice for ${formData.name}</h2>
          <p>Email: ${formData.email}</p>
          <p>Phone: ${formData.phone}</p>
          <h3>Service Breakdown:</h3>
          <ul>
            <li>Bedrooms: ${bedrooms} × Ghc100 = Ghc${costs.bedroomCost}</li>
            <li>Bathrooms: ${bathrooms} × Ghc95 = Ghc${costs.bathroomCost}</li>
            <li>Living Room (${livingRoomSize}): Ghc${costs.livingRoomCost}</li>
            <li>Kitchen (${kitchenSize}): Ghc${costs.kitchenCost}</li>
            ${hasPets ? `<li>Pets: Ghc${costs.petsCost}</li>` : ""}
            ${extras.garden ? `<li>Garden: Ghc50</li>` : ""}
            ${extras.garage ? `<li>Garage: Ghc50</li>` : ""}
            ${extras.gym ? `<li>Gym: Ghc50</li>` : ""}
            <li>Frequency: ${frequency} (×${costs.frequencyMultiplier})</li>
          </ul>
          <h3>Total Cost: Ghc${costs.subtotal}</h3>
          <div class="footer">
            &copy; ${new Date().getFullYear()} Clean Mate. All rights reserved.
          </div>
          <script>
            window.onload = function() { window.print(); }
          </script>
        </body>
      </html>
    `;
    const newWindow = window.open('', '_blank');
    if (newWindow) {
      newWindow.document.write(invoiceHtml);
      newWindow.document.close();
    }
  };

  return (
    <>
      <div className="home-text">
        <h1>Please tell us about your home.</h1>
      </div>

      <div className="bedroom">
        <div className="bedroom-content">
          <div className="image-container">
            <Image 
              className="bed-image"
              src="/bedroom2.png" 
              alt="Bedroom" 
              width={600} 
              height={300} 
              priority 
            />
            <div className="image-overlay">
              <h3>How many bedrooms do you have:</h3>
            </div>
          </div>
          
          <div className="slider-container">
            <input
              type="range"
              min="0"
              max="10"
              value={bedrooms}
              onChange={(e) => setBedrooms(parseInt(e.target.value))}
            />
            <p>Number of bedrooms: {bedrooms} (Cost: Ghc{bedrooms * 100})</p>
          </div>
        </div>
      </div>

      <div className="bathroom">
        <div className="bathroom-content">     
          <div className="image-container">
            <Image 
              className="bath-image"
              src="/bathroom2.png" 
              alt="Bathroom" 
              width={600} 
              height={300} 
              priority 
            />
            <div className="image-overlay">
              <h3>How many bathrooms do you have:</h3>
            </div>
          </div>    
          <div className="slider-container">
            <input
              type="range"
              min="0"
              max="10"
              value={bathrooms}
              onChange={(e) => setBathrooms(parseInt(e.target.value))}
            />
            <p>Number of bathrooms: {bathrooms} (Cost: Ghc{bathrooms * 95})</p>
          </div>
        </div>
      </div>

      <div className="services">
        <div className="living">
          <h3>What is the size of your living room?</h3>
          <select 
            className="selection"
            value={livingRoomSize}
            onChange={(e) => setLivingRoomSize(e.target.value)}
          >
            <option value="small">Small (Ghc50)</option>
            <option value="medium">Medium (Ghc70)</option>
            <option value="large">Large (Ghc90)</option>
          </select>
          <p>Current cost: Ghc{
            livingRoomSize === "small" ? 50 : 
            livingRoomSize === "medium" ? 70 : 90
          }</p>
        </div>

        <div className="kitchen">
          <h3>What is the size of your kitchen?</h3>
          <select 
            className="selection"
            value={kitchenSize}
            onChange={(e) => setKitchenSize(e.target.value)}
          >
            <option value="small">Small (Ghc50)</option>
            <option value="medium">Medium (Ghc70)</option>
            <option value="large">Large (Ghc90)</option>
          </select>
          <p>Current cost: Ghc{
            kitchenSize === "small" ? 50 : 
            kitchenSize === "medium" ? 70 : 90
          }</p>
        </div>

        <div className="frequency">
          <h3>How many times should we clean your home?</h3>
          <select 
            className="selection"
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
          >
            <option value="once">Once</option>
            <option value="weekly">Weekly (4x cost)</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
      </div>

      <div className="pet">
        <div className="pet-content">
          <h3>Do you have pets?</h3>
          <label>
            <input 
              type="checkbox"
              checked={hasPets}
              onChange={() => setHasPets(!hasPets)}
            />
            Yes (Ghc100)
          </label>
          <p>Current cost: Ghc{hasPets ? 100 : 0}</p>
        </div>
      </div>

      <div className="extra">
        <div className="extra-content">
          <h3>Should we add these services as well? (Ghc50 each)</h3>
          <label className="label">
            <input 
              type="checkbox"
              name="garden"
              checked={extras.garden}
              onChange={handleExtraChange}
            />
            Garden
          </label>
          <label className="label">
            <input 
              type="checkbox"
              name="garage"
              checked={extras.garage}
              onChange={handleExtraChange}
            />
            Garage
          </label>
          <label>
            <input 
              type="checkbox"
              name="gym"
              checked={extras.gym}
              onChange={handleExtraChange}
            />
            Gym
          </label>
          <p>Current extras cost: Ghc{
            (extras.garden ? 50 : 0) + 
            (extras.garage ? 50 : 0) + 
            (extras.gym ? 50 : 0)
          }</p>
        </div>
      </div>

      <div className="cost">
        <h2>Final Cost: Ghc{costs.subtotal}</h2>
      </div>

      <form className="form mx-auto w-full max-w-md px-4 md:px-0" onSubmit={handleSubmit}>
        <Card>
          <CardHeader className="p-4 md:p-6">
            <CardTitle className="text-base md:text-lg">Fill this form to get your Invoice.</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 p-4 pt-0 md:p-6 md:pt-0">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleFormChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleFormChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleFormChange}
                required
              />
            </div>

            <Button asChild className="w-full">
              <Link
                href="/components/InvoicePage"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (!formData.name || !formData.email || !formData.phone) {
                    e.preventDefault();
                    alert("Please fill in all form fields.");
                  } else {
                    const invoiceData = {
                      name: formData.name,
                      email: formData.email,
                      phone: formData.phone,
                      bedrooms,
                      bathrooms,
                      livingRoomSize,
                      kitchenSize,
                      hasPets,
                      extras,
                      frequency,
                      ...costs,
                    };
                    localStorage.setItem("invoiceData", JSON.stringify(invoiceData));
                  }
                }}
              >
                Generate Invoice
              </Link>
            </Button>
          </CardContent>
        </Card>
      </form>

      {showInvoice && (
        <>
          <div className="invoice">
            <h2>Invoice for {formData.name}</h2>
            <p>Email: {formData.email}</p>
            <p>Phone: {formData.phone}</p>
            <h3>Service Breakdown:</h3>
            <ul>
              <li>Bedrooms: {bedrooms} × Ghc100 = Ghc{costs.bedroomCost}</li>
              <li>Bathrooms: {bathrooms} × Ghc95 = Ghc{costs.bathroomCost}</li>
              <li>Living Room ({livingRoomSize}): Ghc{costs.livingRoomCost}</li>
              <li>Kitchen ({kitchenSize}): Ghc{costs.kitchenCost}</li>
              {hasPets && <li>Pets: Ghc{costs.petsCost}</li>}
              {extras.garden && <li>Garden: Ghc50</li>}
              {extras.garage && <li>Garage: Ghc50</li>}
              {extras.gym && <li>Gym: Ghc50</li>}
              <li>Frequency: {frequency} (×{costs.frequencyMultiplier})</li>
            </ul>
            <h3>Total Cost: Ghc{costs.subtotal}</h3>
            <button onClick={handleDownloadInvoice}>Download Invoice</button>
            <button onClick={() => setShowInvoice(false)}>Close Invoice</button>
          </div>
          <footer className="footer">
            &copy; {new Date().getFullYear()} Clean Mate. All rights reserved.
          </footer>
        </>
      )}
    </>
  );
};

export default Calculator;