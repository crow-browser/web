"use client";

import logo from "@/assets/brand/logo.png";
import ThemeChanger from "@/components/ui/theme-changer";
import { useTranslation } from "@/utils/localization/clinet";
import { DiscordLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { Heading } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";

export default function GlobalFooter({ lang }: { lang: "en" | "ko" }) {
  const { t } = useTranslation(lang, "global");

  return (
    <footer className="bg-highlight-background py-16 px-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col gap-5 items-center sm:flex-row justify-between">
          <div className="flex items-center gap-4">
            <Image src={logo} alt="footer-logo" className="w-10" />
            <p>Crow Project</p>
          </div>
          <ThemeChanger />
        </div>
        <div className="my-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <Heading as="h5" size={"3"}>
              {t("footer.products.title")}
            </Heading>
            <ul className="mt-4">
              <li>
                <Link href="/products/browser">
                  {t("footer.products.crow_browser")}
                </Link>
              </li>
              <li>
                <Link href="/products/seed">{t("footer.products.seed")}</Link>
              </li>
              <li>
                <Link href="https://odinus.shop/">
                  {t("footer.products.odinus")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <Heading as="h5" size={"3"}>
              {t("footer.resources.title")}
            </Heading>
          </div>
          <div>
            <Heading as="h5" size={"3"}>
              {t("footer.developers.title")}
            </Heading>
          </div>
          <div className="md:w-fit">
            <p>Follow us on</p>
            <div className="mt-3 flex gap-2">
              <Link href="https://github.com/crow-browser">
                <GitHubLogoIcon width={20} height={20} />
              </Link>
              <Link href="https://discord.gg/7jsR5zaRMP">
                <DiscordLogoIcon width={20} height={20} />
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center opacity-40 text-xs mt-10">
          Copyright © 2023 - {new Date().getFullYear()} Crow Project. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
