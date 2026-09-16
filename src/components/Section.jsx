import { motion } from 'framer-motion'
import { Phrases } from '../i18n.jsx'

export const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}
export const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } }

// ?noanim ปิด reveal animation (ใช้ตอน screenshot/ทดสอบ)
export const NO_ANIM = typeof window !== 'undefined' && window.location.search.includes('noanim')

export function Reveal({ children, className = '', delay = 0 }) {
  return (
    <motion.div className={className} variants={fadeUp} initial={NO_ANIM ? false : 'hidden'} whileInView="show" viewport={{ once: true, margin: '-60px' }} transition={{ delay }}>
      {children}
    </motion.div>
  )
}

// section แบบ editorial: เส้นบน + เลขลำดับ/ป้ายซ้าย + หัวข้อใหญ่ขวา
export default function Section({ id, num, label, title, intro, children, className = '' }) {
  return (
    <section id={id} className={`relative scroll-mt-20 px-5 py-16 sm:px-8 sm:py-24 ${className}`}>
      <span aria-hidden="true" className="watermark pointer-events-none absolute right-4 top-6 sm:right-8">{num}</span>
      <div className="relative mx-auto max-w-6xl">
        <div className="rule grid gap-6 pt-6 md:grid-cols-[200px_1fr] md:gap-10">
          <Reveal>
            <p className="label"><span className="text-accent">{num}</span> — {label}</p>
          </Reveal>
          <Reveal>
            <h2 className="display text-3xl leading-[1.1] sm:text-4xl lg:text-5xl">{title}</h2>
            {intro && <p className="mt-5 max-w-3xl text-[17px] leading-[1.65] text-muted"><Phrases text={intro} /></p>}
          </Reveal>
        </div>
        <div className="mt-12 sm:mt-16">{children}</div>
      </div>
    </section>
  )
}
