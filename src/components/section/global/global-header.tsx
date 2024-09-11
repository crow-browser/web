"use client";

import Image from "next/image";
import logo from "@/assets/brand/logo.png";
import { Button, DropdownMenu, Link, Separator } from "@radix-ui/themes";
import { useEffect, useRef, useState } from "react";

export default function GlobalHeader({ lang }: { lang: "en" | "ko" }) {
  const [scrolled, setScrolled] = useState(false);
  const [headerSize, setHeaderSize] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(lang);
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrolled(currentScroll > 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    setHeaderSize(headerRef.current?.offsetHeight || 0);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full ${
          scrolled
            ? "border-b border-b-gray-200 dark:border-b-gray-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 z-50 w-full "
            : ""
        }`}
        ref={headerRef}
      >
        <div
          className={`flex justify-between px-10 py-5 items-center max-w-[1200px] mx-auto`}
        >
          <div className="flex items-center gap-5">
            <Link href="/" className="w-12 mr-5">
              <Image src={logo} alt="crow-logo" />
            </Link>
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <Button variant="ghost">
                  Browser
                  <DropdownMenu.TriggerIcon />
                </Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content></DropdownMenu.Content>
            </DropdownMenu.Root>
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <Button variant="ghost">
                  Products
                  <DropdownMenu.TriggerIcon />
                </Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content></DropdownMenu.Content>
            </DropdownMenu.Root>
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <Button variant="ghost">
                  Teammates
                  <DropdownMenu.TriggerIcon />
                </Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content></DropdownMenu.Content>
            </DropdownMenu.Root>
          </div>
          <div className="width-fit flex items-center">
            <Button
              onClick={() => {
                window.location.href = "/products/browser";
              }}
            >
              Download Crow Browser
            </Button>
          </div>
        </div>
      </header>
      <div
        className="w-0"
        style={{
          height: headerSize,
        }}
      ></div>
    </>
  );
}
