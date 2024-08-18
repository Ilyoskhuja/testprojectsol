// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract SimpleCoin is ERC20 {
    uint256 private _totalSupply = 5000000000000000000000000000; // 5 billion tokens

    constructor() ERC20("Simple ss ", "ssCoin") {
        _mint(msg.sender, _totalSupply);
    }
}



