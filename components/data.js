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
   title: "Kerja sama Perusahaan",
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
   title: "Kerja sama Disabilitas",
   desc: "Program pelatihan kerja dan cari lowongan untuk disabilitas. Membekali disabilitas dengan keterampilan dan pengetahuan untuk memasuki dunia kerja",
   image: benefitTwoImg,
   bullets: [
     {
       title: "Fitur mencari lowongan.",
       desc: "Kamu dapat mencari lowongan kerja yang sesuai dengan keahlianmu.",
       icon: <DevicePhoneMobileIcon />,
     },
     {
       title: "Pelatihan kerja bersama perusahaan.",
       desc: "Kamu bisa mengikuti pelatihan kerja bersama perusahaan yang bekerjasama dengan kami.",
       icon: <AdjustmentsHorizontalIcon />,
     },
     {
       title: "Fitur membangun profil",
       desc: "Kamu bisa membuat profil diri dengan keterampilan dan pengalaman kerjamu.",
       icon: <SunIcon />,
     },
   ],
 };
 
 
 export {benefitOne, benefitTwo};