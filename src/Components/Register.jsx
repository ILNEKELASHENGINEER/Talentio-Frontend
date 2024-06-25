import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Register = () => {
    const [firstname, setfName] = useState('')
    const [lastname, setlName] = useState('')
    const [password, setpassword] = useState('')
    const [err,seterr] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [address, setAddress] = useState('')
    const navigate = useNavigate()
    const handleSubmit = async () => {
        if (firstname == '' || lastname == '' || email == '' || number == '' || address == '') {
            navigate('/')
        }
        else {
            await axios.post('http://localhost:8080/user', {
                firstname: firstname,
                lastname: lastname,
                password:password,
                email: email,
                number: number,
                address: address
            })
                .then((res) => {
                    console.log(res);
                    if(res.data.message=="The user is already exists"){
                        seterr(res.data.message);
                    }
                    else{
                    localStorage.setItem('firstname', res.data.body.firstname)
                    localStorage.setItem('lastname', res.data.body.lastname)
                    localStorage.setItem('email', res.data.body.email)
                    localStorage.setItem('number', res.data.body.number)
                    localStorage.setItem('address', res.data.body.address)
                    setfName('')
                    setlName('')
                    setpassword('')
                    setEmail('')
                    setNumber('')
                    setAddress('')
                    seterr('')
                    navigate('/home')
                    }

                })
        }
    }
    return (
        <div className=' flex  flex-col justify-center gap-[3rem] items-center w-[100%] bg-black h-screen'>
            <div>
                <h1 className='text-[55px] font-bold w-[500px] text-center'>Sign Up to start <span className='text-[#35b04e]'>Listening</span> </h1>
            </div>
            <div className='flex flex-col gap-[2rem] w-[100%] items-center'>
                {
                    err ? <p className='text-[red] font-bold  '>{err}</p>:""
                }
                <div className='flex gap-[2rem] border]'>
                    <div className='flex flex-col gap-[1rem] '>
                        <label htmlFor="" className='font-bold'>First Name</label>
                        <input type="text" name="name" id="" className='border h-[40px] text-[black] w-[250px] pl-[5px] rounded-md focus:outline-none' value={firstname} onChange={(e) => setfName(e.target.value)} required />
                    </div>
                    <div className='flex flex-col gap-[1rem] '>
                        <label htmlFor="" className='font-bold'>Sur Name</label>
                        <input type="text" name="name" id="" className='border h-[40px] text-[black] w-[250px] pl-[5px] rounded-md focus:outline-none' value={lastname} onChange={(e) => setlName(e.target.value)} required />
                    </div>
                </div>
                <div className='flex flex-col gap-[1rem] '>
                    <label htmlFor="" className='font-bold'>Password</label>
                    <input type="text" name="name" id="" className='border h-[40px] text-[black] w-[530px] pl-[5px] rounded-md focus:outline-none' value={password} onChange={(e) => setpassword(e.target.value)} required />
                </div>
                <div className='flex flex-col gap-[1rem] '>
                    <label htmlFor="" className='font-bold'>Email Address</label>
                    <input type="text" name="name" id="" className='border h-[40px] text-[black] w-[530px] pl-[5px] rounded-md focus:outline-none' value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className='flex flex-col gap-[1rem] '>
                    <label htmlFor="" className='font-bold'>Phone Number</label>
                    <input type="text" name="name" id="" className='border h-[40px] text-[black] w-[530px] pl-[5px] rounded-md focus:outline-none' value={number} onChange={(e) => setNumber(e.target.value)} required />
                </div>
                <div className='flex flex-col gap-[1rem] '>
                    <label htmlFor="" className='font-bold'>Address</label>
                    <input type="text" name="name" id="" className='border h-[40px] text-[black] w-[530px] pl-[5px] rounded-md focus:outline-none' value={address} onChange={(e) => setAddress(e.target.value)} required />
                </div>
                <div className='text-white'>
                    If you are Already An user ? <Link to={'/login'}><span className='text-[#35b04e] font-bold'>Login</span></Link>
                </div>
            </div>
            <button className='bg-[#35b04e] w-[250px] py-[10px] rounded-full font-bold cursor-pointer' onClick={handleSubmit}>Sign Up</button>
        </div>
    )
}

export default Register