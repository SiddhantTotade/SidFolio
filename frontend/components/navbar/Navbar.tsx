"use client";

import React from "react";
import { useDataStore } from "@/zustand/store";

import { Button } from "@nextui-org/react";

import { navData } from "./data/navData";
import { ThemeSwitcher } from "@/app/components/themeSwitcher/ThemeSwitcher";

export default function Navbar() {
  const setActiveTab = useDataStore((state: any) => state.setActiveTab);

  return (
    <div className="w-full flex lg:flex-col max-sm:flex-row items-center h-full gap-2">
      <div className="flex w-full lg:flex-col max-sm:w-full max-sm:flex-row gap-2">
        {navData.map((item, index) => (
          <Button
            onClick={() => setActiveTab(item.tab.toLowerCase())}
            key={index}
            size="sm"
            isIconOnly
            style={{ width: "100%", height: "50px" }}
            className="text-slate-500 dark:text-slate-500 bg-gray-100 dark:bg-inherit"
          >
            {item.icon}
          </Button>
        ))}
      </div>
      <div className="h-full sm:w-full max-sm:w-[17%] flex lg:items-end justify-center max-sm:justify-end max-md:justify-end md:justify-end max-md:items-center md:items-center max-sm:items-center">
        <ThemeSwitcher />
      </div>
    </div>
  );
}
