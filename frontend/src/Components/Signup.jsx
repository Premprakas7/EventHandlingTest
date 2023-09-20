import axios from 'axios';
import React from 'react'
import {Link} from "react-router-dom"

const Signup = () => {
  const [data,setData]=[{
    email:"",
    name:""
  }];

  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.get("",{
      email:data.email,
      name:data.name
    })
  }

  const handleChange=(e)=>{
    const newData={...data}
    newData[e.target.id]=e.target.value;
    setData(newData);
  }

  return (
    <div>
      <form onSubmit={(e)=>handleSubmit(e)} className='border-2 border-black bg-[#00204a]
     rounded-md w-[30rem] ml-[30%] mt-[5%]'>
        <p className='text-[2rem] font-bold text-[white] p-[1rem]' >Register</p>
      <div>
        <p className='text-[white] text-[1.2rem]'>Email Address</p>
        <input type="text" 
         className='h-[2rem] w-[20rem] mb-[1rem]'
        value={data.email}
        placeholder='Email'
         id="email" 
         onChange={(e)=>handleChange(e)} />
      </div>
      <div>
        <p className='text-[white]'>Full Name</p>
        <input type="text" 
        className='h-[2rem] w-[20rem]'
        value={data.name}
        placeholder='Name'
         id="name"
         onChange={(e)=>handleChange(e)} />
      </div>
      <div>
        <input type="submit" className='text-[white] bg-[#780000] w-[10rem] h-[2rem] m-[1rem]' />
      </div>
      <div>
        <p className='text-[white] text-[1.2rem]'>Already Registered</p>
        <Link to="/login"><button className=' bg-[white] w-[8rem]'>Login</button></Link>
      </div>
      </form>
    </div>
    
  )
}

export default Signup
