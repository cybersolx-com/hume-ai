"use client";

import { useLayoutEffect, useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

export const Nav = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useLayoutEffect(() => {
    const el = document.documentElement;

    if (el.classList.contains("dark")) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  const toggleDark = () => {
    const el = document.documentElement;
    el.classList.toggle("dark");
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div
      className={
        "px-4 py-8 flex items-center h-14 z-50 bg-black border-b border-border"
      }
    >
      <div>
        {/* <HumeLogo className={"h-5 w-auto"} /> */}
        <Image src='/cyberlogo.png' width={200} height={70} alt="Logo" />
      </div>
      <div className={"ml-auto flex items-center gap-1"}>
        {/* <Button
          onClick={() => {
            window.open(
              pkg.homepage,
              "_blank",
              "noopener noreferrer"
            );
          }}
          variant={"ghost"}
          className={"ml-auto flex items-center gap-1.5"}
        >
          <span>
            <Github className={"size-4"} />
          </span>
          <span>Star on GitHub</span>
        </Button> */}
        <Button
          onClick={toggleDark}
          variant={"ghost"}
          className={`ml-auto ${ !isDarkMode ? 'bg-white' : 'bg-black'} flex items-center gap-1.5`}
        >
          <span>
            {isDarkMode ? (
              <Sun className={"size-4"} />
            ) : (
              <Moon className={"size-4"} />
            )}
          </span>
          <span>{isDarkMode ? "Light" : "Dark"} Mode</span>
        </Button>
      </div>
    </div>
  );
};
