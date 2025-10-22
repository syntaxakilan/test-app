
import React from 'react';
import { 
    DashboardIcon, 
    FolderIcon, 
    UserGroupIcon, 
    ChartBarIcon, 
    CogIcon,
    BriefcaseIcon
} from './Icon';

const Sidebar: React.FC = () => {
    const navItems = [
        { icon: DashboardIcon, label: 'My Dashboard', active: true },
        { icon: BriefcaseIcon, label: 'All Projects', active: false },
        { icon: FolderIcon, label: 'Attachments', active: false },
        { icon: UserGroupIcon, label: 'Team Overview', active: false },
        { icon: ChartBarIcon, label: 'Reports', active: false },
    ];

    return (
        <aside className="w-64 bg-slate-950 p-6 flex flex-col justify-between">
            <div>
                <div className="flex items-center gap-3 mb-10">
                    <div className="bg-blue-500 p-2 rounded-lg">
                       <BriefcaseIcon className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-xl font-bold text-white">AEC Project Hub</h1>
                </div>

                <nav>
                    <ul>
                        {navItems.map((item, index) => (
                            <li key={index} className="mb-2">
                                <a
                                    href="#"
                                    className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                                        item.active
                                            ? 'bg-blue-500 text-white'
                                            : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                                    }`}
                                >
                                    <item.icon className="w-5 h-5" />
                                    <span>{item.label}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div>
                <a href="#" className="flex items-center gap-3 p-3 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white">
                    <CogIcon className="w-5 h-5" />
                    <span>Settings</span>
                </a>
            </div>
        </aside>
    );
};

export default Sidebar;
