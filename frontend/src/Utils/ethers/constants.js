import vehicleabi from './vehicleABI.json';
import challanabi from './challanABI.json';
import Landabi from './LandRegisteryabi.json';

export const vehiclecontractAddress = '0x230f66B8Bd8E8FFDcbdB1278E2C533d4bc15b40d';
export const vehiclecontractABI = vehicleabi.abi;

export const challancontractAddress = '0x94c2E7A85d6a11D9A2eFad4c1B4e92664985f2Bd';
export const challancontractABI = challanabi.abi;

// export const landAddress = "0x5F38f0D2AeD46B461510221380b0e9082F45eF31"; //sepolia mayank
// export const landAddress = "0x8Bc8b537aB1a626C43ccA99Fc57ab786f3f5BAA3"; //sepolia vs
// export const landAddress = "0x43599aa07ccd017bc9dcd6aa1437d83340cefad3"; //Yuvraj
export const landAddress = '0x5Cacaff9E17487DE161D5ac2Aff9de18C881b8c5'; //polygon amoy matic
export const landABI = Landabi.abi;
