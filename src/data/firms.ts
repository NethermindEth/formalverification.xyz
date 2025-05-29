import { z } from "zod";

export const stack = z.enum([
 "Ethereum",
 "Binance Smart Chain",
 "Solana",
 "Tezos",
 "Algorand",
 "Polygon",
 "Starknet",
 "Aleph Zero",
 "Zcash",
 "Cosmos",
 "TON",
 "zkWasm",
 "Stellar",
 "Cardano",
 "Polkadot",
 "MultiversX",
 "Bitcoin",
])

export type Stack = z.infer<typeof stack>;

// export enum Stack {
//   Ethereum = "Ethereum",
//   BinanceSmartChain = "Binance Smart Chain",
//   Solana = "Solana",
//   Tezos = "Tezos",
//   Algorand = "Algorand",
//   Polygon = "Polygon",
//   Starknet = "Starknet",
//   AlephZero = "Aleph Zero",
//   Zcash = "Zcash",
//   Cosmos = "Cosmos",
//   TON = "TON",
//   zkWasm = "zkWasm",
//   Stellar = "Stellar",
//   Cardano = "Cardano",
//   Polkadot = "Polkadot",
//   MultiversX = "MultiversX"
// }

// export enum FVTools {
//   Coq = "Coq",
//   SMTSolvers = "SMT Solvers (Z3, CVC4)",
//   HoareLogic = "Hoare Logic",
//   KFramework = "K Framework",
//   Z3 = "Z3",
//   TLAPlus = "TLA+",
//   IsabelleHOL = "Isabelle/HOL",
//   HOL4 = "HOL4",
//   Lean4 = "Lean 4",
//   CVC5 = "CVC5",
//   EasyCrypt = "EasyCrypt",
//   ACL2 = "ACL2",
//   Dafny = "Dafny",
//   Quint = "Quint",
//   SAW = "SAW"
// }

export const fvTools = z.enum([
  "Coq",
  "SMT Solvers (Z3, CVC4)",
  "Hoare Logic",
  "K Framework",
  "Z3",
  "TLA+",
  "Isabelle/HOL",
  "HOL4",
  "Lean 4",
  "CVC5",
  "EasyCrypt",
  "ACL2",
  "Dafny",
  "Quint",
  "SAW"
])

export type FVTools = z.infer<typeof fvTools>

// export enum Language {
//   Solidity = "Solidity",
//   Vyper = "Vyper",
//   Move = "Move",
//   DeepSEA = "DeepSEA",
//   Haskell = "Haskell",
//   Rust = "Rust",
//   Cairo = "Cairo",
//   PyTeal = "PyTeal",
//   OCaml = "OCaml",
//   TypeScript = "TypeScript",
//   Java = "Java",
//   C = "C",
//   Cryptol = "Cryptol",
//   Soroban = "Soroban",
//   TEAL = "TEAL",
//   Go = "Go"
// }

export const speciality = z.enum([
 "Smart Contract Verification",
 "Zero-Knowledge Circuit Verification",
 "Consensus Protocol Verification",
 "Cryptographic Primitive Verification",
 "Virtual Machine Verification",
 "Tokenomics Model Verification",
 "Cross-Chain Protocol Verification",
 "Privacy-Preserving Computation Verification",
 "On-Chain Governance Mechanism Verification",
 "Oracle System Verification",
 "DeFi Protocol Verification"
])

export type Speciality = z.infer<typeof speciality>

export const language = z.enum([
 "Solidity",
 "Vyper",
 "Move",
 "DeepSEA",
 "Haskell",
 "Rust",
 "Cairo",
 "PyTeal",
 "OCaml",
 "TypeScript",
 "Java",
 "C",
 "Cryptol",
 "Soroban",
 "TEAL",
 "Go",
 "Circom",
 "Golang",
 "CosmWasm",
])

export type Language = z.infer<typeof language>

export const firm = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  specialities: z.array(speciality),
  fv_language: z.array(fvTools),
  stacks: z.array(stack),
  languages: z.array(language),
  svg: z.string(),
  png: z.string(),
  link: z.string(),
})

export type Firm = z.infer<typeof firm>

