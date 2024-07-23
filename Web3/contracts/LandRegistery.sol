// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract LandRegistry {
    address public owner;
    uint256 public landCount = 0;

    enum LandStatus { NotRegistered, Registered, Transferred }
    enum LandType { Government, Commercial, Agricultural, Industrial, Residential }

    struct Land {
        uint256 landId;
        address currentOwner;
        string location;
        string area;
        string dimensionOfLand;
        string landIdentificationNumber;
        LandStatus status;
        LandType landType;
        uint256 transferAmount; // Amount to transfer the land
    }

    mapping(address => Land[]) public userLands;
    mapping(uint256 => Land) public allLands;

    event LandRegistered(
        uint256 indexed landId,
        address indexed owner,
        string location,
        string area,
        string dimensionOfLand,
        string landIdentificationNumber,
        LandType landType
    );

    event LandTransferRequested(
        uint256 indexed landId,
        address indexed from,
        address indexed to,
        uint256 transferAmount
    );

    event LandTransferred(
        uint256 indexed landId,
        address indexed from,
        address indexed to,
        uint256 transferAmount
    );

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the contract owner");
        _;
    }

    modifier landExists(uint256 _landId) {
        require(allLands[_landId].landId == _landId, "Land does not exist");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function registerLand(
        string memory _location,
        string memory _area,
        string memory _dimensionOfLand,
        string memory _landIdentificationNumber,
        LandType _landType,
        uint256 _transferAmount
    ) external {
        landCount++;
        uint256 landId = landCount;
        Land memory newLand = Land({
            landId: landId,
            currentOwner: msg.sender, // Initially owned by the government
            location: _location,
            area: _area,
            dimensionOfLand: _dimensionOfLand,
            landIdentificationNumber: _landIdentificationNumber,
            status: LandStatus.Registered,
            landType: _landType,
            transferAmount: _transferAmount
        });

        userLands[msg.sender].push(newLand);
        allLands[landId] = newLand;

        emit LandRegistered(landId, msg.sender, _location, _area, _dimensionOfLand, _landIdentificationNumber, _landType);
    }

    function requestLandTransfer(
        uint256 _landId,
        address _newOwner
    ) external payable landExists(_landId) {
        require(_newOwner != address(0), "Invalid new owner address");
        Land storage land = allLands[_landId];
        require(msg.value == land.transferAmount, "Incorrect transfer amount");

        // Transfer the amount to the current owner
        payable(land.currentOwner).transfer(msg.value);

        // Emit an event for the transfer request
        emit LandTransferRequested(_landId, land.currentOwner, _newOwner, msg.value);

        // Transfer the land
        transferLand(_landId, _newOwner);
    }

    function transferLand(
        uint256 _landId,
        address _newOwner
    ) internal {
        Land storage land = allLands[_landId];
        address previousOwner = land.currentOwner;

        land.currentOwner = _newOwner;
        land.status = LandStatus.Transferred;

        // Update userLands mapping
        removeLandFromUser(previousOwner, _landId);
        userLands[_newOwner].push(land);

        emit LandTransferred(_landId, previousOwner, _newOwner, land.transferAmount);
    }

    function getUserLands(address _userAddress) external view returns (Land[] memory) {
        return userLands[_userAddress];
    }

    function getLandDetails(uint256 _landId) external view landExists(_landId) returns (Land memory) {
        return allLands[_landId];
    }

    function removeLandFromUser(address _user, uint256 _landId) internal {
        Land[] storage lands = userLands[_user];
        for (uint256 i = 0; i < lands.length; i++) {
            if (lands[i].landId == _landId) {
                lands[i] = lands[lands.length - 1];
                lands.pop();
                break;
            }
        }
    }

    function setTransferAmount(uint256 _landId, uint256 _transferAmount) external landExists(_landId) onlyOwner {
        Land storage land = allLands[_landId];
        land.transferAmount = _transferAmount;
    }
}
