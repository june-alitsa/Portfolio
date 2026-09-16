# Alitsa Patcharoen — HR Manager Portfolio

**Live site:** https://alitsa-hr.vercel.app · **Repo:** https://github.com/june-alitsa/Portfolio

A personal portfolio for a Bangkok-based HR Manager / HR Business Partner, built as a single-page React app. Same stack as [PIM-DATA/portfolio](https://github.com/PIM-DATA/portfolio), but its own design: a dark editorial layout — warm black with a paper-grain texture, Plus Jakarta Sans headlines with gold highlights, numbered sections, a year-led experience timeline, alternating work rows, and an inverted ink block for the featured case study.

> Every chart on the site is an **illustrative sketch** of the deliverable's shape. No real employee, payroll, or company data is used.

## What's inside

| Section | Highlights |
|---|---|
| **Home** | Profile photo, availability chip, 4 headline stats (15+ years · 14 companies · 400+ employees · 1–3 day payroll close) |
| **About** | HR systems & tools (Humansoft, PayDay, Tiger Soft, Office), skills by group, at-a-glance card, education |
| **Experience** | Timeline of the four roles from the CV — 7 Idea Corporation, Krua Mae Sri Ruean, W.N Foods & Beverage / Urban Business Group, Big C |
| **Work** | 11 HR case-study cards (6 featured) — payroll migration, multi-company HR ops, payroll/tax/SSO cycle, recruitment funnel, org design, labor-law compliance, foreign-worker docs, ER calendar, training & evaluation, pay bands, internal audit — each with a hand-written SVG visual |
| **Case study** | "Moving 14 companies onto one payroll system" — the Humansoft migration in four steps |
| **Contact** | Email, phone, and CV download |
| **TH / EN** | Language toggle in the nav — full Thai translation in `src/data/profile.th.js`, remembered in `localStorage`, or forced with `?lang=th` |

## Motion & detail

Gold scroll-progress bar · cursor spotlight and slow aurora glow · hero headline word-by-word reveal · stat count-up · 3D tilt on the photo · scroll-drawn timeline in Experience · outlined section-number watermarks · lift-and-glow hover on cards and tool tiles. Everything respects `prefers-reduced-motion`; `?noanim` disables reveal animations for screenshots.

## Stack

React 19 · Vite 7 · Tailwind CSS 4 · Framer Motion · deployed on Vercel (auto-deploys from `main`)

```
src/
  data/profile.js      all English copy: profile, stats, skills, tools, experience, projects, case study, ui strings
  data/profile.th.js   Thai copy (same shape; untranslated fields are pulled from profile.js)
  i18n.jsx             language context + TH/EN toggle state
  components/          page sections (Hero, About, Experience, Work, CaseStudy, Footer, Nav) + Effects.jsx (motion helpers)
  charts/hr.jsx        illustrative SVG charts used on project cards
```

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
```

## Contact

Alitsa Patcharoen · Bangkok · june.alitsa@gmail.com

---

<details>
<summary>หมายเหตุสำหรับตัวเอง (ภาษาไทย)</summary>

- ข้อความภาษาอังกฤษแก้ที่ `src/data/profile.js` · ภาษาไทยแก้ที่ `src/data/profile.th.js` (ชื่อบริษัทยังเป็นอังกฤษตาม CV เปลี่ยนได้ในไฟล์ไทย)
- ภาษาเริ่มต้นตั้งที่ `src/i18n.jsx` (บรรทัด `return 'en'`) — ผู้เข้าชมสลับได้เองที่ปุ่ม TH/EN บน nav — Experience ให้ตรงตาม CV, `featured: true` = ผลงานที่โชว์หน้าแรก
- เปลี่ยน CV: วางไฟล์ทับ `public/Alitsa-Patcharoen-CV.pdf` · รูปโปรไฟล์ `public/profile.jpg` · รูป OG (แชร์ลิงก์) `public/og.jpg`
- ใส่ LinkedIn / LINE: `profile.linkedin`, `profile.line` ใน `profile.js` (จะโผล่ที่ footer)
- ใบเซอร์: ใส่รูปใน `public/certs/` แล้วเพิ่มใน `certifications` (ตอนนี้ว่าง = ซ่อนการ์ด)
- กราฟบนการ์ดผลงาน: `src/charts/hr.jsx` (ตัวเลขทั้งหมดเป็นค่าจำลอง)
- สี/ฟอนต์: `src/index.css` (บล็อก `@theme`) — accent ปัจจุบัน gold `#f2c14e`, พื้นดำอุ่น `#0b0a08`, ฟอนต์ Plus Jakarta Sans / DM Sans / DM Mono
</details>
