import { HardhatUserConfig  } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'
import '@nomiclabs/hardhat-truffle5'
import 'hardhat-deploy'
import 'hardhat-deploy-ethers'
import { config as dotEnvConfig } from 'dotenv'
import { DeploymentNetwork } from './utils/constant'
import rpcUrls from './utils/rpcUrls.json'
dotEnvConfig()

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: '0.8.9',
        settings: {
          optimizer: {
            enabled: true,
            runs: 15000,
          },
        }
      },
      {
        version: '0.7.0',
        settings: {
          optimizer: {
            enabled: true,
            runs: 15000,
          },
        }
      },
    ]
  },
  namedAccounts: {
    deployer: {
      default: 0,
      "mainnet": "0x8FC831e238F7AF962214a866BE36fC1429774d60",
      "holesky": "0x8FC831e238F7AF962214a866BE36fC1429774d60"
    },
  },
  defaultNetwork: 'hardhat',
  networks: {
    [DeploymentNetwork.Hardhat]: {
      accounts: {
        count: 20,
        accountsBalance: '10000000000000000000000000000000000000000000000'
      },
      allowUnlimitedContractSize: true,
      saveDeployments: true,
      live: false
    },
    [DeploymentNetwork.Mainnet]: {
      url: `${rpcUrls[DeploymentNetwork.Mainnet]}/${process.env.ALCHEMY_API_KEY}`,
      saveDeployments: true,
      live: true,
      accounts: [process.env.MAINNET_PRIVATE_KEY!].filter(Boolean),
      //deploy: [`deploy/scripts/${DeploymentNetwork.Mainnet}`], // can specify different deployment paths for different networks, default is deploy directory
      verify: { // verifying the source code of smart contract on Etherscan if needed
          etherscan: {
              apiKey: process.env.ETHERSCAN_API_KEY
          }
      }
    },
    [DeploymentNetwork.Holesky]: {
      url: rpcUrls[DeploymentNetwork.Holesky],
      saveDeployments: true,
      live: false,
      accounts: [process.env.HOLESKY_PRIVATE_KEY!].filter(Boolean),
    },
  },
  paths: {
    sources: './contracts',
    tests: './test',
    cache: './cache',
    artifacts: './artifacts'
  },
  typechain: {
    outDir: "typechain-types",
    target: "ethers-v6"
  },
  mocha: {
    timeout: 0
  }
}

export default config
