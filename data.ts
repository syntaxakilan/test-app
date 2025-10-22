
import type { Project, Utilization, Alert, QuickAccessItem, GanttTask, Resource, CostDataPoint } from './types';
import { DocumentIcon, UserGroupIcon, CheckCircleIcon } from './components/Icon';

export const activeProjects: Project[] = [
    {
        id: 'p1',
        name: 'City General Hospital Expansion',
        phase: 'Design',
        completionDate: '2024-12-15',
        overallProgress: 75,
        imageUrl: 'https://picsum.photos/seed/hospital/400/200',
    },
    {
        id: 'p2',
        name: 'Downtown Metro Line Extension',
        phase: 'Construction',
        completionDate: '2025-08-30',
        overallProgress: 42,
        imageUrl: 'https://picsum.photos/seed/metro/400/200',
    },
];

export const teamUtilization: Utilization[] = [
    { role: 'Designers', percentage: 85 },
    { role: 'Engineers', percentage: 92 },
    { role: 'Site Supervisors', percentage: 65 },
];

export const alerts: Alert[] = [
    { id: 'a1', title: 'RFI-102: Foundation Spec Clarification', description: 'Awaiting Response - Overdue', status: 'overdue' },
    { id: 'a2', title: 'Submittal P-112 - HVAC Units', description: 'Pending Review', status: 'pending' },
    { id: 'a3', title: 'Change Order #56', description: 'Approved', status: 'approved' },
];

export const quickAccessItems: QuickAccessItem[] = [
    { id: 'qa1', title: 'Architectural Drawings - Rev 3.1', updated: 'Updated 2 days ago', status: 'view', icon: DocumentIcon },
    { id: 'qa2', title: 'Review Structural Steel Submittals', status: 'Due in 3 days', icon: CheckCircleIcon },
    { id: 'qa3', title: 'Mechanical Systems Plan v2', status: 'Active', icon: UserGroupIcon },
];

export const ganttTasks: GanttTask[] = [
  { name: 'Planning', start: 0, duration: 2, end: 2 },
  { name: 'Design', start: 1, duration: 4, end: 5 },
  { name: 'Permitting', start: 3, duration: 3, end: 6 },
  { name: 'Procurement', start: 4, duration: 4, end: 8 },
  { name: 'Construction', start: 6, duration: 8, end: 14 },
  { name: 'Commissioning', start: 13, duration: 2, end: 15 },
  { name: 'Handover', start: 14, duration: 1, end: 15 },
];

export const resourceAllocation: Resource[] = [
  { name: 'Design', value: 25, fill: '#0ea5e9' },
  { name: 'Engineering', value: 40, fill: '#10b981' },
  { name: 'Site Labor', value: 15, fill: '#f97316' },
  { name: 'Management', value: 10, fill: '#eab308' },
  { name: 'Subcontractors', value: 10, fill: '#8b5cf6' },
];

export const costImpactData: CostDataPoint[] = [
  { date: 'Day 1', value: 100000 },
  { date: 'Day 5', value: 105000 },
  { date: 'Day 10', value: 102000 },
  { date: 'Day 15', value: 115000 },
  { date: 'Day 20', value: 110000 },
  { date: 'Day 25', value: 125430 },
  { date: 'Day 30', value: 120000 },
];
