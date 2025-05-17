"use client"
import React from 'react'
import Testimonial from '@/components/testimonial'
import { TESTIMONIALS } from '@/constants/constant'
import { Chip } from '@heroui/react'
import { CHIPSTYLE } from '@/constants/constant'
const Testimonials = () => {
  return (
    <section id="testimonials" className="w-full mt-[10rem] flex flex-col items-center">
  
    {/* Infinite Testimonial Carousel */}
    <div className="w-full max-w-7xl py-12 relative">
      {/* First Row - Left to Right */}
      <div className="relative mb-4 w-full overflow-hidden">
        {/* Edge fade masks */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10"></div>
        
        <div className="animate-marquee-slow flex space-x-4">
          {/* Duplicate testimonials for continuous effect */}
          {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, index) => (
            <div key={`row1-${testimonial.id}-${index}`} className="w-[350px] flex-shrink-0">
              <Testimonial 
                name={testimonial.name} 
                image={testimonial.image} 
                testimonial={testimonial.testimonial} 
                job={testimonial.job} 
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Second Row - Right to Left (Reverse direction) */}
      <div className="relative w-full overflow-hidden">
        {/* Edge fade masks */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10"></div>
        
        <div className="animate-marquee-slow-reverse flex space-x-4">
          {/* Duplicate and reverse testimonials for continuous effect */}
          {[...TESTIMONIALS.slice().reverse(), ...TESTIMONIALS.slice().reverse()].map((testimonial, index) => (
            <div key={`row2-${testimonial.id}-${index}`} className="w-[350px] flex-shrink-0">
              <Testimonial 
                name={testimonial.name} 
                image={testimonial.image} 
                testimonial={testimonial.testimonial} 
                job={testimonial.job} 
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom fade mask */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent z-10"></div>
    </div>
  </section>

  )
}

export default Testimonials