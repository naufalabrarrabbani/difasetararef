import React from 'react'
import { companies } from '@/data';
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const testimonials = [
   {
     quote:
       "Sebagai seorang penyandang tunarungu, program difasetara telah mengubah kehidupan kerja saya. Praktik inklusif yang mereka ajarkan membuat komunikasi dengan kolega saya menjadi lebih lancar. Saya sekarang merasa lebih dipahami dan dihargai di tempat kerja saya.",
     name: "Riki",
     title: "Disabilitas Tunarungu",
   },
   {
     quote:
       "Program yang ditawarkan difasetara telah membawa perubahan besar bagi saya. Majikan dan rekan kerja saya kini lebih siap untuk mendukung saya, menjadikan lingkungan kerja saya lebih inklusif dan ramah. Hal ini secara signifikan meningkatkan kepuasan kerja saya.",
     name: "Reinaldi",
     title: "Disabilitas Tunadaksa",
   },
   {
     quote: "Saya sangat merekomendasikan jasa Difasetara. Pelatihan dan dukungan komprehensif mereka telah membuat perbedaan nyata dalam kehidupan kerja saya sehari-hari. Saya sekarang merasa lebih terhubung dengan tim saya dan lebih mampu dalam peran saya.",
     name: "Rinawati",
     title: "Disabilitas Tunarungu",
   },
   {
     quote:
       "Saya yakin bahwa program ini akan terus membantu banyak penyandang disabilitas lainnya untuk mencapai tujuan mereka.",
     name: "Rizky",
     title: "Disabilitas Tunadaksa",
   },
   {
     quote:
       "program ini cukup menarik, karena membuat inovasi yg inklusif ini bisa membangun peluang yang bagus bagi penyandang disabilitas, pada dasarnya setiap yg berjiwa pasti membutuhkan biaya hidup, program ini sangat membantu disabilitas yang memang membutuhkan dan pastinya dengan kemampuan yang dibutuhkan",
     name: "Herman",
     title: "Disabilitas Tunawicara",
   },
 ];

const Clients = () => {
  return (
   <section id='testimonials' className="px-6 lg:py-5">
      <div className="flex flex-col items-center max-lg:mt-10">
        <h1 className='max-w-2xl text1 mt-3 text-3x items-center mx-auto font-bold text-center leading-snug tracking-tight text-indigo-300 lg:leading-tight text-3xl lg:text-4xl'>
          Testimonial
        </h1>
        <p className='max-w-2xl text1 text-center py-4 text-lg leading-normal text-black lg:text-xl xl:text-xl'>Kami meminta beberapa pendapat dari teman tuli dan difabel lainnya yang telah kami wawancarai.</p>
        <div
          className="h-auto rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
        <div className="flex flex-wrap items-center justify-center mt-5 gap-4 md:gap-16 lg:mt-20">
            {companies.map((company) => (
               <React.Fragment key={company.id}>
                  <div className="flex max-w-full gap-2">
                     <img
                        src={company.nameImg}
                        alt={company.name}
                        width={company.id === 4 || company.id === 5 ? 100 : 150}
                        className="md:w-36 lg:w-full"
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