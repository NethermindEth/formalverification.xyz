export default {
	faqs: {
		title: "FAQ: Formal Verification vs. Auditing and Testing",
		qa: [
			{
				question: "How does formal verification differ from auditing and testing?",
				answer: "While auditing and testing are important for ensuring the quality and security of software, they have limitations. Auditing is a manual process that relies on human expertise and can be prone to oversights. Testing can only cover a finite number of scenarios and may miss edge cases. Formal verification, on the other hand, uses mathematical proofs to demonstrate the correctness of a system under all possible conditions, providing a higher level of assurance."
			},
			{
				question: "Where can things go wrong in formal verification?",
				answer: "Formal verification is not foolproof. The process can be complex and time-consuming, and errors can occur in the specification of requirements, or the modeling of the system. Additionally, formal verification relies on the correctness of the underlying tools and theories, which may have their own limitations or flaws, though this is on the order of not trusting your compiler in normal software projects - a legitimate but rare concern."
			},
			{
				question: "Where can formal verification provide complete correctness?",
				answer: "When done properly, formal verification can provide complete correctness for specific properties or aspects of a system. For example, it can prove the absence of certain types of bugs, such as integer overflows or reentrancy vulnerabilities in smart contracts. It can also verify the correctness of algorithms, protocols, and state machine transitions. However, formal verification cannot guarantee the overall correctness or security of a system, as it is limited to the properties that are specified and proven."
			},
			{
				question: "What are ATP and ITP in formal verification?",
				answer: "ATP (Automated Theorem Proving) and ITP (Interactive Theorem Proving) are two main approaches to formal verification. ATP systems, such as SMT solvers, automatically search for proofs based on a set of axioms and inference rules. ITP systems, such as Coq and Isabelle/HOL, require users to guide the proof process by providing intermediate steps and proof strategies. ATP is often used for solving specific verification tasks, while ITP is used for more complex and expressive proofs."
			},
			{
				question: "What is the formal verification process?",
				answer: "The formal verification process typically involves the following steps: <br /><br /> 1. Understanding the codebase and its requirements <br /> 2. Developing a formal model of the system <br /> 3. Defining the properties to be verified <br /> 4. Extracting the relevant parts of the codebase into the formal model <br /> 5. Constructing proofs using appropriate tools and techniques <br /> 6. Publishing the proofs for review and validation <br /><br /> This process requires expertise in both the problem domain and formal methods, and close collaboration between developers, auditors, and formal verification specialists."
			}
		]
	},
	key: {
		title: "Key Specialties",
		qa: [
			{
				question: "Formal Verification",
				answer: "Formal verification is the process of using mathematical techniques to prove the correctness of a system or program. In the context of blockchain and smart contracts, formal verification is used to ensure that the contracts behave according to their specifications and are free from logical errors and security vulnerabilities."
			},
			{
				question: "Zero-Knowledge Circuits",
				answer: "Zero-knowledge circuits are a cryptographic technique that allows one party to prove to another that they know a certain piece of information without revealing the information itself. This is particularly useful in blockchain applications for enhancing privacy and enabling secure transactions without disclosing sensitive data."
			},
			{
				question: "Security Analysis",
				answer: "Security analysis involves assessing the overall security posture of a blockchain system or smart contract application. This includes identifying potential attack vectors, evaluating the effectiveness of security controls, and recommending mitigation strategies to address any weaknesses or vulnerabilities."
			}
		]
	},
	fvl: {
		title: "Formal Verification Languages",
		qa: [
			{
				question: "Coq",
				answer: "Coq is an interactive theorem prover and formal proof management system. It allows users to write mathematical definitions, executable algorithms, and theorems, and provides tools for proving properties about them. Coq is widely used in the formal verification of smart contracts and blockchain protocols."
			},
			{
				question: "SMT Solvers (Z3, CVC4)",
				answer: "Satisfiability Modulo Theories (SMT) solvers, such as Z3 and CVC4, are automated tools that can decide the satisfiability of logical formulas over various theories, such as arithmetic, arrays, and uninterpreted functions. SMT solvers are commonly used in the formal verification of smart contracts to check for properties like safety, liveness, and security."
			},
			{
				question: "K Framework",
				answer: "The K Framework is a rewrite-based executable semantic framework for defining programming languages, type systems, and formal analysis tools. It allows users to define the syntax and semantics of a language in a modular and executable manner, making it well-suited for formally verifying smart contracts and blockchain implementations."
			},
			{
				question: "Isabelle/HOL",
				answer: "Isabelle/HOL is a generic proof assistant that allows users to define mathematical concepts, formulate theorems, and prove them using a variety of automated and interactive proof methods. It is based on higher-order logic and is used for formally verifying complex systems, including blockchain protocols and smart contracts."
			},
			{
				question: "TLA+",
				answer: "TLA+ is a formal specification language for describing and reasoning about concurrent and distributed systems. It is based on mathematical logic and set theory and allows users to specify system behavior, state properties, and prove correctness using a combination of model checking and theorem proving. TLA+ is used for formally verifying blockchain consensus algorithms and smart contract systems."
			},
			{
				question: "Lean 4",
				answer: "Lean 4 is a theorem prover and functional programming language that aims to bridge the gap between interactive and automated theorem proving. It features a powerful type system, a rich mathematical library, and a tactic language for writing proofs. Lean 4 is gaining popularity in the formal verification of smart contracts and blockchain systems due to its expressiveness and ease of use."
			},
		]
	}
} as const;

