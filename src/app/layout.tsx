import type { Metadata } from "next";
import { Hanken_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Providers from "@/components/providers";
import { site } from "@/lib/site";

const headline = Hanken_Grotesk({
  variable: "--font-headline-google",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const body = Inter({
  variable: "--font-body-google",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: `${site.name} - ${site.tagline}`,
  description: site.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${headline.variable} ${body.variable} h-full antialiased`}
    >
      <body className="h-full antialiased">
        <Providers>
          <div
            aria-hidden
            className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
          >
            <div
              className="blob absolute -left-24 top-[-5%] h-[32rem] w-[32rem] rounded-full opacity-[0.22] blur-3xl"
              style={{ background: "radial-gradient(circle, #2151da, transparent 70%)" }}
            />
            <div
              className="blob absolute -right-24 top-1/3 h-[30rem] w-[30rem] rounded-full opacity-[0.18] blur-3xl"
              style={{ background: "radial-gradient(circle, #1d4ed8, transparent 70%)", animationDelay: "5s" }}
            />
            <div
              className="blob absolute left-1/4 bottom-0 h-[28rem] w-[28rem] rounded-full opacity-[0.14] blur-3xl"
              style={{ background: "radial-gradient(circle, #b7c4ff, transparent 70%)", animationDelay: "10s" }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(180deg, rgba(248,249,255,0.6) 0%, rgba(239,244,255,0.6) 100%)",
              }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,55,176,0.05)_1px,transparent_1px)] [background-size:32px_32px]" />
          </div>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
