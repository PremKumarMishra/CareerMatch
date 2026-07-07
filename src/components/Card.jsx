import React from 'react'
import Badge from './Badge'

const Card = ({children}) => {
  return (
    <div className='bg-[#1E1E24] border border-[#2A2A32] p-6 flex flex-1 flex-col rounded-xl h-fit gap-3.5'>
      <div className='flex gap-3 items-center'>
        <Badge/>
        <h3 className='text-white text-xl'>Profile & Skill Ingestion</h3>
      </div>
      {children}
    </div>
  )
}

export default Card
