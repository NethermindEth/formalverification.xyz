import React from 'react'

import Navbar from '../../components/organisms/navbar/Navbar'

import './home.css';
import Hero from '../../components/organisms/hero/Hero';
import Firms from '../../components/organisms/firms/Firms';
import { Container } from '@radix-ui/themes';
import Footer from '../../components/organisms/footer/Footer';

const Home = () => {
	return (
		<div className='home-root'>
			<Navbar />
			<Container>
				<Hero />
				<Firms />
			</Container>
			<Footer />
		</div>
	)
}

export default Home
