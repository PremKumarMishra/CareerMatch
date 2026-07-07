import React from 'react'
import Sidebar from './Sidebar'
import MainContent from './main/MainContent'

const Page = () => {
  return (
    <div className='flex flex-nowrap h-screen w-full'>
        <Sidebar/>
        <MainContent/>
    </div>
  )
}

export default Page
