import React, { useState } from 'react'
import LeftArrow from '../assets/left_arrow.png'
import RightArrow from '../assets/right_arrow.png'
import Button from './Button'
import Bell from '../assets/bell.png'
import {  useNavigate } from 'react-router-dom'
const Navbar = () => {
    // const [data,setdata]=useState('')
    const navigate=useNavigate();
    const data=localStorage.getItem('firstname').charAt(0).toUpperCase()

  return (
    <div className='flex flex-col gap-[2rem] px-[20px]'>
    <div className='flex justify-between w-full h-fit  items-center'>
        <div className='flex gap-[2rem]'>
            <div className='bg-[#0F0F0F] p-[10px] rounded-full hover:bg-[#706d70e4] hover:rounded-full' onClick={()=> navigate(-1)}>
                <img src={LeftArrow} alt="" className='max-h-[20px] cursor-pointer' />
            </div>
            <div className='bg-[#0F0F0F] p-[10px] rounded-full hover:bg-[#706d70e4] hover:rounded-full' onClick={()=>navigate(1)}>
                <img src={RightArrow} alt="" className='max-h-[20px] cursor-pointer '  />
            </div>
            
        </div>
        {
            !data ?
            <div className='flex gap-[2rem] items-center'>
            <div onClick={()=>navigate('/register')}>
                <Button text={"SignUp"} bg={"white"}  />
            </div>
            <div>
                <Button text={"Login"}/>
            </div>
            </div>: 
            <div className='flex gap-[2rem]'>
                <div>
            <Button text={"Explore Premium"} bg={"white"}/>
            </div>
            <div>
            <Button text={"Install App"}/>
            </div>
            <div className=' bg-[red] min-h-[40px] min-w-[40px] rounded-full px-[15px] py-[7px] cursor-pointer'>
                <p className='font-extrabold'>{data}</p>
            </div>
            
            </div>
        
        }
        

    </div>
    <div className='flex gap-[1.5rem]'>
        <Button text={"All"} bg={"white"}/>
        <Button text={"Music"} />
        <Button text={"Podcasts"} />
    </div>
    </div>
  )
}

export default Navbar