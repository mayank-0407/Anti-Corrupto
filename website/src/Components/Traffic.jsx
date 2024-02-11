import React from "react";
import { Button, Navbar } from "@material-tailwind/react";
import Header from "./Navbar";
import Slider from "./Slide";
import ReactDOM from "react-dom";

function Traffic() {
  function addVehicle() {
    const imga = prompt(`provide Image`);
    const noPlate = prompt(`enter number plate`);
    const typ = prompt(`enter type of vehicle`);
    const newV = <Slider imge={imga} vehicles={typ} />;

    const tempDiv = document.createElement("div");
    ReactDOM.render(newV, tempDiv);

    // Append the rendered Slider component to the element with id "ve"
    document.getElementById("ve").appendChild(tempDiv.firstChild);
  }
  return (
    <>
      <Header />
      <div className="h-100% mt-10 ">
        <div className="text-2xl mt-5 mb-5 bg-black text-white">
          Traffic and Vehicle's docs.
        </div>
        <div className="m-20">
          Find detail about your vehicles and informations about paid and
          pending challans (if there)
        </div>
      </div>
      <div className=" h-100% flex flex-row m-20 space-x-10">
        <img
          className=" object-cover rounded-lg shadow-lg opacity-85 w-[30%]"
          src="https://images.unsplash.com/photo-1579882611867-7303ce717f2d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="n"
        />
        <div className="w-[60%]">
          <ul className=" space-y-12 mt-10">
            <li className=" text-xl underline">How to use</li>
            <li>
              You can check details about your vehicles by selecting the
              vehicles card and you can also add new vehicle to your vehicles
              list. For checking your paid and pending challans you can select
              challan section and can raise query if there is any issue related
              to it
            </li>
            <li></li>
          </ul>
        </div>
      </div>
      <div className="text-2xl  text-white mt-32 w-full flex flex-row  justify-center items-center">
        <a className="bg-black pl-10 pr-10 rounded-2xl">Your vehicles</a>
      </div>
      <div className="flex flex-col justify-center items-center mt-10">
        <div className="w-[60%]">
          This section consist of Vehicles rejistered on your name ,it consist
          of Vehicle's documentations and informations about challan on
          particular vehicle (if there) you should be rechecking the challans
          before paying date passes.You can also add and register new vehicle to
          your profile.
        </div>
        <br />
        <div className="text-3xl">⇩⇩⇩⇩⇩</div>
        <div>
          <Button
            variant="outlined"
            className=" shadow-2xl "
            onClick={addVehicle}
          >
            Add Vehicle <a className="text-3xl">+</a>
          </Button>
        </div>
      </div>
      <div
        id="ve"
        className="flex flex-wrap gap-10 justify-center items-center mt-32"
      >
        <Slider
          imge="https://images.unsplash.com/photo-1521657142174-c7353dc830cd?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhciUyMGZyb250fGVufDB8fDB8fHww"
          vehicles="CAR"
        />
        <Slider
          imge="https://images.unsplash.com/photo-1589963575227-08d8ea840e85?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          vehicles="BIKE"
        />
        <Slider
          imge="https://images.unsplash.com/photo-1584113605413-3ecd8d36a083?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          vehicles="JEEP"
        />
        <Slider
          imge="https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          vehicles="CAR"
        />
      </div>
    </>
  );
}

export default Traffic;
