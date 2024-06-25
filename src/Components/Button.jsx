import React from 'react'

const Button = ({ text, bg }) => {  
    
    return (
        
            bg ? <button className="border border-white px-[10px] py-[4px] max-w-[100%] rounded-full  font-bold bg-white text-black">{text}</button>:
            <button className="border border-white px-[10px] py-[4px] max-w-[100%] rounded-full font-extrabold">{text}</button>

        
    )
}

export default Button























