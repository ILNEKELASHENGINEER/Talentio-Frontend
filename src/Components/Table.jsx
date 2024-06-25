import React from 'react'

const Table = ({ props }) => {
    console.log(props);
    return (

        <div className='flex justify-between  w-[100%] min-h-[60px] items-center p-[10px] hover:bg-[#676565cb] hover:rounded-lg'>
            <p>{props.id + 1}</p>
            <div className='flex items-center gap-[1rem]'>
                <div>
                    <img src={props.image} alt="" className='max-h-[50px] max-w-[50px] rounded-md' />
                </div>
                <p>{props.name}</p>
            </div>
            <p>Favourites</p>
            <p>5 days ago</p>
            <p>{props.duration}</p>
        </div>

    )
}

export default Table