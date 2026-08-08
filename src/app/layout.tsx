import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gina",
  description:
    "Produk pembelajaran untuk guru SD: sistem pembelajaran, media ajar, RPP, worksheet, dan web absensi.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-zinc-50 to-violet-50" />
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(59,130,246,0.1)_1px,transparent_1px)] [background-size:28px_28px]" />
        </div>
        <Navbar />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
