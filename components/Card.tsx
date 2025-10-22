
import React from 'react';

interface CardProps {
    title?: string;
    children: React.ReactNode;
    className?: string;
}

const Card: React.FC<CardProps> = ({ title, children, className = '' }) => {
    return (
        <div className={`bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 shadow-lg ${className}`}>
            {title && <h3 className="text-xl font-bold text-white mb-4">{title}</h3>}
            {children}
        </div>
    );
};

export default Card;
