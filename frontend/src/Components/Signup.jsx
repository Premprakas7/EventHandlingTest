import axios from 'axios';
import React from 'react'

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
      <form onSubmit={(e)=>handleSubmit(e)} className=''>
        <h1>Register</h1>
      <div>
        <p>Email Address</p>
        <input type="text" 
        value={data.email}
        placeholder='Email'
         id="email" 
         onChange={(e)=>handleChange(e)} />
      </div>
      <div>
        <p>Full Name</p>
        <input type="text" 
        value={data.name}
        placeholder='Name'
         id="name"
         onChange={(e)=>handleChange(e)} />
      </div>
      </form>
    </div>
    
  )
}

export default Signup
