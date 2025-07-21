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


const Navbar = () => {
  return (
    <header className='py-4 shadow-md'>
        <nav className=' flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            {/* logo */}
            <div className='text-2xl font-bold'>
                <Link href="/">Daily Blogs</Link>
            </div>
            {/* desktop menu */}
            <NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
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
            <Button variant="outline" className='bg-black text-white hover:bg-gray-800 hover:text-white'>Login</Button>

        </nav>
    </header>
  )
}

export default Navbar