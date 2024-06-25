import React from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Lowongan = () => {
  return (
   <><h1 id='team' className='max-w-2xl text1 mt-3 text-3x items-center mx-auto mb-5 font-bold text-center leading-snug tracking-tight text-indigo-300 lg:leading-tight text-3xl lg:text-4xl'>Meet Our Team
      </h1><Carousel className="w-full lg:px-0 px-5 mx-auto items-center lg:max-w-6xl">
        <CarouselContent className="-ml-1">
           {Array.from({ length: 6 }).map((_, index) => (
              <>
                 <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                       <img className="mx-auto items-center" src="/Person1.svg" alt="" />
                    </div>
                 </CarouselItem>
                 <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                       <img className="mx-auto items-center" src="/Person2.svg" alt="" />
                    </div>
                 </CarouselItem>
                 <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                       <img className="mx-auto items-center" src="/Person3.svg" alt="" />
                    </div>
                 </CarouselItem>
                 <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                       <img className="mx-auto items-center" src="/Person4.svg" alt="" />
                    </div>
                 </CarouselItem>
                 <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                       <img className="mx-auto items-center" src="/Person5.svg" alt="" />
                    </div>
                 </CarouselItem>
                 <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                       <img className="mx-auto items-center" src="/Person6.svg" alt="" />
                    </div>
                 </CarouselItem>
              </>
           ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
     </Carousel></>
  )
}

export default Lowongan