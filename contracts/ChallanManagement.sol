// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ChallanManagement {
    address public owner;

    struct Challan {
        uint256 challanId;
        uint256 vehicleId;
        uint256 amount;
        bool paid;
    }

    mapping(address => Challan[]) public userChallans;

    event ChallanIssued(address indexed user, uint256 challanId, uint256 vehicleId, uint256 amount);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the contract owner");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function issueChallan(uint256 _vehicleId, uint256 _amount) public {
        uint256 challanId = uint256(keccak256(abi.encodePacked(msg.sender, block.timestamp)));

        Challan memory newChallan = Challan(challanId, _vehicleId, _amount, false);

        userChallans[msg.sender].push(newChallan);

        emit ChallanIssued(msg.sender, challanId, _vehicleId, _amount);
    }

    function payChallan(uint256 _challanId) public payable {
        Challan storage challan = userChallans[msg.sender][_challanId];

        require(!challan.paid, "Challan already paid");
        require(msg.value >= challan.amount, "Insufficient funds to pay challan");

        challan.paid = true;
        // Optionally, transfer funds to contract owner
        payable(owner).transfer(msg.value);
    }

    function getUserChallans(address _userAddress) public view returns (Challan[] memory) {
        return userChallans[_userAddress];
    }
}
