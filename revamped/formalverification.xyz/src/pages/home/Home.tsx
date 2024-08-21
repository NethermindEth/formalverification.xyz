import React from 'react'

import Navbar from '../../components/organisms/navbar/Navbar'

import './home.css';
import Hero from '../../components/organisms/hero/Hero';
import Firms from '../../components/organisms/firms/Firms';
import { Container } from '@radix-ui/themes';

const Home = () => {
	return (
		<div>
			<Navbar />
			<Container>
				<Hero />
				<Firms />
			</Container>
		</div>
	)
}

export default Home
