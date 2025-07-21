

import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Button } from '../ui/button';
const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
  return (
    <div className='lg:hidden'>
     {/* mobile menu */}
        <div className='lg:hidden'>
        <Button onClick={toggleMenu}>
            {isOpen ? <AiOutlineClose size={24}/> : <AiOutlineMenu size={24}/>}
        </Button>
        </div>
        </div>
  )
}

export default MobileMenu