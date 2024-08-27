import React, { useMemo } from 'react'

import Navbar from '../../components/organisms/navbar/Navbar'

import './home.css';
import Hero, { IHero } from '../../components/organisms/hero/Hero';
import Firms from '../../components/organisms/firms/Firms';
import { Container } from '@radix-ui/themes';
import Footer from '../../components/organisms/footer/Footer';
import { navbarStateAtom, NavState } from '../../states/navbar-atom';
import { useAtom } from 'jotai';
import About from '../../components/organisms/firms/About';

const HERO_CONTENT: Record<NavState, IHero> = {
	"firms": {
		title: "Explore The Top Formal Verification Firms in Crypto",
		description: "Discover firms specializing in blockchain and cryptocurrency technologies. Formal verification uses mathematical proofs to demonstrate the correctness and security.",
		cta: true,
		ctaText: "About Formal Verification"
	},
	"about": {
		title: "About Formal Verification in Crypto",
		description: "Formal verification is a rigorous mathematical approach to proving the correctness and security of software systems, including blockchain and smart contract applications. It involves using formal methods and tools to analyze and verify the behavior of a system against its specified requirements and properties.",
		cta: false,
	},
}

const Home = () => {
	const [navState] = useAtom(navbarStateAtom)

	const content = useMemo(() => {
		switch(navState) {
			case NavState.About: return <About />
			case NavState.Firms: return <Firms />
		}
	}, [navState])
	return (
		<div className='home-root'>
			<div className='home-overlay-bg-1'>
				<div className='home-overlay-bg-2'>
					<Navbar />
					<Container>
					<Hero {...HERO_CONTENT[navState]} />
						{content}	
					</Container>
					<Footer />
				</div>
			</div>
		</div>
	)
}

export default Home
