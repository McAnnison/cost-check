"use client";
import React, { useState, useRef } from "react";
import "../public/style/cal.css";

const Calculator: React.FC = () => {
  // State for bedrooms
  const [bedrooms, setBedrooms] = useState<number>(4);
  const [isDraggingBedrooms, setIsDraggingBedrooms] = useState<boolean>(false);
  const bedroomsScrollRef = useRef<HTMLDivElement>(null);

  // State for bathrooms
  const [bathrooms, setBathrooms] = useState<number>(2);
  const [isDraggingBathrooms, setIsDraggingBathrooms] = useState<boolean>(false);
  const bathroomsScrollRef = useRef<HTMLDivElement>(null);

  // State for living rooms
  const [livingRooms, setLivingRooms] = useState<number>(1);
  const [isDraggingLivingRooms, setIsDraggingLivingRooms] = useState<boolean>(false);
  const livingRoomsScrollRef = useRef<HTMLDivElement>(null);

  // State for kitchen size
  const [kitchenSize, setKitchenSize] = useState<string>("");

  // State for master bathroom
  const [masterBathroom, setMasterBathroom] = useState<string>("");

  // State for pets
  const [hasPets, setHasPets] = useState<boolean>(false);

  // State for service type
  const [serviceType, setServiceType] = useState<string>("");

  // State for frequency
  const [frequency, setFrequency] = useState<string>("");

  // State for total cost
  const [totalCost, setTotalCost] = useState<number>(0);

  // State for invoice details
  const [invoiceDetails, setInvoiceDetails] = useState<string>("");

  // State for user details
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  // Draggable scroll handlers
  const handleMouseDown = (setIsDragging: React.Dispatch<React.SetStateAction<boolean>>) => {
    setIsDragging(true);
  };

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    isDragging: boolean,
    scrollRef: React.RefObject<HTMLDivElement | null>,
    setValue: React.Dispatch<React.SetStateAction<number>>
  ) => {
    if (isDragging && scrollRef.current) {
      const scrollBarRect = scrollRef.current.getBoundingClientRect();
      const offsetX = e.clientX - scrollBarRect.left;
      const scrollBarWidth = scrollRef.current.clientWidth;
      const newValue = Math.round((offsetX / scrollBarWidth) * 10) + 1; // 1-10 range
      setValue(Math.min(Math.max(newValue, 1), 10)); // Clamp between 1 and 10
    }
  };

  const handleMouseUp = (setIsDragging: React.Dispatch<React.SetStateAction<boolean>>) => {
    setIsDragging(false);
  };

  // Calculate total cost
  const calculateTotalCost = () => {
    let cost = 0;
    let details = "";

    // Bedrooms cost
    const bedroomsCost = bedrooms * 150;
    cost += bedroomsCost;
    details += `Bedrooms (${bedrooms}): Ghc${bedroomsCost}\n`;

    // Bathrooms cost
    const bathroomsCost = bathrooms * 90;
    cost += bathroomsCost;
    details += `Bathrooms (${bathrooms}): Ghc${bathroomsCost}\n`;

    // Living rooms cost
    const livingRoomsCost = livingRooms * 100;
    cost += livingRoomsCost;
    details += `Living Rooms (${livingRooms}): Ghc${livingRoomsCost}\n`;

    // Kitchen size cost
    let kitchenCost = 0;
    switch (kitchenSize) {
      case "small":
        kitchenCost = 90;
        break;
      case "medium":
        kitchenCost = 100;
        break;
      case "large":
        kitchenCost = 150;
        break;
      default:
        kitchenCost = 0;
    }
    cost += kitchenCost;
    details += `Kitchen (${kitchenSize}): Ghc${kitchenCost}\n`;

    // Master bathroom cost
    let masterBathroomCost = 0;
    if (masterBathroom === "shower" || masterBathroom === "bathtub") {
      masterBathroomCost = 50;
    } else if (masterBathroom === "both") {
      masterBathroomCost = 100;
    }
    cost += masterBathroomCost;
    details += `Master Bathroom (${masterBathroom}): Ghc${masterBathroomCost}\n`;

    // Pets cost
    const petsCost = hasPets ? 90 : 0;
    cost += petsCost;
    details += `Pets: Ghc${petsCost}\n`;

    // Service type cost
    let serviceCost = 0;
    switch (serviceType) {
      case "basic":
        serviceCost = 40;
        break;
      case "deep":
        serviceCost = 90;
        break;
      case "move-in":
        serviceCost = 50;
        break;
      default:
        serviceCost = 0;
    }
    cost += serviceCost;
    details += `Service Type (${serviceType}): Ghc${serviceCost}\n`;

    // Additional services cost
    const additionalServicesCost = 50;
    cost += additionalServicesCost;
    details += `Additional Services: Ghc${additionalServicesCost}\n`;

    // Set total cost and invoice details
    setTotalCost(cost);
    setInvoiceDetails(details);
  };

  // Generate printable invoice
  const generateInvoice = () => {
    const invoiceWindow = window.open("", "Invoice", "width=600,height=600");
    if (invoiceWindow) {
      invoiceWindow.document.write(`
        <html>
          <head>
            <title>Invoice</title>
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <style>
              body { font-family: Arial, sans-serif; }
              h1 { color: #333; }
              pre { white-space: pre-wrap; }
            </style>
          </head>
          <body>
            <h1>Invoice</h1>
            <pre>${invoiceDetails}</pre>
            <h2>Total Cost: Ghc${totalCost}</h2>
          </body>
        </html>
      `);
      invoiceWindow.document.close();
    }
  };

  return (
    <div>
      <div className='calculator-text'>
        <p>Cleanmate comes with cost calculator – a unique tool which allows you to easily create
        price estimation forms to give your client idea of the cost of your service.</p>
        <h1>Please tell us about your home</h1>
      </div>
      <div>
        {/* Number of bedrooms */}
        <div className="input-top">
        <div className="input-group-bedroom">
          <label>Number of bedrooms:</label>
          <div
            className="scroll-container"
            ref={bedroomsScrollRef}
            onMouseMove={(e) =>
              handleMouseMove(e, isDraggingBedrooms, bedroomsScrollRef, setBedrooms)
            }
            onMouseUp={() => handleMouseUp(setIsDraggingBedrooms)}
          >
            <div className="scroll-bar">
              <div
                className="scroll-thumb"
                style={{ left: `${((bedrooms - 1) / 9) * 100}%` }} // 1-10 maps to 0%-100%
                onMouseDown={() => handleMouseDown(setIsDraggingBedrooms)}
              />
            </div>
          </div>
          <div className="display">{bedrooms}</div>
        </div>

        {/* Number of bathrooms */}
        <div className="input-group-bathroom">
          <label>Number of bathrooms:</label>
          <div
            className="scroll-container"
            ref={bathroomsScrollRef}
            onMouseMove={(e) =>
              handleMouseMove(e, isDraggingBathrooms, bathroomsScrollRef, setBathrooms)
            }
            onMouseUp={() => handleMouseUp(setIsDraggingBathrooms)}
          >
            <div className="scroll-bar">
              <div
                className="scroll-thumb"
                style={{ left: `${((bathrooms - 1) / 9) * 100}%` }} // 1-10 maps to 0%-100%
                onMouseDown={() => handleMouseDown(setIsDraggingBathrooms)}
              />
            </div>
          </div>
          <div className="display">{bathrooms}</div>
        </div>
        </div>

        {/* Number of living rooms */}
        <div className="input-group-living">
          <label>Number of living rooms:</label>
          <div
            className="scroll-container"
            ref={livingRoomsScrollRef}
            onMouseMove={(e) =>
              handleMouseMove(e, isDraggingLivingRooms, livingRoomsScrollRef, setLivingRooms)
            }
            onMouseUp={() => handleMouseUp(setIsDraggingLivingRooms)}
          >
            <div className="scroll-bar">
              <div
                className="scroll-thumb"
                style={{ left: `${((livingRooms - 1) / 9) * 100}%` }} // 1-10 maps to 0%-100%
                onMouseDown={() => handleMouseDown(setIsDraggingLivingRooms)}
              />
            </div>
          </div>
          <div className="display">{livingRooms}</div>
        </div>

        {/* Size of your kitchen */}
        <div className="input-group-kitchen">
          <label>Size of your kitchen:</label>
          <select
            value={kitchenSize}
            onChange={(e) => setKitchenSize(e.target.value)}
            className="dropdown"
          >
            <option value="">Choose...</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>

        {/* Master bathroom includes */}
        <div className="input-group-master">
          <label>Master bathroom includes:</label>
          <select
            value={masterBathroom}
            onChange={(e) => setMasterBathroom(e.target.value)}
            className="dropdown"
          >
            <option value="">Choose...</option>
            <option value="bathtub">Bathtub</option>
            <option value="shower">Shower</option>
            <option value="both">Both</option>
          </select>
        </div>

        {/* Do you have pets? */}
        <div className="input-group-pet">
          <label>Do you have pets?</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="pets"
                checked={!hasPets}
                onChange={() => setHasPets(false)}
              />
              No
            </label>
            <label>
              <input
                type="radio"
                name="pets"
                checked={hasPets}
                onChange={() => setHasPets(true)}
              />
              Yes
            </label>
          </div>
        </div>

        {/* Service Type */}
        <div className="input-group-service">
          <label>Service Type:</label>
          <select
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
            className="dropdown"
          >
            <option value="">Choose...</option>
            <option value="basic">Basic Cleaning</option>
            <option value="deep">Deep Cleaning</option>
            <option value="move-in">Move-In Cleaning</option>
          </select>
        </div>

        {/* Frequency */}
        <div className="input-group-free">
          <label>Frequency:</label>
          <select
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
            className="dropdown"
          >
            <option value="">Choose...</option>
            <option value="once">Once</option>
            <option value="weekly">Weekly</option>
            <option value="bi-weekly">Bi-Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>

        {/* Calculate Button */}
        <button className="submit-button" onClick={calculateTotalCost}>Calculate</button>

        {/* Total Cost Display */}
        <div className="total-cost">
          <h2>Total Cost: Ghc{totalCost}</h2>
        </div>
      </div>

      {/* Invoice Form */}
      <div className="contact-form">
        <h1>Contact Details</h1>
        <label>Name</label>
          <input type="string" value={name} onChange={(e) => setName(e.target.value)} />
            <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label>Phone</label>
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
          {/* <input type="string"></input>
          <label>Email</label>
          <input type="email"></input>
          <label>Phone</label>
          <input type="tel"></input> */}
        
        </div>
        <div className="check">
          <button className="check-button" onClick={generateInvoice}>Generate Invoice</button>
        </div>
      </div>
  
  );
};

export default Calculator;