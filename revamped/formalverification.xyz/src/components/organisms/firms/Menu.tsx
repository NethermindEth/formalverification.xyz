import React, { Dispatch, useEffect, useRef, useState } from 'react'

import { Button, DropdownMenu, Flex, Text } from '@radix-ui/themes'

import "./menu.css"

import { MdElectricBolt } from "react-icons/md";
import { IoShieldSharp } from "react-icons/io5";
import { BsStack } from "react-icons/bs";
import { HiCodeBracketSquare } from "react-icons/hi2";
import { MdKeyboardOptionKey } from "react-icons/md";

import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im';
import { Action } from './Firms';

type IMenu = {
  label: string,
  options: string[],
  actionType: Action['type'],
  dispatcher: Dispatch<Action>
}

const Menu: React.FC<IMenu> = ({
  label,
  options: menuOptions,
  actionType,
  dispatcher
}) => {

  const options =  ["All", ...menuOptions]

  const [active, setActive] = useState(options)

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
    if(active.includes("All")) {
      return active.length - 1
    } else {
      return active.length
    }
  }

  const handleDropdownSelection = (option: string) => {
    if(option !== "All") {
      let newActive = active.filter(a => a !== "All")
      if (newActive.includes(option)) {
	newActive = newActive.filter(a => a !== option);	
	setActive([...newActive])
      } else {
	newActive.push(option)
	if(newActive.length === options.length - 1) {
	  newActive.push("All")
	}
	setActive([...newActive])
      }
    } else {
      if(active.includes("All")) {
	setActive([])
      } else {
	setActive([...options])
      }
    }
  }

  useEffect(() => {
    dispatcher({ type: actionType, newState: active.filter(a => a !== "All") })
  }, [active])

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
		{active.includes("All") ? "All" : active.join(", ")}
	      </Text>
	      { getActiveLength(active) > 0 ? <Text>({getActiveLength(active)})</Text> : <Text>-</Text> }
	    </Flex>
	    <DropdownMenu.TriggerIcon />
	  </Button>
	</Flex>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content aria-multiselectable>
	{
	  options.map((option, idx) => {
	    return <DropdownMenu.Item
	      key={`${option}:${idx}`} 
	      onSelect={(e) => {
		e.preventDefault()
		handleDropdownSelection(option)
	      }}
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
