import { useData, Title, Phrases } from '../i18n.jsx'

export default function Footer() {
  const { profile, ui } = useData()
  const c = ui.contact
  const links = [
    { label: c.email, value: profile.email, href: `mailto:${profile.email}` },
    { label: c.phone, value: profile.phone, href: profile.phoneHref },
    profile.line && { label: 'LINE', value: profile.line, href: profile.lineHref || undefined },
    profile.linkedin && { label: 'LinkedIn', value: profile.linkedin.replace(/^https?:\/\/(www\.)?/, ''), href: profile.linkedin, ext: true },
    { label: c.cv, value: c.downloadPdf, href: profile.cvFile, download: true },
  ].filter(Boolean)

  return (
    <footer id="contact" className="scroll-mt-20 px-5 pb-10 pt-16 sm:px-8 sm:pt-24">
      <div className="mx-auto max-w-6xl">
        <div className="rule grid gap-10 pt-6 md:grid-cols-[200px_1fr] md:gap-10">
          <p className="label"><span className="text-accent">04</span> — {c.label}</p>
          <div>
            <h2 className="display text-4xl leading-[1.02] sm:text-6xl lg:text-7xl">
              <Title t={c.title} />
            </h2>
            <p className="mt-6 max-w-xl text-[17px] leading-[1.65] text-muted">
              <Phrases text={`${profile.availabilityText} — ${c.intro}`} /></p>
            <dl className="mt-10 grid gap-x-10 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
              {links.map((l) => (
                <div key={l.label} className="border-t border-line pt-3">
                  <dt className="label">{l.label}</dt>
                  <dd className="mt-1 text-lg">
                    <a href={l.href} download={l.download || undefined} target={l.ext ? '_blank' : undefined} rel={l.ext ? 'noreferrer' : undefined} className="link-ul break-all">{l.value}</a>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-20 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-5">
          <p className="label">© {new Date().getFullYear()} {profile.name}</p>
          <p className="label">{profile.title}</p>
          <a href="#home" className="label link-ul">{c.top}</a>
        </div>
      </div>
    </footer>
  )
}
