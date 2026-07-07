import React from 'react'
import Card from '../Card'
import Header from './Header'
import StepOneCard from './StepOneCard'
import StepTwoCard from './StepTwoCard'
import ShortlistCard from './ShortlistCard'

import { LucidePlay } from 'lucide-react'

const MainContent = () => {
  return (
    <div className='bg-[#121214] flex flex-col flex-1 p-8 gap-3.5 overflow-y-auto'>
	  <Header></Header>
	  <div className='flex flex-wrap gap-6 flex-1 mt-3'>
		<StepOneCard></StepOneCard>
		<StepTwoCard></StepTwoCard>
	  </div>
	  <Card>
		<ShortlistCard/>
		<ShortlistCard/>
	  </Card>
    </div>
  )
}

export default MainContent
