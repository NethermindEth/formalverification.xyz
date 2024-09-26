import { useEffect, useState } from 'react'
import { MdArrowOutward } from "react-icons/md";
import { Button, Flex, Grid, Heading, Link, Separator } from '@radix-ui/themes';

import './navbar.css';
import TabButton from './TabButton';
import { useAtom } from 'jotai';
import { navbarStateAtom, NavState } from '../../../states/navbar-atom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';
import { useMobile } from '../../../hooks/useMobile';

const Navbar = () => {
	const [navStateAtom, setNavStateAtom] = useAtom(navbarStateAtom)
	
	const handleNavbar = (state: NavState) => {
		setNavStateAtom(state)
	}

	const [isOpen, setIsOpen] = useState(false)

	const [isMobile] = useMobile()

	useEffect(() => {
		if(!isMobile) {
			setIsOpen(false)
		}
	}, [isMobile])

	const closeMobileNav = () => {
		setIsOpen(false)
	}
	 
	return (
		<Flex direction='column' overflow={"hidden"}>
			<Flex px={{ initial: "3", sm: "120px"}} py={{ initial: "5", sm: "0"}} justify={"between"} align={"center"}>
				<Heading size={"3"} weight={"bold"}>FORMAL VERIFICATION</Heading>	
				<Flex display={{ initial: 'none', sm: 'flex'}}>
					<TabButton 
						isActive={navStateAtom === 'firms'}
						onClick={() => { 
							handleNavbar(NavState.Firms) 
							closeMobileNav()
						}}
					>
						Firms
					</TabButton>
					<TabButton 
						isActive={navStateAtom === 'about'}
						onClick={() => { 
							handleNavbar(NavState.About) 
							closeMobileNav()
						}}
					>
						About
					</TabButton>
				</Flex>
				<Flex display={{ initial: 'none', sm: 'flex'}}> 
					<Link 
						size={"3"} 
						className='navbar-link'
						href='https://github.com/NethermindEth/formalverification.xyz/tree/master/src/data'
						target='_blank'
					>
						Add/Update Firm Info
						<MdArrowOutward />
					</Link>
				</Flex>
				<Flex display={{ initial: 'flex', sm: 'none'}}> 
					<Button variant='ghost' size={"4"} onClick={() => setIsOpen(!isOpen)}>
						<GiHamburgerMenu />
					</Button>
				</Flex>
			</Flex>
			<Separator size={"4"} />
			<Flex 
				className='mobile-nav-root' 
				display={isOpen ? 'flex' : 'none'}
			>
				<Grid rows={"70px 1px 1fr 1px 60px"} width={"100%"}>
					<Flex
						px={{ initial: "3"}} 
						py={{ initial: "5" }} 
						justify={"between"} 
					>
						<Heading size={"3"} weight={"bold"}>FORMAL VERIFICATION</Heading>	
						<Button variant='ghost' size={"4"} onClick={() => setIsOpen(!isOpen)}>
							<RxCross2 />
						</Button>
					</Flex>
					<Separator size={"4"} />
					<Flex display={'flex'} direction={"column"} gap={"2"} pt={"5"}>
						<TabButton 
							isActive={navStateAtom === 'firms'}
							onClick={() => { 
								handleNavbar(NavState.Firms) 
								closeMobileNav()
							}}
							>
							Firms
						</TabButton>
						<TabButton 
							isActive={navStateAtom === 'about'}
							onClick={() => { 
								handleNavbar(NavState.About) 
								closeMobileNav()
							}}
							>
							About
						</TabButton>
					</Flex>
					<Separator size={"4"} />
					<Flex  
						display={'flex'} 
						align={"center"}
						px={{ initial: "3"}} 
						py={{ initial: "5" }}
					>
						<Link 
							size={"3"} 
							className='navbar-link' 
							href='https://github.com/NethermindEth/formalverification.xyz/tree/master/src/data'
							target='_blank'
						>
							Add/Update Firm Info
							<MdArrowOutward />
						</Link>
					</Flex>
				</Grid>

			</Flex>
		</Flex>
	)
}

export default Navbar
