"use client"

import Image from "next/image"
import { MapPin ,Phone, Mail, ChevronsRight, Facebook, Twitter, Linkedin, Instagram, Youtube} from "lucide-react"

export default function Footer(){
    return(
        <footer className="relative bg-white w-full flex flex-col items-center text-black">
            <div className="absolute -top-10 w-5/6 bg-white md:h-20 rounded-2xl flex text-xl  justify-between items-center md:px-20 shadow-md md:flex-row flex-col p-4 md:gap-0 gap-2">
                <h1>We Value Our <span className="font-bold">Customers</span></h1>
                <button className="bg-[#009846] hover:bg-green-700 text-white px-6 py-2 rounded-md transition-colors text-sm">Get The Quote</button>
            </div> 
            <div className="mt-20 flex flex-col w-full items-center">
                <div className="flex md:flex-row flex-col md:w-5/6 gap-4 items-center justify-between border-b-[1px] py-6">
                    <div className="relative md:w-1/6 w-40 h-20">
                        <Image src="/logo.svg" alt="Opera Energy" fill/>
                    </div>
                    <div className="w-4/6 gap-2 flex flex-col">
                        <h1 className="font-bold text-lg">Turn up the brightness, turn up the Green power</h1>
                        <p className="text-sm">A team of enthusiasts working for excellence. We had foreseen great opportunity in green energy 15 years back. Started with the consulting for Renewable Energy Development, we are now...</p>
                    </div>
                    <button className="bg-[#009846] hover:bg-green-700 text-white px-6 py-2 rounded-md transition-colors text-sm">Read More</button>
                </div>
                
                <div className="flex md:flex-row flex-col w-5/6 md:gap-0 gap-4 justify-between py-10">

                    <div className="md:w-1/4 flex flex-col gap-2">
                        <h1 className="font-semibold text-lg">Location</h1>
                        <div className="flex gap-2 w-full">
                            <div className="w-6 text-[#009846]">
                                <MapPin/>
                            </div>
                            <p className="md:w-5/6 text-sm">Shreeji plaza, 201, Main Rd, Valkeshwari, Park Colony, Jamnagar, Gujarat 361008</p>
                        </div>
                        <div className="flex gap-2 w-full">
                            <div className="w-6 text-[#009846]">
                                <Phone />
                            </div>
                            <p className="w-5/6 text-sm">(+91) 89802 30024</p>
                        </div>
                        <div className="flex gap-2 w-full">
                            <div className="w-6 text-[#009846]">
                                <Mail />
                            </div>
                            <p className="w-5/6 text-sm">info@operaenergy.in</p>
                        </div>
                    </div>

                    <div className="md:w-2/4">
                        <h1 className="font-semibold text-lg">Quicklinks</h1>
                        <div className="w-full flex md:flex-row flex-col md:divide-x-[1.5px] divide-gray-300">
                            <div className="md:w-1/2">
                                <div className="flex gap-2 items-center">
                                    <div className="w-6 text-gray-500">
                                        <ChevronsRight />
                                    </div>
                                    <p className="text-sm">About Us</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <div className="w-6 text-gray-500">
                                        <ChevronsRight />
                                    </div>
                                    <p className="text-sm">Turn Key EPC Services</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <div className="w-6 text-gray-500">
                                        <ChevronsRight />
                                    </div>
                                    <p className="text-sm">Executed Project</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <div className="w-6 text-gray-500">
                                        <ChevronsRight />
                                    </div>
                                    <p className="text-sm">Captive / Group Captive</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <div className="w-6 text-gray-500">
                                        <ChevronsRight />
                                    </div>
                                    <p className="text-sm">Career</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <div className="w-6 text-gray-500">
                                        <ChevronsRight />
                                    </div>
                                    <p className="text-sm">Blog</p>
                                </div>
                            </div>
                            <div className="md:w-1/2 md:px-4">
                                <div className="flex gap-2 items-center">
                                    <div className="w-6 text-gray-500">
                                        <ChevronsRight />
                                    </div>
                                    <p className="text-sm">Capex (EPC Model)</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <div className="w-6 text-gray-500">
                                        <ChevronsRight />
                                    </div>
                                    <p className="text-sm">Captive Project Pipeline</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <div className="w-6 text-gray-500">
                                        <ChevronsRight />
                                    </div>
                                    <p className="text-sm">Energy Storage</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <div className="w-6 text-gray-500">
                                        <ChevronsRight />
                                    </div>
                                    <p className="text-sm">Third-Party Power Sale</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <div className="w-6 text-gray-500">
                                        <ChevronsRight />
                                    </div>
                                    <p className="text-sm">Our Clients</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <div className="w-6 text-gray-500">
                                        <ChevronsRight />
                                    </div>
                                    <p className="text-sm">Privacy Policy</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <div className="w-6 text-gray-500">
                                        <ChevronsRight />
                                    </div>
                                    <p className="text-sm">Contact Us</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/4">
                        <h1 className="font-semibold text-lg">Follow Us</h1>
                        <div className="w-full flex flex-col gap-1">
                            <div className="flex gap-2 w-full items-center">
                                <div className="w-6 text-gray-500">
                                    <Facebook />
                                </div>
                                <p className="md:w-5/6 text-sm">Facebook</p>
                            </div>
                            <div className="flex gap-2 w-full items-center">
                                <div className="w-6 text-gray-500">
                                    <Twitter />
                                </div>
                                <p className="w-5/6 text-sm">Twitter</p>
                            </div>
                            <div className="flex gap-2 w-full items-center">
                                <div className="w-6 text-gray-500">
                                    <Linkedin />
                                </div>
                                <p className="w-5/6 text-sm">Linkedin</p>
                            </div>
                            <div className="flex gap-2 w-full items-center">
                                <div className="w-6 text-gray-500">
                                    <Instagram />
                                </div>
                                <p className="w-5/6 text-sm">Instagram</p>
                            </div>
                            <div className="flex gap-2 w-full items-center">
                                <div className="w-6 text-gray-500">
                                    <Youtube />
                                </div>
                                <p className="w-5/6 text-sm">Youtube</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="bg-[#009846] w-full text-center text-sm p-2 text-white">Copyright © 2022 Operaenergy. All Rights Reserved.Powered by Sauratech</div>
        </footer>
    )
}