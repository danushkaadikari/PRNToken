const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const balance = await deployer.getBalance();
  console.log("Account balance:", hre.ethers.utils.formatEther(balance));

  // Token parameters
  const name = "PRINCIPAL";
  const symbol = "PRN";
  const initialSupply = hre.ethers.utils.parseUnits("100000000", 18); // 100,000,000 tokens

  // Deploy the contract
  const PRNToken = await hre.ethers.getContractFactory("PRNToken");
  const token = await PRNToken.deploy(name, symbol, initialSupply);

  await token.deployed();

  console.log("Token deployed to:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
