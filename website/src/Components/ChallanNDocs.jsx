import React from "react";
import Header from "./Navbar";

function ChallanNDocs() {
  return (
    <>
      <Header />
      <div className="h-100% mt-10 ">
        <div className="text-2xl mt-5 mb-5 bg-black text-white">
          All challans and Personal documentations.
        </div>
        <div className=" h-96 flex flex-row justify-center items-center p-10">
          <div className=" h-3/4 w-2/3">
            <ul className="mt-10">
              <li className=" underline font-bold text-xl ">
                Why Challans and Documents
              </li>
              <br />
              <li className="">
                Challans and documents are essential for legal compliance,
                financial records, and transaction proof. They provide an audit
                trail, ensuring transparency, operational efficiency, and risk
                mitigation. Proper documentation is crucial for regulatory
                adherence, facilitating smooth business operations, minimizing
                disputes, and maintaining accountability across various
                industries.
              </li>
            </ul>
          </div>
          <div className=" h-3/4 w-1/3 ">
            <img
              className="rounded-md"
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="no"
            />
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default ChallanNDocs;
