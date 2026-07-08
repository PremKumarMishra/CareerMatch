import React from 'react'

const ShortlistCard = () => {
  return (
    <div className='flex gap-4 p-4 bg-[#121214] hover:bg-[#151518] border border-[#2A2A32] transition-all rounded-lg justify-between'>
      <div className='flex items-center gap-4'>
        <div className='w-10 h-10 rounded-lg bg-emerald-500/10 font-bold text-sm text-emerald-400 flex items-center justify-center'>94%</div>
        <div className='flex flex-col'>
            <h4 className='text-white text-sm font-semibold'>Enterprise Java Intern</h4>
            <p className='text-xs text-gray-400'>Required Vector Sync: Java, SQL, Database Architecture</p>
        </div>
      </div>
      <button className='bg-[#1E1E24] hover:bg-[#2A2A32] rounded-lg border border-[#2A2A32] text-gray-300 text-xs font-semibold px-4 py-2 cursor-pointer'>View Mapping</button>
    </div>
  )
}

export default ShortlistCard
