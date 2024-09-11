"use client";

import { Button } from "@radix-ui/themes";
import { SunIcon, DesktopIcon, MoonIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

export default function ThemeChanger() {
  const { theme, setTheme } = useTheme();
  const [left, setLeft] = useState(4);
  const [currentTheme, setCurrentTheme] = useState("");

  const lightButton = useRef<HTMLButtonElement>(null);
  const systemButton = useRef<HTMLButtonElement>(null);
  const darkButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    handleButtons(theme || "");
  }, [theme]);

  const handleButtons = (newTheme: string) => {
    setTheme(newTheme);
    setCurrentTheme(newTheme);
    switch (newTheme) {
      case "light":
        setLeft(lightButton.current?.offsetLeft || 0);
        break;
      case "dark":
        setLeft(darkButton.current?.offsetLeft || 0);
        break;
      default:
        setLeft(systemButton.current?.offsetLeft || 0);
        break;
    }
  };

  return (
    <div className="p-1 relative rounded-full border-[1px] border-gray-600 w-fit">
      <Button
        className={`m-auto p-3 rounded-full relative z-10`}
        style={{
          color: currentTheme === "light" ? "white" : "",
        }}
        variant="ghost"
        ref={lightButton}
        onClick={() => {
          handleButtons("light");
        }}
      >
        <SunIcon />
      </Button>
      <Button
        className={`m-auto p-3 rounded-full relative z-10`}
        style={{
          color: ["light", "dark"].includes(currentTheme || "") ? "" : "white",
        }}
        variant="ghost"
        ref={systemButton}
        onClick={() => {
          handleButtons("system");
        }}
      >
        <DesktopIcon />
      </Button>
      <Button
        className={`m-auto p-3 rounded-full relative z-10`}
        style={{
          color: currentTheme === "dark" ? "white" : "",
        }}
        variant="ghost"
        ref={darkButton}
        onClick={() => {
          handleButtons("dark");
        }}
      >
        <MoonIcon />
      </Button>
      <span
        className="absolute w-[39px] h-[39px] bg-primary rounded-full top-1 z-0 transition-all"
        style={{
          left: left,
        }}
      ></span>
    </div>
  );
}
