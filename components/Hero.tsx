import Image from 'next/image'
import Button from './Button'
import { Poppins } from 'next/font/google';
import localFont from 'next/font/local';
import { Reveals } from '@/utils/Reveals';

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-0 py-0 md:gap-20 lg:py-10 xl:flex-row">
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className= "lg:text-6xl text-[44px] lg:text-left my-3 text-center text1 font-bold">Mari Ciptakan <br />
          <span className="text-indigo-300 text2 text-5xl lg:text-6xl font-semibold">Inklusivitas dan Keberagaman<br/>
            <span className="relative inline-block">
              Bersama Disabilitas
              <svg className="w-full absolute bottom-0 translate-y-[15px] h-auto stroke-current text-indigo-300" viewBox="0 0 194 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 6c39.898-3.018 133.755-7.244 190 0" strokeWidth="4" strokeLinecap="round"></path></svg>
            </span>
          </span>
        </h1>
        <div className="relative flex lg:hidden flex-1 items-start">
            <Image
               src={"/difahero2.png"}
               alt="difaillustration"
               width={1000}
               height={1000}
            />
        </div>
        <p className="regular-16 my-5 text-justify text1 lg:text-left text-gray-30 xl:max-w-[520px]">
          Setara Dalam Perbedaan! Mari ikut wujudkan #DifabelSetara dengan berkolaborasi mewujudkan hak kerja disabilitas
        </p>
        <div className="flex flex-col w-full gap-3 sm:flex-row">
            <Button 
              type="button" 
              title="Untuk Disabilitas" 
              icon="/icon_difa.png"
              variant="btn_green" 
            />
            <Button 
              type="button" 
              title="Untuk Perusahaan" 
              icon="/icon_company.png"
              variant="btn_white_text" 
            />
        </div>
      </div>

      <div className="relative lg:flex hidden pr-20 pb-0 flex-1 items-center">
         <Image
            src={"/difahero2.png"}
            alt="camping"
            width={1000}
            height={1000}
         />
      </div>
    </section>
  )
}

export default Hero