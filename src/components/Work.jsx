import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Section, { Reveal } from './Section.jsx'
import { useData, Title, Phrases } from '../i18n.jsx'
import { charts } from '../charts/index.js'
import CaseStudy from './CaseStudy.jsx'

export default function Work() {
  const { projects, ui } = useData()
  const featured = projects.filter((p) => p.featured)
  const more = projects.filter((p) => !p.featured)
  const [showAll, setShowAll] = useState(false)

  return (
    <Section id="work" num="03" label={ui.work.label} title={<Title t={ui.work.title} />} intro={ui.work.intro}>
      {/* แถวสลับซ้าย-ขวา */}
      <ol className="border-t border-ink">
        {featured.map((p, i) => {
          const Chart = charts[p.chart]
          const flip = i % 2 === 1
          return (
            <li key={p.id} className="border-b border-line py-10 sm:py-14">
              <Reveal className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${flip ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                <div className="card p-4 sm:p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="label">{p.category}</span>
                    <span className="mono text-[10px] uppercase tracking-wider text-faint">{ui.work.illustrative}</span>
                  </div>
                  {Chart && <Chart />}
                </div>
                <div>
                  <p className="mono text-[11px] text-accent">0{i + 1}</p>
                  <h3 className="display mt-2 text-3xl leading-[1.1] sm:text-4xl">{p.title}</h3>
                  <p className="mt-4 max-w-lg text-[16px] leading-[1.7] text-muted"><Phrases text={p.description} /></p>
                  <ul className="mt-5 space-y-2">
                    {p.highlights.map((h) => (
                      <li key={h} className="grid grid-cols-[14px_1fr] gap-2 text-[15px]"><span className="pt-[2px] text-accent">—</span><span><Phrases text={h} /></span></li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => <span key={t} className="chip">{t}</span>)}
                  </div>
                </div>
              </Reveal>
            </li>
          )
        })}
      </ol>

      {/* ที่เหลือ: รายการย่อ */}
      <div className="mt-8">
        <button onClick={() => setShowAll((s) => !s)} aria-expanded={showAll} className="btn-line">
          {showAll ? ui.work.hide : ui.work.more(more.length)}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition ${showAll ? 'rotate-180' : ''}`}><path d="M6 9l6 6 6-6" /></svg>
        </button>
        <AnimatePresence initial={false}>
          {showAll && (
            <motion.ul initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.35 }}
                       className="mt-8 grid gap-px overflow-hidden rounded-[4px] border border-line bg-line md:grid-cols-2 xl:grid-cols-3">
              {more.map((p, i) => {
                const Chart = charts[p.chart]
                return (
                  <li key={p.id} className="flex flex-col bg-surface p-5">
                    <div className="mb-3 flex items-center justify-between"><span className="label">{p.category}</span><span className="mono text-[10px] text-faint">0{featured.length + i + 1}</span></div>
                    <div className="rounded-[4px] border border-line bg-bg p-3">{Chart && <Chart />}</div>
                    <h3 className="display mt-4 text-xl leading-tight">{p.title}</h3>
                    <p className="mt-2 text-[15px] leading-[1.65] text-muted"><Phrases text={p.description} /></p>
                    <div className="mt-auto flex flex-wrap gap-1.5 pt-4">{p.tags.map((t) => <span key={t} className="chip">{t}</span>)}</div>
                  </li>
                )
              })}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>

      <CaseStudy />
    </Section>
  )
}
