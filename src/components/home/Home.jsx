import React from 'react'
import Navbar from './Navbar'
import { UsersRound } from 'lucide-react'
import { ChartNoAxesColumn} from 'lucide-react'
import { Briefcase } from 'lucide-react'
import { ReactTyped } from 'react-typed'
import FeatureCard from './FeatureCard'

const Home = () => {
  return (
    <div className='flex flex-col gap-6'>
        <Navbar/>
        <section className='w-full flex flex-col gap-3.5 items-center'>
            <h3 className='text-mist-200 text-7xl font-extrabold tracking-widest'>A Platform Built</h3>
            <ReactTyped className='text-mist-400 text-2xl font-extrabold' strings={[
                "by the community",
                "for the community",
                "powered by the community",
            ]} typeSpeed={60} backSpeed={60} loop/>
        </section>

        <section className='flex flex-col items-center py-20 gap-8 p-7'>
            <ReactTyped className='text-mist-200 text-4xl font-extrabold' strings={[
                "Built for Every Step of Your Career Journey"
            ]} typeSpeed={40} backSpeed={50} loop/>

            <div className='grid md:grid-cols-3 gap-5'>
                <FeatureCard icon={UsersRound} target="Students" features={
                    ["Personalized career & internship recommendations",
                    "Know exactly what to learn to get hired",
                    "Insights from real hiring data"]}>
                </FeatureCard>
                <FeatureCard icon={Briefcase} target="Recruiters" features={
                    ["Intelligent candidate shortlisting in seconds",
                    "AI-powered skill matching for better hires",
                    "Streamlined hiring with faster, data-driven decisions"]}>
                </FeatureCard>
                <FeatureCard icon={ChartNoAxesColumn} target="Placement Cells" features={
                    ["Deep insights into successful student skill profiles",
                    "Company-wise hiring patterns & preferences",
                    "Real-time trends shaping campus recruitment"]}>
                </FeatureCard>
                
            </div>
        </section>

    </div>
  )
}

export default Home
