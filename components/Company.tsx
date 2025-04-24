'use client';

import React from 'react';
import EnergyCard from '@/components/EnergyCard';

const stats = [
  {
    title: 'Solar Energy',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    percentage: 62,
    color: '#00bfff',
  },
  {
    title: 'Wind Energy',
    description: 'Fusce eget neque enim. Pellentesque ut erat ligula.',
    percentage: 89,
    color: '#28a745',
  },
  {
    title: 'Green Hydrogen Energy',
    description: 'Maecenas bibendum eros vel ligula congue pretium.',
    percentage: 10,
    color: '#dc3545',
  },
];

export default function EnergyDashboard() {
  return (
    <section className="md:px-20 py-24 px-4 flex flex-col md:flex-row gap-10 items-center bg-slate-200 text-gray-800">
        <div className="md:w-1/2 gap-6 flex flex-col w-full">
            <p className="flex gap-6 text-sm md:text-base text-center">
                <img src="/bullet.svg" alt="Bullet" className="w-10" />
                <em>COMPANY STATISTICS</em>
            </p>
            <h2 className="text-xl md:text-4xl">
                For over  <strong className="text-black">10 years</strong> in<br/> the business
            </h2>
            <p className="text-gray-400 text-sm md:text-base">
            We completely abide by the systematic approach to building an effective client relationship and supporting them with sustainable solutions across India.
            </p>
            <div className="flex flex-col gap-4 items-center">
            {stats.map((stat, index) => (
                <EnergyCard
                key={index}
                title={stat.title}
                description={stat.description}
                percentage={stat.percentage}
                color={stat.color}
                />
            ))}
            </div>
        </div>
        <div className='flex items-center justify-center md:w-1/2'>
            <img src="/wind.png" alt="Wind Turbines" className=" object-cover md:w-2/3" />
        </div>
    </section>
  );
}
