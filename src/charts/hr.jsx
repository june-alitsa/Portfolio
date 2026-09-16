// กราฟประกอบการ์ดผลงาน — ทุกตัวเลขเป็นค่าจำลอง (illustrative) ไม่ใช่ข้อมูลจริงของบริษัท
import { C, useTip, Tip, Legend, DataTable, fmt } from './shared.jsx'

const MONO = 'var(--font-mono)'
const SANS = 'var(--font-sans)'
const W = 320, H = 170

const useSvgTip = () => {
  const { tip, show, hide } = useTip()
  const on = (label, value) => (e) => {
    const r = e.currentTarget.closest('svg').getBoundingClientRect()
    show({ x: e.clientX - r.left, y: e.clientY - r.top, label, value })
  }
  return { tip, on, hide }
}

/* ── Migration: ขั้นตอนย้ายระบบ payroll → Humansoft ── */
const STEPS = ['Vendor', 'Setup', 'Validate', 'Train', 'Go-live']
export function MigrationChart() {
  const { tip, on, hide } = useSvgTip()
  const x = (i) => 24 + i * ((W - 48) / (STEPS.length - 1))
  return (
    <div className="relative">
      <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label="Payroll migration steps: vendor selection, setup, validation, training, go-live (illustrative)">
        <text x="0" y="22" fontSize="11" fill={C.text} fontFamily={MONO} letterSpacing="1.5">PAYROLL → HUMANSOFT</text>
        <line x1={x(0)} y1="78" x2={x(4)} y2="78" stroke={C.grid} strokeWidth="2" />
        <line x1={x(0)} y1="78" x2={x(3)} y2="78" stroke={C.s1} strokeWidth="2" />
        {STEPS.map((s, i) => (
          <g key={s} onMouseMove={on(s, i < 4 ? 'done' : 'live')} onMouseLeave={hide}>
            <circle cx={x(i)} cy="78" r="9" fill={C.surface} stroke={i === 4 ? C.s2 : C.s1} strokeWidth="2" />
            {i < 4 && <path d={`M${x(i) - 4} 78 l3 3 l5 -6`} fill="none" stroke={C.s1} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />}
            {i === 4 && <circle cx={x(i)} cy="78" r="3.5" fill={C.s2} />}
            <text x={x(i)} y="104" textAnchor="middle" fontSize="10" fill={C.textStrong} fontFamily={MONO}>{s}</text>
          </g>
        ))}
        <g fontFamily={MONO} fontSize="10" fill={C.text}>
          <text x="0" y="140">14 companies · 400+ employees</text>
          <text x="0" y="158">tax · social security · time attendance in one system</text>
        </g>
      </svg>
      <Tip tip={tip} />
    </div>
  )
}

/* ── Group: 14 บริษัท — จำนวนพนักงานจำลองต่อบริษัท ── */
const HEADS = [62, 48, 44, 39, 35, 31, 28, 24, 22, 19, 17, 14, 11, 9]
export function GroupChart() {
  const { tip, on, hide } = useSvgTip()
  const max = Math.max(...HEADS), PL = 0, colW = W / HEADS.length
  return (
    <div className="relative">
      <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label="Headcount across 14 affiliated companies (illustrative)">
        <text x="0" y="16" fontSize="11" fill={C.text} fontFamily={MONO} letterSpacing="1.5">HEADCOUNT · 14 COMPANIES</text>
        <text x={W} y="16" textAnchor="end" fontSize="11" fill={C.textStrong} fontFamily={MONO}>Σ {fmt(HEADS.reduce((a, b) => a + b))}</text>
        {HEADS.map((v, i) => {
          const h = (v / max) * 110, x = PL + i * colW + 3
          return (
            <g key={i} onMouseMove={on(`Company ${String.fromCharCode(65 + i)}`, `${v} staff`)} onMouseLeave={hide}>
              <rect x={x} y={140 - h} width={colW - 6} height={h} rx="3" fill={C.s1} opacity={0.45 + 0.55 * (1 - i / HEADS.length)} />
              <text x={x + (colW - 6) / 2} y="158" textAnchor="middle" fontSize="8" fill={C.text} fontFamily={MONO}>{String.fromCharCode(65 + i)}</text>
            </g>
          )
        })}
      </svg>
      <Tip tip={tip} />
      <DataTable caption="Headcount by company (illustrative)" head={['Company', 'Staff']} rows={HEADS.map((v, i) => [String.fromCharCode(65 + i), v])} />
    </div>
  )
}

