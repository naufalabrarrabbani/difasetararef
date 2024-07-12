"use client";
import Image from "next/image";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import { SectionTitle } from "@/components/SectionTitle";
import { Reveals } from "@/utils/Reveals";
import { benefitOne, benefitTwo } from "@/components/data";
import Fase from "@/components/Fase";
import Clients from "@/components/Clients";
import Banner from "@/components/Banner";
import { Faq } from "@/components/Faq";
import Lowongan from "@/components/Lowongan";
import GetApp from "@/components/GetApp";

export default function Home() {
  return (
    <main suppressHydrationWarning className="">
      <Hero />
      <Reveals>
        <SectionTitle
          preTitle="Tujuan Difasetara"
          title="Membangun Masa Depan Inklusif dengan Difasetara"
        >
          Kami percaya bahwa setiap orang memiliki potensi untuk berkontribusi dan sukses, terlepas dari latar belakang atau kemampuannya.
        </SectionTitle>
      </Reveals>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <Fase />
      <Clients />
      <SectionTitle title="Pertanyaan yang sering diajukan">
      Ini adalah beberapa pertanyaan yang sering ditanyakan kepada kami. Jika kamu memiliki pertanyaan lain, kamu bisa menghubungi kami melalui email
      </SectionTitle>
      <Faq />
      <Lowongan />
      <Banner />
      <GetApp />
    </main>
  );
}
