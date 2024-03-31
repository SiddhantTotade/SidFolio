"use client";

import React, { useEffect } from "react";
import { useDataStore } from "@/zustand/store";

import { IoIosDocument } from "react-icons/io";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import "./styles/style.css";
import ContactLinks from "./ContactLinks";
import AboutSkeleton from "./ui/AboutSkeleton";
import LinksSkeleton from "./ui/LinksSkeleton";
import { highlightText } from "./utils/ui/HighlightedText";

export default function About() {
  const about = useDataStore((state: any) => state.aboutData);
  const isLoading = useDataStore((state: any) => state.isLoading);
  const fetchAbout = useDataStore((state: any) => state.fetchAbout);

  useEffect(() => {
    fetchAbout();
  }, [fetchAbout]);

  return (
    <>
      {about?.map((item: any, index: number) => (
        <div id="about" className="overflow-scroll" key={index}>
          <div className="text-justify p-5 text-slate-500 dark:text-slate-400">
            {isLoading ? <AboutSkeleton /> : highlightText(item.description)}
          </div>
          <div className="w-[30%] m-auto flex justify-between mt-10 max-sm:mt-3 max-sm:mb-10 gap-5 max-sm:w-6/12">
            {isLoading ? (
              <LinksSkeleton />
            ) : (
              [item.linkedin, item.github, item.resume].map((link, index) => (
                <ContactLinks
                  key={index}
                  icon={
                    index === 0 ? (
                      <FaLinkedin
                        size={20}
                        className="text-slate-500 dark:text-slate-200"
                      />
                    ) : index === 1 ? (
                      <FaGithub
                        size={20}
                        className="text-slate-500 dark:text-slate-200"
                      />
                    ) : (
                      <IoIosDocument
                        size={20}
                        className="text-slate-500 dark:text-slate-200"
                      />
                    )
                  }
                  link={link}
                />
              ))
            )}
          </div>
        </div>
      ))}
    </>
  );
}
