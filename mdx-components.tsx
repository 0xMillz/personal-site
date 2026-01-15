import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    wrapper: ({ children }) => (
      <article className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
        {children}
      </article>
    ),
    ...components,
  }
}