export const firms: Firm[] = [
    {
      "id": 1,
      "name": "Verifereum",
      "specialities": ["Smart Contract Verification", "DeFi Protocol Verification", "Virtual Machine Verification"],
      "description": "Free and open source project developing tools and methods for full formal verification of EVM applications in higher-order logic (using HOL4).",
      "languages": ["Vyper", "Solidity"],
      "stacks": ["Ethereum"],
      "fv_language": ["HOL4", "Hoare Logic"],
      "svg": "verifereum.svg",
      "png": "verifereum.png",
      "link": "https://verifereum.org"
    },
    {
      "id": 2,
      "name": "ConsenSys Diligence",
      "specialities": ["Smart Contract Verification", "DeFi Protocol Verification"],
      "description": "As part of ConsenSys, Diligence offers advanced security services for Ethereum-based projects, including manual audits and automated analysis with tools like MythX.",
      "languages": ["Solidity"],
      "stacks": ["Ethereum"],
      "fv_language": ["Hoare Logic", "Dafny"],
      "svg": "consensys.svg",
      "png": "consensys.png",
      "link": "https://consensys.net/diligence"
    },
    {
      "id": 3,
      "name": "Runtime Verification",
      "specialities": ["Smart Contract Verification", "DeFi Protocol Verification", "Virtual Machine Verification", "Consensus Protocol Verification"],
      "description": "Focused on formal verification techniques, they provide comprehensive smart contract verification, fuzz testing, security auditing, and advisory services for various blockchain ecosystems, while also developing high-quality open-source security tools.",
      "languages": ["Solidity", "Vyper", "Rust", "Soroban", "Haskell", "TEAL", "PyTeal", "Go"],
      "stacks": ["Ethereum", "Stellar", "Polkadot", "MultiversX", "Cosmos", "Tezos", "Algorand"],
      "fv_language": ["K Framework", "Z3", "Lean 4", "Coq"],
      "svg": "runtime.svg",
      "png": "runtime.png",
      "link": "https://runtimeverification.com"
    },
    {
      "id": 4,
      "name": "Veridise",
      "specialities": ["Zero-Knowledge Circuit Verification", "Smart Contract Verification"],
      "description": "Veridise is known for its rigorous security audits and formal verification of blockchain systems, leveraging state-of-the-art research tools.",
      "languages": ["Solidity", "Rust", "Cairo"],
      "stacks": ["Ethereum", "Solana", "Starknet"],
      "fv_language": ["Coq", "Z3"],
      "svg": "veridise.svg",
      "png": "veridise.png",
      "link": "https://www.veridise.com/"
    },
    {
      "id": 5,
      "name": "Cyberscope",
      "specialities": ["Smart Contract Verification", "DeFi Protocol Verification"],
      "description": "Cyberscope specializes in formal verification, offering tailored solutions for smart contract projects, ensuring rigorous mathematical proof of correctness and security.",
      "languages": ["Solidity", "Vyper"],
      "stacks": ["Ethereum", "Binance Smart Chain"],
      "fv_language": ["Coq", "TLA+"],
      "svg": "cyberscope.svg",
      "png": "cyberscope.png",
      "link": "https://www.cyberscope.io/"
    },
    {
      "id": 6,
      "name": "ShellBoxes",
      "specialities": ["Smart Contract Verification", "Cryptographic Primitive Verification"],
      "description": "ShellBoxes offers comprehensive formal verification and security audits for various blockchain ecosystems, providing detailed reports and mitigation strategies.",
      "languages": ["Solidity", "Rust", "PyTeal"],
      "stacks": ["Ethereum", "Polygon", "Algorand"],
      "fv_language": ["Isabelle/HOL", "TLA+"],
      "svg": "shellboxes.svg",
      "png": "shellboxes.png",
      "link": "https://www.shellboxes.com/"
    },
    {
      "id": 7,
      "name": "Nethermind",
      "specialities": ["Smart Contract Verification", "Zero-Knowledge Circuit Verification", "Cryptographic Primitive Verification", "Consensus Protocol Verification"],
      "description": "Nethermind specializes in hard formal methods, leveraging the interactive theorem provers such as Lean4 and EasyCrypt to verify the most complex software in the web3 ecosystem. They focus particularly in the fields of smart-contract, zk-circuit, cryptographic protocol and distributed protocol verification.",
      "languages": ["Solidity", "Cairo"],
      "stacks": ["Ethereum", "Starknet"],
      "fv_language": ["Lean 4", "SMT Solvers (Z3, CVC4)"],
      "svg": "nethermind.svg",
      "png": "nethermind.png",
      "link": "https://www.nethermind.io/formal-verification"
    },
    {
      "id": 8,
      "name": "Formal Land",
      "specialities": ["Smart Contract Verification", "Consensus Protocol Verification"],
      "description": "Formal Land offers advanced formal verification services, specializing in translating code from languages like Rust, OCaml, Solidity, and TypeScript to the Coq proof system. They are known for their rigorous methods and innovative tools, ensuring the highest level of software security.",
      "languages": ["Solidity", "Rust", "OCaml", "TypeScript"],
      "stacks": ["Ethereum", "Aleph Zero", "Tezos"],
      "fv_language": ["Coq"],
      "svg": "formalland.svg",
      "png": "formalland.png",
      "link": "https://formal.land/"
    },
    {
      "id": 9,
      "name": "Kestrel",
      "specialities": ["Zero-Knowledge Circuit Verification", "Virtual Machine Verification"],
      "description": "Kestrel's research spans formal methods, program synthesis and refinement, program analysis and verification, formal modeling and validation, theorem proving, and planning.",
      "languages": ["Java"],
      "stacks": ["Ethereum"],
      "fv_language": ["ACL2"],
      "svg": "kestrel.svg",
      "png": "kestrel.png",
      "link": "https://www.kestrel.edu"
    },
    {
      "id": 10,
      "name": "CertiK",
      "specialities": ["Zero-Knowledge Circuit Verification", "Virtual Machine Verification", "Smart Contract Verification"],
      "description": "CertiK provides provides a comprehensive suite of tools to secure the Web3 industry at scale.",
      "languages": [],
      "stacks": ["Ethereum", "Cosmos", "zkWasm", "TON"],
      "fv_language": ["Coq"],
      "svg": "certik.svg",
      "png": "certik.png",
      "link": "https://www.certik.com/products/formal-verification"
    },
    {
      "id": 11,
      "name": "Galois",
      "specialities": ["Cryptographic Primitive Verification", "Consensus Protocol Verification", "Smart Contract Verification"],
      "description": "CertiK provides provides a comprehensive suite of tools to secure the Web3 industry at scale.",
      "languages": ["C", "Java", "Cryptol"],
      "stacks": ["Ethereum", "Stellar", "Cardano"],
      "fv_language": ["Lean 4", "SAW"],
      "svg": "galois.svg",
      "png": "galois.png",
      "link": "https://galois.com/project/blockchain-roundup/"
    },
    {
      "id": 12,
      "name": "zkSecurity",
      "specialities": ["Zero-Knowledge Circuit Verification"],
      "description": "zkSecurity is a team of experts in zero-knowledge proofs and cryptography in general. They perform security audits, development work, due diligence, research, etc.",
      "languages": ["Rust", "Circom", "Solidity", "OCaml", "TypeScript", "Cairo", "Go", "C"],
      "stacks": ["Ethereum", "Starknet", "Solana"],
      "fv_language": ["Lean 4"],
      "svg": "zksecurity.svg",
      "png": "zksecurity.png",
      "link": "https://zksecurity.xyz"
    },
    {
      "id": 13,
      "name": "Lindy Labs",
      "specialities": ["Smart Contract Verification"],
      "description": "Lindy Labs offers bespoke formal verification for DeFi projects running on Starknet or directly on Ethereum. We can prove your code matches what you claim to implement in your whitepaper!",
      "languages": ["Cairo", "Solidity"],
      "stacks": ["Starknet", "Ethereum"],
      "fv_language": ["Lean 4", "SMT Solvers (Z3, CVC4)"],
      "svg": "lindylabs.svg",
      "png": "lindylabs.png",
      "link": "https://www.lindylabs.net/"
    },
    {
      "id": 14,
      "name": "Informal Systems",
      "specialities": ["Smart Contract Verification", "Consensus Protocol Verification", "Cross-Chain Protocol Verification", "DeFi Protocol Verification"],
      "description": "Informal Systems is a company specializing in end-to-end security solutions for complex software systems. From design and formal reasoning to expert security audits, we are involved in all phases of blockchain development.",
      "languages": ["Rust", "Solidity", "Golang", "Cairo", "CosmWasm"],
      "stacks": ["Cosmos", "Ethereum", "Bitcoin", "Starknet", "Polkadot"],
      "fv_language": ["Quint", "TLA+"],
      "svg": "informal-systems.svg",
      "png": "informal-systems.png",
      "link": "https://informal.systems"
    }
  ];
