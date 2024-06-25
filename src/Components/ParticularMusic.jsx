import React from 'react'
import { useParams } from 'react-router-dom'
import { songsData } from '../assets/assets'
import { albumsData } from '../assets/assets'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import SpotifyLogo from '../assets/spotify_logo.png'
import Clock from '../assets/clock_icon.png'
import Table from './Table'
const ParticularMusic = () => {
    const { id } = useParams();
    console.log(id)
    const data = albumsData[id]
    console.log(data);
    return (
        <div className='flex bg-black h-screen p-[15px] gap-[0.5rem] overflow-hidden'>
            <Sidebar />
            <div className='w-full flex flex-col gap-[2rem]'>
                <Navbar />
                <div className='px-[20px] flex items-center gap-[2rem]'>
                    <img src={data.image} alt="" className='max-h-[300px] max-w-[300px]' />
                    <div className='flex flex-col gap-[1rem]'>
                        <p>Playlist</p>
                        <p className='text-[30px] font-bold'>{data.name}</p>
                        <p className='text-[16px] text-[#645f5f]'>{data.desc}</p>
                        <div className='flex w-full gap-[1rem] '>
                            <img src={SpotifyLogo} alt="" className='max-w-[20px] min-w-[20px] object-contain' />
                            <p className='font-bold'>Spotify</p>
                            <ul className='list-disc flex ml-[10px] gap-[1.5rem]'>
                                <li>2,157,746 likes</li>
                                <li>50 songs, about 2 hr 45 min</li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className='flex flex-col gap-[2rem] justify-center p-[20px]'>
                    <div className='flex justify-between px-[10px] font-bold text-[18px]'>
                        <p>#</p>
                        <p>Title</p>
                        <p>Album</p>
                        <p>Date added</p>
                        <p>
                            <img src={Clock} alt="" className='max-h-[25px] max-w-[25px]' />
                        </p>
                    </div>
                    <hr className='border border-[#575757]'></hr>
                    <div className='flex flex-col justify-betweeen '>
                        {
                            songsData.map((item, index) => {
                                if (item.id == id) {
                                    return <Table key={index} props={item} />
                                }
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ParticularMusic