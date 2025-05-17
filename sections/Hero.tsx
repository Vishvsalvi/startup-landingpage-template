"use client"
import { Chip, Image, Button } from "@heroui/react"
import React from 'react'
import { CHIPSTYLE } from '@/constants/constant'

const Hero = () => {


  return (
    <>
    <section id="home" className="mt-10 z-20 flex flex-col items-center justify-center gap-[18px] sm:gap-6 mb-8">
    <Chip className={CHIPSTYLE}>We raised $100M in Series A</Chip>
      <div className="text-center text-[clamp(40px,10vw,44px)] font-bold leading-[1.2] tracking-tighter sm:text-[64px]">
        <div className=" bg-[linear-gradient(91deg,_#FFF_32.88%,_rgba(255,255,255,0.4)_99.12%)] bg-clip-text text-transparent">
          AI Agents To Streamline <br /> 
          Your Music Creation.
        </div>
      </div>
      <p className="text-center font-normal leading-7 text-default-500 sm:w-[466px] ">
        MusicGen is an AI-powered music assistant that allows you to create music like a pro.
      </p>
      <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
        <Button
          className="md:hidden  h-10 w-[163px] bg-default-foreground px-[16px] py-[10px] text-sm leading-5 text-background font-medium"
          radius="full"
        >
          Get Started
        </Button>
      </div>
    </section>

<section className="w-full relative flex justify-center">
<div className="relative w-full max-w-5xl h-[32rem] overflow-hidden rounded-lg">
  <div className="absolute inset-0 flex justify-center items-center">
    <Image 
      src="/heroimg.png" 
      alt="Hero Image" 
      className="w-full h-full object-cover object-center transform transition-transform duration-500"
    />
  </div>
</div>
</section>
</>

  )
}

export default Hero