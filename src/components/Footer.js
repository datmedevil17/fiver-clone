import React from "react";
import { FaLinkedin, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import { BackgroundBeams } from "../components/ui/background-beam";
// import LogoSlider from "./LogoSlider";
import { FloatingDock } from "./ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import AnimatedLogoCloud from "./AnimatedLogoCloud";
import { VortexDemo } from "./VortexDemo";
import IconCloud from "./IconCloud";




function Footer() {
  const offices = [
    {
      title: 'INDIA OFFICE',
      address: '407, Arulya IT Park, Bhawarkuan Main Rd,',
      city: 'Indore, Madhya Pradesh 452010',
      phone1: '+91 9770477295',
      phone2: '+91 9713406972',
      email: 'info@infoqainc.com'
    },
    {
      title: 'UK OFFICE',
      address: 'Apartment 410.5, 25 Arena Tower',
      city: 'Crossharbour Plaza, London E14 9YF',
      phone1: '+442401523165',
    },
    {
      title: 'USA OFFICE',
      address: '135-447 Broadway, 3rd Floor,',
      city: 'New York, NY 10013, USA',
      phone1: '+13312569197',
      address2: '720 W Randolph Street Chicago, IL',
      phone2: '+13312569197'
    },
    {
      title: 'AUSTRALIA OFFICE',
      address: '264 George Street,',
      city: 'Sydney 2000',
      phone1: '+61480045822',
      email: 'info@infoqainc.com'
    }
  ];
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Products",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Components",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Changelog",
      icon: (
        <IconExchange className="h-full w-full text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-300" />
      ),
      href: "#",
    },
]

const iconSlugs = ['typescript', 'javascript', 'react', 'html5' , 'css3' , 'nodedotjs' , 'express' , 'nextdotjs' , 'postgresql' , 'vercel' , 'docker' , 'git' , 'github' , 'visualstudiocode' , 'C' , 'python' , 'tailwindcss' , 'mongodb' , 'mysql' , 'Solidity' , 'Hardhat' , 'Wagmi' , 'Foundry' , 'Rust' , 'Move' , 'Aptos' , 'framermotion' , 'shadcn-ui'] 


