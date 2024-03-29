"use client";

import React from "react";

import AppCard from "./common/Card";

import { useDataStore } from "@/zustand/store";

import Home from "./home/Home";
import About from "./about/About";
import Navbar from "./navbar/Navbar";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";

export default function SectionWrapper() {
  const activeTab = useDataStore((state: any) => state.activeTab);

  return (
    <AppCard className="lg:flex lg:flex-row max-sm:flex-col-reverse max-md:flex-col-reverse md:flex-col-reverse absolute lg:w-2/4 md:w-[90%] max-md:w-[90%] max-sm:w-[90%] p-2 top-[17%] max-md:left-[5%] md:left-[5%] lg:left-1/4 max-sm:left-[5%] h-2/3 gap-2">
      <AppCard className="p-2">
        <Navbar />
      </AppCard>
      <AppCard className="p-2 h-full w-full relative">
        {activeTab === "home" && <Home />}
        {activeTab === "about" && <About />}
        {activeTab === "project" && <Projects />}
        {activeTab === "skill" && <Skills />}
      </AppCard>
    </AppCard>
  );
}
