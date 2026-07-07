import React from 'react'
import Card from '../Card'
import { LucidePlay } from 'lucide-react'


const StepOneCard = () => {
  return (
    <Card title="xyz">
        <div className='flex flex-col gap-2.5'>
            <h4 className='text-gray-400 font-medium text-xs'>Technical Skills (Comma Separated)</h4>
            <input className='w-full focus:outline-none focus:border-emerald-500 transition-all bg-[#121214] border border-[#2A2A32] rounded-lg text-gray-200 placeholder-gray-600 px-4 py-2.5' type="text" placeholder="e.g., Java, SQL, Git, HTML, CSS"/>
        </div>
        <div className='flex flex-col gap-2.5'>
            <h4 className='text-gray-400 font-medium text-xs'>Core Project Description</h4>
            <textarea className='w-full resize-none bg-[#121214] border border-[#2A2A32] rounded-lg px-4 py-2.5 focus:outline-none focus:border-emerald-500 transition-all text-gray-200 placeholder-gray-600' type="text" rows={4} placeholder="Describe your main application architecture, tools used, and core engineering problems solved..."/>
        </div>
        <button className='flex justify-center items-center gap-2 w-full bg-emerald-500 rounded-xl hover:bg-emerald-600 text-neutral-900 font-bold py-2 cursor-pointer transition-all'>
            <LucidePlay className='w-4 h-4 fill-current'/>Run Alignment Analysis
        </button>
    </Card>
  )
}

export default StepOneCard
