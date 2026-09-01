import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  metadataBase: new URL('https://millsmcilroy.com'),
  title: {
    default: 'Mills McIlroy — Full Stack, Platforms & AI Agents',
    template: '%s — Mills McIlroy',
  },
  description:
    'Software engineering across full-stack products, cloud platforms, distributed systems, and AI-assisted development.',
  authors: [{ name: 'Mills McIlroy' }],
  creator: 'Mills McIlroy',
  openGraph: {
    siteName: 'Mills McIlroy',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@0xMillz',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav className="mx-auto max-w-2xl px-6 pt-8">
          <div className="flex items-center justify-between text-sm">
            <Link href="/" className="font-medium hover:text-[var(--accent)]">
              Mills McIlroy
            </Link>
            <div className="flex gap-4 text-[var(--muted)] sm:gap-6">
              <Link href="/#focus" className="hover:text-[var(--foreground)]">
                Focus
              </Link>
              <Link href="/#skills" className="hover:text-[var(--foreground)]">
                Skills
              </Link>
              <Link href="/#contact" className="hover:text-[var(--foreground)]">
                Contact
              </Link>
            </div>
          </div>
        </nav>
        {children}
        <footer className="mx-auto max-w-2xl px-6 py-12 text-center text-sm text-[var(--muted)]">
          © {new Date().getFullYear()} Mills McIlroy
        </footer>
        <Analytics />
      </body>
    </html>
  )
}
