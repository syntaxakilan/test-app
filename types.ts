
export interface Project {
    id: string;
    name: string;
    phase: string;
    completionDate: string;
    overallProgress: number;
    imageUrl: string;
}

export interface Utilization {
    role: string;
    percentage: number;
}

export type AlertStatus = 'overdue' | 'pending' | 'approved';

export interface Alert {
    id: string;
    title: string;
    description: string;
    status: AlertStatus;
}

export interface QuickAccessItem {
    id: string;
    title: string;
    status: string;
    updated?: string;
    icon: React.ComponentType<{ className?: string }>;
}

export interface GanttTask {
  name: string;
  start: number;
  duration: number;
  end: number;
}

export interface Resource {
  name: string;
  value: number;
  fill: string;
}

export interface CostDataPoint {
  date: string;
  value: number;
}
