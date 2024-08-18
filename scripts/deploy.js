async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
  
    const SimpleCoin = await ethers.getContractFactory("SimpleCoin");
    const token = await SimpleCoin.deploy();
  
    console.log("Simple coin token deployed to:", token.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  