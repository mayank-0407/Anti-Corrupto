import React from "react";
import { Button } from "@material-tailwind/react";

function Traffic() {
  return (
    <div className="h-100% mt-10">
      <div className="text-2xl m-5">Traffic and Vehicles docs.</div>
      <div className="flex flex-row justify-center items-center">
        <div
          className=" h-96 w-8/12 flex flex-row justify-center items-top rounded-2xl text-white opacity-95"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1517953377824-516f2dca803b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
          }}
        >
          <ul className=" opacity-100">
            <li className="text-2xl m-10">Documents</li>
            <li>
              Find your respected documentations at Digilocker in case needed
            </li>

            <div className="flex w-max gap-4  mt-5 ml-40">
              <a href="https://www.digilocker.gov.in/" className=" ">
                <Button ripple={true} color="white">
                  Digilocker
                </Button>
              </a>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Traffic;
