"use client";

import React from 'react'
import { Avatar, Card, CardBody, CardHeader } from '@heroui/react'


interface TestimonialProps {
    name: string;
    image: string;
    testimonial: string;
    job: string;
}

const Testimonial = ({name, image, testimonial, job}: TestimonialProps) => {
  return (
    <Card className="bg-zinc-900 text-white shadow-lg h-full">
      <CardHeader className="p-5 pb-0">
        <div className="flex items-center space-x-3">
          <Avatar src={image} alt={name} className="w-10 h-10" />
          <div className="flex flex-col">
            <span className="font-semibold text-sm">{name}</span>
            <span className="text-xs text-default-400">{job}</span>
          </div>
        </div>
      </CardHeader>

      <CardBody className="p-5 pt-3">
        <p className="text-sm leading-relaxed opacity-90">
          {testimonial}
        </p>
      </CardBody>
    </Card>
  )
}

export default Testimonial