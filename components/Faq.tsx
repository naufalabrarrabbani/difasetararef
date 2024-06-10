"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="max-container padding-container">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between text1 w-full px-4 py-4 text-lg text-left text-white rounded-lg bg-indigo-300 hover:bg-indigo-500 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 text-1 pt-4 pb-2 text-[#0F1F2E]">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "Bagaimana cara mendaftar program inklusivitaas untuk perusahaan?",
    answer: "Perusahaan dapat mendaftar program inklusivitas dengan mengisi formulir pendaftaran di website kami. Tim kami akan menghubungi Anda untuk informasi lebih lanjut.",
  },
  {
    question: "Apakah ada dukungan dalam mencari pekerjaan setelah pelatihan?",
    answer: "Tentunya! Difasetara akan membantu peserta mencari peluang kerja yang inklusif dan ramah disabilitas setelah pelatihan.",
  },
  {
    question: "Apakah program untuk disabilitas berbayar?",
    answer:
      "Program inklusivitas untuk disabilitas di Difasetara adalah program gratis. Kami percaya bahwa setiap orang berhak mendapatkan kesempatan yang sama untuk berkembang.",
  },
  {
    question: "Apakah disabilitas akan tetap mendapatkan dukungan setelah mendapatkan pekerjaan?? ",
    answer:
      "Pastinya! kami menyediakan dukungan berkelanjutan dan sumber daya untuk membantu karyawan disabilitas beradaptasi dan berkembang di tempat kerja.",
  },
];