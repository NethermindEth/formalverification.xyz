export type Firm = {
  id: number;
  name: string;
  description: string;
  specialties: Specialty[];
  fv_language: FVTools[];
  stacks: Stack[];
  languages: Language[];
  svg: string;
  link: string;
};

export enum Stack {
  Ethereum = "Ethereum",
  BinanceSmartChain = "Binance Smart Chain",
  Solana = "Solana",
  Tezos = "Tezos",
  Algorand = "Algorand",
  Polygon = "Polygon",
  Starknet = "Starknet",
  AlephZero = "Aleph Zero"
}

export enum FVTools {
  Coq = "Coq",
  SMTSolvers = "SMT Solvers (Z3, CVC4)",
  HoareLogic = "Hoare Logic",
  KFramework = "K Framework",
  Z3 = "Z3",
  TLAPlus = "TLA+",
  IsabelleHOL = "Isabelle/HOL",
  Lean4 = "Lean 4",
  CVC5 = "CVC5"
}
export enum Specialty {
  SmartContractVerification = "Smart Contract Verification",
  ZKCircuitVerification = "Zero-Knowledge Circuit Verification",
  ConsensusProtocolVerification = "Consensus Protocol Verification",
  CryptographicPrimitiveVerification = "Cryptographic Primitive Verification",
  VirtualMachineVerification = "Virtual Machine Verification",
  TokenomicsVerification = "Tokenomics Model Verification",
  CrossChainProtocolVerification = "Cross-Chain Protocol Verification",
  PrivacyPreservingComputationVerification = "Privacy-Preserving Computation Verification",
  OnChainGovernanceVerification = "On-Chain Governance Mechanism Verification",
  OracleSystemVerification = "Oracle System Verification",
  DeFiProtocolVerification = "DeFi Protocol Verification"
}

export enum Language {
  Solidity = "Solidity",
  Vyper = "Vyper",
  Move = "Move",
  DeepSEA = "DeepSEA",
  Haskell = "Haskell",
  Rust = "Rust",
  Cairo = "Cairo",
  PyTeal = "PyTeal",
  OCaml = "OCaml",
  TypeScript = "TypeScript"
}


export const firms: Firm[] = [
    {
      "id": 2,
      "name": "ConsenSys Diligence",
      "specialties": [Specialty.SmartContractVerification, Specialty.DeFiProtocolVerification],
      "description": "As part of ConsenSys, Diligence offers advanced security services for Ethereum-based projects, including manual audits and automated analysis with tools like MythX.",
      "languages": [Language.Solidity],
      "stacks": [Stack.Ethereum],
      "fv_language": [FVTools.HoareLogic],
      "svg": "consensys.svg",
      "link": "https://consensys.net/diligence/"
    },
    {
      "id": 3,
      "name": "Runtime Verification",
      "specialties": [Specialty.SmartContractVerification, Specialty.VirtualMachineVerification],
      "description": "Focused on runtime verification techniques, they provide thorough smart contract verification, analysis, and advisory services for blockchain technologies.",
      "languages": [Language.Solidity, Language.Vyper, Language.Haskell],
      "stacks": [Stack.Ethereum, Stack.Tezos, Stack.Algorand],
      "fv_language": [FVTools.KFramework, FVTools.Coq],
      "svg": "runtime.svg",
      "link": "https://runtimeverification.com/"
    },
    {
      "id": 4,
      "name": "Veridise",
      "specialties": [Specialty.ZKCircuitVerification, Specialty.SmartContractVerification],
      "description": "Veridise is known for its rigorous security audits and formal verification of blockchain systems, leveraging state-of-the-art research tools.",
      "languages": [Language.Solidity, Language.Rust, Language.Cairo],
      "stacks": [Stack.Ethereum, Stack.Solana, Stack.Starknet],
      "fv_language": [FVTools.Coq, FVTools.Z3],
      "svg": "veridise.svg",
      "link": "https://www.veridise.com/"
    },
    {
      "id": 5,
      "name": "Cyberscope",
      "specialties": [Specialty.SmartContractVerification, Specialty.DeFiProtocolVerification],
      "description": "Cyberscope specializes in formal verification, offering tailored solutions for smart contract projects, ensuring rigorous mathematical proof of correctness and security.",
      "languages": [Language.Solidity, Language.Vyper],
      "stacks": [Stack.Ethereum, Stack.BinanceSmartChain],
      "fv_language": [FVTools.Coq, FVTools.TLAPlus],
      "svg": "cyberscope.svg",
      "link": "https://www.cyberscope.io/"
    },
    {
      "id": 6,
      "name": "ShellBoxes",
      "specialties": [Specialty.SmartContractVerification, Specialty.CryptographicPrimitiveVerification],
      "description": "ShellBoxes offers comprehensive formal verification and security audits for various blockchain ecosystems, providing detailed reports and mitigation strategies.",
      "languages": [Language.Solidity, Language.Rust, Language.PyTeal],
      "stacks": [Stack.Ethereum, Stack.Polygon, Stack.Algorand],
      "fv_language": [FVTools.IsabelleHOL, FVTools.TLAPlus],
      "svg": "shellboxes.svg",
      "link": "https://www.shellboxes.com/"
    },
    {
      "id": 7,
      "name": "Nethermind",
      "specialties": [Specialty.SmartContractVerification, Specialty.ZKCircuitVerification],
      "description": "Nethermind offers formal verification services for EVM and StarkNet smart contracts, utilizing tools like Horus to ensure the correctness and security of blockchain applications.",
      "languages": [Language.Solidity, Language.Cairo],
      "stacks": [Stack.Ethereum, Stack.Starknet],
      "fv_language": [FVTools.Lean4, FVTools.SMTSolvers],
      "svg": "nethermind.svg",
      "link": "https://www.nethermind.io/formal-verification"
    },
    {
      "id": 8,
      "name": "Formal Land",
      "specialties": [Specialty.SmartContractVerification, Specialty.ConsensusProtocolVerification],
      "description": "Formal Land offers advanced formal verification services, specializing in translating code from languages like Rust, OCaml, Solidity, and TypeScript to the Coq proof system. They are known for their rigorous methods and innovative tools, ensuring the highest level of software security.",
      "languages": [Language.Solidity, Language.Rust, Language.OCaml, Language.TypeScript],
      "stacks": [Stack.Ethereum, Stack.AlephZero, Stack.Tezos],
      "fv_language": [FVTools.Coq],
      "svg": "formalland.svg",
      "link": "https://formal.land/"
    }
  ];