'use client';

import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroCube() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Smooth transition fallback in case media events are delayed
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`relative w-[550px] h-[550px] flex items-center justify-center mix-blend-lighten [mask-image:radial-gradient(closest-side,black_75%,transparent_100%)] transition-all duration-1000 ease-out ${
        isLoaded
          ? 'opacity-100 scale-100 translate-y-0'
          : 'opacity-0 scale-95 translate-y-2'
      }`}
    >
      {/* Fallback video / image while WebGL scene initializes or if WebGL fails */}
      {(!isLoaded || hasError) && (
        <video
          src="/media/cube.mp4"
          poster="/images/cube-fallback.jpg"
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setIsLoaded(true)}
          className="absolute inset-0 w-full h-full object-contain pointer-events-none"
        />
      )}

      {!hasError && (
        <Spline
          scene="/media/cube.splinecode"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full cursor-grab active:cursor-grabbing transition-opacity duration-700 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}
    </div>
  );
}
