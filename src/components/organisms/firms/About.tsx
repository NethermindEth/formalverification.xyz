import React, { useState } from 'react'

import "./about.css";
import { Box, Flex, Heading, Text } from '@radix-ui/themes';
import { MdAdd } from 'react-icons/md';
import { FiMinus } from 'react-icons/fi';

import ABOUTS from "./about-data";

type ICollapse = {
	heading: string,
	description:  string
}

const Collapse: React.FC<ICollapse> = ({
	heading,
	description
}) => {
	const [isOpen, setIsOpen] = useState(false)

	return <Box className='collapse-root' p={"1"} onClick={() => {setIsOpen(!isOpen)}}>
		<Flex justify={"between"} px={"3"} py={"3"} align={"center"} >
			<Text size={{ sm: "4" }}>{heading}</Text>
			{ !isOpen ? <MdAdd size={"1.5rem"} /> : <FiMinus size={"1.5rem"} />}
		</Flex>
		<Flex
			direction={"column"} 
			p={"4"}
			pt={"0"}
			className='collapse-details-root' 
			width={{ initial: "90%", sm: "80%" }}
			style={{ 
				opacity: isOpen ? 1 : 0,
				display: isOpen ? 'flex' : 'none'
			}}
			>
			<Text size={"3"}><span dangerouslySetInnerHTML={{ __html: description }} /></Text>
		</Flex>
	</Box>
}

const About = () => {
	const keys: (keyof typeof ABOUTS)[] = Object.keys(ABOUTS) as any;
	return (
		<Flex direction={"column"} gap={"6"} pb={"9"}>
			{ 
				keys.map((key: keyof typeof ABOUTS)=> {
					const data = ABOUTS[key];
					return <Flex key={data.title} px={{initial: "3", sm: "0"}} gap={"3"} direction={"column"}>
						<Heading 
							size={{ initial: "5", sm: "6" }} 
							align={"center"}
							className={"about-faq-heading"}	
						>
							{data.title}
						</Heading>
						{data.qa.map((qa: any) => {
							return <Collapse key={qa.question} heading={qa.question} description={qa.answer} />
						})}
					</Flex>
				})
			}
		</Flex>
	)
}

export default About
