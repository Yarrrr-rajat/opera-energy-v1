"use client";

import Image from 'next/image';
import StatItem from './StatItem';

const CompanyStats = () => {

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

    return (
        <section className="flex flex-col lg:flex-row overflow-hidden items-center justify-between px-6 md:px-32 py-12 bg-slate-200 text-gray-800 gap-4">
        
        <div className="md:w-1/2 space-y-6">
            <p className="text-sm font-medium uppercase flex items-center gap-2">
            <span className="inline-block w-4 h-4 rounded-full bg-black" />
                <em>Company Statistics</em>
            </p>
            <h2 className="text-xl md:text-4xl font-semibold">
                For Over <strong className="text-black">10 Years</strong> in the business
            </h2>
            <p className="text-gray-500 md:text-base text-sm leading-relaxed">
                We completely abide by the systematic approach to building an effective client relationship and supporting them with sustainable solutions across India.
            </p>

            {/* Stats */}
            <div className="space-y-4">
                {stats.map((stat, index) => (
                    <StatItem
                    key={index}
                    title={stat.title}
                    description={stat.description}
                    percentage={stat.percentage}
                    color={stat.color}
                    />
                ))}
            </div>
        </div>

        {/* Right side: Image */}
        <div className="md:w-1/2 flex items-center justify-center">
            <div className="">
            <Image
                src="/wind.png"
                alt="Wind Turbines"
                width={300}
                height={300}
                className="rounded-[2rem] object-cover"
            />
            </div>
        </div>
        </section>
    );
};

export default CompanyStats;
