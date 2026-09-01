import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mills McIlroy — Full Stack, Platforms & AI Agents',
  description:
    'Software engineering across full-stack products, cloud platforms, distributed systems, and AI-assisted development.',
  keywords: [
    'software engineer',
    'full-stack developer',
    'AI agents',
    'TypeScript',
    'Python',
    'React',
    'Next.js',
    'Node.js',
    'AWS',
    'distributed systems',
  ],
  openGraph: {
    title: 'Mills McIlroy — Full Stack, Platforms & AI Agents',
    description:
      'Software engineering across full-stack products, cloud platforms, distributed systems, and AI-assisted development.',
    type: 'website',
    url: 'https://millsmcilroy.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mills McIlroy — Full Stack, Platforms & AI Agents',
    description:
      'Full-stack products, cloud platforms, distributed systems, and AI-assisted development.',
  },
}

const focusAreas = [
  {
    title: 'AI-assisted engineering',
    description:
      'Coding-agent evaluation, realistic development environments, acceptance criteria, automated testing, and workflows that make agent output safer and more useful.',
  },
  {
    title: 'Product engineering',
    description:
      'End-to-end web products built with React, Next.js, TypeScript, Node.js, and Python, from product decisions through production delivery.',
  },
  {
    title: 'Platform architecture',
    description:
      'APIs, service boundaries, event-driven workflows, data systems, and cloud infrastructure designed for reliability, security, and maintainability.',
  },
]

const principles = [
  'Use AI tools to accelerate judgment, not replace it',
  'Prefer explicit service boundaries and observable failure modes',
  'Treat security, testing, and operational readiness as design inputs',
  'Modernize incrementally so systems can keep shipping while they evolve',
  'Write software that the next engineer can understand and extend',
]

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <section className="mb-20">
        <p className="mt-6 max-w-2xl text-lg leading-relaxed">
          DISCLAIMER: Below is AI-generated content. TODO: update with real content. This is a placeholder for now.
        </p>
        <p className="font-mono text-sm text-[var(--accent)]">
          Full stack · platforms · AI agents
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
          Mills McIlroy
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed">
          I build full-stack products and developer systems with a focus on
          reliable architecture, thoughtful automation, and software that stays
          maintainable as it scales.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#focus"
            className="rounded-md bg-[var(--foreground)] px-4 py-2 text-sm font-medium text-[var(--background)] transition hover:opacity-80"
          >
            Explore my focus
          </a>
          <a
            href="#contact"
            className="rounded-md border border-[var(--border)] px-4 py-2 text-sm font-medium transition hover:bg-[var(--border)]"
          >
            Get in touch
          </a>
        </div>
      </section>

      <section id="about" className="mb-20 scroll-mt-24">
        <SectionHeading>About</SectionHeading>
        <div className="mt-6 space-y-4">
          <p>
            My work spans modern product frontends, backend services, data
            systems, cloud infrastructure, and engineering tools. I enjoy the
            places where product decisions and system design meet.
          </p>
          <p>
            I am especially interested in practical agentic development: giving
            coding agents the right context, defining strong evaluation
            criteria, and reviewing generated solutions for correctness,
            security, performance, and long-term maintainability.
          </p>
          <p>
            Outside of AI-assisted engineering, I build APIs and distributed
            workflows, modernize aging systems, and create interfaces that make
            complex behavior feel straightforward.
          </p>
        </div>
      </section>

      <section id="focus" className="mb-20 scroll-mt-24">
        <SectionHeading>Areas of Focus</SectionHeading>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {focusAreas.map((area) => (
            <article
              key={area.title}
              className="rounded-lg border border-[var(--border)] p-5"
            >
              <h3 className="font-medium">{area.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="mb-20 scroll-mt-24">
        <SectionHeading>Technical Skills</SectionHeading>
        <div className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          <SkillCategory
            title="Languages & UI"
            skills="TypeScript, JavaScript, Python, Go, Java, Rust, Solidity, React, Next.js, Vue.js"
          />
          <SkillCategory
            title="Services & Data"
            skills="Node.js, FastAPI, REST, GraphQL, microservices, PostgreSQL, Redis, Kafka, RabbitMQ"
          />
          <SkillCategory
            title="AI Engineering"
            skills="Coding agents, evaluation design, benchmark environments, acceptance criteria, prompt workflows, generated-code review"
          />
          <SkillCategory
            title="Cloud & Delivery"
            skills="AWS, Docker, Kubernetes, CI/CD, automated testing, observability, incident response"
          />
          <SkillCategory
            title="Architecture"
            skills="Distributed systems, event-driven workflows, API design, data modeling, legacy modernization, Strangler Fig migrations"
          />
          <SkillCategory
            title="Engineering Practice"
            skills="System design, technical direction, code review, security, performance, documentation, mentoring"
          />
        </div>
      </section>

      <section id="philosophy" className="mb-20 scroll-mt-24">
        <SectionHeading>How I Work</SectionHeading>
        <ul className="mt-6 space-y-3">
          {principles.map((principle) => (
            <li key={principle} className="flex gap-3">
              <span aria-hidden="true" className="text-[var(--accent)]">
                —
              </span>
              <span>{principle}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="profiles" className="mb-20 scroll-mt-24">
        <SectionHeading>Profiles</SectionHeading>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
          <ExternalLink href="https://github.com/0xMillz">GitHub</ExternalLink>
          <ExternalLink href="https://linkedin.com/in/millsmcilroy">
            LinkedIn
          </ExternalLink>
        </div>
      </section>

      <section id="contact" className="mb-8 scroll-mt-24">
        <SectionHeading>Contact</SectionHeading>
        <p className="mt-6">
          Interested in building a product, platform, or better engineering
          workflow together?
        </p>
        <a
          href="mailto:millsmcilroy@gmail.com"
          className="mt-2 inline-block text-lg font-medium text-[var(--accent)] underline underline-offset-4 hover:no-underline"
        >
          millsmcilroy@gmail.com
        </a>
      </section>
    </main>
  )
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="border-b border-[var(--border)] pb-3 text-sm font-medium uppercase tracking-widest text-[var(--muted)]">
      {children}
    </h2>
  )
}

function SkillCategory({ title, skills }: { title: string; skills: string }) {
  return (
    <div>
      <h3 className="font-medium">{title}</h3>
      <p className="mt-2 text-[var(--muted)]">{skills}</p>
    </div>
  )
}

function ExternalLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[var(--accent)] underline underline-offset-4 hover:no-underline"
    >
      {children}
    </a>
  )
}
