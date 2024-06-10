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
      <SectionTitle
        title="Testimoni"
      >
        Kami meminta beberapa pendapat dari teman tuli dan difabel lainnya yang telah kami wawancarai.
      </SectionTitle>
      <Clients />
      <SectionTitle title="Pertanyaan yang sering diajukan">
      Ini adalah beberapa pertanyaan yang sering ditanyakan kepada kami. Jika kamu memiliki pertanyaan lain, kamu bisa menghubungi kami melalui email
      </SectionTitle>
      <Faq />
      <Banner />
    </main>
  );
}
