import PricingSection from '@/components/pricingSection'
import { Chip } from '@heroui/react'
import React from 'react'
import { CHIPSTYLE } from '@/constants/constant'

const Pricing = () => {
  return (
    <section id="pricing" className="w-full mt-[10rem] flex flex-col items-center">
      <div className="flex flex-col items-center text-center space-y-2">
        <Chip className={CHIPSTYLE}>Pricing</Chip>
        <h2 className="text-5xl font-semibold tracking-tight">Simple Pricing</h2>
        <p className="text-default-500 text-md">Choose the perfect plan for your AI music creation needs. All plans include access to our core technology.</p>
      </div>
      <PricingSection />  
    </section>      
  )
}

export default Pricing