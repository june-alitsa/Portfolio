import { motion } from 'framer-motion'
import { useData, Phrases } from '../i18n.jsx'
import { CountUp, RevealWords, Tilt } from './Effects.jsx'
import { fadeUp, stagger } from './Section.jsx'

export default function Hero() {
  const { profile, stats, ui } = useData()
  return (
    <section id="home" className="px-5 pb-16 pt-32 sm:px-8 sm:pt-40">
      <motion.div variants={stagger} initial="hidden" animate="show" className="mx-auto max-w-6xl">
        <div className="grid items-end gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
          <div>
            <motion.p variants={fadeUp} className="label mb-8 flex flex-wrap items-center gap-x-3 gap-y-1">
              {profile.available && <span className="inline-flex items-center gap-2 text-accent"><span className="h-1.5 w-1.5 rounded-full bg-accent" />{profile.availabilityText}</span>}
              <span aria-hidden="true">·</span>
              <span>{profile.location}</span>
            </motion.p>

            <motion.h1 variants={fadeUp} className="display text-[2.9rem] leading-[1.02] sm:text-6xl lg:text-7xl">
              <RevealWords text={ui.hero.headline.pre} delay={0.15} /><br />
              <em><RevealWords text={ui.hero.headline.em} delay={0.35} /></em>
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-8 max-w-xl text-lg leading-[1.7] text-muted sm:text-xl">
              <Phrases text={profile.heroIntro} />
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-3">
              <a href="#work" className="btn-ink">{ui.hero.seeWork} <Arrow /></a>
              <a href="#contact" className="btn-line">{ui.hero.contact}</a>
              <a href={profile.cvFile} download className="link-ul ml-1 text-sm">{ui.hero.cvPdf}</a>
            </motion.div>
          </div>

          {profile.photo && (
            <motion.figure variants={fadeUp} className="relative mx-auto w-full max-w-xs lg:max-w-sm">
              <Tilt className="relative">
                <div className="arch absolute -inset-3 -rotate-2 bg-accent/15" aria-hidden="true" />
                <img src={profile.photo} alt={profile.name} loading="eager" className="arch relative aspect-[3/4] w-full object-cover object-top" />
              </Tilt>
              <figcaption className="label mt-4 flex items-baseline justify-between">
                <span>{profile.name}</span>
                <span className="text-accent">{profile.title.split('|')[0].trim()}</span>
              </figcaption>
            </motion.figure>
          )}
        </div>

        <motion.dl variants={fadeUp} className="rule mt-20 grid grid-cols-2 gap-y-8 pt-8 md:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.label} className={`px-1 md:px-6 ${i > 0 ? 'md:border-l md:border-line' : 'md:pl-0'}`}>
              <dd className="stat-num text-4xl text-ink sm:text-5xl"><CountUp value={s.value} /></dd>
              <dt className="label mt-3">{s.label}</dt>
            </div>
          ))}
        </motion.dl>
      </motion.div>
    </section>
  )
}

function Arrow() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
}
