import React from 'react'
import SidebarHeading from './SidebarHeading'
import Navbutton from './Navbutton'

import { LucideUser,LucideBriefcase, LucideBarChart3 } from 'lucide-react'

const Sidebar = () => {
  return (
    <div className='flex flex-col bg-[#1E1E24] w-64 border-r border-[#2A2A32] p-6 space-y-3.5'>
        <SidebarHeading></SidebarHeading>
        <Navbutton text="Dashboard" icon = {LucideUser} ></Navbutton>
        <Navbutton text="Open Matches" icon = {LucideBriefcase} ></Navbutton>
        <Navbutton text="Placement Trends" icon = {LucideBarChart3} ></Navbutton>
        <h4 className='text-xs text-gray-500 mt-auto text-center'>v1.0 • Career Match</h4>
    </div>
  )
}

export default Sidebar
