'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ClientLogos() {
  const logos = Array.from({ length: 15 }, (_, i) => `/${i + 1}.png`);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const firstRow = isLargeScreen ? logos.slice(0, 7) : logos.slice(0, 9); 
  const secondRow = isLargeScreen ? logos.slice(7) : logos.slice(9);

  return (
    <section className="bg-[#009846] py-20 space-y-8">
      <h2 className="text-center text-white md:text-4xl text-xl">
        Our <span className="font-semibold">Client</span>
      </h2>

      <div className="flex flex-col gap-4">
        {/* First Row */}
        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-7 gap-6 px-10">
          {firstRow.map((logo, index) => (
            <div key={index} className="flex justify-center items-center">
              <Image
                src={logo}
                alt={`Client Logo ${index + 1}`}
                width={180}
                height={60}
                className="object-contain max-h-full rounded-md"
              />
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-6 lg:px-0 px-10">
          {secondRow.map((logo, index) => (
            <div key={index + 7} className="flex justify-center items-center">
              <Image
                src={logo}
                alt={`Client Logo ${index + 8}`}
                width={180}
                height={60}
                className="object-contain max-h-full rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
