import React from 'react'
import { LucideCpu,Sun,UserRound} from 'lucide-react'

const Navbar = () => {
    return (
        <nav className='flex px-6 py-3 justify-between items-center bg-[#131313] border-b border-neutral-800'>
            <div className='flex items-center gap-3 px-2'>
                <LucideCpu className='text-emerald-400 w-6 h-6'></LucideCpu>
                <h3 className='text-white font-bold text-lg tracking-wide'>Career Match</h3>
            </div>
            <div className='flex items-center gap-7'>
                <ul className='flex gap-5 text-slate-500 font-medium text-sm'>
                    <li><a className=' transition-all hover:text-white' href="">Home</a></li>
                    <li><a className='transition-all hover:text-white' href="">Jobs</a></li>
                    <li><a className='transition-all hover:text-white' href="">Notifications</a></li>
                    <li><a className='transition-all hover:text-white' href="">About</a></li>
                </ul>
                <input type="search" placeholder='Search' className='px-3 py-1.5 bg-[#1e1e1e] text-white text-sm rounded-lg outline-none border border-neutral-700 focus:border-emerald-400'/>
            </div>
            <div className='flex items-center gap-3'>
                <UserRound className='text-slate-500 cursor-pointer hover:text-white'/>
                <Sun className='text-slate-500 cursor-pointer hover:text-white'/>
            </div>
        </nav>
    )
}

export default Navbar