return (
  <div>
    <VortexDemo/>
    <AnimatedLogoCloud />
    <div className="w-full rounded-md bg-black relative flex md:flex-row flex-col items-center justify-center antialiased">
      <BackgroundBeams />
      <footer className="bg-black w-full">
        <div className="w-full flex md:flex-row flex-col justify-around items-start p-10">
          {/* Company Socials */}
          <div className="p-5">  
            <ul>
              <p className="text-white font-bold text-3xl pb-6">
                Company <span className="text-blue-600">Name</span>
              </p>
              <FloatingDock
              mobileClassName="translate-y-20"
              items={links}/>
            </ul>
          </div>

          {/* Content */}
          <div className="p-5">
            <ul>
              <p className="text-white font-bold text-2xl pb-4">Company</p>
              <li className="text-md pb-2 font-semibold cursor-pointer">
                <a href="" className="text-gray-300 hover:text-blue-600 hover:underline transition-all duration-200">
                  Career
                </a>
              </li>
              <li className="text-md pb-2 font-semibold cursor-pointer">
                <a href="" className="text-gray-300 hover:text-blue-600 hover:underline transition-all duration-200">
                  Sitemap
                </a>
              </li>
              <li className="text-md pb-2 font-semibold cursor-pointer">
                <a href="" className="text-gray-300 hover:text-blue-600 hover:underline transition-all duration-200">
                  Event
                </a>
              </li>
              <li className="text-md pb-2 font-semibold cursor-pointer">
                <a href="" className="text-gray-300 hover:text-blue-600 hover:underline transition-all duration-200">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="p-5">
            <ul>
              <p className="text-white font-bold text-2xl pb-4">Services</p>
              <li className="text-md pb-2 font-semibold cursor-pointer">
                <a href="" className="text-gray-300 hover:text-blue-600 hover:underline transition-all duration-200">
                  Blockchain
                </a>
              </li>
              <li className="text-md pb-2 font-semibold cursor-pointer">
                <a href="" className="text-gray-300 hover:text-blue-600 hover:underline transition-all duration-200">
                  Mobile Development
                </a>
              </li>
              <li className="text-md pb-2 font-semibold cursor-pointer">
                <a href="" className="text-gray-300 hover:text-blue-600 hover:underline transition-all duration-200">
                  Web Development
                </a>
              </li>
              <li className="text-md pb-2 font-semibold cursor-pointer">
                <a href="" className="text-gray-300 hover:text-blue-600 hover:underline transition-all duration-200">
                  Design
                </a>
              </li>
              <li className="text-md pb-2 font-semibold cursor-pointer">
                <a href="" className="text-gray-300 hover:text-blue-600 hover:underline transition-all duration-200">
                  AI Development
                </a>
              </li>
              <li className="text-md pb-2 font-semibold cursor-pointer">
                <a href="" className="text-gray-300 hover:text-blue-600 hover:underline transition-all duration-200">
                  Software Testing
                </a>
              </li>
            </ul>
          </div>
          <div className="p-5">
            <ul>
              <p className="text-white font-bold text-2xl pb-4 ">About</p>
              <li className="text-md pb-2 font-semibold cursor-pointer">
              <a href="https://www.youtube.com/" className="text-gray-300 hover:text-blue-600 hover:underline transition-all duration-200">
                 About Company
              </a>
              </li>
              <li className="text-md pb-2 font-semibold cursor-pointer">
                <a href="" className="text-gray-300 hover:text-blue-600 hover:underline transition-all duration-200">
                  Vision & Mission
                </a>
              </li>
              <li className="text-md pb-2 font-semibold cursor-pointer">
                <a href="" className="text-gray-300 hover:text-blue-600 hover:underline transition-all duration-200">
                  Become our Partner
                </a>
              </li>
              <li className="text-md pb-2 font-semibold cursor-pointer">
                <a href="" className="text-gray-300 hover:text-blue-600 hover:underline transition-all duration-200">
                  Our Technology Partners
                </a>
              </li>
            </ul>
          </div>

          <div className="p-10">
            <IconCloud iconSlugs={iconSlugs}/>
          </div>
        </div>

        {/* Divider */}
        <div className="px-5">
            <hr className="w-4/5 border-gray-400 mx-auto" />
          </div>

        {/* Addresses Section */}
        <div className="p-5 text-gray-300">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
              {offices.map((office, index) => (
                <div key={index} className="p-4 text-sm">
                  <h3 className="font-bold text-white mb-2 text-lg">{office.title}</h3>
                  <p className="mb-1">{office.address}</p>
                  <p className="mb-2">{office.city}</p>
                  {office.address2 && <p className="mb-1">{office.address2}</p>}
                  <div className="flex flex-col gap-1">
                    <p className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <a href={`tel:${office.phone1}`} className="text-gray-300 hover:text-blue-600 transition-all duration-200">
                        {office.phone1}
                      </a>
                    </p>
                    {office.phone2 && (
                      <p className="flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <a href={`tel:${office.phone2}`} className="text-gray-300 hover:text-blue-600 transition-all duration-200">
                          {office.phone2}
                        </a>
                      </p>
                    )}
                    {office.email && (
                      <p className="flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <a href={`mailto:${office.email}`} className="text-gray-300 hover:text-blue-600 transition-all duration-200">
                          {office.email}
                        </a>
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

          {/* Divider */}
          <div className="px-5">
            <hr className="w-4/5 border-gray-400 mx-auto" />
          </div>

          {/* Copyright Section */}
          <div className="flex flex-col justify-center items-center text-center p-5">
            <h1 className="text-white font-semibold">
              Copyright © {new Date().getFullYear()} | All rights reserved
            </h1>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;