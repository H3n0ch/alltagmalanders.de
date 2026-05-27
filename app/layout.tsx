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
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://alltagmalanders.de",
    siteName: "Alltag mal anders",
    title: "Alltag mal anders – Wohnen, Leben und Investieren neu gedacht",
    description:
      "Alltag mal anders ist ein deutsches Lifestyle-Magazin über alternatives Wohnen, Nachhaltigkeit, Minimalismus und smarte Investments.",
  },
  twitter: {
    card: "summary",
    title: "Alltag mal anders",
    description:
      "Deutsches Lifestyle-Magazin über alternatives Wohnen, Nachhaltigkeit und smarte Investments.",
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
  },
};

function LeafLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="16" fill="#166534" />
      <path
        d="M16 5 C9 9 8 19 16 27 C24 19 23 9 16 5Z"
        fill="white"
        opacity="0.95"
      />
      <path
        d="M16 27 L16 13"
        stroke="#166534"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-stone-50 text-stone-800">

        {/* Top accent bar */}
        <div className="h-1 bg-linear-to-r from-green-700 via-green-600 to-emerald-500" />

        <header className="bg-white border-b border-stone-200 sticky top-0 z-50 shadow-sm">
          <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
            {/* Logo + Wordmark */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <LeafLogo className="w-8 h-8 transition-transform group-hover:scale-105" />
              <span className="text-lg font-bold tracking-tight text-stone-900 group-hover:text-green-800 transition-colors">
                Alltag mal anders
              </span>
            </Link>

            {/* Navigation */}
            <nav className="flex gap-1 text-sm">
              {[
                { href: "/", label: "Startseite" },
                { href: "/ueber-uns", label: "Über uns" },
                { href: "/impressum", label: "Impressum" },
                { href: "/datenschutz", label: "Datenschutz" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="px-3 py-1.5 rounded-md text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="bg-white border-t border-stone-200 mt-20">
          <div className="max-w-4xl mx-auto px-6 py-10">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-8">
              {/* Brand */}
              <div className="flex items-center gap-2.5">
                <LeafLogo className="w-7 h-7" />
                <div>
                  <p className="font-semibold text-stone-900 text-sm">Alltag mal anders</p>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Wohnen, Leben und Investieren neu gedacht
                  </p>
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-col gap-1.5 text-sm text-stone-500">
                <Link href="/ueber-uns" className="hover:text-stone-900 transition-colors">Über uns</Link>
                <Link href="/impressum" className="hover:text-stone-900 transition-colors">Impressum</Link>
                <Link href="/datenschutz" className="hover:text-stone-900 transition-colors">Datenschutz</Link>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-100 text-xs text-stone-400">
              © {new Date().getFullYear()} Alltag mal anders · Alle Rechte vorbehalten
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
