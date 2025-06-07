"use client";
import { useEffect, useState } from "react";

interface InvoiceData {
  name: string;
  email: string;
  phone: string;
  bedrooms: number;
  bedroomCost: number;
  bathrooms: number;
  bathroomCost: number;
  livingRoomSize: string;
  livingRoomCost: number;
  kitchenSize: string;
  kitchenCost: number;
  hasPets: boolean;
  petsCost?: number;
  extras: {
    garden?: boolean;
    garage?: boolean;
    gym?: boolean;
  };
  frequency: string;
  frequencyMultiplier: number;
  subtotal: number;
}

export default function InvoicePage() {
  const [invoice, setInvoice] = useState<InvoiceData | null>(null);

  useEffect(() => {
    const data = localStorage.getItem("invoiceData");
    if (data) setInvoice(JSON.parse(data));
  }, []);

  if (!invoice) return <div>Loading invoice...</div>;

  return (
    <div style={{ padding: 40, fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ color: "#28a745" }}>Invoice for {invoice.name}</h2>
      <p>Email: {invoice.email}</p>
      <p>Phone: {invoice.phone}</p>
      <h3 style={{ color: "#28a745" }}>Service Breakdown:</h3>
      <ul>
        <li>Bedrooms: {invoice.bedrooms} × Ghc100 = Ghc{invoice.bedroomCost}</li>
        <li>Bathrooms: {invoice.bathrooms} × Ghc95 = Ghc{invoice.bathroomCost}</li>
        <li>Living Room ({invoice.livingRoomSize}): Ghc{invoice.livingRoomCost}</li>
        <li>Kitchen ({invoice.kitchenSize}): Ghc{invoice.kitchenCost}</li>
        {invoice.hasPets ? <li>Pets: Ghc{invoice.petsCost}</li> : null}
        {invoice.extras.garden ? <li>Garden: Ghc50</li> : null}
        {invoice.extras.garage ? <li>Garage: Ghc50</li> : null}
        {invoice.extras.gym ? <li>Gym: Ghc50</li> : null}
        <li>Frequency: {invoice.frequency} (×{invoice.frequencyMultiplier})</li>
      </ul>
      <h3 style={{ color: "#28a745" }}>Total Cost: Ghc{invoice.subtotal}</h3>
      <button onClick={() => window.print()}>Print / Download</button>
      <div style={{ marginTop: 40, color: "#888", fontSize: "0.9rem" }}>
        &copy; {new Date().getFullYear()} Clean Mate. All rights reserved.
      </div>
    </div>
  );
}