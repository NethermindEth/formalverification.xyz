import React from 'react'

import "./hero.css";
import { Button, Flex, Heading, Text } from '@radix-ui/themes';
import { MdArrowForward } from "react-icons/md";
import { useAtom } from 'jotai';
import { navbarStateAtom, NavState } from '../../../states/navbar-atom';

export type IHero = {
	title: string,
	description: string,
	cta: boolean,
	ctaText?: string
}

const Hero:React.FC<IHero> = ({
	title,
	description,
	cta,
	ctaText
}) => {


	const [_, setNavState] = useAtom(navbarStateAtom)

	return (
		<Flex 
			direction={"column"} 
			justify={"center"} 
			align={"center"} 
			gap={{ initial: "5", sm: "6" }} 
			px={{initial: "2rem", sm: "3rem" }}
			py={{initial: "5rem", sm: "6rem"}}
			className='hero-root'
			>
			<Flex direction={"column"} gap={{ initial: "3", sm: "5" }} className='hero-text-wrapper'>
				<Heading size={{ initial: "6", sm: "9" }} className='hero-text-title'>
					{title}	
				</Heading>
				<Text className='hero-text-subtitle'>
					{description}	
				</Text>
			</Flex>
			{ 
				cta && <Button 
					className='hero-button' 
					size={{ initial: "3", sm: "4"}}
					variant='outline'
					onClick={() => {setNavState(NavState.About)}}
					>
					{ctaText}	
					<MdArrowForward />
				</Button>
			}
		</Flex> 
	)
}

export default Hero
