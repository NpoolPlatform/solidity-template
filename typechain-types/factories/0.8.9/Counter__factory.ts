/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  BigNumberish,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type { Counter, CounterInterface } from "../../0.8.9/Counter";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "count",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "dec",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "get",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "inc",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161018e38038061018e83398101604081905261002f91610037565b600055610050565b60006020828403121561004957600080fd5b5051919050565b61012f8061005f6000396000f3fe6080604052348015600f57600080fd5b506004361060465760003560e01c806306661abd14604b578063371303c01460655780636d4ce63c14606d578063b3bcfa82146074575b600080fd5b605360005481565b60405190815260200160405180910390f35b606b607a565b005b6000546053565b606b6091565b6001600080828254608a919060d0565b9091555050565b6001600080828254608a919060e5565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000821982111560e05760e060a1565b500190565b60008282101560f45760f460a1565b50039056fea26469706673582212206d84a97a5a66659699bd5b90e414319e22ccc0e837678494f9f745e37d9bfd6964736f6c63430008090033";

type CounterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CounterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Counter__factory extends ContractFactory {
  constructor(...args: CounterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    amount: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(amount, overrides || {});
  }
  override deploy(
    amount: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(amount, overrides || {}) as Promise<
      Counter & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Counter__factory {
    return super.connect(runner) as Counter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CounterInterface {
    return new Interface(_abi) as CounterInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Counter {
    return new Contract(address, _abi, runner) as unknown as Counter;
  }
}