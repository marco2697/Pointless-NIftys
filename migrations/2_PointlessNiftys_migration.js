const Migrations = artifacts.require("PointlessNiftys");

module.exports = function (deployer) {
  deployer.deploy(Migrations, "Pointless Niftys","PN", "ipfs://QmdqoW9spooBLZECMhXRoUFJoG7LmDjYdNGW6zWHhXgev3/" );
};