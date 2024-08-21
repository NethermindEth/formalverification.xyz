import React from 'react'

import "./hero.css";
import { Button, Flex, Heading, Text } from '@radix-ui/themes';
import { MdArrowForward } from "react-icons/md";

const Hero:React.FC = () => {
  return (
 	<Flex direction={"column"} justify={"center"} align={"center"} gap={"6"} className='hero-root'>
		<Flex direction={"column"} gap={"5"} className='hero-text-wrapper'>
			<Heading size={"9"} className='hero-text-title'>
				Explore The Top Formal Verification Firms in Crypto
			</Heading>
			<Text className='hero-text-subtitle'>
				Discover firms specializing in blockchain and cryptocurrency technologies. Formal verification uses mathematical proofs to demonstrate the correctness and security.
			</Text>
		</Flex>
		<Button 
			className='hero-button' 
			size={"4"} 
			variant='outline'
		>
			About Formal Verification
			<MdArrowForward />
		</Button>
	</Flex> 
  )
}

export default Hero
