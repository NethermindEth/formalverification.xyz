import { z } from "zod";

export const stack = z.enum([
 "Ethereum",
 "Binance Smart Chain",
 "Solana",
 "Tezos",
 "Algorand",
 "Polygon",
 "Starknet",
 "Aleph Zero"
])

export type Stack = z.infer<typeof stack>;

export const fvTools = z.enum([
 "Coq",
 "SMT Solvers (Z3, CVC4)",
 "Hoare Logic",
 "K Framework",
 "Z3",
 "TLA+",
 "Isabelle/HOL",
 "Lean 4",
 "CVC5",
 "EasyCrypt"
])

export type FVTools = z.infer<typeof fvTools>

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
 "TypeScript"
])

export type Language = z.infer<typeof language>

export const firm = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  specialties: z.array(speciality),
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
      "id": 2,
      "name": "ConsenSys Diligence",
      "specialties": ["Smart Contract Verification", "DeFi Protocol Verification"],
      "description": "As part of ConsenSys, Diligence offers advanced security services for Ethereum-based projects, including manual audits and automated analysis with tools like MythX.",
      "languages": ["Solidity"],
      "stacks": ["Ethereum"],
      "fv_language": ["Hoare Logic"],
      "svg": "consensys.svg",
      "png": "consensys.png",
      "link": "https://consensys.net/diligence/"
    },
    {
      "id": 3,
      "name": "Runtime Verification",
      "specialties": ["Smart Contract Verification", "Virtual Machine Verification"],
      "description": "Focused on runtime verification techniques, they provide thorough smart contract verification, analysis, and advisory services for blockchain technologies.",
      "languages": ["Solidity", "Vyper", "Haskell"],
      "stacks": ["Ethereum", "Tezos", "Algorand"],
      "fv_language": ["K Framework", "Coq"],
      "svg": "runtime.svg",
      "png": "runtime.png",
      "link": "https://runtimeverification.com/"
    },
    {
      "id": 4,
      "name": "Veridise",
      "specialties": ["Zero-Knowledge Circuit Verification", "Smart Contract Verification"],
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
      "specialties": ["Smart Contract Verification", "DeFi Protocol Verification"],
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
      "specialties": ["Smart Contract Verification", "Cryptographic Primitive Verification"],
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
      "specialties": ["Smart Contract Verification", "Zero-Knowledge Circuit Verification", "Cryptographic Primitive Verification", "Consensus Protocol Verification"],
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
      "specialties": ["Smart Contract Verification", "Consensus Protocol Verification"],
      "description": "Formal Land offers advanced formal verification services, specializing in translating code from languages like Rust, OCaml, Solidity, and TypeScript to the Coq proof system. They are known for their rigorous methods and innovative tools, ensuring the highest level of software security.",
      "languages": ["Solidity", "Rust", "OCaml", "TypeScript"],
      "stacks": ["Ethereum", "Aleph Zero", "Tezos"],
      "fv_language": ["Coq"],
      "svg": "formalland.svg",
      "png": "formalland.png",
      "link": "https://formal.land/"
    }
  ];
