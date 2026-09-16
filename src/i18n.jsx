import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import * as en from './data/profile.js'
import * as th from './data/profile.th.js'

// สลับภาษา: ?lang=th | localStorage | ค่าเริ่มต้น en
const DATA = { en, th }
const LangContext = createContext({ lang: 'en', setLang: () => {}, d: en })

const initial = () => {
  const q = new URLSearchParams(window.location.search).get('lang')
  if (q === 'th' || q === 'en') return q
  try { const s = localStorage.getItem('lang'); if (s === 'th' || s === 'en') return s } catch {}
  return 'en'
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(initial)
  useEffect(() => {
    document.documentElement.lang = lang
    try { localStorage.setItem('lang', lang) } catch {}
  }, [lang])
  const value = useMemo(() => ({ lang, setLang, d: DATA[lang] }), [lang])
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export const useLang = () => useContext(LangContext)
// ข้อมูลตามภาษาปัจจุบัน (profile, skills, projects, ui, ...)
export const useData = () => useContext(LangContext).d

// ภาษาไทยไม่มีช่องว่างระหว่างคำ browser จึงตัดบรรทัดกลางวลีได้ (เช่น "ทุก|เดือน")
// → ในโหมดไทย ห่อแต่ละวลี (คั่นด้วยช่องว่าง) เป็น inline-block: ตัดบรรทัดที่ช่องว่างก่อน
//   และจะตัดกลางวลีก็ต่อเมื่อวลีนั้นยาวเกินความกว้างจริงๆ
export function Phrases({ text }) {
  const { lang } = useLang()
  if (lang !== 'th' || typeof text !== 'string') return text
  const parts = text.split(' ')
  return parts.map((w, i) => (
    <span key={i} className="inline-block">{w}{i < parts.length - 1 ? '\u00a0' : ''}</span>
  ))
}

// หัวข้อที่มีคำเน้น: { pre, em, post }
export function Title({ t }) {
  return <><Phrases text={t.pre} /><em><Phrases text={t.em} /></em><Phrases text={t.post} /></>
}
