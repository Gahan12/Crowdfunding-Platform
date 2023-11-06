// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { Contract } = require("ethers");
const hre = require("hardhat");

async function getBalance(address) {
  const balanceBigInt = await hre.ethers.provider.getBalance(address);
  return hre.ethers.utils.formatEther(balanceBigInt);
}

async function consoleBalance(addresses) {
  let count = 0;
  for (const address of addresses) {
    console.log(`Address: ${count++} and Balance:`, await getBalance(address));
  }
}

async function main() {
  const [owner, from1, from2, from3] = await hre.ethers.getSigners();
  const chai = await hre.ethers.getContractFactory("Transaction");
  const contract = await chai.deploy();

  await contract.deployed();
  console.log(`Address of conttracts are `, contract.address);

  const address = [owner.address, from1.address,from2.address,from3.address];

  console.log("Before buying");
  await consoleBalance(address);

  const amount = { value: hre.ethers.utils.parseEther("1") };
  await contract.connect(from1).transfer(owner.address,amount);
  await contract.connect(from2).transfer(owner.address,amount);
  await contract.connect(from3).transfer(owner.address,amount);

  console.log("After buying");
  await consoleBalance(address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
