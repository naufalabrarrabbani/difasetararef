import React from 'react'
import { companies } from '@/data';

const Clients = () => {
  return (
   <section className="max-container padding-container lg:py-20">
      <div className="flex flex-col py-0 items-center max-lg:mt-10">
         <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
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