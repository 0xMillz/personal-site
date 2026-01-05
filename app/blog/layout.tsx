export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <main className="mx-auto max-w-3xl p-8">{children}</main>
}

