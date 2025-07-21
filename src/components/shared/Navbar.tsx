'use client'
import Link from 'next/link'
import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
  import { Button } from "@/components/ui/button"
  import { Switch } from "@/components/ui/switch"
  import { AiOutlineMenu } from "react-icons/ai";





const Navbar = () => {
  return (
    <header className='py-4 shadow-md'>
        <nav className=' flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            {/* logo */}
            <div className='text-2xl font-bold'>
                <Link href="/">Daily Blogs</Link>
            </div>
            {/* desktop menu */}
            <NavigationMenu className='hidden lg:flex'>
                <NavigationMenuList>
                    <NavigationMenuItem className='flex items-center space-x-8'>
                        <NavigationMenuLink href='/news' className='text-gray-700 hover:text-gray-600'>News</NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className='text-gray-700 hover:text-gray-600'>Services</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavigationMenuLink href='/services/ios' className='text-gray-700 hover:text-gray-600'>IOS</NavigationMenuLink>
                        <NavigationMenuLink href='/services/web' className='text-gray-700 hover:text-gray-600'>Web Development</NavigationMenuLink>
                        <NavigationMenuLink href='/services/app' className='text-gray-700 hover:text-gray-600'>App Development</NavigationMenuLink>
                        <NavigationMenuLink href='/services/ai' className='text-gray-700 hover:text-gray-600'>AI Development</NavigationMenuLink>
                    </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink href='/about' className='text-gray-700 hover:text-gray-600'>About</NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink href='/contact' className='text-gray-700 hover:text-gray-600'>Contact</NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

            {/* toggle menu and login button */}
            <div className='hidden lg:flex items-center space-x-4'>
                <div className='flex items-center space-x-2'>
                    <span className='mr-2'>Dark Mode</span>
                    <Switch />
                </div>
                <Button variant="default">Login</Button>
            </div>
            
            {/* mobile menu */}
            <div className='lg:hidden'>
                <Button>
                    <AiOutlineMenu size={24}/>
                </Button>
            </div>
            
        </nav>
    </header>
  )
}

export default Navbar