import React from "react";
import { FaLinkedin, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import { BackgroundBeams } from "../components/ui/background-beams";

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

  return (
    <footer className="bg-[#0a0e14]">
      {/* Rest of the footer content remains the same until the addresses section */}
      <BackgroundBeams />
      {/* Main Footer Content */}
      <div className="w-full flex md:flex-row flex-col justify-around items-start p-20">
        <div className="p-5">
          <ul>
            <p className="text-white font-bold text-3xl pb-6">
              Company <span className="text-blue-600">Name</span>
            </p>
            <div className="flex gap-6 pb-5">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-white text-2xl cursor-pointer hover:text-blue-600" />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-white text-2xl cursor-pointer hover:text-blue-600" />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="text-white text-2xl cursor-pointer hover:text-red-600" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaXTwitter className="text-white text-2xl cursor-pointer hover:text-gray-800" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-white text-2xl cursor-pointer hover:text-orange-400" />
              </a>
            </div>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-white font-bold text-2xl pb-4">Company</p>
            <li className="text-gray-300 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <a href="">Career</a>
            </li>
            <li className="text-gray-300 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <a href="">Sitemap</a>
            </li>
            <li className="text-gray-300 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <a href="">Event</a>
            </li>
            <li className="text-gray-300 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <a href="">Privacy Policy</a>
            </li>
            <li className="text-gray-300 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <a href="">Terms and Condition</a>
            </li>
            <li className="text-gray-300 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <a href="">Our Brochure</a>
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-white font-bold text-2xl pb-4">Services</p>
            <li className="text-gray-300 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <a href="">Blockchain</a>
            </li>
            <li className="text-gray-300 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <a href="">Mobile Development</a>
            </li>
            <li className="text-gray-300 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <a href="">Web Development</a>
            </li>
            <li className="text-gray-300 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <a href="">Design</a>
            </li>
            <li className="text-gray-300 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <a href="">AI Development</a>
            </li>
            <li className="text-gray-300 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <a href="">Software Testing</a>
            </li>
            <li className="text-gray-300 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <a href="">Game Development</a>
            </li>
            <li className="text-gray-300 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <a href="">Robotics</a>
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-white font-bold text-2xl pb-4">About</p>
            <li className="text-gray-300 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <a href="">About Company</a>
            </li>
            <li className="text-gray-300 text-md pb-2 font-semibold hover:text-blue-600 hover:underline transition-colors duration-200 cursor-pointer">
              <a href="">Vision & Mission</a>
            </li>
            <li className="text-gray-300 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <a href="">Become our Partner</a>
            </li>
            <li className="text-gray-300 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <a href="">Our Technology Partners</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="px-5">
        <hr className="w-4/5 border-gray-400 mx-auto" />
      </div>

      {/* Addresses Section - Updated with dark theme */}
      <div className="p-5 text-gray-300">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> 
            {offices.map((office, index) => (
              <div key={index} className="p-6"> 
                <h3 className="font-bold text-white mb-4">{office.title}</h3>
                <p className="text-sm md:text-base">{office.address}</p> 
                <p className="text-sm md:text-base">{office.city}</p> 
                {office.address2 && <p className="text-sm md:text-base">{office.address2}</p>} 
                <p className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="hover:text-blue-400 cursor-pointer">{office.phone1}</span> 
                </p>
                {office.phone2 && (
                  <p className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="hover:text-blue-400 cursor-pointer">{office.phone2}</span> 
                  </p>
                )}
                {office.email && (
                  <p className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="hover:text-blue-400 cursor-pointer">{office.email}</span> 
                  </p>
                )}
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
  );
}

export default Footer;