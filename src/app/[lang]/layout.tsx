import GlobalHeader from "@/components/section/global/global-header";
import GlobalFooter from "@/components/section/global/global-footer";

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  const lang = params.lang === "ko" ? "ko" : "en";

  return (
    <>
      <GlobalHeader lang={lang} />
      {children}
      <GlobalFooter lang={lang} />
    </>
  );
}
