"use client";
import Link from "next/link";
import Button from './Button'
import Image from "next/image"
import dynamic from "next/dynamic";
import { Disclosure } from "@headlessui/react";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

export const Navbar = () => {
  const navigation = [
    { name: "Produk", href: "#Benefit1" },
    { name: "Komunitas", href: "#komunitas" },
    { name: "Tim Kami", href: "#team" },
    { name: "Testimoni", href: "#testimonials" },
  ];

  return (
      <nav className="flex items-center text1 justify-between mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 relative z-30 py-5">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="">
                   <Image src="/difalogo.png" alt="logo" width={120} height={75} />
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700">
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    {navigation.map((menu, index) => (
                      <Link key={index} href={menu.href} className="w-full px-4 py-2 -ml-4 text-black rounded-md hover:text-indigo-500 focus:text-indigo-500 focus:outline-none">
                          {menu.name}
                      </Link>
                    ))}
                    <a href="https://bit.ly/ProgramDifaSetara" className="w-full flex items-center mx-auto" target="_blank" rel="noopener noreferrer">
                      <Button 
                        type="button"
                        title="Daftar Sekarang"
                        icon="/arrow.svg"
                        variant="btn_dark_green"
                      />
                    </a>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                {/* Update Link component to use href from navigation array */}
                <Link href={menu.href} className="inline-block px-4 py-2 text-lg font-normal text-black no-underline rounded-md hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none">
                    {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:flex lg:items-center lg:justify-center hidden">
          <a href="https://bit.ly/ProgramDifaSetara" target="_blank" rel="noopener noreferrer">
            <Button 
              type="button"
              title="Daftar Sekarang"
              icon="/arrow.svg"
              variant="btn_dark_green"
            />
          </a>
        </div>
      </nav>
  );
}

export default dynamic (() => Promise.resolve(Navbar), {ssr: false})