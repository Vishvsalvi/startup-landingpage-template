"use client"
import React from 'react'
import { FEATURES } from '@/constants/constant'
import {Chip, cn} from '@heroui/react'
import { CHIPSTYLE } from '@/constants/constant'
const Features = () => {
  return (
    <section id="features" className="w-full mt-[10rem] flex flex-col items-center">
    <div className="flex flex-col items-center text-center space-y-2">
      <Chip className={CHIPSTYLE}>Features</Chip>
      <h2 className="text-5xl font-semibold tracking-tight">Feature rich music generation</h2>
      <p className="text-default-500 text-md">We're a team of musicians and engineers who are passionate about creating music that sounds great.</p>
    </div>

    {/* Features Grid */}
    <div className="max-w-7xl w-full mt-16 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-zinc-800">
        {FEATURES.map((feature: { id: number; title: string; description: string; icon: JSX.Element }, index: number) => (
          <div 
            key={feature.id}
            className={cn(
              "relative p-10 transition-all duration-200 hover:bg-zinc-900 group",
              {
                "border-b border-zinc-800": index < FEATURES.length - 4 || (index < FEATURES.length && FEATURES.length <= 4),
                "md:border-r": (index + 1) % 4 !== 0,
                "border-b md:border-b-0": index >= FEATURES.length - 4 && index < FEATURES.length - 1 && FEATURES.length > 4
              }
            )}
          >
            <div className="mb-5 transition-transform duration-200 group-hover:translate-x-2">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold tracking-tight mb-2 transition-transform duration-200 group-hover:translate-x-2">{feature.title}</h3>
            <p className="group-hover:translate-x-2 text-sm text-zinc-300 transition-transform duration-200 ">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Features