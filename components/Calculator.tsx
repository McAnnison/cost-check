'use client';
import React, { useState } from 'react';
import "../public/style/cal.css";
import Image from 'next/image';

const Calculator: React.FC = () => {
  const [rooms, setRooms] = useState<{ [key: string]: { count: number; size: string } }>({
    bedroom: { count: 0, size: 'small' },
    bathroom: { count: 0, size: 'small' },
    kitchen: { count: 0, size: 'small' },
    livingRoom: { count: 0, size: 'small' },
  });
  const [gardening, setGardening] = useState(false);
  const [hasPet, setHasPet] = useState(false); // New state for pet checkbox
  const [totalCost, setTotalCost] = useState(0);

  const roomPrices: { [key: string]: number } = {
    bedroom: 50,
    bathroom: 40,
    kitchen: 60,
    livingRoom: 70,
  };

  const sizeMultipliers: { [key: string]: number } = {
    small: 1,
    medium: 1.5,
    large: 2,
  };

  const handleChange = (room: string, field: string, value: string | number) => {
    setRooms((prevRooms) => ({
      ...prevRooms,
      [room]: { ...prevRooms[room], [field]: value },
    }));
  };

  const calculateTotal = () => {
    let cost = 0;
    for (const room in rooms) {
      const { count, size } = rooms[room];
      cost += count * roomPrices[room] * sizeMultipliers[size];
    }
    if (gardening) cost += 100; // Gardening cost
    if (hasPet) cost += 50; // Additional cost for having a pet
    setTotalCost(cost);
  };

  return (
    <div className="calculator-container">
      <p className="intro-text">
        Cleanmate comes with a cost calculator – a unique tool that allows you to easily create
        price estimation forms to give your clients an idea of the cost of your service.
      </p>
      <h3 className="calculator-title">Please tell us about your home.</h3>

      {/* Bedroom Section */}
      <div className="room-section">
        <Image src="/bedroom2.png" alt="Bedroom" className="room-image" width={500} height={300} />
        <div className="room-details">
          <h3>Bedroom</h3>
          <label>
            Number of Bedrooms:
            <input
              type="number"
              min="0"
              value={rooms.bedroom.count}
              onChange={(e) => handleChange('bedroom', 'count', Number(e.target.value))}
              className="room-input"
            />
          </label>
          <label>
            Size:
            <select
              value={rooms.bedroom.size}
              onChange={(e) => handleChange('bedroom', 'size', e.target.value)}
              className="room-select"
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </label>
      </div>

      <div className='room-section'>
      {/* Bathroom Section */}
        <Image src="/bathroom.jpg" alt="Bathroom" className="room-image" width={500} height={300} />
       
        <div className="room-details">
          <h3>Bathroom</h3>
          <label>
            Number of Bathrooms:
            <input
              type="number"
              min="0"
              value={rooms.bathroom.count}
              onChange={(e) => handleChange('bathroom', 'count', Number(e.target.value))}
              className="room-input"
            />
          </label>
          <label>
            Size:
            <select
              value={rooms.bathroom.size}
              onChange={(e) => handleChange('bathroom', 'size', e.target.value)}
              className="room-select"
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </label>
        </div>
      </div>

      {/* Kitchen Section */}
      <div className="room-section">
        <Image src="/kitchen.png" alt="Kitchen" className="room-image" width={500} height={300} />
        <div className="room-details">
          <h3>Kitchen</h3>
          <label>
            Number of Kitchens:
            <input
              type="number"
              min="0"
              value={rooms.kitchen.count}
              onChange={(e) => handleChange('kitchen', 'count', Number(e.target.value))}
              className="room-input"
            />
          </label>
          <label>
            Size:
            <select
              value={rooms.kitchen.size}
              onChange={(e) => handleChange('kitchen', 'size', e.target.value)}
              className="room-select"
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </label>
        </div>
      </div>

      {/* Living Room Section */}
      <div className="room-section">
        <Image src="/livingroom.png" alt="Living Room" className="room-image" width={500} height={300} />
        <div className="room-details">
          <h3>Living Room</h3>
          <label>
            Number of Living Rooms:
            <input
              type="number"
              min="0"
              value={rooms.livingRoom.count}
              onChange={(e) => handleChange('livingRoom', 'count', Number(e.target.value))}
              className="room-input"
            />
          </label>
          <label>
            Size:
            <select
              value={rooms.livingRoom.size}
              onChange={(e) => handleChange('livingRoom', 'size', e.target.value)}
              className="room-select"
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </label>
        </div>
      </div>

      {/* Additional Services */}
      <div className="service-options">
        <label className="service-label">
          <input
            type="checkbox"
            checked={gardening}
            onChange={() => setGardening(!gardening)}
            className="service-checkbox"
          />
          Gardening ($100)
        </label>
        <label className="service-label">
          <input
            type="checkbox"
            checked={hasPet}
            onChange={() => setHasPet(!hasPet)}
            className="service-checkbox"
          />
          Pet at Home ($50)
        </label>
      </div>

      {/* Calculate Button */}
      <button onClick={calculateTotal} className="calculate-button">
        Calculate Total
      </button>

      {/* Total Cost */}
      {totalCost > 0 && (
        <h3 className="total-cost">Final Cost: ${totalCost}</h3>
      )}
    </div>
    </div>
  );
};

export default Calculator;