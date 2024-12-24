import React from 'react'
import { FaBox, FaShoppingCart, FaTachometerAlt, FaUser, FaUsers} from "react-icons/fa"

const Sidebar = () => {
  return (
    <div className='bg-gray-100 text-gray-900 h-screen px-4 fixed w-16 md:w-64 border-r border-gray-300'>
      <h1 className='text-2x1 font-bold hidden md:block mt-4 text-center italic'>Fiorucci Admin</h1>
      <ul className='flex flex-col mt-5 text-xl'>
        <li className=' flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-gray-950 hover:text-white'>
            <FaTachometerAlt/>
            <span className='hidden md:inline'>Dashboard</span>
        </li>
        <li className=' flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-gray-950 hover:text-white'>
            <FaShoppingCart/>
            <span className='hidden md:inline'>Ordenes</span>
        </li>
        <li className=' flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-gray-950 hover:text-white'>
            <FaUsers/>
            <span className='hidden md:inline'>Clientes</span>
        </li>
        <li className=' flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-gray-950 hover:text-white'>
            <FaUser/>
            <span className='hidden md:inline'>Usuarios</span>
        </li>
        <li className=' flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-gray-950 hover:text-white'>
            <FaBox/>
            <span className='hidden md:inline'>Productos</span>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
