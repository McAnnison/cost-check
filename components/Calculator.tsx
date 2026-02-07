"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "../public/style/cal.css";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";


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

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
            <div className="w-full max-w-sm">
              <Slider
                value={[bedrooms]}
                min={0}
                max={10}
                step={1}
                onValueChange={(value) => setBedrooms(value[0] ?? 0)}
              />
            </div>
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
            <div className="w-full max-w-sm">
              <Slider
                value={[bathrooms]}
                min={0}
                max={10}
                step={1}
                onValueChange={(value) => setBathrooms(value[0] ?? 0)}
              />
            </div>
            <p>Number of bathrooms: {bathrooms} (Cost: Ghc{bathrooms * 95})</p>
          </div>
        </div>
      </div>

      <div className="services">
        <div className="living">
          <h3>What is the size of your living room?</h3>
          <Select value={livingRoomSize} onValueChange={setLivingRoomSize}>
            <SelectTrigger className="max-w-[220px]">
              <SelectValue placeholder="Select size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="small">Small (Ghc50)</SelectItem>
              <SelectItem value="medium">Medium (Ghc70)</SelectItem>
              <SelectItem value="large">Large (Ghc90)</SelectItem>
            </SelectContent>
          </Select>
          <p>Current cost: Ghc{
            livingRoomSize === "small" ? 50 : 
            livingRoomSize === "medium" ? 70 : 90
          }</p>
        </div>

        <div className="kitchen">
          <h3>What is the size of your kitchen?</h3>
          <Select value={kitchenSize} onValueChange={setKitchenSize}>
            <SelectTrigger className="max-w-[220px]">
              <SelectValue placeholder="Select size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="small">Small (Ghc50)</SelectItem>
              <SelectItem value="medium">Medium (Ghc70)</SelectItem>
              <SelectItem value="large">Large (Ghc90)</SelectItem>
            </SelectContent>
          </Select>
          <p>Current cost: Ghc{
            kitchenSize === "small" ? 50 : 
            kitchenSize === "medium" ? 70 : 90
          }</p>
        </div>

        <div className="frequency">
          <h3>How many times should we clean your home?</h3>
          <Select value={frequency} onValueChange={setFrequency}>
            <SelectTrigger className="max-w-[220px]">
              <SelectValue placeholder="Select frequency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="once">Once</SelectItem>
              <SelectItem value="weekly">Weekly (4x cost)</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="pet">
        <div className="pet-content">
          <h3>Do you have pets?</h3>
          <div className="flex items-center gap-3">
            <Checkbox
              id="hasPets"
              checked={hasPets}
              onCheckedChange={(checked) => setHasPets(checked === true)}
            />
            <Label htmlFor="hasPets">Yes (Ghc100)</Label>
          </div>
          <p>Current cost: Ghc{hasPets ? 100 : 0}</p>
        </div>
      </div>

      <div className="extra">
        <div className="extra-content">
          <h3>Should we add these services as well? (Ghc50 each)</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Checkbox
                id="extraGarden"
                checked={extras.garden}
                onCheckedChange={(checked) =>
                  setExtras((prev) => ({ ...prev, garden: checked === true }))
                }
              />
              <Label htmlFor="extraGarden">Garden</Label>
            </div>
            <div className="flex items-center gap-3">
              <Checkbox
                id="extraGarage"
                checked={extras.garage}
                onCheckedChange={(checked) =>
                  setExtras((prev) => ({ ...prev, garage: checked === true }))
                }
              />
              <Label htmlFor="extraGarage">Garage</Label>
            </div>
            <div className="flex items-center gap-3">
              <Checkbox
                id="extraGym"
                checked={extras.gym}
                onCheckedChange={(checked) =>
                  setExtras((prev) => ({ ...prev, gym: checked === true }))
                }
              />
              <Label htmlFor="extraGym">Gym</Label>
            </div>
          </div>
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

      <form className="form mx-auto w-full max-w-md px-4 md:px-0" onSubmit={(e) => e.preventDefault()}>
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
                href="/invoice"
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
    </>
  );
};

export default Calculator;