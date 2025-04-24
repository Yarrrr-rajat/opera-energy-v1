'use client';

import React from 'react';

interface EnergyCardProps {
  title: string;
  description: string;
  percentage: number;
  color?: string;
}

const EnergyCard: React.FC<EnergyCardProps> = ({
  title,
  description,
  percentage,
  color = '#3b82f6',
}) => {
  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - percentage / 100);

  return (
    <div className="flex items-center gap-4 w-full">
        <div className="relative w-12 h-12">
            <svg
            className="size-full -rotate-90"
            viewBox="0 0 36 36"
            xmlns="http://www.w3.org/2000/svg"
            >
          
            <circle
                cx="18"
                cy="18"
                r={radius}
                fill="none"
                stroke="#d1d5dc"
                strokeWidth="3"
                
            />
            
            <circle
                cx="18"
                cy="18"
                r={radius}
                fill="none"
                stroke={color}
                strokeWidth="3"
                strokeDasharray={circumference}
                strokeDashoffset={dashOffset}
                strokeLinecap="round"
            />
            </svg>

            <div className="absolute top-1/2 left-1/2 text-xs font-semibold transform -translate-x-1/2 -translate-y-1/2">
            {percentage}%
            </div>
        </div>

        <div>
            <h3 className="text-base font-semibold">{title}</h3>
            <p className="text-sm text-gray-500">{description}</p>
        </div>
    </div>
  );
};

export default EnergyCard;
