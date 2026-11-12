"use client";

import React from "react";
import Link from "next/link";

export default function GoBeyondEditingSection() {
  return (
    <section className="mx-auto px-6 py-12 sm:py-24 max-w-5xl md:max-w-7xl">
      <h2 className="font-display effect-font-styling text-[3rem] md:text-[3.5rem] tracking-tighter leading-[120%] effect-font-gradient mb-3 text-center md:text-left">
        Go beyond editing
      </h2>
      <p className="text-base md:text-[1.125rem] md:leading-[1.5] text-[#a1a4a5] font-normal text-balance mb-12 text-center md:text-left">
        Group and control your contacts in a simple and intuitive way.{" "}
        <br className="hidden sm:block" />
        Straightforward analytics and reporting tools that will help you send
        better emails.
      </p>

      <div className="grid grid-cols-1 gap-12 md:gap-8 lg:grid-cols-2">
        {/* Left Card: Contact Management */}
        <div className="relative flex flex-col gap-4 rounded-3xl border border-b-0 border-[#292d30] pb-8 overflow-hidden bg-black/40">
          <div
            aria-hidden="true"
            className="left-1/2 top-0 w-[150px] center pointer-events-none absolute h-px max-w-full -translate-x-1/2 -translate-y-1/2 hidden dark:block"
            style={{
              background:
                "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.0) 0%, rgba(143, 143, 143, 0.67) 50%, rgba(0, 0, 0, 0) 100%)",
            }}
          />
          <div
            aria-hidden="true"
            className="dark:block hidden pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 50%, #000000 100%)",
            }}
          />
          <div className="relative z-10 h-[324px] overflow-hidden">
            <div className="pt-16 pl-12 pr-4">
              <img
                alt="Audiences Screenshot"
                loading="lazy"
                width={722}
                height={308}
                className="block w-full rounded-2xl"
                src="/images/screenshot-zoom-audience.webp"
              />
            </div>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-0 top-0 h-full w-full"
              style={{
                background:
                  "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 20%, rgba(0,0,0,0) 90%, rgba(0,0,0,0) 100%)",
              }}
            />
          </div>
          <div className="z-10 flex flex-col gap-4 pl-6 md:pl-10" style={{ maxWidth: "34ch" }}>
            <svg
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <path
                fill="currentColor"
                d="M11.996 9.5a2.78 2.78 0 0 1 2.778 2.777l-.014.285a2.775 2.775 0 0 1-2.679 2.489c2.432.037 4.567 1.663 5.81 4.11.324.636-.177 1.339-.89 1.339H6.991l-.13-.008c-.642-.08-1.063-.735-.76-1.33 1.244-2.45 3.38-4.076 5.814-4.111l-.202-.01a2.779 2.779 0 0 1 .283-5.541m0 7.55c-.727 0-1.47.234-2.158.7-.363.244-.157.75.28.75h3.755c.438 0 .644-.506.281-.75-.688-.466-1.431-.7-2.158-.7M7.944 9.055q.173 0 .343.012c.392.03.522.51.297.832a4.2 4.2 0 0 0-.543 1.088.1.1 0 0 1-.097.068c-.686 0-1.44.289-2.137.91-.22.197-.067.535.227.535h1.333c.266 0 .482.21.526.472q.064.37.187.715c.133.37-.116.813-.51.813H3.438c-.703 0-1.204-.683-.909-1.32 1.153-2.483 3.147-4.125 5.415-4.125m8.558 0c2.268 0 4.263 1.642 5.415 4.125.295.636-.207 1.32-.908 1.32H16.43c-.393 0-.642-.443-.51-.813a4 4 0 0 0 .188-.715c.044-.263.26-.472.526-.472h1.777c.294 0 .447-.338.228-.534-.698-.622-1.45-.911-2.137-.911h-.052a.64.64 0 0 1-.607-.38 4 4 0 0 0-.4-.738c-.207-.305-.101-.751.263-.814a4.7 4.7 0 0 1 .796-.068m-4.506 2.112a1.111 1.111 0 1 0 .002 2.222 1.111 1.111 0 0 0-.002-2.222M7.56 3.5a2.778 2.778 0 0 1 .283 5.541l-.283.015a2.78 2.78 0 0 1-2.764-2.494l-.015-.285A2.78 2.78 0 0 1 7.56 3.5m8.881 0a2.78 2.78 0 0 1 2.779 2.777l-.015.285a2.78 2.78 0 0 1-2.764 2.494l-.283-.015a2.779 2.779 0 0 1 .283-5.541M7.56 5.167a1.111 1.111 0 1 0 0 2.222 1.111 1.111 0 0 0 0-2.222m8.881 0a1.111 1.111 0 1 0 .002 2.222 1.111 1.111 0 0 0-.002-2.222"
              />
            </svg>
            <h2 className="font-display effect-font-styling text-xl leading-[130%] text-white">
              Contact management
            </h2>
            <p className="text-sm leading-[1.6] text-[#a1a4a5] font-normal">
              Import your list in minutes, regardless the size of your audience. Get
              full visibility of each contact and their personal attributes.
            </p>
            <a
              className="outline-hidden transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-[#3e4246] text-sm text-white hover:text-white/80"
              aria-label="Learn more about Contact management"
              href="https://resend.com/docs/dashboard/audiences/introduction"
            >
              Learn more
            </a>
          </div>
        </div>

        {/* Right Card: Broadcast Analytics */}
        <div className="relative flex flex-col gap-4 rounded-3xl border border-b-0 border-[#292d30] pb-8 overflow-hidden bg-black/40">
          <div
            aria-hidden="true"
            className="left-1/2 top-0 w-[150px] center pointer-events-none absolute h-px max-w-full -translate-x-1/2 -translate-y-1/2 hidden dark:block"
            style={{
              background:
                "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.0) 0%, rgba(143, 143, 143, 0.67) 50%, rgba(0, 0, 0, 0) 100%)",
            }}
          />
          <div
            aria-hidden="true"
            className="dark:block hidden pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 50%, #000000 100%)",
            }}
          />
          <div className="relative z-10 h-[324px] overflow-hidden">
            <div className="pt-16 pl-12 pr-4">
              <img
                alt="Illustration"
                loading="lazy"
                width={722}
                height={308}
                className="w-full rounded-2xl"
                src="/images/screenshot-zoom-analytics.webp"
              />
            </div>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-0 top-0 h-full w-full"
              style={{
                background:
                  "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 20%, rgba(0,0,0,0) 90%, rgba(0,0,0,0) 100%)",
              }}
            />
          </div>
          <div className="z-10 flex flex-col gap-4 pl-6 md:pl-10" style={{ maxWidth: "36ch" }}>
            <svg
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              style={{ width: "24px", height: "24px" }}
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <path
                fill="currentColor"
                d="M3 3a1 1 0 0 1 1 1v15a1 1 0 0 0 1 1h15a1 1 0 1 1 0 2H5a3 3 0 0 1-3-3V4a1 1 0 0 1 1-1m15.729 4.364a1 1 0 0 1 1.543 1.272l-5.043 6.124c-1.38 1.676-4.029 1.376-5-.566l-.255-.511a1 1 0 0 0-1.663-.194l-.542.652a1.001 1.001 0 0 1-1.538-1.282l.543-.65c1.385-1.662 4.02-1.356 4.988.58l.257.51a1 1 0 0 0 1.666.19z"
              />
            </svg>
            <h2 className="font-display effect-font-styling text-xl leading-[130%] text-white">
              Broadcast analytics
            </h2>
            <p className="text-sm leading-[1.6] text-[#a1a4a5] font-normal">
              Unlock powerful insights and understand exactly how your audience is
              interacting with your broadcast emails.
            </p>
            <a
              className="outline-hidden transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-[#3e4246] text-sm text-white hover:text-white/80"
              aria-label="Learn more about Broadcast analytics"
              href="https://resend.com/docs/dashboard/broadcasts/introduction"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
