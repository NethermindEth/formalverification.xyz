import React, { useMemo } from 'react'

import "./firms.css";
import { Flex, Heading, Text } from '@radix-ui/themes';
import Menu from './Menu';

import { firms, fvTools, language, speciality, stack } from "../../../data/firms";
import Firm from './Firm';

const Firms = () => {
	const specialities = speciality.options 
	const formalVerification = fvTools.options
	const stacks = stack.options 
	const languages = language.options

	const filteredFirms = useMemo(() => {
		return firms
		}, [])

	return (
		<Flex direction={"column"} gap={"4"} pb={"9"}>	
			<Heading size={"6"} align={"center"}>Choose the firm that meets your needs!</Heading>
			<Flex justify={"between"} align={"stretch"}>
				<Menu options={specialities} label='Specialities' />
				<Menu options={formalVerification} label='Formal Verification Tools' />
				<Menu options={stacks} label='Stacks' />
				<Menu options={languages} label='Languages' />
			</Flex>
			<Flex py={"4"} gap={"5"} direction={"column"}>
				<Flex px={"4"}>
					<Text>{4} FIRMS FOUND</Text>
				</Flex>
				{
				filteredFirms.map((firm) => {
						return <Firm key={JSON.stringify(firm)} firm={firm} />
					})
				}
			</Flex>
		</Flex>
	)
}

export default Firms
