import { Reveal } from './Section.jsx'
import { useData, Phrases } from '../i18n.jsx'

// บล็อกสีหมึกเข้ม (inverted) — case study เด่นท้าย section Work
export default function CaseStudy() {
  const { caseStudy, ui } = useData()
  return (
    <Reveal className="ink-block mt-16 rounded-[6px] p-6 sm:p-10 lg:p-14">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <p className="label mb-5">{caseStudy.eyebrow}</p>
          <h3 className="display text-3xl leading-[1.1] sm:text-4xl"><Phrases text={caseStudy.title} /></h3>
          <p className="mt-5 max-w-md text-[16px] leading-[1.7] text-bg/70"><Phrases text={caseStudy.teaser} /></p>
          <div className="mt-6 flex flex-wrap gap-1.5">
            {ui.work.caseChips.map((c) => <span key={c} className="chip">{c}</span>)}
          </div>
          <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-accent-ink transition hover:brightness-110">
            {ui.work.askMe}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </a>
        </div>
        <ol className="divide-y divide-bg/15 border-y border-bg/15">
          {caseStudy.steps.map((s, i) => (
            <li key={s.h} className="grid grid-cols-[48px_1fr] gap-4 py-5">
              <span className="stat-num text-3xl text-accent">0{i + 1}</span>
              <div>
                <p className="display text-xl">{s.h}</p>
                <p className="mt-1.5 text-[15px] leading-[1.6] text-bg/70"><Phrases text={s.t} /></p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Reveal>
  )
}
