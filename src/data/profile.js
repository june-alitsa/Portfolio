// ─────────────────────────────────────────────────────────────
//  แก้ข้อมูลทั้งหมดของเว็บได้ที่ไฟล์นี้ไฟล์เดียว
//  (เนื้อหาอ้างอิงจาก Resume - Alitsa Patcharoen.pdf)
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Alitsa Patcharoen',
  nickname: 'June',
  title: 'HR Manager | HR Business Partner',
  tagline: 'Full-cycle HR · Payroll · Labor Law',
  location: 'Bueng Kum, Bangkok, Thailand',
  phone: '098-396-3879',
  phoneHref: 'tel:+66983963879',
  email: 'june.alitsa@gmail.com',
  line: '',            // LINE ID เช่น 'june.alitsa' (เว้นว่าง = ไม่แสดง)
  lineHref: '',        // ลิงก์ LINE เช่น 'https://line.me/ti/p/~xxx'
  linkedin: '',        // ใส่ลิงก์ LinkedIn เช่น 'https://www.linkedin.com/in/xxx'
  cvFile: 'Alitsa-Patcharoen-CV.pdf',
  photo: 'profile.jpg',   // รูปโปรไฟล์ใน public/ (ลบบรรทัดนี้ถ้าไม่อยากโชว์รูป)
  available: true,
  availabilityText: 'Open to HR Manager / HRBP roles',
  heroIntro:
    'Bangkok-based HR leader who runs the whole people cycle — payroll, recruitment, labor relations, compliance, and organization design — across multi-company groups, and keeps every process aligned with Thai labor law.',
  summary:
    'Full-cycle HR professional with over 15 years of experience spanning HR Operations, Payroll, Recruitment, Labor Relations, HR Compliance, and Organization Structure. Proven track record managing HR across multiple affiliated companies and leading system improvements aligned with labor law.',
}

export const stats = [
  { value: '15+', label: 'Years in HR' },
  { value: '14', label: 'Affiliated companies managed' },
  { value: '400+', label: 'Employees supported' },
  { value: '1–3 days', label: 'Payroll cycle close' },
]

export const skills = [
  {
    group: 'HR Operations',
    items: ['Payroll & Compensation', 'Recruitment & Manpower Planning', 'Employee Relations', 'HR Budget'],
  },
  {
    group: 'Strategic HR',
    items: ['Organization Structure & Job Description', 'Performance Evaluation', 'Training Programs', 'Compensation & Benefits Design'],
  },
  {
    group: 'Compliance',
    items: ['Labor Law', 'HR Compliance', 'Withholding Tax', 'Social Security', 'Foreign Worker Documentation', 'Internal Audit Standards'],
  },
  {
    group: 'HR Systems',
    items: ['Humansoft', 'PayDay', 'Tiger Soft', 'Microsoft Office', 'ChatGPT'],
  },
]

// logo = โลโก้จริงใน public/logos/ (kind: 'wordmark' = โลโก้ตัวอักษรเต็ม ใช้แทนชื่อ, 'mark' = สัญลักษณ์ + ชื่อ)
// icon = key ใน src/components/Icons.jsx (Simple Icons) ใช้เมื่อไม่มี logo
// Office icons จาก Wikimedia Commons (Microsoft trademark — ใช้เพื่อระบุเครื่องมือเท่านั้น)
// PayDay (TeleAccess) ไม่มีไฟล์โลโก้ให้ดาวน์โหลด — ใช้ตัวอักษรสีน้ำเงินตามแบรนด์แทน (wordmarkText)
export const tools = [
  { name: 'Humansoft', logo: 'logos/humansoft.svg', kind: 'wordmark', note: 'Payroll · tax · SSO' },
  { name: 'PayDay', wordmarkText: { text: 'PayDay', color: '#3d8bff' }, note: 'Payroll · TeleAccess' },
  { name: 'Tiger Soft', logo: 'logos/tigersoft.png', kind: 'mark', note: 'Time attendance · HRM' },
  { name: 'Excel', logo: 'logos/excel.svg', kind: 'mark', note: 'Payroll checks · reports' },
  { name: 'Word', logo: 'logos/word.svg', kind: 'mark', note: 'JD · contracts · policies' },
  { name: 'PowerPoint', logo: 'logos/powerpoint.svg', kind: 'mark', note: 'Training · reviews' },
  { name: 'ChatGPT', icon: 'openai', note: 'Drafting · policies · JD' },
]

