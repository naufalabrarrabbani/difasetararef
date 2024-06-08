import { Poppins } from 'next/font/google';
import { Reveals } from '@/utils/Reveals';
import Image from 'next/image';
import { FlipWords } from "@/components/ui/FlipWords";

const Banner = () => {
  const words = ["Inklusivitas", "Keberagaman", "Kesetaraan", "Aksesibilitas"];
  return (
   <div className="flex items-center justify-center mt-5 lg:mt-10 p-5 min-w-screen">
      <div
         className="relative flex flex-col items-center w-full max-w-6xl px-4 py-8 mx-auto text-center rounded-[20px] shadow-2xl lg:block lg:bg-[url(/bg-banner.svg)] bg-[url(/bgbannermd.svg)] bg-no-repeat bg-cover sm:px-6 md:pb-0 md:pt-12 lg:px-12 lg:py-12">
         <h2
            className="my-4 text-3xl font-bold text-center tracking-tight text1 text-[#0F1F2E] sm:text-4xl md:text-5xl lg:my-0 xl:text-[38px] sm:leading-tight">
            Disabilitas Berdaya Ciptakan
            <span className="block text-center xl:inline">
            <FlipWords words={words} />
            </span>
         </h2>
         <p className="mt-5 text-center mb-5 text-sm font-semibold text1 text-[#0F1F2E] xl:text-base xl:tracking-wider lg:mb-0">
         Tertarik untuk Menjadikan Indonesia Lebih Baik?  
         </p>
         <div className="flex mb-8 mx-auto items-center lg:mt-6 lg:mb-0">
            <div className="flex mx-auto items-center">
                  <a href="#"
                     className="flex text1 items-center text-center mx-auto px-5 py-3 text-base font-medium text-indigo-700 transition duration-150 ease-in-out bg-indigo-100 border border-transparent rounded-[20px] hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline focus:border-indigo-300">
                     Daftar Sekarang
                  </a>
            </div>
         </div>
      </div>
   </div>
  )
}

export default Banner