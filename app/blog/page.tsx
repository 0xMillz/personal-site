import Link from 'next/link'

export default function BlogIndex() {
  return (
    <>
      <h1 className="text-3xl font-bold">Blog</h1>

      <ul className="mt-6">
        <li>
          <Link
            href="/blog/hello-world"
            className="text-blue-600 underline"
          >
            Hello World
          </Link>
        </li>
      </ul>
    </>
  )
}