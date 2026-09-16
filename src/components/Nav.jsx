import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLang, useData } from '../i18n.jsx'

export default function Nav() {
  const { lang, setLang } = useLang()
  const { nav, profile, ui } = useData()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState(nav[0].href)

  // scroll spy
  useEffect(() => {
    const sections = nav.map((n) => ({ href: n.href, el: document.querySelector(n.href) })).filter((s) => s.el)
    const update = () => {
      setScrolled(window.scrollY > 16)
      const line = window.scrollY + window.innerHeight * 0.35
      let cur = sections[0]?.href
      for (const s of sections) if (s.el.offsetTop <= line) cur = s.href
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) cur = sections.at(-1).href
      setActive(cur)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => { window.removeEventListener('scroll', update); window.removeEventListener('resize', update) }
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'border-b border-line bg-bg/90 backdrop-blur-md' : ''}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#home" className="display text-lg leading-none">
          {profile.name.split(' ')[0]} <em className="text-accent">{profile.name.split(' ')[1]}</em>
        </a>

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 md:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} aria-current={active === n.href ? 'true' : undefined}
               className={`nav-link text-xs font-medium uppercase tracking-[0.1em] transition-colors ${active === n.href ? 'text-accent' : 'text-muted hover:text-ink'}`}>
              {n.label}
            </a>
          ))}
          <LangToggle lang={lang} setLang={setLang} />
          <a href={profile.cvFile} download className="btn-ink !py-2 !px-4 !text-xs">{ui.downloadCv}</a>
        </nav>

        <div className="flex items-center gap-4 md:hidden">
          <LangToggle lang={lang} setLang={setLang} />
        <button aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen((o) => !o)} className="text-xs font-medium uppercase tracking-[0.1em] md:hidden">
          {open ? 'close' : 'menu'}
        </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav aria-label="Primary mobile navigation" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                      className="border-t border-line bg-bg px-5 py-6 md:hidden">
            <div className="flex flex-col gap-4">
              {nav.map((n) => (
                <a key={n.href} href={n.href} onClick={() => setOpen(false)} className={`display text-3xl ${active === n.href ? 'text-accent' : ''}`}>{n.label}</a>
              ))}
              <a href={profile.cvFile} download className="btn-ink mt-2 w-fit">{ui.downloadCv}</a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

// สวิตช์ภาษา TH / EN
function LangToggle({ lang, setLang }) {
  return (
    <div role="group" aria-label="Language" className="flex items-center rounded-full border border-line p-0.5 text-[11px] font-semibold uppercase tracking-[0.08em]">
      {['th', 'en'].map((l) => (
        <button key={l} onClick={() => setLang(l)} aria-pressed={lang === l}
                className={`rounded-full px-2.5 py-1 transition-colors ${lang === l ? 'bg-ink text-bg' : 'text-muted hover:text-ink'}`}>
          {l}
        </button>
      ))}
    </div>
  )
}
