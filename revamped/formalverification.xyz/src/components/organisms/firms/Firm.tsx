import React, { useState } from 'react'
import { Firm as FirmData } from '../../../data/firms'
import { Avatar, Badge, Box, Button, Card, Flex, Grid, Heading, Separator, Text } from '@radix-ui/themes'
import { MdArrowOutward } from 'react-icons/md'
import { GrFormAdd, GrFormSubtract } from 'react-icons/gr'
import { MdElectricBolt } from "react-icons/md";
import { IoShieldSharp } from "react-icons/io5";
import { BsStack } from "react-icons/bs";
import { HiCodeBracketSquare } from "react-icons/hi2";

import './firm.css'

type IFirm = {
	firm: FirmData
}

const Firm:React.FC<IFirm> = ({ firm }) => {
	const [isOpen, setIsOpen] = useState(true)
	return (
		<Box className='firm-root'>
			<Grid columns={"60px 1fr 100px"} px={"4"}>
				<Flex>
					<Avatar variant='soft' size={"3"} radius='full' src={`firms_logos/${firm.png}`} fallback={"F"} />
				</Flex>
				<Flex direction="column">
					<Flex gap={"3"} align={"center"}>
						<Heading size={"4"}>{firm.name}</Heading>
						<Button variant={'outline'} size={"1"} radius='large'>
							Website
							<MdArrowOutward />
						</Button>
					</Flex>
					<Text>{firm.description}</Text>
				</Flex>
				<Flex justify={"end"} align={"end"}>
					<Button 
						variant={'ghost'} 
						size={"2"} 
						radius='large' 
						onClick={() => {setIsOpen(!isOpen)}}
						>
						{ isOpen ? "View Less" : "View More" }	
						{ isOpen ? <GrFormSubtract /> : <GrFormAdd />}
					</Button>
				</Flex>
			</Grid>
			<Grid 
				columns={"1fr 1fr"} 
				className='firm-details-root' 
				style={{ 
					opacity: isOpen ? 1 : 0,
					display: isOpen ? 'grid' : 'none'
				}}
				>
				<Flex direction={"column"} gap={"3"} p={"4"}>
					<Flex align={"center"} gap={"2"}>
						<MdElectricBolt />
						<Text size={"2"} style={{letterSpacing: "1px"}}>SPECIALITIES</Text>
					</Flex>
					<Flex gap={"2"} wrap={"wrap"}>
						{firm.specialties.map((speciality, idx) => {
							return <Badge size={"3"} color='sky' key={`${idx}-${speciality}`}>
								{speciality}
							</Badge>
					})}</Flex>
				</Flex>
				<Flex direction={"column"} gap={"3"} p={"4"}>
					<Flex align={"center"} gap={"2"}>
						<IoShieldSharp />
						<Text size={"2"} style={{letterSpacing: "1px"}}>FORMAL VERIFICATION TOOLS</Text>
					</Flex>
					<Flex gap={"2"} wrap={"wrap"}>
					{firm.fv_language.map((fv, idx) => {
							return <Badge size={"3"} color='green' key={`${idx}-${fv}`}>
								{fv}
							</Badge>
					})}</Flex>
				</Flex>
				<Flex direction={"column"} gap={"3"} p={"4"}>
					<Flex align={"center"} gap={"2"}>
						<BsStack />
						<Text size={"2"} style={{letterSpacing: "1px"}}>STACKS</Text>
					</Flex>
					<Flex gap={"2"} wrap={"wrap"}>
						{firm.stacks.map((stack, idx) => {
							return <Badge size={"3"} color='purple' key={`${idx}-${stack}`}>
								{stack}
							</Badge>
					})}</Flex>
				</Flex>
				<Flex direction={"column"} gap={"3"} p={"4"}>
					<Flex align={"center"} gap={"2"}>
						<HiCodeBracketSquare />
						<Text size={"2"} style={{letterSpacing: "1px"}}>LANGUAGES</Text>
					</Flex>
					<Flex gap={"2"} wrap={"wrap"}>
						{firm.languages.map((language, idx) => {
							return <Badge size={"3"} color='sky' key={`${idx}-${language}`}>
								{language}
							</Badge>
					})}</Flex>
				</Flex>
			</Grid>
		</Box>
	)
}

export default Firm
