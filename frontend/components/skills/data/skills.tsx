import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaPython,
  FaBootstrap,
  FaSass,
  FaGithub,
} from "react-icons/fa";
import {
  SiTypescript,
  SiDjango,
  SiReact,
  SiNextdotjs,
  SiNextui,
  SiMaterialdesign,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandReactNative, TbBrandCpp } from "react-icons/tb";

export const skillsData = [
  {
    skill_name: "C++",
    icon: (
      <TbBrandCpp size={30} className="text-slate-500 dark:text-slate-300" />
    ),
  },
  {
    skill_name: "Python",
    icon: <FaPython size={30} className="text-slate-500 dark:text-slate-300" />,
  },
  {
    skill_name: "HTML",
    icon: <FaHtml5 size={30} className="text-slate-500 dark:text-slate-300" />,
  },
  {
    skill_name: "CSS",
    icon: <FaCss3 size={30} className="text-slate-500 dark:text-slate-300" />,
  },
  {
    skill_name: "JS",
    icon: <FaJs size={30} className="text-slate-500 dark:text-slate-300" />,
  },
  {
    skill_name: "TypeScript",
    icon: (
      <SiTypescript size={30} className="text-slate-500 dark:text-slate-300" />
    ),
  },
  {
    skill_name: "Django",
    icon: <SiDjango size={30} className="text-slate-500 dark:text-slate-300" />,
  },
  {
    skill_name: "React",
    icon: <SiReact size={30} className="text-slate-500 dark:text-slate-300" />,
  },
  {
    skill_name: "React Native",
    icon: (
      <TbBrandReactNative
        size={30}
        className="text-slate-500 dark:text-slate-300"
      />
    ),
  },
  {
    skill_name: "Next Js",
    icon: (
      <SiNextdotjs size={30} className="text-slate-500 dark:text-slate-300" />
    ),
  },
  {
    skill_name: "Github",
    icon: <FaGithub size={30} className="text-slate-500 dark:text-slate-300" />,
  },
  {
    skill_name: "Next UI",
    icon: <SiNextui size={30} className="text-slate-500 dark:text-slate-300" />,
  },
  {
    skill_name: "Material UI",
    icon: (
      <SiMaterialdesign
        size={30}
        className="text-slate-500 dark:text-slate-300"
      />
    ),
  },
  {
    skill_name: "Tailwind CSS",
    icon: (
      <SiTailwindcss size={30} className="text-slate-500 dark:text-slate-300" />
    ),
  },
  {
    skill_name: "Bootstrap",
    icon: (
      <FaBootstrap size={30} className="text-slate-500 dark:text-slate-300" />
    ),
  },
  {
    skill_name: "Saas",
    icon: <FaSass size={30} className="text-slate-500 dark:text-slate-300" />,
  },
];
