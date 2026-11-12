import React from "react";
import Link from "next/link";

export default function FooterCTA() {
  return (
    <section className="mx-auto px-6 py-16 sm:py-28 relative max-w-5xl text-center md:max-w-7xl">
      <h2 className="effect-font-styling font-domaine text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] tracking-[-0.01em] leading-[105%] effect-font-gradient effect-font-hero mb-6 text-center pb-3">
        Email reimagined.
        <br />
        Available today.
      </h2>
      <div className="my-6 mb-16 flex flex-col justify-center items-center gap-4 sm:flex-row">
        <Link
          className="inline-flex h-11 items-center gap-2 rounded-full border border-[#292d30] bg-white/5 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors"
          href="/signup"
        >
          <span>Get started</span>
          <span className="text-[#70757E] transition-all opacity-100">
            <svg fill="none" height="14" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="currentColor"
                d="M9.20705 4.29295C8.81652 3.90243 8.18351 3.90243 7.79298 4.29295C7.40246 4.68348 7.40246 5.31649 7.79298 5.70702L13.3788 11.2929C13.7694 11.6834 13.7694 12.3166 13.3788 12.7071L7.79298 18.293C7.40246 18.6835 7.40246 19.3165 7.79298 19.707C8.18351 20.0975 8.81652 20.0975 9.20705 19.707L16.207 12.707C16.5976 12.3165 16.5976 11.6835 16.207 11.293L9.20705 4.29295Z"
              />
            </svg>
          </span>
        </Link>
      </div>
    </section>
  );
}
