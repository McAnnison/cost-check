'use client';
import React, { useState } from 'react';
import "../public/style/cal.css";

const Calculator: React.FC = () => {
  const [rooms, setRooms] = useState<{ [key: string]: number }>({
    bedroom: 0,
    bathroom: 0,
    kitchen: 0,
    livingRoom: 0,
  });
  const [gardening, setGardening] = useState(false);
  const [totalCost, setTotalCost] = useState(0);

  const roomPrices: { [key: string]: number } = {
    bedroom: 50,
    bathroom: 40,
    kitchen: 60,
    livingRoom: 70,
  };

  const handleChange = (room: string, value: number) => {
    setRooms((prevRooms) => ({ ...prevRooms, [room]: value }));
  };

  const calculateTotal = () => {
    let cost = 0;
    for (const room in rooms) {
      cost += rooms[room] * roomPrices[room];
    }
    if (gardening) cost += 100; // Gardening cost
    setTotalCost(cost);
  };

  return (
    <div className="calculator-container">
      <h1 className="calculator-title">Cleaning Cost Calculator</h1>
      <div className="calculator">
        <div className="room-inputs">
          {Object.keys(roomPrices).map((room) => (
            <div key={room} className="room">
              <label className="room-label">
                {room.charAt(0).toUpperCase() + room.slice(1)}:
              </label>
              <input
                type="number"
                min="0"
                value={rooms[room]}
                onChange={(e) => handleChange(room, Number(e.target.value))}
                className="room-input"
              />
              <span className="room-price">(${roomPrices[room]} per room)</span>
            </div>
          ))}
        </div>
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
        </div>
        <button onClick={calculateTotal} className="calculate-button">
          Calculate Total
        </button>
        {totalCost > 0 && (
          <h3 className="total-cost">Total Cost: ${totalCost}</h3>
        )}
      </div>
    </div>
  );
};

export default Calculator;