// การ์ด "At a glance" (แทนที่การ์ด Languages ในเว็บต้นแบบ)
export const glance = [
  { name: 'Experience', level: '15+ years' },
  { name: 'Industries', level: 'Retail · F&B · Restaurants · Group companies' },
  { name: 'Scope', level: '14 companies · 400+ staff' },
  { name: 'Base', level: 'Bangkok' },
]

// ตรงตาม CV
export const experience = [
  {
    company: '7 Idea Corporation Co., Ltd.',
    period: 'May 2021 — May 2026',
    roles: [
      {
        title: 'HR Manager / HR Specialist',
        period: 'May 2021 — May 2026',
        bullets: [
          'Managed full-cycle HR for 14 affiliated companies with over 400 employees in total.',
          'Oversaw payroll, withholding tax, and social security via Humansoft, closing each payroll cycle within 1–3 days.',
          'Led the payroll system migration to Humansoft — from vendor selection and setup to data validation and user training.',
          'Managed recruitment, manpower planning, and HR operations across all affiliated companies.',
          'Advised on labor law and supported organization structure and job description development.',
        ],
      },
    ],
  },
  {
    company: 'Krua Mae Sri Ruean Co., Ltd.',
    period: 'Nov 2019 — Apr 2021',
    roles: [
      {
        title: 'Head of Human Resources Department',
        period: 'Nov 2019 — Apr 2021',
        bullets: [
          'Directed full-cycle HR management for the company and its affiliated restaurants.',
          'Controlled the HR budget and planned year-round employee relations activities.',
          'Managed foreign worker compliance and documentation in line with labor law.',
        ],
      },
    ],
  },
  {
    company: 'W.N Foods and Beverage Co., Ltd. / Urban Business Group Co., Ltd.',
    period: 'Oct 2014 — Nov 2019',
    roles: [
      {
        title: 'Senior HR Officer',
        period: 'Oct 2014 — Nov 2019',
        bullets: [
          'Planned annual training programs and performance evaluation systems.',
          'Designed compensation structures, organization structure, and job descriptions.',
          'Developed employee benefit systems and established HR standards.',
        ],
      },
    ],
  },
  {
    company: 'Big C Supercenter PCL.',
    period: 'Jul 2006 — Nov 2013',
    roles: [
      {
        title: 'Human Resources Manager',
        period: 'Jul 2006 — Nov 2013',
        bullets: [
          'Managed branch-level HR operations: recruitment, payroll, and employee relations.',
          'Ensured Internal Audit standards and labor law compliance across HR processes.',
        ],
      },
    ],
  },
]

export const education = [
  {
    degree: 'Bachelor of Education in Psychology and Guidance',
    school: 'Chandrakasem Rajabhat University',
    year: '2005',
  },
]

// image = รูปใบเซอร์ใน public/certs/ (กดแล้วขยายดูได้) — ว่าง = ซ่อนการ์ด
export const certifications = []