/* ── Payroll: รอบเงินเดือนรายเดือน — วันปิดรอบ ── */
const CLOSE = [3, 2, 3, 2, 2, 1, 2, 2, 1, 2, 1, 2]
const MONTHS = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']
export function PayrollChart() {
  const { tip, on, hide } = useSvgTip()
  const colW = (W - 40) / 12
  return (
    <div className="relative">
      <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label="Days to close payroll each month, 1 to 3 days (illustrative)">
        <text x="0" y="16" fontSize="11" fill={C.text} fontFamily={MONO} letterSpacing="1.5">DAYS TO CLOSE PAYROLL</text>
        {[1, 2, 3].map((d) => (
          <g key={d}>
            <line x1="24" y1={130 - d * 30} x2={W} y2={130 - d * 30} stroke={C.grid} strokeDasharray="2 3" />
            <text x="0" y={130 - d * 30} dy="0.35em" fontSize="9" fill={C.text} fontFamily={MONO}>{d}d</text>
          </g>
        ))}
        {CLOSE.map((d, i) => {
          const x = 28 + i * colW, h = d * 30
          return (
            <g key={i} onMouseMove={on(`Month ${i + 1}`, `${d} day${d > 1 ? 's' : ''}`)} onMouseLeave={hide}>
              <rect x={x} y={130 - h} width={colW - 6} height={h} rx="3" fill={d === 1 ? C.s1 : d === 2 ? C.s1 : C.mid} opacity={d === 2 ? 0.7 : 1} />
              <text x={x + (colW - 6) / 2} y="148" textAnchor="middle" fontSize="9" fill={C.text} fontFamily={MONO}>{MONTHS[i]}</text>
            </g>
          )
        })}
        <text x="0" y="166" fontSize="10" fill={C.text} fontFamily={MONO}>tax (PND.1) + social security filed with every cycle</text>
      </svg>
      <Tip tip={tip} />
    </div>
  )
}

/* ── Funnel: recruitment ── */
const FUNNEL = [['Applicants', 1], ['Screened', 0.46], ['Interviewed', 0.22], ['Offered', 0.08], ['Hired', 0.065]]
export function FunnelChart({ data = FUNNEL, base = 1200, label = 'Recruitment funnel' }) {
  const { tip, on, hide } = useSvgTip()
  const steps = data.map(([l, r]) => ({ l, v: Math.round(base * r) }))
  const PL = 84, rowH = (H - 16) / steps.length, barH = Math.min(16, rowH * 0.6)
  const x = (v) => PL + (v / steps[0].v) * (W - PL - 46)
  return (
    <div className="relative">
      <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label={`${label} (illustrative)`}>
        {steps.map((s, i) => {
          const y = 8 + i * rowH + (rowH - barH) / 2
          const pct = Math.round((s.v / steps[0].v) * 100)
          return (
            <g key={s.l} onMouseMove={on(s.l, `${fmt(s.v)} · ${pct}%`)} onMouseLeave={hide}>
              <text x={PL - 8} y={y + barH / 2} dy="0.35em" textAnchor="end" fontSize="10" fill={C.text} fontFamily={MONO}>{s.l}</text>
              <rect x={PL} y={y} width={x(s.v) - PL} height={barH} rx="4" fill={C.s1} opacity={1 - i * 0.16} />
              <rect x={PL} y={y} width="4" height={barH} fill={C.s1} opacity={1 - i * 0.16} />
              <text x={x(s.v) + 8} y={y + barH / 2} dy="0.35em" fontSize="10" fill={C.textStrong} fontFamily={MONO}>{pct}%</text>
            </g>
          )
        })}
      </svg>
      <Tip tip={tip} />
      <DataTable caption={label} head={['Stage', 'Candidates', 'Share']} rows={steps.map((s) => [s.l, fmt(s.v), `${Math.round((s.v / steps[0].v) * 100)}%`])} />
    </div>
  )
}

