import React from 'react'
import Home from '../assets/home.png'
import Search from '../assets/search.png'
import Library from '../assets/stack.png'
import Plus from '../assets/plus.png'
import Arrow from '../assets/arrow.png'
import Button from './Button'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='min-w-[20%] h-full flex flex-col gap-[0.5rem] '>
        <div className='flex flex-col gap-[1.5rem] bg-[#121212] rounded-lg p-[15px]  px-[20px]'>
        <div className='flex items-center gap-[1rem] '>
            <div>
                <img src={Home} alt="home" className='max-h-[30px]'/>
            </div>
            <div>
                <Link to={"/"}>
                <h1 className='font-bold cursor-pointer'>Home</h1>
                </Link>
            </div>
        </div>
        <div className='flex items-center gap-[1rem] '>
            <div>
                <img src={Search} alt="home" className='max-h-[30px]'/>
            </div>
            <div>
                <h1 className='font-bold'>Search</h1>
            </div>
        </div>
        </div>
        <div className='flex flex-col gap-[1.5rem] bg-[#121212] rounded-lg  p-[15px] h-[100%] px-[20px]'>
        <div className='flex justify-between'>
            <div className='flex items-center gap-[1rem]'>
            <div>
                <img src={Library} alt="home" className='max-h-[30px]'/>
            </div>
            <div>
                <h1 className='font-bold'>Your Library</h1>
            </div>
            </div>
            <div className='flex gap-[0.5rem] items-center'>
            <div>
                <img src={Plus} alt="" className='max-h-[15px] text-[#818181]'/>
            </div>
            <div>
                <img src={Arrow} alt="" className='max-h-[15px]'/>
            </div>
            </div>
        </div>
        <div className='flex flex-col gap-[1rem] bg-[#242424] p-[20px] rounded-lg'>
            <h3 className='font-bold'>Create your first playlist</h3>
            <p>It's easy we'll help you</p>
            <Button text={"Create Playlist"} bg="white"/>
        </div>
        <div className='flex flex-col gap-[1rem] bg-[#242424] p-[20px] rounded-lg'>
            <h3 className='font-bold'>Let's find some people</h3>
            <p>It's easy we'll help you</p>
            <Button text={"Browse Podcasts"} bg="white"/>
        </div>
        </div>
    </div>
  )
}

export default Sidebar