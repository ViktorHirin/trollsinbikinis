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
    uint256 public price = 77000000000000000;
    string baseTokenURI = "https://gateway.pinata.cloud/ipfs/QmdrLbCME7gz4u3ihGVFWEcNrQnxv1Kp2DkmrvvDcZb86v/";

    mapping(address => bool) private _presaleEligible;
    
    bool public saleOpen = false;
    bool public presaleOpen = false;

    event NFTMinted(uint256 totalMinted);

    constructor() ERC721("trollsinbikinis", "TROLL") {
        // setBaseURI(baseURI);
    }


    //function setBaseURI(string memory baseURI) public onlyOwner {
    //    baseTokenURI = baseURI;
    //}

    function setPrice(uint256 _newPrice) public onlyOwner {
        price = _newPrice;
    }
    
    function setMaxAllowed(uint256 _max_allowed_limit) public onlyOwner {
        MAX_ALLOWED = _max_allowed_limit;
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

    function withdrawAll() public onlyOwner {
        (bool success, ) = msg.sender.call{value: address(this).balance}("");
        require(success, "Transfer failed.");
    }
    
    //mint NFT
    function mintNFT(uint256 _count) public payable {
        if (msg.sender != owner()) {
            require((saleOpen == true || presaleOpen == true), "Presale/Sale is not open please try again later");
            
            if(presaleOpen == true && saleOpen == false){
                require(checkPresaleEligiblity(msg.sender) == true, "You are not eligibale for Presale");
            }
        }
        
        require(
            _count > 0 && _count <= MAX_ALLOWED,
            "Outside NFTs minting minting allowed range"
        );
        
        require(balanceOf(msg.sender) < MAX_ALLOWED, "You already minted max allowed NFTs");
        
        if (msg.sender != owner()) {
            require(
                _tokenId.current() + _count <= (MAX_SUPPlY - OWNER_RESERVED),
                "All NFTs sold"
            );
        }else{
            require(
                _tokenId.current() + _count <= (MAX_SUPPlY),
                "All NFTs sold"
            );
        }
        
        require(
            msg.value >= price * _count,
            "Ether sent with this transaction is not correct"
        );

        address _to = msg.sender;

        for (uint256 i = 0; i < _count; i++) {
            _mint(_to);
            if (msg.sender == owner()) {
                OWNER_RESERVED--;
            }
        }
    }

    function addToPresale(address[] calldata addresses) external onlyOwner {
        for (uint256 i = 0; i < addresses.length; i++) {
            require(addresses[i] != address(0), "Cannot add null address");

            _presaleEligible[addresses[i]] = true;
        }
    }
    
    function whitelistPresale() external {
        _presaleEligible[msg.sender] = true;
    }

    function checkPresaleEligiblity(address addr) public view returns (bool) {
        return _presaleEligible[addr];
    }

    function totalSupply() public view returns(uint256) {
        return _tokenId.current();
    }
    
    function _mint(address _to) private {
        _tokenId.increment();
        uint256 tokenId = _tokenId.current();
        _safeMint(_to, tokenId);
        _setTokenURI(tokenId, string(abi.encodePacked(baseTokenURI,Strings.toString(tokenId), ".json")));
        emit NFTMinted(tokenId);
    }

    //function _baseURI() internal view virtual override returns (string memory) {
    //    return baseTokenURI;
    //}
    
}