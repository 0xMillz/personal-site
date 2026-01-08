import './globals.css'
import { Analytics } from '@vercel/analytics/react'

export const metadata = {
  title: 'Mills McIlroy — Full-Stack Software Engineer',
  description:
    'I design and build production-grade web applications with React, TypeScript, and Node.js.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <nav className="mx-auto max-w-2xl px-6 pt-8">
          <div className="flex items-center justify-between text-sm">
            <a href="/" className="font-medium hover:text-[var(--accent)]">
              Mills McIlroy
            </a>
            <div className="flex gap-6 text-[var(--muted)]">
              <a href="#projects" className="hover:text-[var(--foreground)]">
                Projects
              </a>
              <a href="#about" className="hover:text-[var(--foreground)]">
                About
              </a>
              <a href="/blog" className="hover:text-[var(--foreground)]">
                Blog
              </a>
              <a href="#contact" className="hover:text-[var(--foreground)]">
                Contact
              </a>
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
