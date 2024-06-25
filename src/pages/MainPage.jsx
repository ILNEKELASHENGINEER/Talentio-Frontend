import React from 'react'
import Navbar from '../Components/Navbar'
import MusicCard from '../Components/MusicCard'
import {albumsData} from '../assets/assets.js'
import {songsData} from '../assets/assets.js'
import Sidebar from '../Components/Sidebar.jsx'
export const MainPage = () => {
    // console.log(albumsData);
  return (
    <div className='flex bg-black h-screen p-[15px] gap-[0.5rem] overflow-hidden'>
    <Sidebar />
    <div className='bg-[#1F1F1F] min-w-[75%] rounded-lg px-[15px] py-[10px] flex flex-col gap-[2.5rem]'>
        <Navbar />
        <div className='flex flex-col gap-[1rem]'>
            <h1 className='font-bold text-[30px]'>Try something else</h1>
        <div className='flex gap-[2rem]'>
        {
            
            albumsData.map((item)=>{
                return <MusicCard key={item.id} props={item} />
            })
        }
        </div>
        </div>
        <div className='flex flex-col'>
            <h2 className='font-bold text-[30px]'>Show to try</h2>
            <div className='flex  gap-[1rem]'>
            {
                songsData.map((item)=> <MusicCard key={item.id} props={item}/>)
            }
            </div>
        </div>
    </div>
    </div>
  )
}
