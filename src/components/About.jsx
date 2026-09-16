import Section, { Reveal } from './Section.jsx'
import { useData, Title, Phrases } from '../i18n.jsx'
import { BrandIcon } from './Icons.jsx'

// โลโก้เครื่องมือ: wordmark จริง / สัญลักษณ์จริง + ชื่อ / ตัวอักษรตามแบรนด์ / Simple Icons
function ToolLogo({ t }) {
  if (t.logo && t.kind === 'wordmark') {
    return <img src={t.logo} alt={t.name} className="h-[18px] w-auto max-w-full object-contain object-left" loading="lazy" />
  }
  return (
    <span className="flex items-center gap-2.5">
      {t.logo ? <img src={t.logo} alt="" className="h-6 w-6 object-contain" loading="lazy" /> : t.icon ? <BrandIcon name={t.icon} size={22} /> : null}
      {t.wordmarkText
        ? <span className="display text-[17px] italic leading-none" style={{ color: t.wordmarkText.color }}>{t.wordmarkText.text}</span>
        : <span className="truncate text-sm font-medium">{t.name}</span>}
    </span>
  )
}

export default function About() {
  const { profile, skills, tools, glance, education, certifications, ui } = useData()
  return (
    <Section id="about" num="01" label={ui.about.label} title={<Title t={ui.about.title} />}>
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        {/* ซ้าย: สรุป + at a glance + education */}
        <div>
          <Reveal>
            <p className="text-xl font-medium leading-[1.55] sm:text-[1.35rem]"><Phrases text={profile.summary} /></p>
          </Reveal>
          <Reveal className="mt-10" delay={0.05}>
            <dl className="divide-y divide-line border-y border-line">
              {glance.map((g) => (
                <div key={g.name} className="grid grid-cols-[110px_1fr] gap-4 py-3">
                  <dt className="label pt-0.5">{g.name}</dt>
                  <dd className="text-sm">{g.level}</dd>
                </div>
              ))}
              {education.map((e) => (
                <div key={e.degree} className="grid grid-cols-[110px_1fr] gap-4 py-3">
                  <dt className="label pt-0.5">{ui.about.education}</dt>
                  <dd className="text-sm">{e.degree}<span className="block text-muted">{e.school}{e.year ? ` · ${e.year}` : ''}</span></dd>
                </div>
              ))}
              {certifications.map((c) => (
                <div key={c.name} className="grid grid-cols-[110px_1fr] gap-4 py-3">
                  <dt className="label pt-0.5">{ui.about.certificate}</dt>
                  <dd className="text-sm">{c.name}<span className="block text-muted">{c.issuer} · {c.date}</span></dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* ขวา: skills เป็นรายการมีเลข + tools */}
        <div>
          <Reveal>
            <ol className="border-t border-ink">
              {skills.map((s, i) => (
                <li key={s.group} className="grid gap-3 border-b border-line py-5 sm:grid-cols-[64px_180px_1fr] sm:gap-6">
                  <span className="mono text-[11px] text-accent">0{i + 1}</span>
                  <h3 className="display text-xl leading-tight">{s.group}</h3>
                  <ul className="flex flex-wrap gap-x-4 gap-y-1.5 text-[15px] text-muted">
                    {s.items.map((it) => <li key={it}>{it}</li>)}
                  </ul>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal className="mt-10" delay={0.05}>
            <p className="label mb-4">{ui.about.tools}</p>
            <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-[4px] border border-line bg-line sm:grid-cols-4 [&>li:last-child:nth-child(4n+3)]:sm:col-span-2">
              {tools.map((t) => (
                <li key={t.name} className="tool-tile flex flex-col justify-between gap-2 bg-surface px-4 py-3.5">
                  <ToolLogo t={t} />
                  <span className="block truncate text-[11px] text-muted">{t.note}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