/* ── Org chart ── */
export function OrgChart() {
  const box = (x, y, w, label, hi) => (
    <g key={label + x}>
      <rect x={x - w / 2} y={y} width={w} height="22" rx="6" fill={hi ? C.s1 : 'var(--color-surface-2)'} stroke={hi ? C.s1 : C.grid} />
      <text x={x} y={y + 11} dy="0.35em" textAnchor="middle" fontSize="9" fill={hi ? C.surface : C.textStrong} fontFamily={MONO}>{label}</text>
    </g>
  )
  const L2 = [['Operations', 60], ['Finance', 160], ['HR', 260]]
  const L3 = [[28, 'Branch'], [92, 'Kitchen'], [160, 'Account'], [228, 'Payroll'], [292, 'Recruit']]
  const parent = (x) => (x < 130 ? 60 : x < 200 ? 160 : 260)
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label="Organization chart with reporting lines (illustrative)">
      <line x1="160" y1="34" x2="160" y2="52" stroke={C.grid} />
      <line x1="60" y1="52" x2="260" y2="52" stroke={C.grid} />
      {L2.map(([, x]) => <line key={x} x1={x} y1="52" x2={x} y2="70" stroke={C.grid} />)}
      {L3.map(([x]) => (
        <g key={x}>
          <line x1={parent(x)} y1="92" x2={parent(x)} y2="106" stroke={C.grid} />
          <line x1={parent(x)} y1="106" x2={x} y2="106" stroke={C.grid} />
          <line x1={x} y1="106" x2={x} y2="122" stroke={C.grid} />
        </g>
      ))}
      {box(160, 12, 110, 'Managing Director', true)}
      {L2.map(([l, x]) => box(x, 70, 84, l, l === 'HR'))}
      {L3.map(([x, l]) => box(x, 122, 58, l, false))}
      <text x="0" y="166" fontSize="10" fill={C.text} fontFamily={MONO}>JD · grade · reporting line for every box</text>
    </svg>
  )
}

/* ── Checklist: labor-law compliance ── */
const CHECKS = [['Employment contracts', true], ['Working hours & OT', true], ['Leave & holidays', true], ['Discipline & warnings', true], ['Termination & severance', true], ['Work rules filed', false]]
export function ChecklistChart() {
  return (
    <div className="relative">
      <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label="Labor-law compliance checklist (illustrative)">
        <text x="0" y="16" fontSize="11" fill={C.text} fontFamily={MONO} letterSpacing="1.5">COMPLIANCE CHECKLIST</text>
        <text x={W} y="16" textAnchor="end" fontSize="11" fill={C.textStrong} fontFamily={MONO}>5 / 6</text>
        {CHECKS.map(([l, ok], i) => {
          const y = 34 + i * 23
          return (
            <g key={l}>
              <rect x="0" y={y} width="14" height="14" rx="4" fill={ok ? C.s1 : 'none'} stroke={ok ? C.s1 : C.grid} />
              {ok
                ? <path d={`M3 ${y + 7} l3 3 l5 -6`} fill="none" stroke={C.surface} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                : <circle cx="7" cy={y + 7} r="2" fill={C.s2} />}
              <text x="22" y={y + 7} dy="0.35em" fontSize="10" fill={ok ? C.textStrong : C.text} fontFamily={MONO}>{l}</text>
              <text x={W} y={y + 7} dy="0.35em" textAnchor="end" fontSize="9" fill={ok ? C.s1 : C.s2} fontFamily={MONO}>{ok ? 'compliant' : 'in progress'}</text>
            </g>
          )
        })}
      </svg>
    </div>
  )
}

