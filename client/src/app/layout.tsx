// layout.tsx
import type { Metadata } from "next";
import { Forum } from "next/font/google";
import NavbarDemo from "@/components/Navbar/navbar";
import { AuroraBackground } from "@/components/AuroraBackground/aurora-background";
import "./globals.css";
import { StickyBanner } from "@/components/StickBanner/sticky-banner";
import Footer from "@/components/Footer/footer";

const funnel = Forum({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-funnel",
});

export const metadata = {
  title: "Yggdrasil Systems",
  description: "Luxury Cybersecurity Firm",
  viewport: "width=device-width, initial-scale=1.0", // 👈 add this
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`antialiased ${funnel.className} dark`}>
      <body className="relative min-h-screen bg-black text-white">
        {/* Aurora background behind everything */}
        <AuroraBackground className="fixed inset-0 -z-50" />

        {/* Foreground content */}
        <StickyBanner className="bg-gradient-to-b from-blue-500 to-blue-600">
          <p className="mx-0 max-w-[90%] text-white drop-shadow-md">
            Announcing free cybersecurity and consulting services.{" "}
            <a href="#" className="transition duration-200 hover:underline">
              Read announcement
            </a>
          </p>
        </StickyBanner>

        <NavbarDemo />
        {children}
        <Footer />
      </body>
    </html>
  );
}
