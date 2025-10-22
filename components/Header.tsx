import React from 'react';
// FIX: Removed unused and non-existent UserCircleIcon import.
import { SearchIcon, PlusIcon, BellIcon, MoonIcon, SunIcon } from './Icon';

const Header: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = React.useState(true);
    
    return (
        <header className="bg-slate-950 p-4 border-b border-slate-800 flex items-center justify-between">
            {/* Breadcrumbs */}
            <div>
                <p className="text-sm text-slate-400">
                    AEC Project Hub / <span className="text-white">My Dashboard</span>
                </p>
            </div>

            {/* Search and Actions */}
            <div className="flex items-center gap-4">
                <div className="relative">
                    <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search projects, tasks, or people"
                        className="bg-slate-800 border border-slate-700 rounded-lg pl-10 pr-4 py-2 w-80 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                
                <button className="bg-blue-600 text-white flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    <PlusIcon className="w-5 h-5" />
                    New Project
                </button>

                <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white">
                    {isDarkMode ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
                </button>
                
                <button className="relative p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white">
                    <BellIcon className="w-6 h-6" />
                    <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500"></span>
                </button>
                
                <button className="p-1 rounded-full hover:bg-slate-800">
                     <img src="https://picsum.photos/seed/user/32/32" alt="User" className="w-8 h-8 rounded-full" />
                </button>
            </div>
        </header>
    );
};

export default Header;