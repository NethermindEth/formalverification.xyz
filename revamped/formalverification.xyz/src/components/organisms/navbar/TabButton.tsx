import { Flex, FlexProps, Separator, Text } from '@radix-ui/themes'
import React, { useEffect, useMemo, useState } from 'react'

import './tabButton.css';

type ITabButtonProps = {
	children: React.ReactNode,
	isActive?: boolean,
} & FlexProps 

const TabButton: React.FC<ITabButtonProps> = ({
	children,
	isActive = false,
	...props
}) => {

	const [deviceWidth, setDeviceWidth] = useState<number>(0)

	useEffect(() => {
		if(window) {
			setDeviceWidth(window?.innerWidth);
		}
	}, [])

	useEffect(() => {
		window.addEventListener('resize', () => {
			if(window) {
				setDeviceWidth(window.innerWidth);
			}
		})
		return window.removeEventListener('resize', () => {})
	}, [setDeviceWidth])


	const isMobile = useMemo(() => {
		return deviceWidth < 768
	}, [deviceWidth])

	return (
		<Flex 
			{...props} 
			className='tabButton-root' 
			direction={{ initial: "row-reverse", sm: "column"}}
			justify={"end"}
		>
			<Text className='tabButton-text'>{children}</Text>
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
