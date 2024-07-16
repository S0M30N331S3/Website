import React, { useEffect, useRef } from 'react';

const BlackHoleVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const heroElement = document.querySelector('#hero-section');
    if (heroElement && videoRef.current) {
      const updateVideoPosition = () => {
        const heroRect = heroElement.getBoundingClientRect();
        videoRef.current.style.top = `${heroRect.top + 160}px`; // 40rem = 160px
        videoRef.current.style.left = `${heroRect.left}px`;
        videoRef.current.style.width = `${heroRect.width}px`;
        videoRef.current.style.height = `${heroRect.height}px`;
      };

      updateVideoPosition();
      window.addEventListener('resize', updateVideoPosition);
      return () => window.removeEventListener('resize', updateVideoPosition);
    }
  }, []);

  return (
    <div ref={videoRef} className="fixed z-[1] overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className='absolute w-full h-full object-cover'
      >
        <source src="/blackhole.webm" type="video/webm"/>
      </video>
    </div>
  );
};

export default BlackHoleVideo;