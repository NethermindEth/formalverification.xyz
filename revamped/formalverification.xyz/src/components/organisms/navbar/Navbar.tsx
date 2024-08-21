import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import { Flex, Heading, Link, Separator } from '@radix-ui/themes';

import './navbar.css';
import TabButton from './TabButton';
import { useAtom } from 'jotai';
import { navbarStateAtom, NavState } from '../../../states/navbar-atom';

const Navbar = () => {
	const [navStateAtom, setNavStateAtom] = useAtom(navbarStateAtom)
	
	const handleNavbar = (state: NavState) => {
		setNavStateAtom(state)
	}
	 
	return (
		<Flex direction='column'>
			<Flex px={"120px"} justify={"between"} align={"center"}>
				<Heading size={"3"} weight={"bold"}>FORMAL VERIFICATION</Heading>	
				<Flex>
					<TabButton 
						isActive={navStateAtom === 'firms'}
						onClick={() => handleNavbar(NavState.Firms)}
					>
						Firms
					</TabButton>
					<TabButton 
						isActive={navStateAtom === 'about'}
						onClick={() => handleNavbar(NavState.About)}
					>
						About
					</TabButton>
				</Flex>
				<Link size={"3"} className='navbar-link'>
					Add/Update Firm Info
					<MdArrowOutward />
				</Link>
			</Flex>
			<Separator size={"4"} />
		</Flex>
	)
}

export default Navbar
