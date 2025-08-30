import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
      <div className="p-8 rounded-lg shadow-lg bg-slate-800">
        <h1 className="text-3xl font-bold text-green-400">Priority Transfers</h1>
        <p className="mt-2 text-slate-300">Fast, professional, modern dashboard</p>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
