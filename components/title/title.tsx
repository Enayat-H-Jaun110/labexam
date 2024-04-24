import Image from 'next/image'
import React from 'react'
import text from '../../assets/images/Text.png'
import design from '../../assets/images/Illustration.png'
import { Button } from '../ui/button'
import dot from '../../assets/images/Dot.png'

export const Title = () => {
  return (
    <div>
    <div className='flex  justify-center mt-24 ml-20 '>
        <div className='text-6xl '>
           <Image src={text} alt='text'/>
           <Button className='bg-[#4CAF4F]' >Register</Button>
        </div>

        <div>
            <Image src={design} alt='design'/>
        </div>
        </div>
        <div className='flex justify-center items-center'>
            <Image src={dot} alt='dot'/>
        </div>
    
    </div>
  )
}
