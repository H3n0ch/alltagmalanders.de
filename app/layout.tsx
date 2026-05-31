import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alltag mal anders – Der Blog für alternative Immobilien",
  description:
    "Tiny Houses, Van Life, Minimalismus und clevere Investments: Alltag mal anders ist der Blog für alternative Immobilien – ehrlich, praktisch und unabhängig.",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://alltagmalanders.de",
    siteName: "Alltag mal anders",
    title: "Alltag mal anders – Der Blog für alternative Immobilien",
    description:
      "Tiny Houses, Van Life, Minimalismus und clevere Investments: Der Blog für alternatives Wohnen jenseits des Mainstreams.",
  },
  twitter: {
    card: "summary",
    title: "Alltag mal anders",
    description:
      "Der Blog für alternative Immobilien: Tiny Houses, Van Life, Minimalismus und smarte Investments.",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
};

function HouseLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="16" fill="#166534" />
      {/* House walls: tall on left, short on right (side view) */}
      <polygon points="7,10 25,17 25,23 7,23" fill="white" opacity="0.95" />
      {/* Single-pitch Schrägdach (roof panel, overhangs walls) */}
      <polygon points="5,9 27,16.5 25,17 7,10" fill="white" opacity="0.78" />
      {/* Large front window (right/tall side) */}
      <rect x="17.5" y="18" width="6" height="4.5" rx="0.4" fill="#166534" opacity="0.72" />
      {/* Small back window (left/short side) */}
      <rect x="8" y="14" width="3" height="2.5" rx="0.3" fill="#166534" opacity="0.55" />
      {/* Trailer axle bar */}
      <rect x="4" y="23" width="24" height="1.5" rx="0.5" fill="white" opacity="0.88" />
      {/* Trailer hitch (left) */}
      <rect x="3" y="23.5" width="4" height="0.8" rx="0.3" fill="white" opacity="0.7" />
      {/* Wheels with hub */}
      <circle cx="11" cy="26" r="2" fill="white" opacity="0.82" />
      <circle cx="11" cy="26" r="0.8" fill="#166534" />
      <circle cx="22" cy="26" r="2" fill="white" opacity="0.82" />
      <circle cx="22" cy="26" r="0.8" fill="#166534" />
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
              <HouseLogo className="w-8 h-8 transition-transform group-hover:scale-105" />
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
                <HouseLogo className="w-7 h-7" />
                <div>
                  <p className="font-semibold text-stone-900 text-sm">Alltag mal anders</p>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Der Blog für alternative Immobilien
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
