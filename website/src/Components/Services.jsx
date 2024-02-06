import React from "react";
import { Scard } from "./Scard";

function Services() {
  return (
    <div className="h-100%">
      <div id="S" className="top-0">
        -
      </div>
      <div className="text-3xl pt-20 ">Services ;)</div>
      <div className="flex flex-wrap p-16 justify-center items-center">
        <Scard
          title="Traffic"
          path={"/traffic"}
          images="https://source.unsplash.com/Sz1aoOyeIFE/800x600"
        />
        <Scard
          title="Anti Corruption"
          images={
            "https://images.unsplash.com/photo-1616338250254-d50fee9616d8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
        <Scard
          title="Land Rregistory"
          images={
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
        <Scard
          title="Voting"
          images={
            "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
      </div>
    </div>
  );
}

export default Services;
