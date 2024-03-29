import { motion } from "framer-motion";
import { Button } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

import { useDataStore } from "@/zustand/store";

import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa";

export default function Projects() {
  const [expandedCardIndex, setExpandedCardIndex] = useState(null);
  const projectData = useDataStore((state: any) => state.projectData);
  const fetchProject = useDataStore((state: any) => state.fetchProject);

  useEffect(() => {
    fetchProject();
  }, [fetchProject]);

  const toggleExpand = (index: number) => {
    if (expandedCardIndex === index) {
      setExpandedCardIndex(null);
    } else {
      setExpandedCardIndex(index);
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      {projectData?.map((item: any, index: number) => (
        <div key={index} className="flex flex-col gap-10">
          <motion.div
            key={index}
            layout
            className={`bg-slate-100 dark:bg-gray-700 gap-2 text-white rounded-xl cursor-pointer from-purple-700 via-pink-700 to-orange-700 p-3 dark:hover:bg-gradient-to-r inline-block animate-text ${
              expandedCardIndex === index ? "large" : "small"
            }`}
            onClick={() => toggleExpand(index)}
          >
            <motion.h2
              transition={{ layout: { duration: 0.5, type: "spring" } }}
              layout="position"
              className="text-slate-900 dark:text-slate-200 pt-1"
            >
              {item.title}
            </motion.h2>
            {expandedCardIndex === index && (
              <motion.div
                className="gap-2 grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                exit={{ opacity: 0 }}
              >
                <p className="text-slate-700 dark:text-slate-300">
                  {item.description}
                </p>
                <div className="flex gap-2">
                  <Button isIconOnly className="bg-gray-200 dark:bg-slate-200">
                    <FaGithub
                      size={20}
                      className="dark:text-slate-700 text-gray-700"
                    />
                  </Button>
                  {item.is_live && (
                    <Button
                      isIconOnly
                      className="bg-gray-200 dark:bg-slate-200"
                    >
                      <FaExternalLinkSquareAlt
                        size={20}
                        className="dark:text-slate-700 text-gray-700"
                      />
                    </Button>
                  )}
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      ))}
    </div>
  );
}
