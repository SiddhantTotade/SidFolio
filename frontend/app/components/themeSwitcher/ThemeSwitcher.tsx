"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";

import { Button, Spinner } from "@nextui-org/react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return (
      <Button
        size="sm"
        isIconOnly
        style={{ width: "51px", height: "50px", borderRadius: "100px" }}
        className="bg-gray-100 dark:bg-inherit"
      >
        <Spinner />
      </Button>
    );

  return (
    <>
      {theme === "dark" ? (
        <>
          <Button
            size="sm"
            isIconOnly
            style={{ width: "51px", height: "50px", borderRadius: "100px" }}
            className="bg-gray-100 dark:bg-inherit"
            onClick={() => setTheme("light")}
          >
            <BsSunFill className="text-sky-400" size="25px" />
          </Button>
        </>
      ) : (
        <Button
          size="sm"
          isIconOnly
          style={{ width: "51px", height: "50px", borderRadius: "100px" }}
          className="bg-gray-100 dark:bg-inherit"
          onClick={() => setTheme("dark")}
        >
          <BsMoonStarsFill className="text-sky-400" size="25px" />
        </Button>
      )}
    </>
  );
}
