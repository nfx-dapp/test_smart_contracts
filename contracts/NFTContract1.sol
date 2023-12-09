// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFTContract1 is ERC721, ERC721URIStorage, Ownable {
    uint256 private _nextTokenId;

    mapping(uint256 => uint256) public lengths;
    mapping(uint256 => uint256) public widths;

    constructor() ERC721("Every Garden", "EGT") Ownable(msg.sender) {}

    function safeMint(
        address to,
        string memory uri,
        uint256 length,
        uint256 width
    ) public onlyOwner {
        uint256 tokenId = _nextTokenId++;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
        lengths[tokenId] = length;
        widths[tokenId] = width;
    }

    // The following functions are overrides required by Solidity.

    function tokenURI(
        uint256 tokenId
    ) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(
        bytes4 interfaceId
    ) public view override(ERC721, ERC721URIStorage) returns (bool) {
        return super.supportsInterface(interfaceId);
    }

    function area(uint256 landId) public view returns (uint256) {
        if (ownerOf(landId) == address(0)) revert("Garden not found");
        return lengths[landId] * widths[landId];
    }
}
