import React, { useState } from 'react'
import { Firm as FirmData } from '../../../data/firms'
import { Avatar, Badge, Box, Button, Flex, Grid, Heading, Link, Separator, Text } from '@radix-ui/themes'
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
		<Box className='firm-root' pt={{ initial: "0", sm: "1" }}>
			<Grid columns={{ initial: "1fr", sm: "60px 1fr 100px" }} rows={{ initial: "60px 1fr 25px", sm: "1fr"}} gap={{ initial: "2", sm: "0"}} px={"4"} py={"4"}>
				<Flex gap={{ initial: '2'}}>
					<Avatar 
						variant='soft' 
						size={"4"} 
						radius='full' 
						src={`firms_logos/${firm.png}`} 
						alt={firm.name}
						fallback={"F"} 
					/>
					<Flex display={{ initial: 'flex', sm: 'none'}} gap={{ initial: "1", sm: "3" }} align={{ initial: "start", sm: "center"}} direction={{initial: "column", sm: "row"}}>
						<Heading size={"4"}>{firm.name}</Heading>
						<Button variant={'outline'} size={"1"} radius='large'>
							Website
							<MdArrowOutward />
						</Button>
					</Flex>
				</Flex>
				<Flex direction="column" gap={"2"}>
					<Flex display={{ initial: 'none', sm: 'flex'}} gap={{ initial: "1", sm: "3" }} align={{ initial: "start", sm: "center"}} direction={{initial: "column", sm: "row"}}>
						<Heading size={"4"}>{firm.name}</Heading>
						<Link href={firm.link} target='_blank'>
							<Button 
								variant={'outline'} 
								size={"1"} 
								radius='large'
								>
								Website
								<MdArrowOutward />
							</Button>
						</Link>
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
			{ isOpen && <Separator size={"4"} /> }
			<Flex
				direction={"column"} 
				className='firm-details-root' 
				style={{ 
					opacity: isOpen ? 1 : 0,
					display: isOpen ? 'flex' : 'none'
				}}
				>
				<Grid 
					width={"100%"} 
					columns={{ initial: "1fr", sm: "1fr 1px 1fr" }}
					rows={{ initial: "1fr 1px 1fr", sm: "1fr" }}
				>
					<Flex direction={"column"} gap={"3"} p={"4"}>
						<Flex align={"center"} gap={"2"}>
							<MdElectricBolt />
							<Text size={"2"} style={{letterSpacing: "1px"}}>SPECIALITIES</Text>
						</Flex>
						<Flex gap={"2"} wrap={"wrap"}>
							{firm.specialities.map((speciality, idx) => {
								return <Badge size={"3"} color='sky' key={`${idx}-${speciality}`}>
									{speciality}
								</Badge>
						})}</Flex>
					</Flex>
					<Separator 
						size={"4"} 
						orientation={{ initial: "horizontal", sm: "vertical"}} 
					/>
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
				</Grid>
				<Separator size={"4"} />
				<Grid 
					width={"100%"} 
					columns={{ initial: "1fr", sm: "1fr 1px 1fr" }}
					rows={{ initial: "1fr 1px 1fr", sm: "1fr" }}
				>
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
					<Separator 
						size={"4"} 
						orientation={{ initial: "horizontal", sm: "vertical"}} 
					/>
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
			</Flex>
		</Box>
	)
}

export default Firm
