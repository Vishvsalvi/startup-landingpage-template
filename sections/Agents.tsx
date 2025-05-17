"use client"
import Democard from '@/components/democard'
import React from 'react'
import { AGENTS } from '@/constants/constant'
import { Chip } from '@heroui/react'
import { CHIPSTYLE } from '@/constants/constant'
const Agents = () => {
  return (
    <section id="agents" className="w-full mt-[10rem] flex flex-col items-center">
    <div className="flex flex-col items-center text-center space-y-2">
      <Chip className={CHIPSTYLE}>Agents</Chip>
      <h2 className="text-5xl font-semibold tracking-tight">Meet our AI agents</h2>
      <p className="text-default-500 text-md">Our Agents are trained and inspired by legends in the music industry.</p>
    </div>
    <div className="max-w-5xl w-full px-4 mt-4">
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {AGENTS.map((agent) => (
          <Democard key={agent.id} agent={agent} />
        ))}
      </div>
    </div>
  </section>

  )
}

export default Agents