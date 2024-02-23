import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import {
  vehiclecontractABI,
  vehiclecontractAddress,
} from "../Utils/ethers/constants";

export const VehicleContext = React.createContext();

const { ethereum } = window;

const VehicleProvider = ({ children }) => {
  const [formData, setformData] = useState({
    vehicleId: "",
    phoneNum: "",
    butDate: "",
    model: "",
    plateNum: "",
    insuranceValidity: "",
    pollutionValidity: "",
  });
  const [currentAccount, setCurrentAccount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [vehicleCount, setVehicleCount] = useState(
    localStorage.getItem("vehicleCount")
  );
  const [transactions, setTransactions] = useState([]);

  const handleChange = (e, name) => {
    setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  const getUserVehiclesfunc = async (tempAddress) => {
    console.log("in checkIfWalletIsConnect Connected:", tempAddress);
    try {
      if (ethereum) {
        // const vehicleContract = createEthereumContract();
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const vehicleContract = new ethers.Contract(
          vehiclecontractAddress,
          vehiclecontractABI,
          signer
        );

        const availableVehicles = await vehicleContract.getUserVehicles(tempAddress);
        console.log("available vehicles : ", availableVehicles);
        const structuredTransactions = availableVehicles.map((transaction) => ({
          vehicleId: transaction.vehicleId,
          phoneNum: transaction.phoneNum,
          buyDate: transaction.buyDate,
          model: transaction.model,
          plateNum: transaction.plateNum,
          insuranceValidity: transaction.insuranceValidity,
          pollutionValidity: transaction.pollutionValidity,
        }));

        console.log(structuredTransactions);
        console.log("In get All Transaction");
        setTransactions(structuredTransactions);
      } else {
        console.log("Ethereum is not present");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfWalletIsConnect = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        getUserVehiclesfunc(accounts[0]);
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfVehiclesExists = async () => {
    try {
      if (ethereum) {
        // const vehicleContract = createEthereumContract();
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const vehicleContract = new ethers.Contract(
          vehiclecontractAddress,
          vehiclecontractABI,
          signer
        );
        console.log(vehicleContract);
        console.log("In Check Transaction");
        const currentvehicleCount = await vehicleContract.getVehicleCount();

        window.localStorage.setItem("vehicleCount", currentvehicleCount);
      }
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setCurrentAccount(accounts[0]);
      // window.location.reload();
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  const addVehicleToBlockchain = async (formData) => {
    try {
      if (window.ethereum) {
        const {
          vehicleId,
          phoneNum,
          buyDate,
          model,
          plateNum,
          insuranceValidity,
          pollutionValidity,
        } = formData;
        // const vehicleContract = createEthereumContract();

        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const vehicleContract = new ethers.Contract(
          vehiclecontractAddress,
          vehiclecontractABI,
          signer
        );
        console.log(vehicleContract);
        const transactionHash = await vehicleContract.addVehicle(
          vehicleId,
          phoneNum,
          buyDate,
          model,
          plateNum,
          insuranceValidity,
          pollutionValidity
        );
        setIsLoading(true);
        console.log(`Loading - ${transactionHash.hash}`);
        await transactionHash.wait();
        console.log(`Success - ${transactionHash.hash}`);
        setIsLoading(false);

        // vehicleContract
        //   .getVehicleCount()
        //   .then((count) => {
        //     console.log("Vehicle Count:", count);
        //   })
        //   .catch((error) => {
        //     console.error("Error fetching vehicle count:", error);
        //   });

        // console.log("after VehicleCount_ : ");

        // setVehicleCount(parseInt(VehicleCount_, 10));
        // return transactionHash.hash;
      } else {
        console.log("No ethereum object");
      }
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  useEffect(() => {
    checkIfWalletIsConnect();
    // checkIfVehiclesExists();
  }, [vehicleCount]);

  return (
    <VehicleContext.Provider
      value={{
        currentAccount,
        vehicleCount,
        connectWallet,
        transactions,
        isLoading,
        addVehicleToBlockchain,
        handleChange,
        formData,
        checkIfWalletIsConnect,
      }}
    >
      {children}
    </VehicleContext.Provider>
  );
};
export default VehicleProvider;
