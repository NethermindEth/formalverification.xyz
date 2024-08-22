import React, { useMemo, useReducer } from 'react'

import "./firms.css";
import { Flex, Heading, Text } from '@radix-ui/themes';
import Menu from './Menu';

import { firms, FVTools, fvTools, Language, language, Speciality, speciality, Stack, stack } from "../../../data/firms";
import Firm from './Firm';

export type Action = {
	type: "SPECIALITIES" | "FVTOOLS" | "STACKS" | "LANGUAGES",
	newState: string[]
}

type State = {
	"SPECIALITIES" : Speciality[],
	"FVTOOLS" : FVTools[],
	"STACKS" : Stack[],
	"LANGUAGES": Language[]
}

function reducer(state: State, action: Action) {
	return {
		...state,
		[action.type]: action.newState
	}
}

const Firms = () => {

	const [filterState, dispatchFilter] = useReducer(reducer, {
		"SPECIALITIES": speciality.options,
		"FVTOOLS": fvTools.options,
		"STACKS": stack.options,
		"LANGUAGES": language.options
	})

	const filteredFirms = useMemo(() => {
		return firms.filter(firm => {
			const sState = filterState.SPECIALITIES.filter((speciality) => firm.specialties.includes(speciality))
			const fState = filterState.FVTOOLS.filter((fvTool) => firm.fv_language.includes(fvTool))
			const stackState = filterState.STACKS.filter((stack) => firm.stacks.includes(stack))
			const lState = filterState.LANGUAGES.filter((language) => firm.languages.includes(language))
			return sState?.length > 0 && fState.length > 0 && stackState.length > 0 && lState.length > 0
		})
		}, [filterState])

	return (
		<Flex direction={"column"} gap={"4"} pb={"9"}>	
			<Heading size={"6"} align={"center"}>Choose the firm that meets your needs!</Heading>
			<Flex justify={"between"} align={"stretch"}>
				<Menu 
					options={speciality.options} 
					dispatcher={dispatchFilter} 
					label='Specialities' 
					actionType='SPECIALITIES'
				/>
				<Menu 
					options={fvTools.options} 
					dispatcher={dispatchFilter} 
					label='Formal Verification Tools' 
					actionType='FVTOOLS'
				/>
				<Menu 
					options={stack.options} 
					dispatcher={dispatchFilter}
					label='Stacks' 
					actionType='STACKS'
				/>
				<Menu 
					options={language.options} 
					dispatcher={dispatchFilter} 
					label='Languages' 
					actionType='LANGUAGES'
				/>
			</Flex>
			<Flex py={"4"} gap={"5"} direction={"column"}>
				{ 
					filteredFirms?.length > 0 
						? <>
							<Flex px={"4"}>
							<Text>{filteredFirms.length} FIRMS FOUND</Text>
							</Flex>
							{ 
								filteredFirms.map((firm) => {
									return <Firm key={JSON.stringify(firm)} firm={firm} />
								})
							}
						</> 
						: <Flex direction={"column"} align={"center"} gap={"2"} justify={"center"} p={"9"} className='no-firm-wrapper'>
							<img src='exclaimation.svg' alt='exclaimation' />
							<Text align={"center"}>
								No firms found with the selected filters.
								<br />
								Please try another combination.
							</Text>
						</Flex> 
				}
			</Flex>
		</Flex>
	)
}

export default Firms
