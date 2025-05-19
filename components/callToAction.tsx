import React from 'react'
import { Button, Image, Card, CardBody } from '@heroui/react'
import { Icon } from '@iconify/react';
const CallToAction = () => {
  return (
    <Card className="group w-full max-w-6xl mx-auto rounded-xl shadow-sm border bg-black border-zinc-800 relative overflow-hidden before:absolute before:inset-0 before:-translate-x-[40%] before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] before:z-[1] hover:before:translate-x-[200%] before:transition-all before:duration-[1.5s] before:ease-in-out">
      {/* Content */}
      <CardBody className="relative z-10 py-16 px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side - Heading */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight bg-[linear-gradient(91deg,_#FFF_32.88%,_rgba(255,255,255,0.4)_99.12%)] bg-clip-text text-transparent">
            Build your dream product 
            </h2>
          </div>
          
          {/* Right side - Description and Button */}
          <div className="flex flex-col space-y-6">
            <p className="text-zinc-300 text-lg tracking-tight">
              We are a team of experienced engineers who are passionate about building products that help people like you to change the world.
            </p>
            <Button 
              className="bg-background text-foreground dark:bg-foreground dark:text-background hover:bg-zinc-100 px-6 py-3 rounded-full font-medium text-sm self-start"
              endContent={<Icon icon="solar:alt-arrow-right-linear" />}
            >
              Book a demo
            </Button>
          </div>
        </div>
        
        {/* Bottom section with "Backed By" */}
        <div className="mt-12 pt-8  border-zinc-800 flex items-center justify-center">
          <div className="flex items-center gap-2 text-zinc-400">
            <span className="text-sm">Backed By</span>
            <Image 
              src="/YC.png" 
              alt="Y Combinator" 
              width={100}
              className="rounded-none" 
              style={{ borderRadius: 0 }}
            />
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

export default CallToAction