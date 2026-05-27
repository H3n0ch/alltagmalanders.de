import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alltag mal anders – Wohnen, Leben und Investieren neu gedacht",
  description:
    "Alltag mal anders ist ein deutsches Lifestyle-Magazin über alternatives Wohnen, Nachhaltigkeit, Minimalismus und smarte Investments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-zinc-800">
        <header className="border-b border-zinc-200">
          <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-zinc-900 hover:text-zinc-600 transition-colors"
            >
              Alltag mal anders
            </Link>
            <nav className="flex gap-6 text-sm text-zinc-600">
              <Link href="/" className="hover:text-zinc-900 transition-colors">
                Startseite
              </Link>
              <Link
                href="/impressum"
                className="hover:text-zinc-900 transition-colors"
              >
                Impressum
              </Link>
              <Link
                href="/datenschutz"
                className="hover:text-zinc-900 transition-colors"
              >
                Datenschutz
              </Link>
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-zinc-200 mt-16">
          <div className="max-w-3xl mx-auto px-6 py-8 text-sm text-zinc-500 flex flex-col sm:flex-row justify-between gap-2">
            <p>© {new Date().getFullYear()} Alltag mal anders</p>
            <div className="flex gap-4">
              <Link href="/impressum" className="hover:text-zinc-900 transition-colors">
                Impressum
              </Link>
              <Link href="/datenschutz" className="hover:text-zinc-900 transition-colors">
                Datenschutz
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