/* ── Docs: foreign-worker documents — สถานะ ── */
const DOCS = [['Valid', 31, 's1'], ['Renew ≤ 60d', 6, 's2'], ['In process', 3, 's3']]
export function DocsChart() {
  const { tip, on, hide } = useSvgTip()
  const total = DOCS.reduce((a, [, v]) => a + v, 0)
  const R = 54, cx = 70, cy = 88
  let a0 = -Math.PI / 2
  const arcs = DOCS.map(([l, v, c]) => {
    const a1 = a0 + (v / total) * Math.PI * 2
    const p = (a) => [cx + R * Math.cos(a), cy + R * Math.sin(a)]
    const [x0, y0] = p(a0 + 0.02), [x1, y1] = p(a1 - 0.02)
    const d = `M${x0} ${y0} A${R} ${R} 0 ${a1 - a0 > Math.PI ? 1 : 0} 1 ${x1} ${y1}`
    a0 = a1
    return { l, v, c, d }
  })
  return (
    <div className="relative">
      <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label="Work permit and visa document status (illustrative)">
        <text x="0" y="16" fontSize="11" fill={C.text} fontFamily={MONO} letterSpacing="1.5">PERMIT & VISA STATUS</text>
        {arcs.map((a) => <path key={a.l} d={a.d} fill="none" stroke={C[a.c]} strokeWidth="14" onMouseMove={on(a.l, `${a.v} docs`)} onMouseLeave={hide} />)}
        <text x={cx} y={cy - 4} textAnchor="middle" fontSize="22" fontWeight="700" fill={C.textStrong} fontFamily={SANS}>{total}</text>
        <text x={cx} y={cy + 12} textAnchor="middle" fontSize="8" fill={C.text} fontFamily={MONO}>DOCUMENTS</text>
        {arcs.map((a, i) => (
          <g key={a.l} fontFamily={MONO} fontSize="10">
            <rect x="150" y={62 + i * 24} width="10" height="10" rx="2" fill={C[a.c]} />
            <text x="168" y={67 + i * 24} dy="0.35em" fill={C.textStrong}>{a.l}</text>
            <text x={W} y={67 + i * 24} dy="0.35em" textAnchor="end" fill={C.text}>{a.v}</text>
          </g>
        ))}
        <text x="150" y="150" fontSize="9" fill={C.text} fontFamily={MONO}>renewals tracked 60 days ahead</text>
      </svg>
      <Tip tip={tip} />
    </div>
  )
}

/* ── Calendar: กิจกรรมแรงงานสัมพันธ์ตลอดปี ── */
const EVENTS = { 0: 'New Year party', 3: 'Songkran', 5: 'Health check', 7: 'Team outing', 9: 'Training week', 11: 'Year-end awards' }
export function CalendarChart() {
  const { tip, on, hide } = useSvgTip()
  const colW = (W - 8) / 6
  return (
    <div className="relative">
      <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label="Year-round employee relations calendar (illustrative)">
        <text x="0" y="16" fontSize="11" fill={C.text} fontFamily={MONO} letterSpacing="1.5">ER CALENDAR · 12 MONTHS</text>
        {Array.from({ length: 12 }, (_, i) => {
          const x = 4 + (i % 6) * colW, y = 30 + Math.floor(i / 6) * 60
          const ev = EVENTS[i]
          return (
            <g key={i} onMouseMove={on(MONTHS[i] + ' · month ' + (i + 1), ev || 'budget review')} onMouseLeave={hide}>
              <rect x={x} y={y} width={colW - 6} height="52" rx="6" fill={ev ? C.s1 : 'var(--color-surface-2)'} opacity={ev ? 0.9 : 1} stroke={C.grid} />
              <text x={x + 6} y={y + 14} fontSize="9" fill={ev ? C.surface : C.text} fontFamily={MONO}>{String(i + 1).padStart(2, '0')}</text>
              {ev && <text x={x + 6} y={y + 40} fontSize="8" fill={C.surface} fontFamily={MONO}>{ev.split(' ')[0]}</text>}
            </g>
          )
        })}
        <text x="0" y="166" fontSize="10" fill={C.text} fontFamily={MONO}>budget planned per activity · company + affiliated restaurants</text>
      </svg>
      <Tip tip={tip} />
    </div>
  )
}

