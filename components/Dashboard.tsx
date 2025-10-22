import React from 'react';
import { activeProjects, teamUtilization, alerts, quickAccessItems, ganttTasks, resourceAllocation, costImpactData } from '../data';
import type { AlertStatus } from '../types';
import Card from './Card';
// FIX: Removed DocumentTextIcon and ChevronRightIcon as they are not exported from './Icon' and are not used.
import { ExclamationCircleIcon, ClockIcon, CheckCircleIcon } from './Icon';
import AllocationPieChart from './charts/AllocationPieChart';
import ScheduleGanttChart from './charts/ScheduleGanttChart';
import CostLineChart from './charts/CostLineChart';

const ProgressBar: React.FC<{ progress: number }> = ({ progress }) => (
    <div className="w-full bg-slate-700 rounded-full h-2.5">
        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
    </div>
);

const statusIcons: Record<AlertStatus, React.ComponentType<{ className?: string }>> = {
    overdue: ExclamationCircleIcon,
    pending: ClockIcon,
    approved: CheckCircleIcon,
};

const statusColors: Record<AlertStatus, string> = {
    overdue: 'text-red-500',
    pending: 'text-yellow-500',
    approved: 'text-green-500',
};

const Dashboard: React.FC = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Active Projects */}
            <div className="lg:col-span-2 xl:col-span-3">
                <h2 className="text-2xl font-bold text-white mb-4">Active Projects</h2>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                    {activeProjects.map(project => (
                        <Card key={project.id} className="flex flex-col md:flex-row gap-6">
                            <img src={project.imageUrl} alt={project.name} className="w-full md:w-1/3 h-48 md:h-auto object-cover rounded-lg" />
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-white">{project.name}</h3>
                                <div className="text-sm text-slate-400 mt-2">
                                    <p>Phase: <span className="font-semibold text-slate-300">{project.phase}</span></p>
                                    <p>Completion: <span className="font-semibold text-slate-300">{project.completionDate}</span></p>
                                </div>
                                <div className="mt-4">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-sm font-medium text-slate-300">Overall Progress</span>
                                        <span className="text-sm font-bold text-green-400">{project.overallProgress}%</span>
                                    </div>
                                    <ProgressBar progress={project.overallProgress} />
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Side Column Widgets */}
            <div className="flex flex-col gap-6">
                <Card title="Team Utilization">
                    <div className="space-y-4">
                        {teamUtilization.map(util => (
                            <div key={util.role}>
                                <div className="flex justify-between mb-1">
                                    <span className="text-base font-medium text-slate-300">{util.role}</span>
                                    <span className="text-sm font-medium text-blue-400">{util.percentage}%</span>
                                </div>
                                <div className="w-full bg-slate-700 rounded-full h-2">
                                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${util.percentage}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>

                <Card title="Alerts & Approvals">
                    <ul className="space-y-4">
                        {alerts.map(alert => {
                            const Icon = statusIcons[alert.status];
                            const color = statusColors[alert.status];
                            return (
                                <li key={alert.id} className="flex items-start gap-3">
                                    <Icon className={`w-5 h-5 mt-1 flex-shrink-0 ${color}`} />
                                    <div>
                                        <p className="font-semibold text-white">{alert.title}</p>
                                        <p className="text-sm text-slate-400">{alert.description}</p>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </Card>
            </div>

            {/* Bottom Row Full Width Widgets */}
            <div className="lg:col-span-3 xl:col-span-4 grid grid-cols-1 xl:grid-cols-2 gap-6">
                <Card title="Project Schedule">
                    <p className="text-sm text-slate-400 mb-4">High-level view of project timeline and milestones.</p>
                    <div className="h-64">
                       <ScheduleGanttChart data={ganttTasks} />
                    </div>
                </Card>
                <Card title="Resource Allocation">
                     <p className="text-sm text-slate-400 mb-4">Breakdown by skill and location.</p>
                    <div className="h-64">
                       <AllocationPieChart data={resourceAllocation} />
                    </div>
                </Card>
            </div>
            
             <div className="lg:col-span-3 xl:col-span-4 grid grid-cols-1 xl:grid-cols-2 gap-6">
                <Card title="Cost Impact of Changes">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-3xl font-bold text-white">$125,430</p>
                            <p className="text-sm text-green-500">vs last 30 days <span className="font-semibold">↑ 2.5%</span></p>
                        </div>
                        <a href="#" className="text-sm text-blue-400 hover:underline">View Full Report</a>
                    </div>
                    <div className="h-52 -ml-4 mt-4">
                        <CostLineChart data={costImpactData}/>
                    </div>
                </Card>
                <Card title="Quick Access">
                    <ul className="space-y-4">
                        {quickAccessItems.map(item => (
                            <li key={item.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-700/50">
                                <div className="flex items-center gap-4">
                                    <item.icon className="w-6 h-6 text-blue-400" />
                                    <div>
                                        <p className="font-semibold text-white">{item.title}</p>
                                        <p className="text-sm text-slate-400">{item.updated}</p>
                                    </div>
                                </div>
                                <span className={`text-sm font-medium ${item.status.startsWith('Due') ? 'text-yellow-400' : 'text-slate-400'}`}>{item.status}</span>
                            </li>
                        ))}
                    </ul>
                </Card>
            </div>
        </div>
    );
};

export default Dashboard;