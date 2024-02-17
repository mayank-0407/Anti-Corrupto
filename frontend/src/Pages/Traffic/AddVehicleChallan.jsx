import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";

const AddVehicleChallan = () => {
  const [issueDate, setIssueDate] = useState("");
  const [amount, setAmount] = useState("");
  const [reason, setReason] = useState("");
  const [status, setStatus] = useState("");

  const navigate = useNavigate();

  const handleAddChallan = (e) => {
    e.preventDefault();
    const challanData = { issueDate, amount, reason, status };
    console.log("Challan data:", challanData);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex-grow">
        <div className="flex justify-center my-20 py-7">
          <div className="max-w-md w-full bg-white rounded-xl shadow-xl p-8 mr-5">
            <h1 className="text-3xl font-bold mb-4 text-center">Add Challan</h1>
            <form onSubmit={handleAddChallan} className="mb-4">
              <div className="mb-2">
                <label htmlFor="issueDate" className="block mb-2 text-left font-semibold">
                  Issue Date
                </label>
                <input
                  type="date"
                  id="issueDate"
                  name="issueDate"
                  value={issueDate}
                  onChange={(e) => setIssueDate(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-xl mb-2 text-sm bg-gray-200"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="amount" className="block mb-2 text-left font-semibold">
                  Amount
                </label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter Amount"
                  className="w-full p-2 border border-gray-300 rounded-xl mb-2 text-sm bg-gray-200"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="reason" className="block mb-2 text-left font-semibold">
                  Reason
                </label>
                <input
                  type="text"
                  id="reason"
                  name="reason"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  placeholder="Enter Reason"
                  className="w-full p-2 border border-gray-300 rounded-xl mb-2 text-sm bg-gray-200"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="status" className="block mb-2 text-left font-semibold">
                  Status
                </label>
                <input
                  type="text"
                  id="status"
                  name="status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  placeholder="Enter Status"
                  className="w-full p-2 border border-gray-300 rounded-xl mb-2 text-sm bg-gray-200"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-800 text-white p-2 w-full rounded-xl"
              >
                Add Challan
              </button>
            </form>
            <div className="flex items-center justify-center">
              <button
                onClick={() => navigate("/")}
                className="text-blue-800"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-end">
        <Footer />
      </div>
    </div>
  );
};

export default AddVehicleChallan;
