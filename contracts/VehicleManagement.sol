// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract VehicleManagement {
    address public owner;

    struct Vehicle {
        string detailsIPFSHash;
        uint256 vehicleId;
    }

    mapping(address => Vehicle[]) public userVehicles;
    mapping(uint256 => Vehicle) public allVehicles;

    event VehicleAdded(address indexed user, uint256 vehicleId, string detailsIPFSHash);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the contract owner");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function addVehicle(string memory _detailsIPFSHash) public {
        uint256 vehicleId = uint256(keccak256(abi.encodePacked(msg.sender, block.timestamp)));

        Vehicle memory newVehicle = Vehicle(_detailsIPFSHash, vehicleId);

        userVehicles[msg.sender].push(newVehicle);
        allVehicles[vehicleId] = newVehicle;

        emit VehicleAdded(msg.sender, vehicleId, _detailsIPFSHash);
    }

    function getUserVehicles(address _userAddress) public view returns (Vehicle[] memory) {
        return userVehicles[_userAddress];
    }

    function getVehicleDetails(uint256 _vehicleId) public view returns (Vehicle memory) {
        return allVehicles[_vehicleId];
    }
}
