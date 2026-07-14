import React from 'react'
import SidebarHeading from './SidebarHeading'
import Navbutton from './Navbutton'

import { LucideUser,LucideBriefcase, LucideBarChart3, LucideCpu } from 'lucide-react'

const Sidebar = () => {
  const NavbuttonFields = [
    { text: "Dashboard", icon: LucideUser },
    { text: "Open Matches", icon: LucideBriefcase },
    { text: "Placement Trends", icon: LucideBarChart3 }
  ]

  return (
    <div className='flex flex-col bg-[#1E1E24] w-64 border-r border-[#2A2A32] p-6 space-y-3.5'>
      <SidebarHeading text="Career Match" icon={LucideCpu} />
      <div className='flex flex-col gap-3.5'>
        {NavbuttonFields.map(field => (
          <Navbutton key={field.text} text={field.text} icon={field.icon} />
        ))}
      </div>
      <h4 className='text-xs text-gray-500 mt-auto text-center'>v1.0 • Career Match</h4>
    </div>
  )
}

export default Sidebar
