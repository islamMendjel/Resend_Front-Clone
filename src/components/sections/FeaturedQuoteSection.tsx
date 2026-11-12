"use client";

import React from "react";
import Image from "next/image";

export default function FeaturedQuoteSection() {
  return (
    <section className="relative mx-auto max-w-5xl md:max-w-7xl px-6 py-20 md:py-28 overflow-hidden">
      {/* Top Hairline Separator with ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-px w-[300px] -translate-x-1/2 md:w-[600px]"
        style={{
          background:
            "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.4) 50%, rgba(0, 0, 0, 0) 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-[180px] w-[320px] -translate-x-1/2 blur-2xl opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%)",
        }}
      />

      <div className="relative flex flex-col items-center justify-center gap-8 md:gap-10 text-center">
        {/* Vercel Badge with radial gradient */}
        <div
          className="flex h-[90px] w-[90px] sm:h-[100px] sm:w-[100px] items-center justify-center rounded-full border border-white/10 shadow-2xl transition-transform hover:scale-105 duration-300"
          style={{
            background:
              "radial-gradient(circle at 50% 40%, rgba(255, 255, 255, 0.15) 0%, #000000 80%)",
          }}
        >
          <Image
            src="/images/vercel.svg"
            alt="Vercel"
            width={40}
            height={40}
            className="w-9 h-9 sm:w-10 sm:h-10 object-contain invert brightness-200"
          />
        </div>

        {/* Quote text */}
        <blockquote className="mx-auto max-w-[620px] text-balance">
          <p className="font-sans text-xl md:text-2xl font-normal leading-relaxed text-white tracking-tight">
            Resend is transforming email for developers. Simple
            interface, easy integrations, handy templates. What else could we
            ask for.
          </p>
        </blockquote>

        {/* Attribution */}
        <div className="flex items-center gap-3.5">
          <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-[#292d30]">
            <Image
              src="/images/guillermo-rauch.webp"
              alt="Guillermo Rauch"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-left">
            <p className="text-sm font-medium text-white">Guillermo Rauch</p>
            <p className="text-xs text-[#a1a4a5]">CEO at Vercel</p>
          </div>
        </div>
      </div>
    </section>
  );
}