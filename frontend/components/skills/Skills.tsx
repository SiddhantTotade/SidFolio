import React from "react";
import AppCard from "../common/Card";
import { motion } from "framer-motion";

import { skillsData } from "./data/skills";

import "./styles/style.css";

export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      id="skills"
      className="flex flex-wrap m-3 gap-5 justify-center overflow-x-hidden p-2 overflow-scroll"
    >
      {skillsData.map((item, index) => (
        <AppCard
          key={index}
          className="p-3 bg-gray-100 dark:bg-inherit shadow-md shadow-slate-500 border-1 border-transparent hover:border-1 hover:border-gray-500 w-[20%] max-sm:w-[40%]"
        >
          <div className="items-center flex flex-col gap-3">
            {item.icon}
            <p className="text-slate-500 dark:text-slate-300">
              {item.skill_name}
            </p>
          </div>
        </AppCard>
      ))}
    </motion.div>
  );
}
