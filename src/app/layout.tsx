import { Noto_Sans_KR } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Theme } from "@radix-ui/themes";

import "@radix-ui/themes/styles.css";
import "@/styles/globals.css";

const fontSans = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={`${fontSans.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Theme accentColor="indigo">{children}</Theme>
        </ThemeProvider>
      </body>
    </html>
  );
}
