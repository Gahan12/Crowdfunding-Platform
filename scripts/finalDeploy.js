const { Contract } = require("ethers");
const hre = require("hardhat");

async function main() {
    const chai = await hre.ethers.getContractFactory("Transaction");
    const contract = await chai.deploy();
  
    await contract.deployed();
    console.log(`Address of contracts are `, contract.address);
}
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });