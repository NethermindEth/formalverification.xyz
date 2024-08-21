import { Container, Flex, Link, Separator, Text } from '@radix-ui/themes'
import React from 'react'

import "./footer.css";
import { FaDiscord, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <Flex direction={"column"} className='footer-root'>
      <Container>
      <Flex px={"1"} py={"5"} gap={"1"}>
	<Text>
	  Is your company missing or incorrect? 
	</Text>
	<Link>Add or update via PR</Link>
      </Flex>
      </Container>
      <Separator size={"4"} />
      <Container>
      <Flex px={"1"} py={"5"} gap={"1"} justify={"between"}>
	  <Text>©2024 Nethermind. All Rights Reserved</Text>
	  <Flex>
	    <img src='powered_by.svg' alt='powered_by' />
	  </Flex>
	  <Flex gap={"5"}>
	    <Link>
	      <Flex justify={"center"} align={"center"} gap={"2"}>
		<Text> Follow us  </Text>
		<FaXTwitter />
	      </Flex>
	    </Link>
	    <Link>
	      <Flex justify={"center"} align={"center"} gap={"2"}>
		<Text> Join us  </Text>
		<FaDiscord size={"20"}/>
	      </Flex>
	    </Link>
	  </Flex>
      </Flex>
      </Container>
    </Flex> 
  )
}

export default Footer
