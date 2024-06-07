import { Poppins } from 'next/font/google';
import { Reveals } from '@/utils/Reveals';
import Image from 'next/image';

const Fase = () => {
  return (
   <div className="max-w-screen-2xl px-4 lg:px-24 mx-auto content">
      <div className="text-center section-heading mb-16">
         <Reveals>
            <div className="mb-3 text-3xl font-bold leading-relaxed text-black text1 lg:text-4xl">
               Fase Program <span className='text-indigo-300 text2 text-5xl lg:text-6xl font-semibold'> Difasetara </span> 
            </div>
         </Reveals>
         <Reveals>
            <div className="text-lg font-medium text-black text1">
               Tahapan Program Difasetara dalam membangun masa depan inklusif
            </div>
         </Reveals>
         </div>        
         <div className="grid justify-center grid-cols-6 gap-10 text-left section-element lg:grid-cols-12 md:gap-2">
         <div className="col-span-6 mr-0 md:col-span-3 md:mr-1">
            <div className="px-8 transition duration-700 ease-out py-7 rounded-3xl bg-white cardShadow">
               <Reveals>
                  <img className="non-color" width="76"
                  src="/icon_fase1.png" alt="house" />
               </Reveals>

               <Reveals>
                  <div className="mt-6 mb-1 text-base font-bold text-blue-primary">
                  Fase 1
                  </div>
               </Reveals>
      
               <Reveals>
                  <div className="text-base font-normal leading-7 text-justify text-gray-7">
                  Perusahaan bekerja sama dengan Difasetara mengenai konsultasi dan pelatihan disabilitas.
                  </div>
               </Reveals>
            </div>
         </div>

         <div className="col-span-6 mr-0 md:col-span-3 md:mr-1">
            <div className="px-8 transition duration-700 ease-out py-7 rounded-3xl hover:bg-white cardShadow">
               <Reveals>
                  <img className="non-color" width="65"
                  src="/icon_fase2.png" alt="house" />
               </Reveals>  
               <Reveals>
                  <div className="mt-6 mb-1 text-base font-bold text-blue-primary">
                  Fase 2
                  </div>
               </Reveals>
               <Reveals>
                  <div className="text-base font-normal leading-7 text-justify text-gray-7">
                  Perusahaan melakukan konsultasi dan pelatihan disabilitas kepada karyawan selama 3-6 bulan program.
                  </div>
               </Reveals>
            </div>
         </div>

         <div className="col-span-6 mr-0 md:col-span-3 md:mr-1">
            <div className="px-8 transition duration-700 ease-out py-7 rounded-3xl hover:bg-white cardShadow">
               <Reveals>
                  <img className="non-color" width="76"
                  src="icon_fase3.png" alt="house" />
               </Reveals>
               <Reveals>
                  <div className="mt-6 mb-1 text-base font-bold text-blue-primary">
                  Fase 3
                  </div>
               </Reveals>
               <Reveals>
                  <div className="text-base font-normal leading-7 text-justify text-gray-7">
                  Perusahaan membuka lowongan Pelatihan Kerja untuk disabilitas di platform difasetara. 
                  </div>
               </Reveals>
            </div>
         </div>

         <div className="col-span-6 mr-0 md:col-span-3 md:mr-1">
            <div className="px-8 transition duration-700 ease-out py-7 rounded-3xl hover:bg-white cardShadow">
               <Reveals>
                  <img className="non-color" width="76"
                  src="icon_fase4.png" alt="house" />
               </Reveals>
               <Reveals>
                  <div className="mt-6 mb-1 text-base font-bold text-blue-primary">
                  Fase 4
                  </div>
               </Reveals>
               <Reveals>
                  <div className="text-base font-normal leading-7 text-justify text-gray-7">
                  Perusahaan mulai mempekerjakan disabilitas sehingga terverifikasi sebagai ramah difabel.
                  </div>
               </Reveals>
            </div>
         </div>
      </div>
   </div>   
  )
}

export default Fase