// ผลงาน — สรุปจากประสบการณ์ใน CV
// chart = key ใน src/charts/index.js ; กราฟทุกตัวเป็นภาพประกอบ (illustrative) ไม่ใช่ตัวเลขจริง
// featured: true = โชว์ในหน้าแรกทันที (ที่เหลือซ่อนอยู่หลังปุ่ม View all projects)
// shots = ภาพหน้าจอจริงแทนกราฟ ; links = ปุ่มลองเดโม / ดูโค้ด
export const projects = [
  {
    id: 'hr360',
    featured: true,
    shots: ['/projects/hr360-01-pick-name.png', '/projects/hr360-04-rate.png', '/projects/hr360-05-review.png'],
    links: { demo: '/hr-360/', repo: 'https://github.com/june-alitsa/hr-360-showcase' },
    category: 'HR Tech',
    title: 'Mobile 360° Feedback System',
    description:
      'Built a paperless 360-degree evaluation for front-line staff on Google Sheets + Apps Script — staff scan a QR code, enter a PIN, and rate colleagues on their phones, while HR sees per-person results and prints a one-page A4 report. No server, no subscription.',
    tags: ['Google Sheets', 'Apps Script', '360 feedback', 'Performance'],
    highlights: ['QR + PIN, no login or app install', 'Live HR dashboard per person', 'Anonymous — groups under 3 hidden'],
  },
  {
    id: 'migration',
    featured: true,
    chart: 'migration',
    category: 'HR Systems',
    title: 'Payroll System Migration to Humansoft',
    description:
      'Led the end-to-end move of group payroll onto Humansoft — vendor selection, system setup, master-data validation for every affiliated company, and user training — so payroll, withholding tax, and social security run from one system.',
    tags: ['Humansoft', 'Payroll', 'Change management', 'Training'],
    highlights: ['Vendor selection → go-live', 'Data validated per company', 'Users trained before cut-over'],
  },
  {
    id: 'group',
    featured: true,
    chart: 'group',
    category: 'HR Operations',
    title: 'Full-cycle HR for a 14-Company Group',
    description:
      'Ran HR for 14 affiliated companies with 400+ employees from a single HR function — one set of policies, consistent contracts and records, and recruitment and manpower planning coordinated across every entity.',
    tags: ['Multi-entity', 'Manpower planning', 'HR policy'],
    highlights: ['14 legal entities, one HR standard', '400+ employees supported', 'Shared recruitment pipeline'],
  },
  {
    id: 'payroll',
    featured: true,
    chart: 'payroll',
    category: 'Payroll & Compliance',
    title: 'Payroll, Tax & Social Security Cycle',
    description:
      'Owned the monthly payroll cycle end-to-end — time & attendance, adjustments, withholding tax (PND.1), and social security filings — closing each cycle within 1–3 days with checks in place before any transfer.',
    tags: ['Payroll', 'Withholding tax', 'Social security', 'Humansoft'],
    highlights: ['1–3 day close every month', 'Tax & SSO filed on time', 'Pre-transfer validation'],
  },
  {
    id: 'recruit',
    featured: true,
    chart: 'funnel',
    category: 'Recruitment',
    title: 'Recruitment & Manpower Planning',
    description:
      'Planned headcount with business owners and managed the full hiring funnel — sourcing, screening, interviews, offers, and onboarding — for corporate, retail-branch, and restaurant roles.',
    tags: ['Manpower planning', 'Sourcing', 'Onboarding'],
    highlights: ['Headcount plan per company', 'Branch & restaurant hiring', 'Onboarding & probation tracking'],
  },
  {
    id: 'org',
    featured: true,
    chart: 'org',
    category: 'Strategic HR',
    title: 'Organization Structure & Job Descriptions',
    description:
      'Designed organization structures and wrote job descriptions across companies — clear reporting lines, role scopes, and grades — as the foundation for compensation, evaluation, and hiring.',
    tags: ['Org design', 'Job description', 'Grading'],
    highlights: ['Reporting lines defined', 'JD for every position', 'Feeds pay & evaluation'],
  },
  {
    id: 'law',
    featured: true,
    chart: 'checklist',
    category: 'Labor Law',
    title: 'Labor Law & HR Compliance Advisory',
    description:
      'Advised management on Thai labor law — contracts, working hours, discipline, termination, and severance — and kept HR processes, documents, and records compliant and audit-ready.',
    tags: ['Labor law', 'Employee relations', 'Compliance'],
    highlights: ['Contracts & policies compliant', 'Discipline handled by the book', 'Audit-ready records'],
  },
  {
    id: 'foreign',
    chart: 'docs',
    category: 'Labor Law',
    title: 'Foreign Worker Compliance & Documentation',
    description:
      'Managed work permits, visas, and required reporting for foreign employees in the restaurant group, keeping every document valid and renewals tracked ahead of expiry.',
    tags: ['Work permit', 'Visa', 'Documentation'],
    highlights: ['Permit & visa tracking', 'Renewals ahead of expiry', 'Reporting in line with law'],
  },
  {
    id: 'er',
    chart: 'calendar',
    category: 'HR Operations',
    title: 'HR Budget & Employee Relations Calendar',
    description:
      'Controlled the annual HR budget and planned a year-round employee relations programme — activities, welfare, and communication — for the company and its affiliated restaurants.',
    tags: ['HR budget', 'Employee relations', 'Welfare'],
    highlights: ['Budget owned end-to-end', 'Year-round activity plan', 'Engagement across branches'],
  },
  {
    id: 'training',
    chart: 'rating',
    category: 'Strategic HR',
    title: 'Training Programs & Performance Evaluation',
    description:
      'Built the annual training plan and the performance evaluation system — criteria, forms, cycle, and calibration — so reviews are consistent and tied to development and pay decisions.',
    tags: ['Training plan', 'Performance evaluation', 'KPI'],
    highlights: ['Annual training calendar', 'Evaluation criteria & forms', 'Linked to pay & development'],
  },
  {
    id: 'comp',
    chart: 'bands',
    category: 'Strategic HR',
    title: 'Compensation Structure & Benefits Design',
    description:
      'Designed compensation structures and employee benefit systems and established HR standards — pay ranges by grade, allowances, and benefits that are fair, affordable, and easy to administer.',
    tags: ['Compensation', 'Benefits', 'HR standards'],
    highlights: ['Pay bands by grade', 'Benefit system rolled out', 'HR standards documented'],
  },
  {
    id: 'audit',
    chart: 'audit',
    category: 'Payroll & Compliance',
    title: 'Internal Audit Standards in Branch HR',
    description:
      'Ran branch-level HR at Big C — recruitment, payroll, and employee relations — while meeting internal audit standards and labor law requirements across every HR process.',
    tags: ['Internal audit', 'Branch HR', 'Retail'],
    highlights: ['Audit standards met', 'Branch payroll & records', 'Labor law compliance'],
  },
]

