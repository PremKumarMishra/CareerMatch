import React from 'react'
import Card from '../Card'
import { LucidePlay } from 'lucide-react'
import Information from '../Information'

const StepTwoCard = () => {
  return (
    <Card title="xyz">
        <div className='p-4 flex flex-col gap-2.5 bg-[#121214] border border-[#2A2A32] rounded-lg'>
            <span className='text-gray-400 font-light text-sm'>Predicted Optimal Target Path</span>
            <span className='text-emerald-400 font-semibold text-xl'>Predicted Optimal Target Path</span>
            {/* <textarea className='w-full resize-none bg-[#121214] border border-[#2A2A32] rounded-lg px-4 py-2.5 focus:outline-none focus:border-emerald-500 transition-all text-gray-200 placeholder-gray-600' type="text" rows={4} placeholder="Describe your main application architecture, tools used, and core engineering problems solved..."/> */}
            
        </div>
        <div className='flex flex-col gap-3'>
            <h4 className='text-gray-400 font-medium text-xs'>Core Project Description</h4>
            <Information></Information>
        </div>
    </Card>
  )
}

export default StepTwoCard
