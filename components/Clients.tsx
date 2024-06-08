import React from 'react'
import { companies } from '@/data';
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const testimonials = [
   {
     quote:
       "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
     name: "Charles Dickens",
     title: "A Tale of Two Cities",
   },
   {
     quote:
       "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
     name: "William Shakespeare",
     title: "Hamlet",
   },
   {
     quote: "All that we see or seem is but a dream within a dream.",
     name: "Edgar Allan Poe",
     title: "A Dream Within a Dream",
   },
   {
     quote:
       "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
     name: "Jane Austen",
     title: "Pride and Prejudice",
   },
   {
     quote:
       "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
     name: "Herman Melville",
     title: "Moby-Dick",
   },
 ];

const Clients = () => {
  return (
   <section className="max-container px-6 lg:py-5">
      <div className="flex flex-col py-0 items-center max-lg:mt-10">
         <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-auto rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
         <div className="flex flex-wrap items-center justify-center mt-5 gap-4 md:gap-16 max-lg:mt-20">
            {companies.map((company) => (
               <React.Fragment key={company.id}>
                  <div className="flex max-w-full gap-2">
                     <img
                        src={company.nameImg}
                        alt={company.name}
                        width={company.id === 4 || company.id === 5 ? 100 : 150}
                        className="md:w-24 lg:w-full"
                     />
                  </div>
               </React.Fragment>
            ))}
         </div>
      </div>
   </section>

  )
}

export default Clients