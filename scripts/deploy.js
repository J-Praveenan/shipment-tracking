
const hre = require("hardhat");

async function main() {
    const Lock = await hre.ethers.getContractFactory("Tracking");
    const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

    await lock.deployed();
    console.log("Tracking deployed to:", lock.target);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});