import ThemeChanger from "@/components/ui/theme-changer";
import { createTranslation } from "@/utils/localization/server";
import { ArrowRightIcon, CodeIcon, DownloadIcon } from "@radix-ui/react-icons";
import { Button, Heading, Separator } from "@radix-ui/themes";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: { lang: "en" | "ko" };
}): Promise<Metadata> {
  const { t } = await createTranslation(params.lang, "home");

  return {
    title: t("metadata.title"),
  };
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      <section className="relative">
        <div className="flex flex-col justify-center min-h-72 px-5 relative z-30 text-center">
          <Heading className="text-5xl mb-4">
            더 나은 인터넷 세계를 만듭니다
          </Heading>
          <p className="text-2xl font-bold mb-8">
            더 빠르고, 더 안전하며, 더 스마트한 웹 경험을 위해
          </p>
          <div className="flex gap-1 justify-center">
            <Button className="cursor-pointer">
              <DownloadIcon /> Download Crow Browser
            </Button>
            <Button variant={"surface"} className="cursor-pointer">
              <CodeIcon /> Try Seed
            </Button>
          </div>
        </div>
        <p className="absolute top-0 text-[400px] font-bold left-[50%] translate-x-[-50%] opacity-10 select-none z-0">
          CROW
        </p>
      </section>
      <section className="p-10 bg-background relative z-10">
        <div className="max-w-[1200px] mx-auto">
          <Heading as="h3" className="text-4xl font-bold lg:mx-10">
            Our Goals
          </Heading>
          <div className="flex flex-col lg:flex-row lg:justify-center gap-3 mt-10">
            <div className="bg-highlight-background p-10 rounded-md overflow-hidden lg:w-1/3">
              <Link
                href={"/"}
                className="group flex justify-between cursor-pointer hover:text-primary"
              >
                <Heading as="h4" className="text-3xl">
                  Privacy
                </Heading>
                <div className="">
                  <ArrowRightIcon
                    width={35}
                    height={35}
                    className="transition-transform group-hover:translate-x-0 translate-x-[-10px]"
                  />
                </div>
              </Link>
            </div>
            <div className="bg-highlight-background p-10 rounded-md overflow-hidden lg:w-1/3">
              <Link
                href={"/"}
                className="group flex justify-between cursor-pointer hover:text-primary"
              >
                <Heading as="h4" className="text-3xl">
                  Customizable
                </Heading>
                <div className="">
                  <ArrowRightIcon
                    width={35}
                    height={35}
                    className="transition-transform group-hover:translate-x-0 translate-x-[-10px]"
                  />
                </div>
              </Link>
            </div>
            <div className="bg-highlight-background p-10 rounded-md overflow-hidden lg:w-1/3">
              <Link
                href={"/"}
                className="group flex justify-between cursor-pointer hover:text-primary"
              >
                <Heading as="h4" className="text-3xl">
                  Superfast
                </Heading>
                <div className="">
                  <ArrowRightIcon
                    width={35}
                    height={35}
                    className="transition-transform group-hover:translate-x-0 translate-x-[-10px]"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="p-10 max-w-[1200px] mx-auto">
        <Heading as="h3" className="text-4xl font-bold">
          Our Informations
        </Heading>
      </section>
    </main>
  );
}
