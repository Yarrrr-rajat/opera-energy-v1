"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"

export default function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return(
        <header className="mx-auto md:h-20 bg-white flex items-center md:px-10 px-3 justify-between">
            
            <div className="relative h-20 w-24">
                <Image src="/logo.svg" alt="Opera Energy" fill/>
            </div>

            <button
                className="md:hidden flex items-center"
                onClick={toggleMenu}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                >
                {isMenuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
            </button>

            <nav className="hidden md:flex items-center space-x-8">
                <Link href="/" className="text-[#009846] font-medium">
                    Home
                </Link>
                <div className="relative group">
                    <button className="flex items-center text-gray-700 font-medium group-hover:text-[#009846]">
                    About Us
                    <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md hidden group-hover:block">
                    <div className="py-2">
                        <Link href="/about/our-story" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                        Our Story
                        </Link>
                        <Link href="/about/team" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                        Our Team
                        </Link>
                    </div>
                    </div>
                </div>
                <div className="relative group">
                    <button className="flex items-center text-gray-700 font-medium group-hover:text-[#009846]">
                    Businesses
                    <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md hidden group-hover:block">
                    <div className="py-2">
                        <Link href="/businesses/service-1" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                        Service 1
                        </Link>
                        <Link href="/businesses/service-2" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                        Service 2
                        </Link>
                    </div>
                    </div>
                </div>
                <div className="relative group">
                    <button className="flex items-center text-gray-700 font-medium group-hover:text-[#009846]">
                    Projects
                    <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md hidden group-hover:block">
                    <div className="py-2">
                        <Link href="/projects/project-1" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                        Project 1
                        </Link>
                        <Link href="/projects/project-2" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                        Project 2
                        </Link>
                    </div>
                    </div>
                </div>
                <Link href="/career" className="text-gray-700 font-medium hover:text-[#009846]">
                    Career
                </Link>
                <Link href="/contact" className="text-gray-700 font-medium hover:text-[#009846]">
                    Contact
                </Link>
                <Link href="/blog" className="text-gray-700 font-medium hover:text-[#009846]">
                    Blog
                </Link>
            </nav>
        
            <div className="hidden md:flex items-center space-x-4">
                <div className="relative group">
                    <button className="flex gap-2 items-center text-gray-700">
                        <div className="w-6 h-6 rounded-full overflow-hidden ">
                            <Image src="/uk-flag.svg" alt="English" width={24} height={24} className="object-cover w-full h-full"/>
                        </div>
                        ENG
                        <ChevronDown className="ml-1 h-4 w-4" />
                    </button>

                    <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-md hidden group-hover:block">
                    
                    <div className="py-2">
                        <button className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100">
                        <Image src="/uk-flag.svg" alt="English" width={20} height={20} className="mr-2" />
                        English
                        </button>
                        <button className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100">
                        <Image src="/other-flag.svg" alt="Other Language" width={20} height={20} className="mr-2" />
                        Other
                        </button>
                    </div>
                    </div>
                </div>
                <Link
                    href="/book-now"
                    className="bg-[#009846] hover:bg-green-700 text-white font-medium px-6 py-2 rounded-md transition-colors"
                >
                    Book Now
                </Link>
            </div>
        
            {isMenuOpen && (
            <div className="md:hidden absolute top-20 left-0 right-0 bg-white shadow-md z-100">
                <nav className="flex flex-col py-4 ">
                <Link href="/" className="px-4 py-2 text-[#009846] font-medium" onClick={toggleMenu}>
                    Home
                </Link>
                <div className="px-4 py-2">
                    <details className="group">
                    <summary className="flex items-center text-gray-700 font-medium cursor-pointer">
                        About Us
                        <ChevronDown className="ml-1 h-4 w-4" />
                    </summary>
                    <div className="mt-2 ml-4 flex flex-col space-y-2">
                        <Link href="/about/our-story" className="text-gray-700" onClick={toggleMenu}>
                        Our Story
                        </Link>
                        <Link href="/about/team" className="text-gray-700" onClick={toggleMenu}>
                        Our Team
                        </Link>
                    </div>
                    </details>
                </div>
                <div className="px-4 py-2">
                    <details className="group">
                    <summary className="flex items-center text-gray-700 font-medium cursor-pointer">
                        Businesses
                        <ChevronDown className="ml-1 h-4 w-4" />
                    </summary>
                    <div className="mt-2 ml-4 flex flex-col space-y-2">
                        <Link href="/businesses/service-1" className="text-gray-700" onClick={toggleMenu}>
                        Service 1
                        </Link>
                        <Link href="/businesses/service-2" className="text-gray-700" onClick={toggleMenu}>
                        Service 2
                        </Link>
                    </div>
                    </details>
                </div>
                <div className="px-4 py-2">
                    <details className="group">
                    <summary className="flex items-center text-gray-700 font-medium cursor-pointer">
                        Projects
                        <ChevronDown className="ml-1 h-4 w-4" />
                    </summary>
                    <div className="mt-2 ml-4 flex flex-col space-y-2">
                        <Link href="/projects/project-1" className="text-gray-700" onClick={toggleMenu}>
                        Project 1
                        </Link>
                        <Link href="/projects/project-2" className="text-gray-700" onClick={toggleMenu}>
                        Project 2
                        </Link>
                    </div>
                    </details>
                </div>
                <Link href="/career" className="px-4 py-2 text-gray-700 font-medium" onClick={toggleMenu}>
                    Career
                </Link>
                <Link href="/contact" className="px-4 py-2 text-gray-700 font-medium" onClick={toggleMenu}>
                    Contact
                </Link>
                <Link href="/blog" className="px-4 py-2 text-gray-700 font-medium" onClick={toggleMenu}>
                    Blog
                </Link>
                <div className="px-4 py-2 flex items-center">
                    <Image src="/uk-flag.svg" alt="English" width={20} height={20} className="mr-2" />
                    <span className="text-gray-700">ENG</span>
                </div>
                <div className="px-4 py-2 mt-2 w-full">
                    <Link
                    href="/book-now"
                    className="block bg-[#009846] hover:bg-green-700 text-white font-medium px-6 py-2 rounded-md text-center transition-colors"
                    onClick={toggleMenu}
                    >
                    Book Now
                    </Link>
                </div>
                </nav>
            </div>
            )}
        </header>
    )
}