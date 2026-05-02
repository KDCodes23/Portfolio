import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Kanishka Dutta - Portfolio",
  description:
    "Front-end focused Full-Stack developer and founder of Vertex Studios. Personal portfolio showcasing projects, skills, and experience in web development. Passionate about creating innovative solutions and building impactful applications."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} bg-bg text-text antialiased`}>
        {children}
      </body>
    </html>
  );
}
