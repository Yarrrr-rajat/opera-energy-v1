'use client';
import heroImg from '@/public/hero.png';
import Image from 'next/image';
import scrolldown from '@/public/scrollDown.gif';

export default function Hero() {
    return (
        <section className="relative md:h-[600px] h-[210px] w-full bg-cover overflow-hidden bg-no-repeat bg-white flex text-white" style={{ backgroundImage: `url(${heroImg.src})` }}>
            <div className="md:invisible visible absolute inset-0 bg-black/60 z-0"></div>
            <div className="absolute md:top-24 md:left-10 z-10 md:p-0 p-10">
                <h1 className="md:text-5xl text-lg">Best Wind Energy Companies<br/>In <span className='font-bold'>Tamilnadu India.</span></h1>
                <p className="md:mt-4 md:w-1/2 md:text-base text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, accusantium fugiat aliquam dignissimos dolorum facilis necessitatibus, a distinctio, voluptates nemo amet consectetur at animi. A quidem explicabo aperiam autem nulla.</p>
                <button className="md:visible invisible md:mt-4 mt-2 md:text-base text-sm bg-[#00A0E3] text-white md:px-4 px-2 md:py-2 py-1 rounded-md">Get Started</button>
            </div>
            
            {/* <div className="absolute h-20 w-20 border-2 border-[#00A0E3] rounded-full bottom-5 left-10 md:visible invisible">
                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full rotate-270">
                    <defs>
                    <path
                        id="circlePath"
                        d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                        fill="none"
                    />
                    </defs>
                    <text fill="black" fontSize="10" fontWeight="bold" letterSpacing="2">
                    <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
                        SCROLL DOWN
                    </textPath>
                    </text>
                </svg>

                <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                    src={scrolldown}
                    alt="Scroll Down"
                    width={40}
                    height={40}
                    className="rounded-full"
                    />
                </div>
            </div> */}
        </section>
    );
  }