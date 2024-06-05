"use client";
import Image from "next/image";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import { SectionTitle } from "@/components/SectionTitle";
import { Reveals } from "@/utils/Reveals";
import { benefitOne, benefitTwo } from "@/components/data";

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
    </main>
  );
}
