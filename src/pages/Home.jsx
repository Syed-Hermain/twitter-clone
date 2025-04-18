import React from 'react'

const Home = () => {
return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Twitter Clone</h1>
        <p className="text-lg text-gray-700 mb-6">Stay connected with your friends and the world around you.</p>
        <button className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition">
            Get Started
        </button>
    </div>
)
}

export default Home