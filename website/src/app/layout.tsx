import type { Metadata, Viewport } from "next";
import "@/styles/plugins.css";
import "@/styles/globals.css";
import Script from "next/script";
import Preloader from "@/components/Preloader";
import Cursor from "@/components/Cursor";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Solstice Cinematics",
  description: "Elevate the Visual. Capture the Story",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Preloader />
        <main>
          <Header />
          {children}
          <Footer />
        </main>
        <Cursor />
        <Script src="/js/vendor.js" />
        <Script src="/js/script.js" />
      </body>
    </html>
  );
}
