import Image from 'next/image'
import React from 'react'
import logo from '../../assets/images/Logo.png'
import { Button } from '../ui/button'
export const NavBar = () => {
  return (
    <div className='flex mt-16 justify-center items-center bg#F5F7FA '>
        <div className=' mx-12 px-12'>
            <Image  src={logo} alt='logo'/>
        </div>

        <div className='flex  '>
            <div>
                <Button variant={'secondary'}>Home</Button>
            </div>
            <div>
            <Button variant={'secondary'}>Service</Button>
            </div>
            <div>
            <Button variant={'secondary'}>Feature</Button>
            </div>
            <div>
            <Button variant={'secondary'}>Product</Button>
            </div>
            <div>
            <Button variant={'secondary'}>Testimonial</Button>
            </div>
            <div>
            <Button variant={'secondary'}>FAQ</Button>
            </div>
        </div>
        <div className='flex ml-20 bg#green'>
            <Button variant={'secondary'} className='text-bg##F5F7FA'>Login</Button>
            <Button  className='bg-[#4CAF4F]'>Sign Up</Button>
        </div>
        
        
    </div>
  )
}
