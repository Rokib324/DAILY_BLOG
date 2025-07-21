import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import banner from '@/assets/banner.jpg'


const Banner = () => {
  return (
    <div className='bg-slate-100'>
        <div className='px-4 py-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 items-center gap-5'>
            <div>
                <Image src={banner} alt='banner' />
            </div>
            <div className='space-y-4 flex flex-col'>
                <h4 className='text-sm font-medium text-gray-500'>Technology</h4>
                <h2 className='text-2xl font-bold'>US Stock Futures Climb in Busy Week for Earnings: Markets Wrap</h2>
                <p className='text-gray-600'>US stock futures climbed ahead of a busy earnings week that will include results from Tesla Inc. and Alphabet Inc. The yen strengthened as Japan’s Prime Minister vowed to stay in power even after an election defeat.</p>
                <br />
                <p className='text-gray-600'>S&P 500 contracts added 0.3% and Europe’s Stoxx 600 Index was little changed. Stellantis NV slid 1.5% after reporting a loss in the first half as restructuring expenses, slowing sales and US tariffs hit the struggling automaker. Ryanair Holdings Plc rallied 6.4% on strong earnings. The yen strengthened 0.6% while the dollar slipped.
                </p>
                <Button variant={'default'}>Read More</Button>
            </div>
        </div>
    </div>
  )
}

export default Banner