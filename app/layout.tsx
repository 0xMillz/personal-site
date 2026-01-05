// src/app/layout.tsx
import './globals.css'

export const metadata = {
  title: 'My Personal Site',
  description: 'Personal website and technical blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <header className="mx-auto max-w-3xl p-8">
          <nav className="flex gap-4">
            <a href="/">Home</a>
            <a href="/blog">Blog</a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}