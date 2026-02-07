"use client";
import React from 'react';
import "../public/style/header.css";
import Image from "next/image";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";



const Header: React.FC = () => {
  return (
    <header className="header">
        <div className="logo">
          <Image src="/broom.png" alt="Logo" width={50} height={50} />  
          <h1>CleanMate</h1>
        </div>
        <div className='background'>
          <Image src="/image.png" alt='back-image' width={1080} height={400}/>
        </div>
        <div className="hero-text hidden md:block">
         <h4>Service Calculator</h4> 
        </div>

        <div className="hero-text2 hidden md:block">
        <p>Cleanmate comes with cost calculator – a unique tool which allows you to easily create
        price estimation forms to give your client idea of the cost of your service.</p>
        </div>

        <div className="md:hidden absolute inset-x-4 bottom-4 z-20">
          <Card className="bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
            <CardHeader className="space-y-1 p-4">
              <CardTitle className="text-base">Service Calculator</CardTitle>
              <CardDescription className="text-xs leading-relaxed">
                Cleanmate comes with cost calculator – a unique tool which allows you to easily create
                price estimation forms to give your client idea of the cost of your service.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
    </header>
  );
};

export default Header;