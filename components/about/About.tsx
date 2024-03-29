"use client";

import React, { useEffect } from "react";
import { useDataStore } from "@/zustand/store";

import { IoIosDocument } from "react-icons/io";
import { Button, Link } from "@nextui-org/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import "./styles/style.css";

export default function About() {
  const about = useDataStore((state: any) => state.aboutData);
  const fetchAbout = useDataStore((state: any) => state.fetchAbout);

  const highlightText = (text: string) => {
    const patterns = [
      {
        pattern: /Siddhant Totade/,
        className: "from-sky-500 via-red-500 to-indigo-500 font-bold text-lg",
      },
      {
        pattern: /Django/,
        className: "from-purple-500 via-pink-500 to-red-500 font-bold text-lg",
      },
      {
        pattern: /React/,
        className:
          "from-red-500 via-purple-500 to-orange-500 font-bold text-lg",
      },
      {
        pattern: /React Native/,
        className: "from-sky-500 via-pink-500 to-purple-500 font-bold text-lg",
      },
      {
        pattern: /Computer Science and Engineering/,
        className:
          "from-indigo-500 via-pink-500 to-orange-500 font-bold text-lg",
      },
    ];

    let highlightedText = text;
    patterns.forEach(({ pattern, className }) => {
      highlightedText = highlightedText.replace(
        pattern,
        `<span class="text-transparent bg-gradient-to-r bg-clip-text animate-text ${className}">$&</span>`
      );
    });

    return <p dangerouslySetInnerHTML={{ __html: highlightedText }} />;
  };

  useEffect(() => {
    fetchAbout();
  }, [fetchAbout]);

  return (
    <>
      {about?.map((item: any, index: number) => (
        <div id="about" className="overflow-scroll" key={index}>
          <div className="text-justify p-5 text-slate-500 dark:text-slate-400">
            {highlightText(item.description)}
          </div>
          <div className="w-[30%] m-auto flex justify-between mt-10 max-sm:mt-3 max-sm:mb-10 gap-5 max-sm:w-6/12">
            <Link target="_blank" href={item.linkedin}>
              <Button isIconOnly className="bg-gray-100 dark:bg-gray-600">
                <FaLinkedin
                  size={20}
                  className="text-slate-500 dark:text-slate-200"
                />
              </Button>
            </Link>
            <Link target="_blank" href={item.github}>
              <Button isIconOnly className="bg-gray-100 dark:bg-gray-600">
                <FaGithub
                  size={20}
                  className="text-slate-500 dark:text-slate-200"
                />
              </Button>
            </Link>
            <Link target="_blank" href={item.resume}>
              <Button isIconOnly className="bg-gray-100 dark:bg-gray-600">
                <IoIosDocument
                  size={20}
                  className="text-slate-500 dark:text-slate-200"
                />
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
