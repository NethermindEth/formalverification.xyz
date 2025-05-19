export type Firm = {
  id: number;
  name: string;
  description: string;
  specialties: Speciality[];
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
  AlephZero = "Aleph Zero",
  Zcash = "Zcash",
  Cosmos = "Cosmos",
  TON = "TON",
  zkWasm = "zkWasm",
  Stellar = "Stellar",
  Cardano = "Cardano",
  Polkadot = "Polkadot",
  MultiversX = "MultiversX"
}

export enum FVTools {
  Coq = "Coq",
  SMTSolvers = "SMT Solvers (Z3, CVC4)",
  HoareLogic = "Hoare Logic",
  KFramework = "K Framework",
  Z3 = "Z3",
  TLAPlus = "TLA+",
  IsabelleHOL = "Isabelle/HOL",
  HOL4 = "HOL4",
  Lean4 = "Lean 4",
  CVC5 = "CVC5",
  EasyCrypt = "EasyCrypt",
  ACL2 = "ACL2",
  Dafny = "Dafny",
  Quint = "Quint",
  SAW = "SAW"
}

export enum Speciality {
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
  TypeScript = "TypeScript",
  Java = "Java",
  C = "C",
  Cryptol = "Cryptol",
  Soroban = "Soroban",
  TEAL = "TEAL",
  Go = "Go"
}


