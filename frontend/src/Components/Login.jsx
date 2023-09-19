import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail]=useState("");
  const [name, setName]=useState("");

  return (
    <div>
      <form >
      <div>
        <p>Email Address</p>
        <input type="text" 
        value={email}
        placeholder='Email'
         id="email" 
         onChange={(e)=>setEmail(e.target.value)}
          />
      </div>
      <div>
        <p>Full Name</p>
        <input type="text" 
        value={name}
        placeholder='Name'
         id="name"
         onChange={(e)=>setName(e.target.value)}
         />
      </div>

      </form>
      
    </div>
  )
}

export default Login
