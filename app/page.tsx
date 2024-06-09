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
        preTitle="Testimonials"
        title="Here's what our customers said"
      >
        Kami meminta beberapa pendapat dari teman tuli dan difabel lainnya yang telah kami wawancarai.
      </SectionTitle>
      <Clients />
      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Banner />
    </main>
  );
}
