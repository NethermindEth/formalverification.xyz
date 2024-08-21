import React, { useEffect, useRef, useState } from 'react'

import { Button, DropdownMenu, Flex, Heading, Text } from '@radix-ui/themes'

import "./menu.css"

import { MdElectricBolt } from "react-icons/md";
import { IoShieldSharp } from "react-icons/io5";
import { BsStack } from "react-icons/bs";
import { HiCodeBracketSquare } from "react-icons/hi2";
import { MdKeyboardOptionKey } from "react-icons/md";

import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im';

type IMenu = {
  label: string,
  options: string[]
}

const Menu: React.FC<IMenu> = ({
  label,
  options: menuOptions
}) => {

  const options =  ["All", ...menuOptions]

  const [active, setActive] = useState([options[0] ?? "-"])

  const getOptionText = (option: string) => {
    switch(option) {
      case "All": return `All ${label}`;
      default: return option;
    }
  }

  const getFilterIcon = (label: string) => {
    switch(label?.toUpperCase()) {
      case 'SPECIALITIES': return <MdElectricBolt />;
      case 'FORMAL VERIFICATION TOOLS': return <IoShieldSharp />;
      case 'STACKS': return <BsStack />;
      case 'LANGUAGES': return <HiCodeBracketSquare />;
      default: return <MdKeyboardOptionKey />;
    }
  }

  const getActiveLength = (active: string[]) => {
    if(active && active.length === 1) {
      if(active[0] === "All") {
	return options.length
      } else {
	return active.length
      }
    } else {
      return active?.length
    }
  }

  const handleDropdownSelection = (option: string) => {
    if(option !== "All") {
      let newActive = active.filter(a => a !== "All")
      if (newActive.includes(option)) {
	newActive = newActive.filter(a => a !== option);	
	if(newActive.length === 0) {
	  setActive(["All"])
      } else {
	  setActive([...newActive])
	}
      } else {
	setActive([...newActive, option])
      }
    } else {
      setActive(["All"])
    }
  }

  const refButton = useRef<HTMLButtonElement | null>(null)

  const [textWidth, setTextWidth] = useState(0)

  useEffect(() => {
      if(refButton.current) {
	setTextWidth(refButton.current?.getBoundingClientRect()?.width);
      }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', () => {
      if(refButton.current) {
	setTextWidth(refButton.current?.getBoundingClientRect()?.width);
      }
    })
    return window.removeEventListener('resize', () => {})
  }, [refButton])

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className='menu-dropdown-trigger'>
	<Flex direction={"column"} gap={"2"}>
	  <Text size={"2"} style={{letterSpacing: "1px"}}>{label?.toUpperCase()}</Text>
	  <Button 
	    variant="outline" 
	    color='gray' 
	    size={"3"} 
	    className='menu-dropdown-button' 
	    ref={refButton}
	  >
	    {getFilterIcon(label)} 
	    <Flex gap={"1"}>
	      <Text 
		className='menu-trigger-button-text' 
		style={{ maxWidth: `${textWidth - 120}px` }}
	      >
		{active.join(", ")}
	      </Text>
	      <Text>({getActiveLength(active)})</Text>
	    </Flex>
	    <DropdownMenu.TriggerIcon />
	  </Button>
	</Flex>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content aria-multiselectable >
	{
	  options.map((option, idx) => {
	    return <DropdownMenu.Item
	      key={`${option}:${idx}`} 
	      onClick={() => handleDropdownSelection(option)}
	      >
	      {active.includes(option) || active.includes("All") ? <ImCheckboxChecked size={"16"} /> : <ImCheckboxUnchecked size={"16"} />}
	      {getOptionText(option)}
	    </DropdownMenu.Item>
	  })
	}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}

export default Menu
