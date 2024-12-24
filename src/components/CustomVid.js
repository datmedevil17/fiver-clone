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

      <div className="absolute text-white inset-0 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold">Welcome to Our World</h1>
        <p className="mt-4 text-lg">Discover amazing things here.</p>
      </div>
    </section>
  );
}

export default CustomVid;