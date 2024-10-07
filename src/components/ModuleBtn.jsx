import React from 'react'
import { Link } from 'react-router-dom'



const ModuleBtn = ({ name, icon, url }) => {
  return (
    <Link to={url} className='flex flex-col bg-emerald-900 items-center rounded-xl gap-2 p-5 text-white hover:bg-emerald-800 hover:duration-75 '> 
            {icon}
            
            {name}
    </Link>
  )
}

export default ModuleBtn