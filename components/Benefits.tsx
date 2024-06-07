import Image from "next/image";
import React from "react";
import { Container }  from "@/components/Container";
import { Poppins } from 'next/font/google';
import { Reveals } from "@/utils/Reveals";

interface BenefitsProps {
  imgPos?: "left" | "right";
  data: {
    imgPos?: "left" | "right";
    title: string;
    desc: string;
    image: any;
    bullets: {
      title: string;
      desc: string;
      icon: React.ReactNode;
    }[];
  };
}
export const Benefits = (props: Readonly<BenefitsProps>) => {
  const { data } = props;
  return (
      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
        <div
          className={`flex items-center justify-center w-full lg:w-1/2 ${
            props.imgPos === "right" ? "lg:order-1" : ""
          }`}>
          <Reveals>
            <div>
              <Image
                src={data.image}
                width={521}
                height={521}
                alt="Benefits"
                className={"object-cover"}
                placeholder="blur"
                blurDataURL={data.image.src}
              />
            </div>
          </Reveals>
        </div>

        <div
          className={`flex lg:px-10 items-center w-full lg:w-1/2 ${
            data.imgPos === "right" ? "lg:justify-end" : ""
          }`}>
          <div>
            <Reveals>
              <div className="flex flex-col w-full mt-5">
                <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-black text1 lg:leading-tight lg:text-4xl">
                  {data.title}
                </h3>

                <p className="max-w-2xl py-4 text-lg text-justify leading-normal text1 text-black lg:text-xl xl:text-xl">
                  {data.desc}
                </p>
              </div>
            </Reveals>

            <Reveals>
              <div className="w-full mx-auto mt-5">
                {data.bullets.map((item, index) => (
                  <Benefit key={index} title={item.title} icon={item.icon}>
                    {item.desc}
                  </Benefit>
                ))}
              </div>
            </Reveals>
          </div>
        </div>
      </Container>
  );
};

function Benefit(props: any) {
  return (
      <div className="flex items-start mt-5 space-x-3">
        <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-300 rounded-full w-11 h-11">
          {React.cloneElement(props.icon, {
            className: "w-7 h-7 text-indigo-50",
          })}
        </div>
        <div>
          <h4 className="text-xl text1 font-semibold text-black">
            {props.title}
          </h4>
          <p className="mt-1 text1 text-black">
            {props.children}
          </p>
        </div>
      </div>
  );
}

export default Benefits