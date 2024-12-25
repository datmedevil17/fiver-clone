"use client";
import React, { useState } from 'react';
import { Home, PenLine, Github, Linkedin, Twitter, Mail, Sun } from 'lucide-react';

const NavItem = ({ icon: Icon, label }) => {
  const [isHovered, setIsHovered] = useState(false);

  const hoverStyles = {
    opacity: 1,
    transform: 'translateY(0)',
  };

  const defaultStyles = {
    opacity: 0.7,
    transform: 'translateY(2px)',
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative"
      style={isHovered ? hoverStyles : defaultStyles} // Apply styles based on hover state
    >
      {isHovered && (
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 text-white text-sm px-2 py-1 rounded-md whitespace-nowrap">
          {label}
        </div>
      )}
      <div className={`p-2 transition-all duration-200 rounded-full relative ${isHovered ? '-translate-x-2 bg-white/10' : ''}`}>
        <Icon className="w-5 h-5 text-white" />
      </div>
    </div>
  );
};

const FooterDock = () => {
  const navItems = [
    { icon: Home, label: 'Home' },
    { icon: PenLine, label: 'Blog' },
    { icon: Github, label: 'Github' },
    { icon: Linkedin, label: 'LinkedIn' },
    { icon: Twitter, label: 'Twitter' },
    { icon: Mail, label: 'Contact' },
    { icon: Sun, label: 'Theme' },
  ];

  return (
    <div className="flex gap-6 pb-5 flex-wrap justify-center"> {/* Add flex-wrap for responsiveness */}
      <div className="border border-white/20 rounded-full px-4 py-3 sm:px-2 sm:py-1 md:px-3 md:py-2 lg:px-4 lg:py-3"> {/* Adjust padding based on screen size */}
        <div className="flex items-center gap-4">
          {navItems.map((item, index) => (
            <NavItem key={index} icon={item.icon} label={item.label} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterDock;