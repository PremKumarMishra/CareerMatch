import React from 'react'
import { LucideUser } from 'lucide-react'

const Navbutton = (props) => {
  return (
    <div className='flex pl-2.5 py-2.5 items-center gap-3 rounded-lg  bg-[#2A2A32] border-l-4 border-emerald-400 cursor-pointer'>
      <props.icon className='text-white w-5 h-5'/>
      <h3 className='font-medium text-sm text-white'>{props.text}</h3>
    </div>
  )
}

export default Navbutton
