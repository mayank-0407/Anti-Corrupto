// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract UserProfile {
    address public owner;

    struct User {   
        string userName;
        bool exists;
    }

    mapping(address => User) public users;

    event WalletConnected(address indexed user, string userName);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the contract owner");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function connectWallet(string memory _userName) public {
        require(!users[msg.sender].exists, "Wallet already connected");

        users[msg.sender] = User(_userName, true);

        emit WalletConnected(msg.sender, _userName);
    }

    function getUserName(address _userAddress) public view returns (string memory) {
        return users[_userAddress].userName;
    }
}
