import React from 'react'
import { Image } from '@heroui/react'

const DashboardPreview = () => {
  return (
    <div className='absolute inset-0 top-[2rem] left-[2rem]'>
      <div className='relative border-[10px] dark:border-zinc-700 border-zinc-200 rounded-3xl w-[800px] h-[500px]'>
        <Image src="/grid2.jpg" alt="dashboard preview" className='w-full h-full object-cover' />
      </div>
    </div>
  )
}

export default DashboardPreview 