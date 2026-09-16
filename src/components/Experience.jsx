import { useRef } from 'react'
import Section, { Reveal } from './Section.jsx'
import { DrawLine } from './Effects.jsx'
import { useData, Title, Phrases } from '../i18n.jsx'

// timeline: ปีเริ่มใหญ่ทางซ้าย (sticky บน desktop) + รายละเอียดขวา
const startYear = (p) => p.match(/\d{4}/)?.[0] ?? ''

export default function Experience() {
  const { experience, ui } = useData()
  const listRef = useRef(null)
  return (
    <Section id="experience" num="02" label={ui.experience.label} title={<Title t={ui.experience.title} />} intro={ui.experience.intro}>
      <ol ref={listRef} className="relative md:pl-8">
        <DrawLine targetRef={listRef} />
        {experience.map((co, i) => (
          <li key={co.company} className="relative grid gap-4 border-t border-line py-10 first:border-ink md:grid-cols-[168px_1fr] md:gap-10">
            <span aria-hidden="true" className="absolute -left-8 top-[52px] hidden h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-bg bg-accent md:block" />
            <Reveal className="md:sticky md:top-28 md:self-start">
              <p className="stat-num text-5xl leading-none text-ink sm:text-6xl">{startYear(co.period)}</p>
              <p className="label mt-3">{co.period}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h3 className="display text-2xl leading-tight sm:text-3xl">{co.company}</h3>
              {co.roles.map((r) => (
                <div key={r.title} className="mt-4">
                  <p className="label !text-accent">{r.title}</p>
                  <ul className="mt-4 max-w-2xl space-y-2.5 text-[16px] leading-[1.65] text-muted">
                    {r.bullets.map((b) => (
                      <li key={b} className="grid grid-cols-[14px_1fr] gap-2"><span className="pt-[3px] text-faint">—</span><span><Phrases text={b} /></span></li>
                    ))}
                  </ul>
                </div>
              ))}
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