// Case study เด่น (การ์ดใหญ่ท้าย section Work)
export const caseStudy = {
  eyebrow: 'Featured case study',
  title: 'Moving 14 companies onto one payroll system.',
  teaser:
    'The payroll migration to Humansoft — from picking the vendor to training every user — and how the group closes payroll, withholding tax, and social security within 1–3 days each month.',
  steps: [
    { h: 'Vendor selection', t: 'Compared payroll systems against group needs — multi-company, Thai tax & social security, time attendance.' },
    { h: 'Setup & configuration', t: 'Company profiles, pay items, tax rules, and approval flows configured for all 14 entities.' },
    { h: 'Data validation', t: 'Employee master data and payroll history reconciled company by company before cut-over.' },
    { h: 'Training & go-live', t: 'HR and finance users trained; first cycles run in parallel, then closed within 1–3 days.' },
  ],
}

export const nav = [
  { label: 'home', href: '#home' },
  { label: 'about', href: '#about' },
  { label: 'experience', href: '#experience' },
  { label: 'work', href: '#work' },
  { label: 'contact', href: '#contact' },
]

// ข้อความ UI ที่อยู่ใน component (หัวข้อ section, ปุ่ม ฯลฯ) — ฉบับไทยอยู่ใน profile.th.js
export const ui = {
  downloadCv: 'Download CV',
  hero: {
    headline: { pre: 'People operations,', em: 'done properly.' },
    seeWork: 'See the work',
    contact: 'Get in touch',
    cvPdf: 'Download CV (PDF)',
  },
  about: {
    label: 'About',
    title: { pre: 'Fifteen years of HR — ', em: 'payroll to policy.' },
    tools: 'Systems & tools',
    education: 'Education',
    certificate: 'Certificate',
  },
  experience: {
    label: 'Experience',
    title: { pre: 'Four companies, ', em: 'one full HR cycle', post: ' each time.' },
    intro: 'From branch HR in retail to heading HR for a 14-company group — the key responsibilities from each role, as on the CV.',
  },
  work: {
    label: 'Selected work',
    title: { pre: 'Work that kept ', em: 'the business running.' },
    intro: 'Seven pieces of work that best show the range — from a mobile 360° feedback system and a group-wide payroll migration to organization design and labor-law compliance. Charts are illustrative sketches and the 360° demo runs on mock data; real employee and company data stays with the company.',
    illustrative: 'illustrative',
    more: (n) => `${n} more pieces of work`,
    hide: 'Hide',
    askMe: 'Ask me about it',
    mockData: 'mock data',
    demo: 'Try the live demo',
    repo: 'View on GitHub',
    caseChips: ['Humansoft', '14 companies', '1–3 day close'],
  },
  contact: {
    label: 'Contact',
    title: { pre: "Let's talk ", em: 'people.' },
    intro: 'For companies and recruiters looking for someone who can run payroll, recruitment, and labor relations across multiple entities — and keep every process aligned with labor law. References available on request.',
    email: 'Email',
    phone: 'Phone',
    cv: 'CV',
    downloadPdf: 'Download PDF',
    top: 'Back to top ↑',
  },
}
