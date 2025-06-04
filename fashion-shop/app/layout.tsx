import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lux Muslim Fashion",
  description: "Elegant modest wear",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased flex flex-col min-h-screen`}
      >
        <header className="bg-emerald-900 text-white py-6 shadow-md">
          <h1 className="text-center text-4xl font-bold font-brand">Lux Muslim Fashion</h1>
        </header>
        <main className="flex-grow">{children}</main>
        <footer className="bg-emerald-900 text-white text-center py-4 text-sm">
          © {new Date().getFullYear()} Lux Muslim Fashion
        </footer>
      </body>
    </html>
  );
}
