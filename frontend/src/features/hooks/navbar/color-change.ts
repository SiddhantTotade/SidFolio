import { useEffect, useState } from "react";

interface ScrollDetectionProps {
  sectionSelector: string;
  dotNavSelector: string;
  onSectionChange?: (sectionName: string | null, color: string) => void;
}

const useScrollDetection = ({
  sectionSelector,
  dotNavSelector,
  onSectionChange,
}: ScrollDetectionProps) => {
  const [currentSection, setCurrentSection] = useState<string | null>(null);
  const [currentColor, setCurrentColor] = useState<string>("white");

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLDivElement>(sectionSelector);
    const dotNav = document.querySelectorAll<HTMLAnchorElement>(dotNavSelector);

    const handleScroll = () => {
      sections.forEach((sec) => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 1;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
          dotNav.forEach((dot) => {
            dot.classList.remove("navDot-active");
            document
              .querySelector<HTMLAnchorElement>(
                `header div .navLinks a[href*=${id}]`
              )
              ?.classList.add("navDot-active");
          });

          let color = "#000000";

          if (id === "home") {
            color = "#000000";
          } else if (id === "about") {
            color = "#ffffff";
          }

          if (currentSection !== id && onSectionChange) {
            setCurrentSection(id);
            setCurrentColor(color);
            onSectionChange(id, color);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionSelector, dotNavSelector, onSectionChange, currentSection]);

  return currentColor;
};

export default useScrollDetection;
