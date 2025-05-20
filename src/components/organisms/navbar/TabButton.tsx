import { Flex, FlexProps, Separator, Text } from '@radix-ui/themes'
import React  from 'react'

import './tabButton.css';
import { useMobile } from '../../../hooks/useMobile';

type ITabButtonProps = {
	children: React.ReactNode,
	isActive?: boolean,
} & FlexProps 

const TabButton: React.FC<ITabButtonProps> = ({
	children,
	isActive = false,
	...props
}) => {

	const [ isMobile ] = useMobile();

	return (
		<Flex 
			{...props} 
			className='tabButton-root' 
			direction={{ initial: "row-reverse", sm: "column"}}
			gap={{initial: "2", sm: "0"}}
			justify={"end"}
		>
			<Text 
				className='tabButton-text'
				style={{ 
					padding: isMobile ? "15px 10px" : "50px 20px"
				}}
			>
				{children}
			</Text>
			<Separator 
				size={"4"} 
				orientation={{ initial: "vertical", sm: "horizontal"}} 
				className='tabButton-separator' 
				style={{ 
					width: isMobile ? '5px !important' : '',
					height: isMobile ? '' : '2px !important',
					opacity: isActive ? 1 : 0, 
				}} 
			/>
		</Flex>
	)
}

export default TabButton
