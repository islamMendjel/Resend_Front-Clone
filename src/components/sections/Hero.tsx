import React from "react";
import Link from "next/link";
import HeroCube from "./HeroCube";

export default function Hero() {
  return (
    <section className="relative overflow-hidden w-full pb-8 md:min-h-[820px] md:max-h-[950px]">
      {/* Background light ray */}
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet="/images/bg-light.avif 1x, /images/bg-light.avif 2x"
        />
        <img
          alt="Light ray background"
          loading="eager"
          width={1920}
          height={1080}
          decoding="async"
          className="pointer-events-none absolute -top-16 left-0 right-0 mx-auto hidden h-[950px] w-full select-none md:block transition-all duration-500 opacity-60 mix-blend-screen"
          style={{
            maskImage: "linear-gradient(to top, transparent 5%, black 25%)",
            WebkitMaskImage: "linear-gradient(to top, transparent 5%, black 25%)",
          }}
          src="/images/bg-light.avif"
        />
      </picture>

      {/* Subtle floor light / glow across lower-left hero area below CTA buttons */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-4 left-0 w-[550px] h-[320px] rounded-full blur-[100px] opacity-25 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.3)_0%,_transparent_70%)] select-none"
      />

      {/* Inner Hero Content Container matching exact 1120px inner page grid */}
      <div className="max-w-[1120px] mx-auto px-6 relative z-10 flex h-full flex-col items-center justify-between md:flex-row md:pb-12 pt-8 md:pt-16">
        <div className="origin-center-left order-2 max-w-2xl animate-hero-text-slide-up-fade sm:shrink-0 md:order-1">
          {/* Announcement pill */}
          <div className="flex items-center justify-center md:inline-flex">
            <Link
              className="rainbow-border mb-8 inline-flex items-center justify-center rounded-full relative text-sm leading-none after:absolute after:inset-0 after:block after:-z-10 after:rounded-full group"
              href="/forward"
            >
              <span className="inline-flex items-center gap-1 whitespace-nowrap px-3 py-1 m-[1px] rounded-full text-[#f0f0f0]">
                What you missed at Resend Forward
                <svg
                  fill="none"
                  height="12"
                  viewBox="0 0 24 24"
                  width="12"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform group-hover:translate-x-0.5 duration-150"
                >
                  <path
                    fill="currentColor"
                    d="M9.20705 4.29295C8.81652 3.90243 8.18351 3.90243 7.79298 4.29295C7.40246 4.68348 7.40246 5.31649 7.79298 5.70702L13.3788 11.2929C13.7694 11.6834 13.7694 12.3166 13.3788 12.7071L7.79298 18.293C7.40246 18.6835 7.40246 19.3165 7.79298 19.707C8.18351 20.0975 8.81652 20.0975 9.20705 19.707L16.207 12.707C16.5976 12.3165 16.5976 11.6835 16.207 11.293L9.20705 4.29295Z"
                  />
                </svg>
              </span>
            </Link>
          </div>

          {/* Heading */}
          <h1 className="effect-font-styling font-domaine text-[4rem] md:text-[6rem] tracking-[-0.01em] leading-[100%] effect-font-gradient relative text-center md:text-left pb-3 font-normal">
            Email for
            <br />
            developers
          </h1>

          {/* Subtext */}
          <p className="text-base md:text-[1.125rem] md:leading-[1.5] text-[#a1a4a5] font-normal relative mb-8 mt-2 max-w-[30rem] text-center leading-7 md:text-left">
            The best way to reach humans instead of spam folders. Deliver transactional and marketing emails at scale.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col justify-center gap-4 md:flex-row md:justify-start">
            <Link
              className="inline-flex h-11 items-center justify-center rounded-xl border border-[#292d30] bg-black/60 px-5 text-sm font-medium text-white hover:border-white/40 transition-colors"
              href="/signup"
            >
              Get started
            </Link>
            <Link
              href="https://resend.com/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center border justify-center select-none rounded-xl transition ease-in-out duration-200 bg-transparent border-transparent text-[#a1a4a5] hover:text-white text-sm h-11 px-5 font-medium"
            >
              Documentation
            </Link>
          </div>
        </div>

        {/* Mobile 3D Cube fallback video */}
        <div className="duration-300 transition-[filter] will-change-filter relative order-1 min-h-[225px] min-w-[225px] overflow-hidden mix-blend-lighten lg:hidden mb-6 md:mb-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute left-0 top-0 h-[225px] w-[225px] object-contain"
            poster="/images/cube-fallback.jpg"
          >
            <source src="/media/cube.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Desktop 3D Cube */}
        <div className="relative order-1 transform-gpu md:order-2 md:w-[600px] md:h-[520px] hidden items-center justify-center lg:flex shrink-0">
          <HeroCube />
        </div>
      </div>
    </section>
  );
}
