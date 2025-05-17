import React from 'react'
import { BRAND_IMAGES } from '@/constants/constant'
import { Image } from '@heroui/react'
const Companies = () => {
  return (
    <section className="w-full mt-[10rem]">
    <h2 className="uppercase text-center text-sm font-medium mb-2 text-default-500">Trusted by top music teams</h2>
    <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-2 px-6 max-w-5xl mx-auto">
      {BRAND_IMAGES.map((image) => (
        
          <Image 
            key={image.id}
            src={image.src} 
            alt={image.alt}
            width={150}
            height={150}
            className="grayscale transition-all duration-300 object-contain w-full h-full"
          />
       
      ))}
    </div>
</section>
  )
}

export default Companies