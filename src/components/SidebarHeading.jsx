import React from 'react'
import { LucideCpu } from 'lucide-react'

const SidebarHeading = () => {
  return (
    <div className='flex items-center gap-3 px-2 mb-8'>
      <LucideCpu className='text-emerald-400 w-6 h-6'></LucideCpu>
      <h3 className='text-white font-bold text-lg tracking-wide text-center'>Career Match</h3>
    </div>
  )
}

export default SidebarHeading
