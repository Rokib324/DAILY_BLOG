import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'

const NewsCard = ({article}: {article: any}) => {
  return (
    <div className='border p-4 rounded-md shadow-md flex flex-col h-full'>
        <Link href={article.url}>
            <Image 
                src={article.urlToImage} 
                alt='banner' 
                width={400}
                height={300}
                className='mb-5 md:h-56 h-48 rounded hover:scale-105 cursor-pointer transition-all duration-200 w-full object-cover'
            />
        </Link> 
        <div className='space-y-2 flex-1 flex flex-col'>
            <h2 className='text-lg font-bold line-clamp-1'>{article.title}</h2>
            <p className='text-gray-600 line-clamp-1 flex-1'>{article.description}</p>
            <Button variant={'default'} className='mt-auto'>Read More</Button>
        </div>
    </div>
  )
}

export default NewsCard