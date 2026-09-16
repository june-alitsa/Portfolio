// map ชื่อ chart (ใน profile.js → projects[].chart) → component
import { MigrationChart, GroupChart, PayrollChart, FunnelChart, OrgChart, ChecklistChart, DocsChart, CalendarChart, RatingChart, BandsChart, AuditChart } from './hr.jsx'

export const charts = {
  migration: MigrationChart,
  group: GroupChart,
  payroll: PayrollChart,
  funnel: FunnelChart,
  org: OrgChart,
  checklist: ChecklistChart,
  docs: DocsChart,
  calendar: CalendarChart,
  rating: RatingChart,
  bands: BandsChart,
  audit: AuditChart,
}
