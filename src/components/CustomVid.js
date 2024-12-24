"use client"
import React, { useRef, useEffect } from 'react';
import Image from 'next/image'; 

export function CustomVid() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.autoplay = true;
      video.muted = true; 
      video.loop = true;
    }
  }, []);

  return (
    <section className="relative h-[70vh] bg-black"> 
      <video 
        ref={videoRef} 
        autoPlay 
        muted 
        loop 
        className="absolute inset-0 w-full h-full object-cover" 
      >
        <source src="https://videos.pexels.com/video-files/5223113/5223113-hd_2560_1440_30fps.mp4"  type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/50"></div> 

      <div className="absolute text-white inset-0 flex flex-col justify-center items-start px-10 w-1/2">
        <h1 className="text-4xl font-bold">CyberSecurity</h1>
        <p className="mt-4 text-lg">Elixir provides comprehensive cybersecurity services to safeguard your business in today's increasingly digital landscape. 
            Our team of experts delivers a wide range of solutions, including advanced threat detection and response, vulnerability assessments, penetration testing, 
            and the implementation of robust security controls. By leveraging cutting-edge technologies and adhering to industry best practices, we proactively identify 
            and mitigate potential risks, ensuring your data, systems, and reputation remain protected. With Elixir, you can experience peace of mind knowing your digital
             assets are in capable hands and your business is well-equipped to withstand evolving cyber threats.</p>
      </div>
    </section>
  );
}

export default CustomVid;