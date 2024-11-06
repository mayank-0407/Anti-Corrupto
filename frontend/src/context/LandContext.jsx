import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';

import { landABI, landAddress } from '../Utils/ethers/constants';
import { getToken } from '../Utils/cookieSetup';
import { fetchUserDetails } from '../Utils/API/authAPI';
import { addLandIdToDB, getUserLands } from '../Utils/API/landAPI';

export const LandContext = React.createContext();

const { ethereum } = window;

const LandProvider = ({ children }) => {
  // ethers.BigNumber.from(number)
  const [formData, setformData] = useState({
    landId: '',
    location: '',
    area: '',
    dimensionOfLand: '',
    landIdentificationNumber: '',
    transferAmount: '',
    status: '',
    landType: '',
  });

  const [currentAccount, setCurrentAccount] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [LandCount, setLandCount] = useState(localStorage.getItem('LandCount'));
  const [transactions, setTransactions] = useState([]);

  const handleChange = (e, name) => {
    setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  const getUserLandsfunc = async (tempAddress) => {
    // const checkWallet = checkIfWalletIsConnect();
    // if (checkWallet != 200) return alert('Please connect/install your wallet first');

    if (true) {
      if (ethereum) {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const landContract = new ethers.Contract(landAddress, landABI, signer);

        const availableLands = await landContract.getUserLands(tempAddress);
        const structuredTransactions = availableLands.map((transaction) => ({
          landId: transaction.landId,
          location: transaction.location,
          area: transaction.area,
          dimensionOfLand: transaction.dimensionOfLand,
          landIdentificationNumber: transaction.landIdentificationNumber,
          transferAmount: transaction.status,
          status: transaction.landType,
          landType: transaction.transferAmount,
          prevOwner: transaction.prevOwner,
          currentOwner: transaction.currentOwner,
        }));

        setTransactions(structuredTransactions);

        addLandIdInDB(structuredTransactions);
      } else {
        console.log('Ethereum is not present');
      }
    }
    // catch (error) {
    //   console.log(error);
    // }
  };

  const addLandIdInDB = async (structuredTransactions) => {
    // const checkWallet = checkIfWalletIsConnect();
    // if (checkWallet != 200) return alert('Please connect/install your wallet first');


    const Token = getToken();
    const UserDetails = await fetchUserDetails(Token);
    const tlands = await getUserLands(UserDetails); // Assuming this API returns an array of land objects
    for (let i = 0; i < tlands.length; i++) {
      const land = tlands[i];
      for (let j = 0; j < structuredTransactions.length; j++) {
        const transaction = structuredTransactions[j];

        if (land.landIdentificationNumber === transaction.landIdentificationNumber) {
          if (true) {
            const response = await addLandIdToDB(land.id, transaction.landId);
          }
          // catch (error) {
          //   console.error('Error sending landId:', error);
          // }
        }
      }
    }
  };

  const checkIfWalletIsConnect = async () => {
    try {
      // if (!ethereum) return alert('Please install MetaMask.');

      const accounts = await ethereum.request({ method: 'eth_accounts' });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        getUserLandsfunc(accounts[0]);
        return 200;
      } else {
        connectWallet();
        console.log('No accounts found');
      }
      return 400;
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfWalletIsConnectLogin = async () => {
    try {
      if (!ethereum) {
        alert('Please connect/install your wallet first');
        return 400;
      }

      const accounts = await ethereum.request({ method: 'eth_accounts' });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        getUserLandsfunc(accounts[0]);
        return accounts[0];
      } else {
        return connectWalletLogin();
        console.log('No accounts found');
      }
    } catch (error) {
      return 400;
      console.log(error);
    }
  };

  const checkIfLandExists = async () => {
    // const checkWallet = checkIfWalletIsConnect();
    // if (checkWallet != 200) return alert('Please connect/install your wallet first');

    try {
      if (ethereum) {
        // const landContract = createEthereumContract();
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const landContract = new ethers.Contract(landAddress, landABI, signer);
        // console.log(landContract);
        // console.log("In Check Transaction");
        const currentLandCount = await landContract.getLandCount();

        window.localStorage.setItem('LandCount', currentLandCount);
      }
    } catch (error) {
      console.log(error);

      throw new Error('No ethereum object');
    }
  };

  const connectWallet = async () => {
    try {
      // if (!ethereum) return alert('Please install MetaMask.');

      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
      throw new Error('No ethereum object');
    }
  };
  const connectWalletLogin = async () => {
    try {
      if (!ethereum) return alert('Please install MetaMask.');

      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });
      setCurrentAccount(accounts[0]);
      if (accounts[0]) {
        return accounts[0];
      } else {
        return 400;
      }
    } catch (error) {
      console.log(error);
      return 400;
      throw new Error('No ethereum object');
    }
  };

  const addLandToBlockchain = async (formData) => {
    // const checkWallet = checkIfWalletIsConnect();
    // if (checkWallet != 200) return alert('Please connect/install your wallet first');

    try {
      if (window.ethereum) {
        const { location, area, dimensionOfLand, landIdentificationNumber, landType, landPrice } =
          formData;
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const landContract = new ethers.Contract(landAddress, landABI, signer);

        try {
          // Register the land and get the transaction object
          const transaction = await landContract.registerLand(
            location,
            area,
            dimensionOfLand,
            landIdentificationNumber,
            landType,
            landPrice
          );

          console.log('Transaction hash:', transaction.hash);
          setIsLoading(true);

          // Wait for the transaction to be mined/confirmed
          const receipt = await transaction.wait();
          console.log(`Success - ${receipt.hash}`);
          console.log('Transaction receipt:', receipt);
          setIsLoading(false);

          // Listen for the LandRegistered event
          landContract.on(
            'LandRegistered',
            (
              landId,
              owner,
              location,
              area,
              dimensionOfLand,
              landIdentificationNumber,
              landType
            ) => {
              console.log('LandRegistered event received:', {
                landId: landId.toString(),
                owner,
                location,
                area,
                dimensionOfLand,
                landIdentificationNumber,
                landType: landType.toString(),
              });
            }
          );
          getUserLandsfunc(currentAccount);

          return 200; // Successfully registered
        } catch (error) {
          console.error('Error registering land:', error);
          setIsLoading(false);
          return 400; // Failed to register
        }

        // return transactionHash.hash;
      } else {
        console.log('No ethereum object');
      }
    } catch (error) {
      console.log(error);
      throw new Error('Error In Adding Land');
    }
  };

  const transferLandfunc = async (formData) => {
    // const checkWallet = checkIfWalletIsConnect();
    // if (checkWallet != 200) return alert('Please connect/install your wallet first');

    try {
      if (window.ethereum) {
        const { landId, transferAmount } = formData;

        const accounts = await ethereum.request({
          method: 'eth_requestAccounts',
        });

        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();


        const landContract = new ethers.Contract(landAddress, landABI, signer);
        const exchangeRate = '50735.67';

        // const parsedAmount = ethers.parseEther(transferAmount);

        const amountToTransfer = transferAmount * 0.000000000000000001;
        // const amountToSend = await ethers.parseEther(amountToTransfer.toString());
        const amountToSend = await ethers.parseUnits(transferAmount, 'wei');


        const transactionOptions = {
          value: amountToSend,
        };

        const transactionHash = await landContract.requestLandTransfer(
          landId,
          accounts[0],
          transactionOptions
        );
        setIsLoading(true);
        console.log(`Loading - ${transactionHash.hash}`);
        await transactionHash.wait();
        console.log(`Success - ${transactionHash.hash}`);
        if (transactionHash.hash) {
          setIsLoading(false);
          return 200;
        } else {
          return 400;
        }
      } else {
        console.log('No ethereum object');
      }
    } catch (error) {
      console.log(error);
      throw new Error('Error transferring land');
    }
  };

  useEffect(() => {
    // connectWallet();
    checkIfWalletIsConnect();
  }, []);

  return (
    <LandContext.Provider
      value={{
        currentAccount,
        LandCount,
        connectWallet,
        transactions,
        isLoading,
        addLandToBlockchain,
        handleChange,
        formData,
        checkIfWalletIsConnect,
        transferLandfunc,
        checkIfWalletIsConnectLogin,
      }}
    >
      {children}
    </LandContext.Provider>
  );
};
export default LandProvider;
