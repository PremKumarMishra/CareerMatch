import React from 'react'
import { LucideAlertTriangle } from 'lucide-react'


const Information = () => {
  return (
    <div className='flex gap-2 p-3.5 bg-amber-500/5 border border-amber-500/20 rounded-lg'>
      <div className='flex flex-col'>
        <LucideAlertTriangle className='w-5 h-5 text-amber-400'/>
      </div>
      <div className='flex flex-col gap-0.5'>
        <h4 className='text-amber-400 font-semibold text-xs'>Critical Skill Gap Detected</h4>
        <p className='text-gray-400 text-xs'>
            Local enterprise recruiters hiring for your target profile require **Spring Boot** or corporate framework architecture layout knowledge. Consider adding a microservice backend component to your project matrix.
        </p>        
      </div>
    </div>
  )
}

export default Information
