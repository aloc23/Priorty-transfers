
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
      <h1 className="text-3xl font-bold text-green-400">Priority Transfers</h1>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
