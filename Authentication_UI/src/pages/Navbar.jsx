import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
       <nav className="mb-4 space-x-4">
          <Link to="/login" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Login
          </Link>
          <Link to="/register" className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
            Register
          </Link>
        </nav>
    </div>
  )
}

export default Navbar
