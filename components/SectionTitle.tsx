import React from "react";
import { Container } from "@/components/Container";
import { Poppins } from 'next/font/google';

interface SectionTitleProps {
  preTitle?: string;
  title?: string;
  align?: "left" | "center";
  id?: string; // Add this line
  children?: React.ReactNode;
}

export const SectionTitle = (props: Readonly<SectionTitleProps>) => {
  return (
    <Container
      className={`flex w-full text1 flex-col mt-12 mb-10 lg:mt-20 ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}>
      {props.preTitle && (
        <div className="text-sm font-bold tracking-wider text-black uppercase">
          {props.preTitle}
        </div>
      )}

      {props.title && (
        <h2 className="max-w-2xl text1 mt-3 text-3xl font-bold leading-snug tracking-tight text-indigo-300 lg:leading-tight lg:text-4xl">
          {props.title}
        </h2>
      )}

      {props.children && (
        <p className="max-w-2xl text1 py-4 text-lg leading-normal text-black lg:text-xl xl:text-xl">
          {props.children}
        </p>
      )}
    </Container>
  );
}