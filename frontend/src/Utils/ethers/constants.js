import vehicleabi from './vehicleABI.json';
import challanabi from './challanABI.json';
import Landabi from './LandRegisteryabi.json';

export const vehiclecontractAddress = '0x230f66B8Bd8E8FFDcbdB1278E2C533d4bc15b40d';
export const vehiclecontractABI = vehicleabi.abi;

// export const challancontractAddress = '0x94c2E7A85d6a11D9A2eFad4c1B4e92664985f2Bd';
export const challancontractAddress = '0x7559DEeb873eb1F0d0d9Aa52610269F1d8918F5c';
export const challancontractABI = challanabi.abi;

export const landAddress = '0x4AA5D707971357E3a76ef1Fb4f0Ae25990d88d94'; //sepolia mayank
// export const landAddress = "0x8Bc8b537aB1a626C43ccA99Fc57ab786f3f5BAA3"; //sepolia vs
// export const landAddress = "0x43599aa07ccd017bc9dcd6aa1437d83340cefad3"; //Yuvraj
// export const landAddress = '0x44215ebB326D71E8B82e5547DCFb12AC3D8842a0'; //polygon amoy matic
// export const landAddress = '0xe703cdf723f221ffca96c98cc489d18c74150d40'; //sepolia mayank matic
export const landABI = Landabi.abi;
