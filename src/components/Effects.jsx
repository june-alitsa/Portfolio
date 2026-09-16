import { useEffect, useRef, useState } from 'react'
import { motion, animate, useScroll, useSpring, useInView, useMotionValue, useTransform } from 'framer-motion'
import { NO_ANIM } from './Section.jsx'

const reduce = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

// แถบทองบอกความคืบหน้าการเลื่อนหน้า (ติดขอบบน)
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 })
  return <motion.div aria-hidden="true" className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-accent" style={{ scaleX }} />
}

// แสงสปอตไลท์ทองจางๆ ตามเมาส์ + ออโรราลอยช้าๆ ด้านหลัง
export function Spotlight() {
  const ref = useRef(null)
  useEffect(() => {
    if (reduce()) return
    const el = ref.current
    const on = (e) => { el.style.setProperty('--mx', `${e.clientX}px`); el.style.setProperty('--my', `${e.clientY}px`) }
    window.addEventListener('mousemove', on, { passive: true })
    return () => window.removeEventListener('mousemove', on)
  }, [])
  return (
    <div ref={ref} aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="aurora aurora-a" />
      <div className="aurora aurora-b" />
      <div className="spotlight" />
    </div>
  )
}

// ตัวเลขนับขึ้นเมื่อเลื่อนมาเห็น — รับค่าเช่น '15+', '400+', '1–3 วัน' (นับเฉพาะเลขตัวแรก)
export function CountUp({ value, duration = 1400 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const m = String(value).match(/^(\d+)(.*)$/)
  const [n, setN] = useState(m && !NO_ANIM && !reduce() ? 0 : m?.[1])
  // เริ่มนับเมื่อเลื่อนมาเห็น — หรืออย่างช้า 1.2 วิหลังโหลด (กัน IntersectionObserver ไม่ยิงบางกรณี)
  const [go, setGo] = useState(false)
  useEffect(() => { const id = setTimeout(() => setGo(true), 1200); return () => clearTimeout(id) }, [])
  useEffect(() => {
    if (!m || !(inView || go) || NO_ANIM || reduce()) return
    const ctrl = animate(0, +m[1], { duration: duration / 1000, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => setN(Math.round(v)) })
    return () => ctrl.stop()
  }, [inView, go]) // eslint-disable-line react-hooks/exhaustive-deps
  if (!m) return <span ref={ref}>{value}</span>
  return <span ref={ref}>{n}{m[2]}</span>
}

// คำ/วลีในพาดหัวเลื่อนขึ้นทีละคำ (เว้นวรรค = หนึ่งชิ้น)
export function RevealWords({ text, delay = 0, className = '' }) {
  if (!text) return null
  const parts = String(text).split(' ')
  return parts.map((w, i) => (
    <span key={i} className={`inline-block overflow-hidden align-bottom ${className}`}>
      <motion.span
        className="inline-block"
        initial={NO_ANIM ? false : { y: '110%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: delay + i * 0.06 }}
      >
        {w}{i < parts.length - 1 ? ' ' : ''}
      </motion.span>
    </span>
  ))
}

// รูปเอียงตามเมาส์เล็กน้อย (3D tilt)
export function Tilt({ children, className = '' }) {
  const x = useMotionValue(0), y = useMotionValue(0)
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 20 })
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 20 })
  const onMove = (e) => {
    if (reduce()) return
    const r = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - r.left) / r.width - 0.5); y.set((e.clientY - r.top) / r.height - 0.5)
  }
  const onLeave = () => { x.set(0); y.set(0) }
  return (
    <motion.div className={className} style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }} onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
    </motion.div>
  )
}

// เส้นไทม์ไลน์ที่ค่อยๆ วาดตามการเลื่อน (ใช้ใน Experience)
export function DrawLine({ targetRef }) {
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ['start 70%', 'end 60%'] })
  const scaleY = useSpring(scrollYProgress, { stiffness: 80, damping: 20 })
  return (
    <div aria-hidden="true" className="absolute bottom-0 left-0 top-0 hidden w-px bg-line md:block">
      <motion.div className="h-full w-full origin-top bg-accent" style={{ scaleY }} />
    </div>
  )
}
