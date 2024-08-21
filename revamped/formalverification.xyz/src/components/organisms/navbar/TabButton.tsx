import { Box, BoxProps, Separator, Text } from '@radix-ui/themes'
import React from 'react'

import './tabButton.css';

type ITabButtonProps = {
	children: React.ReactNode,
	isActive?: boolean,
} & BoxProps

const TabButton: React.FC<ITabButtonProps> = ({
	children,
	isActive = false,
	...props
}) => {
	return (
		<Box {...props} className='tabButton-root'>
			<Text className='tabButton-text'>{children}</Text>
			<Separator size={"4"} className='tabButton-separator' style={{ opacity: isActive ? 1 : 0}} />
		</Box>
	)
}

export default TabButton
