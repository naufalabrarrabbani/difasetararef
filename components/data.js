import {
   FaceSmileIcon,
   ChartBarSquareIcon,
   CursorArrowRaysIcon,
   DevicePhoneMobileIcon,
   AdjustmentsHorizontalIcon,
   SunIcon,
 } from "@heroicons/react/24/solid";
 
 import benefitOneImg from "../public/benefit-one.svg";
 import benefitTwoImg from "../public/benefit-two.svg";
 
 const benefitOne = {
   title: "Kerjasama Perusahaan",
   desc: "Program Pelatihan dan Konsultasi untuk Meningkatkan Kesadaran dan Pengetahuan Perusahaan Membekali Perusahaan dan Difabel dengan Keterampilan dan Pengetahuan.",
   image: benefitOneImg,
   bullets: [
     {
       title: "Meningkatkan Keragaman dan Inklusivitas",
       desc: "Konsultasi dan Pelatihan kepada perusahaan untuk memahami dan menerapkan praktik inklusif.",
       icon: <FaceSmileIcon />,
     },
     {
       title: "Mendorong kesadaran akan inklusivitas melalui edukasi.",
       desc: "Platform edukasi yang menyediakan informasi dan sumber daya tentang inklusivitas dan disabilitas.",
       icon: <ChartBarSquareIcon />,
     },
     {
       title: "Akses Talenta Disabilitas Berbakat",
       desc: "Menyediakan platform yang menghubungkan perusahaan dengan penyandang disabilitas.",
       icon: <CursorArrowRaysIcon />,
     },
   ],
 };
 
 const benefitTwo = {
   title: "Kerjasama Disabilitas",
   desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
   image: benefitTwoImg,
   bullets: [
     {
       title: "Mobile Responsive Template",
       desc: "Nextly is designed as a mobile first responsive template.",
       icon: <DevicePhoneMobileIcon />,
     },
     {
       title: "Powered by Next.js & TailwindCSS",
       desc: "This template is powered by latest technologies and tools.",
       icon: <AdjustmentsHorizontalIcon />,
     },
     {
       title: "Dark & Light Mode",
       desc: "Nextly comes with a zero-config light & dark mode. ",
       icon: <SunIcon />,
     },
   ],
 };
 
 
 export {benefitOne, benefitTwo};