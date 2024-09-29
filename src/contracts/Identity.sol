// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DecentralizedIdentity {

    struct Identity {
        string role;
        uint256 expiry;
    }

    mapping(address => Identity) public identities;

    address public admin;

    event IdentityCreated(address indexed user, string role, uint256 expiry);
    event RoleAssigned(address indexed user, string role);
    event IdentityVerified(address indexed user, bool isValid);

    constructor() {
        admin = msg.sender;  // Set the contract deployer as the admin
    }

    // Create an identity with a role and expiry time
    function createIdentity(string memory _role, uint256 _expiry) public {
        require(identities[msg.sender].expiry == 0, "Identity already exists");
        identities[msg.sender] = Identity(_role, _expiry);
        emit IdentityCreated(msg.sender, _role, _expiry);
    }

    // Admin function to assign a role to a user
    function assignRole(address _user, string memory _role) public {
        require(msg.sender == admin, "Only admin can assign roles");
        identities[_user].role = _role;
        emit RoleAssigned(_user, _role);
    }

    // Verify if the user's identity is valid (based on expiry)
    function verifyIdentity(address _user) public view returns (bool) {
        return block.timestamp < identities[_user].expiry;
    }
}
