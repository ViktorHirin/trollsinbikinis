// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract Troll is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenId;

    uint256 public MAX_SUPPlY = 10000;
    uint256 public MAX_ALLOWED = 7;
    uint256 public OWNER_RESERVED = 50;
    uint256 public price = 77000000000000000; //0.077 Matic
    string baseTokenURI = "https://gateway.pinata.cloud/ipfs/QmdrLbCME7gz4u3ihGVFWEcNrQnxv1Kp2DkmrvvDcZb86v/";
    
    address walletAddress = 0x6fa4840D936B6997E19849dF4909dFBFA9138015;
    
    bool public saleOpen = false;
    bool public presaleOpen = true;

    event NFTMinted(uint256 totalMinted);

    constructor() ERC721("trollsinbikinis", "TROLL") {
    
    }

    function setBaseURI(string memory baseURI) public onlyOwner {
        baseTokenURI = baseURI;
    }

    function setPrice(uint256 _newPrice) public onlyOwner {
        price = _newPrice;
    }
    
    function setMaxAllowed(uint256 _max_allowed_limit) public onlyOwner {
        MAX_ALLOWED = _max_allowed_limit;
    }
    
    function setOwnerReserved(uint256 _owner_reserved) public onlyOwner {
        OWNER_RESERVED = _owner_reserved;
    }

     //Close PreSale
    function pausePreSale() public onlyOwner {
        presaleOpen = false;
    }
    
    //Open Presale
    function unpausePreSale() public onlyOwner {
        presaleOpen = true;
    }
    
    //Close sale
    function pauseSale() public onlyOwner {
        saleOpen = false;
    }
    
     //Open sale
    function unpauseSale() public onlyOwner {
        saleOpen = true;
    }
    
    //total supply
    function totalSupply() public view returns (uint256) {
        return _tokenId.current();
    }

    //mint NFT
    function mintNFT(uint256 _count) public payable {

        uint256 totalMintCount = totalSupply();

        if (msg.sender != owner()) {
            require((saleOpen == true || presaleOpen == true), "Presale/Sale is not open please try again later");
        }
        
        require(
            _count > 0 && _count <= MAX_ALLOWED,
            "Outside NFTs minting minting allowed range"
        );
        
        //require(balanceOf(msg.sender) < MAX_ALLOWED, "You already minted max allowed NFTs");
        
        if (msg.sender != owner()) {
            require(
                totalMintCount + _count <= (MAX_SUPPlY - OWNER_RESERVED),
                "All NFTs sold"
            );
        }else{
            require(
                totalMintCount + _count <= (MAX_SUPPlY),
                "All NFTs sold"
            );
        }
        
        require(
            msg.value >= price * _count,
            "Ether sent with this transaction is not correct"
        );

        payable(walletAddress).transfer(msg.value);    

        address _to = msg.sender;

        for (uint256 i = 0; i < _count; i++) {
            _mint(_to);
            if (msg.sender == owner()) {
                OWNER_RESERVED--;
            }
        }
    }

    function _mint(address _to) private {
        _tokenId.increment();
        uint256 tokenId = _tokenId.current();
        _safeMint(_to, tokenId);
        _setTokenURI(tokenId, string(abi.encodePacked(baseTokenURI,Strings.toString(tokenId), ".json")));
        emit NFTMinted(tokenId);
    }
}