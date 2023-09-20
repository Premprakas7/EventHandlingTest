import React, { useState } from 'react'
import {Link} from "react-router-dom"

const Login = () => {
  const [email, setEmail]=useState("");
  const [name, setName]=useState("");

  return (
    <div>
      <form className='border-2 border-black bg-[#00204a]
     rounded-md w-[30rem] ml-[30%] mt-[5%]'>
      <p className='text-[2rem] font-bold text-[white] p-[1rem]'>Login</p>
      <div>
        <p className='text-[white] text-[1.2rem]'>Email Address</p>
        <input type="text" 
        value={email}
        placeholder='Email'
         id="email" 
         onChange={(e)=>setEmail(e.target.value)}
         className='h-[2rem] w-[20rem] mb-[1rem]'
          />
      </div>
      <div>
        <p className='text-[white] text-[1.2rem]'>Full Name</p>
        <input type="text" 
        value={name}
        placeholder='Name'
         id="name"
         onChange={(e)=>setName(e.target.value)}
         className='h-[2rem] w-[20rem] mb-[1rem]'
         />
      </div>
      <div>
        <input type="submit" className='text-[white] bg-[#780000] w-[10rem] h-[2rem] m-[1rem]' />
      </div>
      <div>
        <p className='text-[white] text-[1.2rem] font-[400]'>Not Registered  ?</p>
        <Link to="/signup"><button className=' bg-[white] w-[8rem] text-[1.1rem]'>Register</button></Link>
      </div>

      </form>
      
    </div>
  )
}

export default Login
