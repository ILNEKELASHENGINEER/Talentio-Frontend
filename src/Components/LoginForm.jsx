import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const LoginForm = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    const handleSubmit = async () => {
        if (email == '' || password=='') {
            navigate('/login')
        }
         {
            await axios.post('http://localhost:8080/login', {
                email: email,
                password:password,
            })
                .then((res) => {
                    console.log(res);
                    localStorage.setItem('firstname',res.data.firstname)
                    // localStorage.setItem('email', res.data.body.email)
                    // localStorage.setItem('number', res.data.body.number)
                    // localStorage.setItem('address', res.data.body.address)
                    // setfName('')
                    // setlName('')
                    setpassword('')
                    setEmail('')
                    // setNumber('')
                    // setAddress('')
                    navigate('/home')

                })
        }
    }
  return (
    <div className=' flex  flex-col justify-center gap-[3rem] items-center w-[100%] bg-black h-screen'>
    <div>
        <h1 className='text-[55px] font-bold w-[500px] text-center'>Login for continue<span className='text-[#35b04e]'>Listening</span> </h1>
    </div>
    <div className='flex flex-col gap-[2rem] w-[100%] items-center'>
    <div className='flex flex-col gap-[1rem] '>
            <label htmlFor="" className='font-bold'>Email Address</label>
            <input type="text" name="name" id="" className='border h-[40px] text-[black] w-[530px] pl-[5px] rounded-md focus:outline-none' value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className='flex flex-col gap-[1rem] '>
            <label htmlFor="" className='font-bold'>Password</label>
            <input type="text" name="name" id="" className='border h-[40px] text-[black] w-[530px] pl-[5px] rounded-md focus:outline-none' value={password} onChange={(e) => setpassword(e.target.value)} required />
        </div>
    </div>
    <button className='bg-[#35b04e] w-[250px] py-[10px] rounded-full font-bold cursor-pointer' onClick={handleSubmit}>Login</button>
</div>
  )
}

export default LoginForm