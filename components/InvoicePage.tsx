"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("invoiceData");
    if (data) {
      setInvoice(JSON.parse(data));
    }
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return <div className="p-6">Loading invoice...</div>;

  if (!invoice) {
    return (
      <div className="mx-auto w-full max-w-xl p-4 md:p-8">
        <Card>
          <CardHeader>
            <CardTitle>Invoice not found</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              No invoice data was found. Please go back and generate an invoice again.
            </p>
            <Button asChild>
              <Link href="/">Back to calculator</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-2xl p-4 md:p-8">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle>Invoice for {invoice.name}</CardTitle>
          <div className="text-sm text-muted-foreground">
            <div>Email: {invoice.email}</div>
            <div>Phone: {invoice.phone}</div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="text-sm font-medium">Service Breakdown</div>
            <ul className="mt-2 space-y-1 text-sm">
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
          </div>

          <div className="flex items-center justify-between rounded-md bg-muted p-3">
            <div className="text-sm font-medium">Total Cost</div>
            <div className="text-sm font-semibold">Ghc{invoice.subtotal}</div>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <Button onClick={() => window.print()} className="w-full sm:w-auto">
              Print / Download
            </Button>
            <Button asChild variant="outline" className="w-full sm:w-auto">
              <Link href="/">Back</Link>
            </Button>
          </div>

          <div className="pt-4 text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Clean Mate. All rights reserved.
          </div>
        </CardContent>
      </Card>
    </div>
  );
}