export const firms: Firm[] = [
    {
      "id": 1,
      "name": "Verifereum",
      "specialities": [Speciality.SmartContractVerification, Speciality.DefiProtocolVerification, Speciality.VirtualMachineVerification],
      "description": "Free and open source project developing tools and methods for full formal verification of EVM applications in higher-order logic (using HOL4).",
      "languages": [Language.Vyper, Language.Solidity],
      "stacks": [Stack.Ethereum],
      "fv_language": [FVTools.HOL4, FVTools.HoareLogic],
      "svg": "verifereum.svg",
      "link": "https://verifereum.org"
    },
    {
      "id": 2,
      "name": "ConsenSys Diligence",
      "specialties": [Speciality.SmartContractVerification, Speciality.DeFiProtocolVerification],
      "description": "As part of ConsenSys, Diligence offers advanced security services for Ethereum-based projects, including manual audits and automated analysis with tools like MythX.",
      "languages": [Language.Solidity],
      "stacks": [Stack.Ethereum],
      "fv_language": [FVTools.HoareLogic, FVTools.Dafny],
      "svg": "consensys.svg",
      "link": "https://consensys.net/diligence"
    },
    {
      "id": 3,
      "name": "Runtime Verification",
      "specialties": [Speciality.SmartContractVerification, Speciality.DeFiProtocolVerification, Speciality.VirtualMachineVerification, Speciality.ConsensusProtocolVerification],
      "description": "Focused on formal verification techniques, they provide comprehensive smart contract verification, fuzz testing, security auditing, and advisory services for various blockchain ecosystems, while also developing high-quality open-source security tools.",
      "languages": [Language.Solidity, Language.Vyper, Language.Rust, Language.Soroban, Language.Haskell, Language.TEAL, Language.PyTeal, Language.Go],
      "stacks": [Stack.Ethereum, Stack.Stellar, Stack.Polkadot, Stack.MultiversX, Stack.Cosmos, Stack.Tezos, Stack.Algorand],
      "fv_language": [FVTools.KFramework, FVTools.Z3, FVTools.Lean4, FVTools.Coq],
      "svg": "runtime.svg",
      "link": "https://runtimeverification.com"
    },
    {
      "id": 4,
      "name": "Veridise",
      "specialties": [Speciality.ZKCircuitVerification, Speciality.SmartContractVerification],
      "description": "Veridise is known for its rigorous security audits and formal verification of blockchain systems, leveraging state-of-the-art research tools.",
      "languages": [Language.Solidity, Language.Rust, Language.Cairo],
      "stacks": [Stack.Ethereum, Stack.Solana, Stack.Starknet],
      "fv_language": [FVTools.Coq, FVTools.Z3],
      "svg": "veridise.svg",
      "link": "https://www.veridise.com"
    },
    {
      "id": 5,
      "name": "Cyberscope",
      "specialties": [Speciality.SmartContractVerification, Speciality.DeFiProtocolVerification],
      "description": "Cyberscope specializes in formal verification, offering tailored solutions for smart contract projects, ensuring rigorous mathematical proof of correctness and security.",
      "languages": [Language.Solidity, Language.Vyper],
      "stacks": [Stack.Ethereum, Stack.BinanceSmartChain],
      "fv_language": [FVTools.Coq, FVTools.TLAPlus],
      "svg": "cyberscope.svg",
      "link": "https://www.cyberscope.io"
    },
    {
      "id": 6,
      "name": "ShellBoxes",
      "specialties": [Speciality.SmartContractVerification, Speciality.CryptographicPrimitiveVerification],
      "description": "ShellBoxes offers comprehensive formal verification and security audits for various blockchain ecosystems, providing detailed reports and mitigation strategies.",
      "languages": [Language.Solidity, Language.Rust, Language.PyTeal],
      "stacks": [Stack.Ethereum, Stack.Polygon, Stack.Algorand],
      "fv_language": [FVTools.IsabelleHOL, FVTools.TLAPlus],
      "svg": "shellboxes.svg",
      "link": "https://www.shellboxes.com"
    },
    {
      "id": 7,
      "name": "Nethermind",
      "specialties": [Speciality.SmartContractVerification, Speciality.ZKCircuitVerification, Speciality.CryptographicPrimitiveVerification, Speciality.ConsensusProtocolVerification],
      "description": "Nethermind specializes in hard formal methods, leveraging the interactive theorem provers such as Lean4 and EasyCrypt to verify the most complex software in the web3 ecosystem. They focus particularly in the fields of smart-contract, zk-circuit, cryptographic protocol and distributed protocol verification.",
      "languages": [Language.Solidity, Language.Cairo],
      "stacks": [Stack.Ethereum, Stack.Starknet],
      "fv_language": [FVTools.Lean4, FVTools.SMTSolvers],
      "svg": "nethermind.svg",
      "link": "https://www.nethermind.io/formal-verification"
    },
    {
      "id": 8,
      "name": "Formal Land",
      "specialties": [Speciality.SmartContractVerification, Speciality.ConsensusProtocolVerification],
      "description": "Formal Land offers advanced formal verification services, specializing in translating code from languages like Rust, OCaml, Solidity, and TypeScript to the Coq proof system. They are known for their rigorous methods and innovative tools, ensuring the highest level of software security.",
      "languages": [Language.Solidity, Language.Rust, Language.OCaml, Language.TypeScript],
      "stacks": [Stack.Ethereum, Stack.AlephZero, Stack.Tezos],
      "fv_language": [FVTools.Coq],
      "svg": "formalland.svg",
      "link": "https://formal.land"
    },
    {
      "id": 9,
      "name": "Kestrel",
      "specialties": [Speciality.ZKCircuitVerification, Speciality.VirtualMachineVerification],
      "description": "Kestrel's research spans formal methods, program synthesis and refinement, program analysis and verification, formal modeling and validation, theorem proving, and planning.",
      "languages": [Language.Java],
      "stacks": [Stack.Ethereum],
      "fv_language": [FVTools.ACL2],
      "svg": "kestrel.svg",
      "link": "https://www.kestrel.edu"
    },
    {
      "id": 10,
      "name": "CertiK",
      "specialties": [Speciality.ZKCircuitVerification, Speciality.VirtualMachineVerification, Speciality.SmartContractVerification],
      "description": "CertiK provides provides a comprehensive suite of tools to secure the Web3 industry at scale.",
      "languages": [],
      "stacks": [Stack.Ethereum, Stack.Cosmos, Stack.zkWasm, Stack.TON],
      "fv_language": [FVTools.Coq],
      "svg": "certik.svg",
      "link": "https://www.certik.com/products/formal-verification"
    },
    {
      "id": 11,
      "name": "Galois",
      "specialties": [Speciality.CryptographicPrimitiveVerification, Speciality.ConsensusProtocolVerification, Speciality.SmartContractVerification],
      "description": "CertiK provides provides a comprehensive suite of tools to secure the Web3 industry at scale.",
      "languages": [Language.C, Language.Java, Language.Cryptol],
      "stacks": [Stack.Ethereum, Stack.Stellar, Stack.Cardano],
      "fv_language": [FVTools.Lean4, FVTools.SAW],
      "svg": "galois.svg",
      "link": "https://galois.com/project/blockchain-roundup/"
    },
    {
      "id": 12,
      "name": "zkSecurity",
      "specialties": [Speciality.ZKCircuitVerification],
      "description": "zkSecurity is a team of experts in zero-knowledge proofs and cryptography in general. They perform security audits, development work, due diligence, research, etc.",
      "languages": [Language.Rust, Language.Circom, Language.Solidity, Language.OCaml, Language.TypeScript, Language.Cairo, Language.Go, Language.C],
      "stacks": [Stack.Ethereum, Stack.Starknet, Stack.Solana],
      "fv_language": [FVTools.Lean4],
      "svg": "zksecurity.svg",
      "link": "https://zksecurity.xyz"
    },
    {
      "id": 13,
      "name": "Lindy Labs",
      "specialties": [Speciality.SmartContractVerification],
      "description": "Lindy Labs offers bespoke formal verification for DeFi projects running on Starknet or directly on Ethereum. We can prove your code matches what you claim to implement in your whitepaper!",
      "languages": [Language.Cairo, Language.Solidity],
      "stacks": [Stack.Starknet, Stack.Ethereum],
      "fv_language": [FVTools.Lean4, FVTools.SMTSolvers],
      "svg": "lindylabs.svg",
      "link": "https://www.lindylabs.net/"
    }
  ];
