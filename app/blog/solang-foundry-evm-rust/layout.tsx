import Link from 'next/link'

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="mx-auto max-w-2xl px-6 py-12 md:py-20">
      <Link
        href="/blog"
        className="group mb-8 inline-flex items-center gap-2 text-sm text-[var(--muted)] transition hover:text-[var(--foreground)]"
      >
        <span className="transition group-hover:-translate-x-1">←</span>
        Back to blog
      </Link>
      {children}
    </main>
  )
}
