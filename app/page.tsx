export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16 md:py-24">
      {/* Hero */}
      <section className="mb-20">
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
          Mills McIlroy
        </h1>
        <p className="mt-2 text-lg text-[var(--muted)]">
          Full-Stack Software Engineer
        </p>
        <p className="mt-6 text-lg leading-relaxed">
          I design and build production-grade software with TypeScript, Rust,
          and React, with a focus on reliability, performance, and maintainable
          architecture.
        </p>
        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="rounded-md bg-[var(--foreground)] px-4 py-2 text-sm font-medium text-[var(--background)] transition hover:opacity-80"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-md border border-[var(--border)] px-4 py-2 text-sm font-medium transition hover:bg-[var(--border)]"
          >
            Contact
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mb-20">
        <h2 className="text-sm font-medium uppercase tracking-widest text-[var(--muted)]">
          About
        </h2>
        <div className="mt-6 space-y-4">
          <p>
            I am a full-stack software engineer with experience building modern
            web applications across frontend, backend, and infrastructure
            layers. My work spans TypeScript and Rust, including React and
            Next.js frontends paired with backend services and relational
            databases.
          </p>
          <p>
            I have worked on applications in fintech and web3 contexts, where
            correctness, security, and operational reliability are critical. I
            tend to prioritize simple, explicit designs that scale cleanly and
            are easy for other engineers to reason about.
          </p>
          <p>
            I am comfortable owning features end-to-end—from product
            requirements and architecture decisions through implementation,
            testing, and deployment.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mb-20">
        <h2 className="text-sm font-medium uppercase tracking-widest text-[var(--muted)]">
          Selected Projects
        </h2>

        <div className="mt-8 space-y-12">
          <Project
            title="Streaming Payments Platform"
            stack="TypeScript, Node.js, PostgreSQL, Ethereum"
            description="A backend service and API layer supporting real-time, continuous payment streams backed by smart contracts."
            bullets={[
              'Designed backend services to track on-chain payment state and expose consistent off-chain APIs',
              'Implemented edge-case handling for partial withdrawals, cancellations, and chain re-organizations',
              'Optimized database queries and indexing for high-frequency balance updates',
            ]}
            links={[
              { label: 'GitHub', href: '#' },
              { label: 'Architecture Notes', href: '#' },
            ]}
          />

          <Project
            title="Web3 Application Frontend"
            stack="React, Next.js, TypeScript, wagmi"
            description="A production frontend for interacting with Ethereum smart contracts via connected wallets."
            bullets={[
              'Built reusable hooks for contract reads, writes, and transaction state management',
              'Integrated wallet connection flows with robust error and network handling',
              'Focused on predictable UI state during asynchronous blockchain operations',
            ]}
            links={[
              { label: 'Live Demo', href: '#' },
              { label: 'GitHub', href: '#' },
            ]}
          />

          <Project
            title="Media Scraping & Processing Tool"
            stack="Node.js, TypeScript, FFmpeg"
            description="A utility for scraping user-generated media, normalizing formats, and uploading processed assets to a server."
            bullets={[
              'Designed a one-click workflow from source URL to processed upload',
              'Implemented resilient job handling and retries for unreliable inputs',
              'Standardized media outputs to simplify downstream consumption',
            ]}
            links={[{ label: 'GitHub', href: '#' }]}
          />
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mb-20">
        <h2 className="text-sm font-medium uppercase tracking-widest text-[var(--muted)]">
          Technical Skills
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <SkillCategory
            title="Frontend"
            skills="React, Next.js, TypeScript, HTML, CSS"
          />
          <SkillCategory
            title="Backend"
            skills="Rust, Node.js, REST APIs, PostgreSQL, Redis"
          />
          <SkillCategory
            title="Web3"
            skills="ethers.js, wagmi, smart contract integrations"
          />
          <SkillCategory
            title="Tooling & Practices"
            skills="Git, CI/CD, Docker, testing, production debugging"
          />
        </div>
      </section>

      {/* Work Philosophy */}
      <section id="philosophy" className="mb-20">
        <h2 className="text-sm font-medium uppercase tracking-widest text-[var(--muted)]">
          How I Work
        </h2>
        <ul className="mt-6 space-y-3">
          <li className="flex gap-3">
            <span className="text-[var(--muted)]">—</span>
            <span>Prefer simple, explicit designs over clever abstractions</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[var(--muted)]">—</span>
            <span>
              Optimize for maintainability and clarity before premature
              performance tuning
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-[var(--muted)]">—</span>
            <span>
              Treat production issues as system design feedback, not one-off
              bugs
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-[var(--muted)]">—</span>
            <span>Value clear ownership and documentation</span>
          </li>
        </ul>
      </section>

      {/* Resume & Links */}
      <section id="resume" className="mb-20">
        <h2 className="text-sm font-medium uppercase tracking-widest text-[var(--muted)]">
          Resume & Profiles
        </h2>
        <ul className="mt-6 space-y-2">
          <li>
            <a
              href="/resume.pdf"
              className="text-[var(--accent)] underline underline-offset-4 hover:no-underline"
            >
              Download Resume (PDF)
            </a>
          </li>
          <li>
            <a
              href="https://github.com/0xMillz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent)] underline underline-offset-4 hover:no-underline"
            >
              github.com/0xMillz
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent)] underline underline-offset-4 hover:no-underline"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </section>

      {/* Contact */}
      <section id="contact" className="mb-8">
        <h2 className="text-sm font-medium uppercase tracking-widest text-[var(--muted)]">
          Contact
        </h2>
        <p className="mt-6">
          For work opportunities, collaboration, or technical discussion:
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

function Project({
  title,
  stack,
  description,
  bullets,
  links,
}: {
  title: string
  stack: string
  description: string
  bullets: string[]
  links: { label: string; href: string }[]
}) {
  return (
    <article>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-1 font-mono text-sm text-[var(--muted)]">{stack}</p>
      <p className="mt-4">{description}</p>
      <ul className="mt-4 space-y-2 text-[0.95rem]">
        {bullets.map((bullet, i) => (
          <li key={i} className="flex gap-3">
            <span className="text-[var(--muted)]">•</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex gap-4">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-sm text-[var(--accent)] underline underline-offset-4 hover:no-underline"
          >
            {link.label}
          </a>
        ))}
      </div>
    </article>
  )
}

function SkillCategory({ title, skills }: { title: string; skills: string }) {
  return (
    <div>
      <h3 className="font-medium">{title}</h3>
      <p className="mt-1 text-[var(--muted)]">{skills}</p>
    </div>
  )
}
