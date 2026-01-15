import Link from 'next/link'

const posts = [
  {
    slug: 'solang-foundry-evm-rust',
    title: 'Write and Deploy an EVM Smart Contract in Rust Using Solang + Foundry',
    date: 'January 2026',
    description:
      'A practical guide to using Solang, a Rust-based Solidity compiler, with Foundry for EVM smart contract development.',
  },
]

export default function BlogIndex() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-12 md:py-20">
      <h1 className="text-3xl font-semibold tracking-tight">Blog</h1>
      <p className="mt-3 text-[var(--muted)]">
        Technical writing on software engineering, web3, and systems.
      </p>

      <ul className="mt-12 space-y-6">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group block rounded-lg border border-[var(--border)] p-6 transition hover:border-[var(--accent)] hover:bg-[var(--code-bg)]"
            >
              <p className="text-sm text-[var(--muted)]">{post.date}</p>
              <h2 className="mt-2 text-xl font-semibold group-hover:text-[var(--accent)]">
                {post.title}
              </h2>
              <p className="mt-3 leading-relaxed text-[var(--muted)]">
                {post.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--accent)]">
                Read article
                <span className="transition group-hover:translate-x-1">→</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
