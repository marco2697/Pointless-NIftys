const Migrations = artifacts.require("PointlessNiftys");

module.exports = function (deployer) {
  deployer.deploy(Migrations, "Pointless Niftys","PN", "ipfs://QmcJbkf1vedsUPdZcVjt4fBd6uWzKmTWpdxrUnXfrazSxV/" );
};