import React from 'react'

export default function DemoLogin(){
  const demo=(role)=>{
    let creds={}
    if(role==='admin') creds={email:'admin@example.com',password:'admin123',role:'admin'}
    if(role==='driver') creds={email:'driver@example.com',password:'driver123',role:'driver'}
    if(role==='client') creds={email:'client@example.com',password:'client123',role:'client'}
    localStorage.setItem('user',JSON.stringify(creds))
    alert("Demo login as "+role)
  }

  return <div className="flex flex-col space-y-4">
    <h2 className="text-xl font-bold">Quick Demo</h2>
    <button onClick={()=>demo('admin')} className="btn bg-gray-800 hover:shadow-neon">Log in as Admin</button>
    <button onClick={()=>demo('driver')} className="btn bg-gray-800 hover:shadow-neon">Log in as Driver</button>
    <button onClick={()=>demo('client')} className="btn bg-gray-800 hover:shadow-neon">Log in as Client</button>
  </div>
}