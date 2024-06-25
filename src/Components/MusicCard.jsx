import React from 'react'
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom'
const MusicCard = ({ props }) => {
  const navigate = useNavigate();
  return (

    <div className='min-w-[180px] hover:bg-[#4e4d4d] hover:rounded-lg cursor-pointer p-[5px]' onClick={() => navigate(`/album/${props.id}`)}>
      <div className='flex flex-col gap-[0.5rem]'>
        <div>
          <img src={props.image} alt="" className='rounded-lg max-h-[350px]' />
        </div>
        <div className='flex flex-col gap-[0.5rem]'>
          <p className='font-bold'>{props.name}</p>
          <p className='text-[#858585]'>{props.desc}</p>
        </div>
      </div>
    </div>
  )
}

export default MusicCard