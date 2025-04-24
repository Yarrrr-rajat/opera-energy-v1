"use client";

import {MoveRight} from "lucide-react"

export default function Result() {
    return (
        <section className="md:px-20 py-24 px-4 flex flex-col md:flex-row gap-10 items-center bg-white text-gray-800">
            <div className='flex items-center justify-center md:w-1/2 '>
                <div className="w-48 h-48 md:w-64 md:h-64 shadow-xl rounded-full">
                    <img src="/section2.png" alt="Wind Turbines" className="w-full h-full object-cover rounded-full"/>
                </div>
            </div>
            <div className="md:w-1/2 gap-6 flex flex-col w-full">
                <p className="flex gap-6 text-sm md:text-base text-center">
                    <img src="/bullet.svg" alt="Bullet" className="w-10" />
                    <em>WHO WE ARE</em>
                </p>
                <h2 className="text-xl md:text-4xl">
                    The Best Solution Provider<br/>For <strong className="text-black">Green Energy</strong>
                </h2>
                <p className="text-gray-400 text-sm md:text-base">
                    We have a team of domain experts who strive for excellence in the renewable energy generation sector...
                </p>
                <div className="flex flex-col gap-4 items-center">
                    <div className="flex gap-4 items-center w-full">
                        <img src="/section2_1.gif" alt="compass" className="w-20 h-20 shadow-md"/>
                        <div>
                            <h1 className="font-bold text-black">1. Our Culture</h1>
                            <p className="text-gray-400 text-sm">Our passion to work with the client satisfaction is the source of our success. We 100% believe in ethics...</p>
                            <p className="text-black flex gap-2 items-center text-sm">Read More <MoveRight/></p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center w-full">
                        <div>
                            <h1 className="font-bold text-black">2. Our Productivity</h1>
                            <p className="text-gray-400 text-sm">We take pride in successfully executing 1.30 GW+ and pipelining renewable energy projects of capacity of 1GW in next...</p>
                            <p className="text-black flex gap-2 items-center text-sm">Read More <MoveRight/></p>
                        </div>
                        <img src="/section2_2.gif" alt="compass" className="w-20 h-20 shadow-md"/>
                    </div>
                </div>

            </div>
        </section>
    );
}
