const HelloBlockchain = artifacts.require("HelloBlockchain");
const DeployFile = artifacts.require("DeployFile");

module.exports = function (deployer) {
  deployer.deploy(HelloBlockchain, "Hello Blockchain");
  deployer.deploy(DeployFile,"Deploy this file");
};