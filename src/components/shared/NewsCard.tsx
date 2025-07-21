import React from 'react'
import Image from 'next/image'
import banner from '@/assets/banner.jpg'
import Link from 'next/link'
import { Button } from '../ui/button'

const NewsCard = () => {
  return (
    <div className='border p-4 rounded-md shadow-md'>
        <Link href={'/'}>
            <Image src={banner} alt='banner' className='mb-5 md:h-56 h-48 rounded hover:scale-105 cursor-pointer transition-all duration-200'/>
        </Link>
        <div className='space-y-2'>
            <h2 className='text-lg font-bold'>US Stock Futures Climb in Busy Week for Earnings: Markets Wrap</h2>
            <p className='text-gray-600'>US stock futures climbed ahead of a busy earnings week that will include results from Tesla Inc. and Alphabet Inc. The yen strengthened as Japan’s Prime Minister vowed to stay in power even after an election defeat.</p>
            <Link href={'/'}>Read More</Link>
            <div className='flex items-center gap-2'>
                <p className='text-gray-600'>Technology</p>
                <p className='text-gray-600'>2 days ago</p>
            </div>
        </div>
    </div>
  )
}

export default NewsCard