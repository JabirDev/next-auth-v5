import Navbar from "@/components/navbar";
import React from "react";

export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full flex flex-col h-screen">
      <Navbar />
      {children}
    </div>
  );
}
