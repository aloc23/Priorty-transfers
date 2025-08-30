import React, { useState } from 'react'
import DemoLogin from '../components/DemoLogin'

export default function Login(){
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [stay,setStay]=useState(false)

  const backend = "https://priority-transfers-backend-sei5.onrender.com"

  const submit=async(e)=>{
    e.preventDefault()
    try {
      const res = await fetch(backend+"/api/auth/login",{
        method:"POST",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({email,password})
      })
      const data = await res.json()
      if(!res.ok) throw new Error(data.error||"Login failed")
      const store=stay?localStorage:sessionStorage
      store.setItem('user',JSON.stringify(data.user))
      alert("Logged in as "+data.user.email)
    } catch(err){
      alert("Error: "+err.message)
    }
  }

  return <div className="flex flex-col items-center justify-center min-h-screen text-white">
    <div className="absolute top-4 left-6 flex items-center drop-shadow-[0_0_10px_#39ff14]">
      <img src="/logo-white.png" alt="logo" className="h-10 mr-2"/> <span className="font-bold">Priority Transfers</span>
    </div>
    <div className="card w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
      <DemoLogin/>
      <form onSubmit={submit} className="flex flex-col space-y-4">
        <h2 className="text-xl font-bold">Login</h2>
        <input type="email" value={email} onChange={e=>setEmail(e.target.value)}
          placeholder="Email" className="p-2 rounded bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-neon"/>
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)}
          placeholder="Password" className="p-2 rounded bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-neon"/>
        <label className="flex items-center space-x-2">
          <input type="checkbox" checked={stay} onChange={()=>setStay(!stay)} className="accent-neon"/>
          <span>Stay logged in</span>
        </label>
        <button type="submit" className="btn bg-neon text-black">Login</button>
      </form>
    </div>
  </div>
}