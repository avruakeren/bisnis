import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Providers from "@/components/providers";

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
      <body className="h-full antialiased">
        <Providers>
          <div
            aria-hidden
            className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
          >
            <div
              className="blob absolute -left-20 top-0 h-96 w-96 rounded-full opacity-10 blur-3xl"
              style={{ background: "radial-gradient(circle, #3b82f6, transparent 70%)" }}
            />
            <div
              className="blob absolute -right-20 top-1/3 h-96 w-96 rounded-full opacity-[0.07] blur-3xl"
              style={{ background: "radial-gradient(circle, #8b5cf6, transparent 70%)", animationDelay: "5s" }}
            />
            <div
              className="blob absolute left-1/4 bottom-0 h-96 w-96 rounded-full opacity-[0.05] blur-3xl"
              style={{ background: "radial-gradient(circle, #ec4899, transparent 70%)", animationDelay: "10s" }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, #fafafa 0%, #f5f5f5 100%)",
              }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(59,130,246,0.06)_1px,transparent_1px)] [background-size:32px_32px]" />
          </div>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
