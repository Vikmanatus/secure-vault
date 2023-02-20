pragma solidity >=0.4.25 <0.9.0;

contract DeployFile {
    bool public isCreated = false;
    string public message;
    constructor (string memory messageText)  {
        message = messageText;
    }
    function getStatus() public view returns (bool) {
        return isCreated;
    }
}
