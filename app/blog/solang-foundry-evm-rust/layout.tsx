import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Write and Deploy an EVM Smart Contract using Solang + Foundry',
  description:
    'A practical guide to using Solang, a Rust-based Solidity compiler, with Foundry for EVM smart contract development. Learn to compile and deploy contracts without solc.',
  keywords: [
    'Solang',
    'Solidity',
    'EVM',
    'Foundry',
    'Rust',
    'smart contracts',
    'Ethereum',
    'blockchain',
    'anvil',
    'cast',
  ],
  openGraph: {
    title: 'Write and Deploy an EVM Smart Contract using Solang + Foundry',
    description:
      'A practical guide to using Solang, a Rust-based Solidity compiler, with Foundry for EVM smart contract development.',
    type: 'article',
    publishedTime: '2026-01-01',
    authors: ['Mills McIlroy'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Write and Deploy an EVM Smart Contract using Solang + Foundry',
    description:
      'A practical guide to using Solang, a Rust-based Solidity compiler, with Foundry for EVM smart contract development.',
  },
}

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
        Back to articles
      </Link>
      {children}
    </main>
  )
}
