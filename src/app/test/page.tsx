import { prisma } from '@/lib/db'
import React from 'react'

const Page = async() => {
    const voices=await prisma.voice.findMany()
  return (
    <div className='p-4'>
        <h1 className='text-2xl font-bold mb-4'>
            Voices {voices.length}</h1>
        <ul className='list-disc list-inside'>
            {voices.map((voice)=>(
                <li 
                className='text-lg'
                key={voice.id}>{voice.name} - {voice.variant}</li>
            ))}
        </ul>
    </div>
  )
}

export default Page