const hre = require("hardhat");

async function main() {
  const contractAddress = "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9"; // paste from deploy output

  const Greeter = await hre.ethers.getContractFactory("Greeter");
  const greeter = Greeter.attach(contractAddress);

  console.log("Current Greeting:", await greeter.greet());

  const tx = await greeter.setGreeting("Hello from Hardhat!");
  await tx.wait();

  console.log("Updated Greeting:", await greeter.greet());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
