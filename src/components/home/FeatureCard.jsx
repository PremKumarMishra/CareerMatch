import React from 'react'

const FeatureCard = ({icon:Icon,target,features}) => {
  return (
    <div className='flex flex-col bg-linear-to-br from-[#1e293b] via-[#111827] to-[#0b1220] cursor-pointer border border-white/10 trnsition duration-300 hover:border-emerald-500/30 hover:shadow-[0px_10px_30px_rgba(16,185,129,0.15)] shadow-[0_10px_30px_rgba(0,0,0,0.5)] rounded-2xl gap-3 px-5 py-3'>
        <div className='flex justify-start gap-4 text-slate-200 font-semibold text-lg items-center'>
            {Icon && <Icon className='text-emerald-400'/>}
            <h4>{target}</h4>
        </div>
        <ul className='text-slate-400'>
            {
                features.map((e,idx) => (
                    <li key={idx} className='flex items-start gap-2'>
                        <span className="text-emerald-400">•</span>
                        <span>{e}</span>
                    </li>
                ))
                
            }
        </ul>
    </div>
  )
}

export default FeatureCard
