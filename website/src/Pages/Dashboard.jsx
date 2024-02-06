import React from "react";
import { Carousell } from "../Components/Carousell";
import { Updates } from "../Components/Updates";
import Services from "../Components/Services";

function Dashboard() {
  return (
    <>
      <Carousell />
      <Updates />
      <Services />
      <h1>Dashboard</h1>
    </>
  );
}

export default Dashboard;