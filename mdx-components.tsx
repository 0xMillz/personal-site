import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    wrapper: ({ children }) => (
      <article className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
        {children}
      </article>
    ),
    h1: ({ children }) => (
      <h1 className="text-3xl font-semibold tracking-tight">{children}</h1>
    ),
    ...components,
  }
}
