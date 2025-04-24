"use client";

import Image from 'next/image';
import {MoveRight} from "lucide-react"

const Result = () => {

    return (
        <section className="flex flex-col lg:flex-row overflow-hidden items-center justify-between px-6 md:px-32 py-12 bg-[#f8f8f8] text-gray-800 gap-4">
        
        <div className="md:w-1/2 flex items-center justify-center">
            <div className="w-72 h-72 rounded-full overflow-hidden">
                <Image
                src="/section2.png"
                alt="Wind Turbines"
                width={300}
                height={300}
                className="object-cover w-full h-full"
                />
            </div>
        </div>


        <div className="md:w-1/2 space-y-6">
            <p className="text-sm font-medium uppercase flex items-center gap-2">
            <span className="inline-block w-4 h-4 rounded-full bg-black" />
                <em>WHO WE ARE</em>
            </p>
            <h2 className="text-xl md:text-4xl font-semibold">
                The Best Solution Provider For <strong className="text-black">Green Energy</strong> 
            </h2>
            <p className="text-gray-500 md:text-base text-sm leading-relaxed">
                We have a team of domain experts who strive for excellence in the renewable energy generation sector...            
            </p>
            <div className="text-gray-500 md:text-base text-sm leading-relaxed flex gap-4 w-full">
                <Image src="/section2_1.gif" alt="Wind Turbines" width={50} height={50} className="object-cover md:w-1/5 w-2/5" />
                <div className='md:w-4/5 w-3/5'>
                    <h1 className='font-bold text-black'>1.Our Culture</h1>
                    <p>Our passion to work with the client satisfaction is the source of our success. We 100% believe in ethics...</p>
                    <p className='text-black flex gap-2 items-center'>Read More <MoveRight/></p>
                </div>
            </div>
            <div className="text-gray-500 md:text-base text-sm leading-relaxed flex gap-4 w-full">
                <div className='md:w-4/5 w-3/5'>
                    <h1 className='font-bold text-black'>2. Our Productivity</h1>
                    <p>We take pride in successfully executing 1.30 GW+ and pipelining renewable energy projects of capacity of 1GW in next...</p>
                    <p className='text-black flex gap-2 items-center'>Read More <MoveRight/></p>
                </div>
                <Image src="/section2_2.gif" alt="Wind Turbines" width={50} height={50} className="object-cover md:w-1/5 w-2/5" />
            </div>
        </div>
        
        </section>
    );
};

export default Result;