/* ── Rating: การกระจายผลประเมิน ── */
const RATING = [['Needs improvement', 6], ['Meets', 48], ['Exceeds', 32], ['Outstanding', 14]]
export function RatingChart() {
  const { tip, on, hide } = useSvgTip()
  const max = Math.max(...RATING.map((r) => r[1])), PL = 110
  return (
    <div className="relative">
      <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label="Performance rating distribution (illustrative)">
        <text x="0" y="16" fontSize="11" fill={C.text} fontFamily={MONO} letterSpacing="1.5">RATING DISTRIBUTION</text>
        {RATING.map(([l, v], i) => {
          const y = 34 + i * 30, w = (v / max) * (W - PL - 40)
          return (
            <g key={l} onMouseMove={on(l, `${v}%`)} onMouseLeave={hide}>
              <text x={PL - 8} y={y + 8} dy="0.35em" textAnchor="end" fontSize="10" fill={C.text} fontFamily={MONO}>{l}</text>
              <rect x={PL} y={y} width={w} height="16" rx="4" fill={i === 0 ? C.mid : C.s1} opacity={0.6 + i * 0.13} />
              <text x={PL + w + 8} y={y + 8} dy="0.35em" fontSize="10" fill={C.textStrong} fontFamily={MONO}>{v}%</text>
            </g>
          )
        })}
        <text x="0" y="166" fontSize="10" fill={C.text} fontFamily={MONO}>annual cycle · calibrated · linked to training plan</text>
      </svg>
      <Tip tip={tip} />
    </div>
  )
}

/* ── Bands: โครงสร้างเงินเดือนตามระดับ ── */
const BANDS = [['G1', 12, 18], ['G2', 16, 26], ['G3', 22, 38], ['G4', 32, 55], ['G5', 45, 80]]
export function BandsChart() {
  const { tip, on, hide } = useSvgTip()
  const PL = 30, max = 85, x = (v) => PL + (v / max) * (W - PL - 10)
  return (
    <div className="relative">
      <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label="Pay bands by grade (illustrative)">
        <text x="0" y="16" fontSize="11" fill={C.text} fontFamily={MONO} letterSpacing="1.5">PAY BANDS BY GRADE · THB k</text>
        {BANDS.map(([g, lo, hi], i) => {
          const y = 34 + i * 25
          return (
            <g key={g} onMouseMove={on(g, `${lo}k – ${hi}k`)} onMouseLeave={hide}>
              <text x="0" y={y + 6} dy="0.35em" fontSize="10" fill={C.text} fontFamily={MONO}>{g}</text>
              <line x1={PL} y1={y + 6} x2={W - 10} y2={y + 6} stroke={C.grid} strokeDasharray="2 3" />
              <rect x={x(lo)} y={y} width={x(hi) - x(lo)} height="12" rx="6" fill={C.s1} opacity={0.5 + i * 0.12} />
              <circle cx={x((lo + hi) / 2)} cy={y + 6} r="3" fill={C.surface} />
            </g>
          )
        })}
        <text x="0" y="166" fontSize="10" fill={C.text} fontFamily={MONO}>range · midpoint · allowances & benefits on top</text>
      </svg>
      <Tip tip={tip} />
    </div>
  )
}

/* ── Audit: คะแนนตรวจสอบภายในรายด้าน ── */
const AUDIT = [['Recruitment', 96], ['Payroll', 98], ['Records', 94], ['Labor law', 100]]
export function AuditChart() {
  const { tip, on, hide } = useSvgTip()
  const colW = W / AUDIT.length
  return (
    <div className="relative">
      <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label="Internal audit scores by HR area (illustrative)">
        <text x="0" y="16" fontSize="11" fill={C.text} fontFamily={MONO} letterSpacing="1.5">INTERNAL AUDIT · BRANCH HR</text>
        {AUDIT.map(([l, v], i) => {
          const cx = i * colW + colW / 2, r = 26, circ = 2 * Math.PI * r
          return (
            <g key={l} onMouseMove={on(l, `${v} / 100`)} onMouseLeave={hide}>
              <circle cx={cx} cy="82" r={r} fill="none" stroke={C.grid} strokeWidth="6" />
              <circle cx={cx} cy="82" r={r} fill="none" stroke={C.s1} strokeWidth="6" strokeDasharray={`${(v / 100) * circ} ${circ}`} strokeLinecap="round" transform={`rotate(-90 ${cx} 82)`} />
              <text x={cx} y="82" dy="0.35em" textAnchor="middle" fontSize="13" fontWeight="700" fill={C.textStrong} fontFamily={SANS}>{v}</text>
              <text x={cx} y="130" textAnchor="middle" fontSize="9" fill={C.text} fontFamily={MONO}>{l}</text>
            </g>
          )
        })}
        <text x="0" y="166" fontSize="10" fill={C.text} fontFamily={MONO}>audit standards + labor law across every process</text>
      </svg>
      <Tip tip={tip} />
    </div>
  )
}
