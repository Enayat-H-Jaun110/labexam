import React from 'react'
import logo1 from '../../assets/images/Logo (1).png'
import logo2 from '../../assets/images/Logo (2).png'
import logo3 from '../../assets/images/Logo (3).png'
import logo4 from '../../assets/images/Logo (4).png'
import logo5 from '../../assets/images/Logo (5).png'
import logo6 from '../../assets/images/Logo (6).png'
import logo7 from '../../assets/images/Logo (7).png'
import text from '../../assets/images/Community.png'
import footer from '../../assets/images/Frame 4.png'
import Image from 'next/image'


export const Bodyi = () => {
  return (
    <div>
        <div className='flex mt-10 text-3xl text-[#4D4D4D] justify-center items-center'>
            Our Clients</div>
         <div className='flex text-[#717171] justify-center items-center '>
            we are working with our 500+ Fortune
            </div>   

          <div className='flex mt-10 pt- 10 justify-center gap-20'>
            <Image src={logo1} alt='logo2' />
            <Image src={logo2} alt='logo2' />
            <Image src={logo3} alt='logo2' />
            <Image src={logo4} alt='logo2' />
            <Image src={logo5} alt='logo2' />
            <Image src={logo6} alt='logo2' />
            <Image src={logo7} alt='logo2' />
            </div>  

           <div className='flex mt-12 justify-center items-center'>
            <Image src={text} alt='text' />
            </div> 

            <div className='flex justify-center m-10'>
                <Image src={footer} alt=''/>
            </div>

    </div>
  )
}
