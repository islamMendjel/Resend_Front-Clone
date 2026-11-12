"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 transition duration-200 ease-in-out header-texture bg-black/75 backdrop-blur-md border-b border-white/[0.06]">
      <div className="mx-auto w-full max-w-5xl px-6 md:max-w-7xl relative z-10">
        {/* Mobile Header bar */}
        <div className="absolute left-0 top-0 z-20 flex w-full flex-col items-center md:hidden bg-black/90 backdrop-blur-md">
          <div className="flex w-full items-center px-6 py-4">
            <div className="flex-auto">
              <Link
                className="outline-hidden transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-[#3e4246]"
                href="/"
                aria-label="Resend"
              >
                <svg
                  role="img"
                  aria-label="Resend"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 377 81"
                  fill="none"
                  width="80"
                  className="text-white"
                >
                  <path
                    fill="currentColor"
                    d="M103.704 22.537c17.023 0 29.411 11.829 28.532 33.327H90.781c1.548 5.975 5.684 11.109 13.963 11.109 4.635 0 8.871-1.279 12.068-5.275h14.306l-.241 1.279C128.4 73.926 115.932 80 104.744 80c-17.743 0-29.65-11.988-29.65-28.691 0-16.704 11.907-28.772 28.61-28.772Zm119.96 0c17.103 0 29.411 11.829 28.612 33.327H210.81c1.529 5.975 5.635 11.109 13.974 11.109 4.635 0 8.871-1.279 11.988-5.275h14.386l-.241 1.279C248.44 73.926 235.972 80 224.784 80c-17.743 0-29.651-11.988-29.651-28.691 0-16.704 11.908-28.772 28.531-28.772Zm-60.978-.32c12.627 0 23.736 4.556 26.933 15.745l.32 1.2h-15.744c-3.357-4.157-7.833-4.717-11.509-4.717-3.437 0-8.871.88-8.871 4.237 0 3.116 3.596 4.155 6.713 4.554l9.111.96c14.465 1.278 20.859 6.953 20.859 18.062 0 12.787-12.707 17.582-25.254 17.582-12.548 0-25.576-5.594-28.053-16.943l-.239-1.199h16.143c2.237 6.392 12.542 5.915 12.149 5.914 6.073 0 9.829-1.838 9.83-4.795 0-1.918-.64-4.156-6.873-4.955l-9.511-.959c-12.548-.879-20.14-7.512-20.14-17.422 0-12.148 11.509-17.263 24.136-17.263Zm214.185 56.184h-15.504l.799-7.752c-2.157 4.636-9.111 9.19-17.822 9.19-14.385 0-26.054-11.028-26.054-28.45 0-17.423 11.509-28.452 26.054-28.452 7.912 0 12.787 2.557 17.103 6.953V0h15.424v78.401ZM48.081 0c15.184 0 24.215 9.03 24.215 21.019 0 11.988-9.03 21.019-24.216 21.02h-7.672L78.53 78.4H51.597L22.587 50.83c-2.079-1.918-3.038-4.156-3.038-6.074 0-2.717 1.918-5.114 5.594-6.153l14.945-3.996c5.674-1.519 9.59-5.915 9.591-11.669 0-7.032-5.754-11.109-12.867-11.109H.128V0H48.08Zm241.677 22.617c13.587 0 23.098 9.91 23.098 24.056V78.4h-15.505v-29.09c0-7.992-4.236-12.788-11.748-12.788-7.513 0-12.388 4.955-12.388 12.787v29.091h-15.184V23.736h15.423l-.718 8.711c2.238-4.395 9.19-9.83 17.022-9.83Zm58.262 13.906c-9.35 0-14.306 6.954-14.306 14.866 0 8.471 5.595 14.945 14.306 14.945 8.391 0 13.826-6.554 13.826-14.945 0-8.392-5.275-14.866-13.826-14.866Zm-244.316-1.598c-7.554 0-11.871 4.512-13.21 10.55h26.148a24.052 24.052 0 0 0-.63-2.239c-1.918-5.434-6.394-8.311-12.308-8.311Zm119.96 0c-7.489 0-11.793 4.512-13.13 10.55h26.148a24.052 24.052 0 0 0-.63-2.239c-1.918-5.434-6.394-8.311-12.388-8.311Z"
                  />
                </svg>
              </Link>
            </div>
            <div className="flex flex-auto justify-end">
              <button
                aria-controls="mobile-menu"
                aria-expanded={mobileMenuOpen}
                aria-label="menu"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="-mr-2 inline-flex items-center justify-center rounded-md p-3 text-[#a1a4a5] transition ease-in-out hover:bg-white/5 hover:text-white focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#3e4246]"
                type="button"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block"
                  fill="none"
                  height="20"
                  viewBox="0 0 24 24"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d={
                      mobileMenuOpen
                        ? "M18.3 5.71a1 1 0 0 0-1.42-1.42L12 9.17 7.12 4.29a1 1 0 0 0-1.42 1.42L10.59 12l-4.89 4.88a1 1 0 0 0 1.42 1.42L12 14.83l4.88 4.89a1 1 0 0 0 1.42-1.42L13.41 12l4.89-4.89z"
                        : "M21 18a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zm0-7a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zm0-7a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2z"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile drawer */}
          {mobileMenuOpen && (
            <div className="w-full px-6 pb-6 pt-2 flex flex-col gap-4 border-b border-[#292d30] animate-in fade-in slide-in-from-top-2 duration-200">
              <nav className="flex flex-col gap-2">
                <Link
                  href="/features"
                  className="px-2 py-2 text-sm font-medium text-[#f0f0f0] hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Features
                </Link>
                <Link
                  href="/company"
                  className="px-2 py-2 text-sm font-medium text-[#f0f0f0] hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Company
                </Link>
                <Link
                  href="/enterprise"
                  className="px-2 py-2 text-sm font-medium text-[#f0f0f0] hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Enterprise
                </Link>
                <Link
                  href="/help"
                  className="px-2 py-2 text-sm font-medium text-[#f0f0f0] hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Help
                </Link>
                <Link
                  href="/docs"
                  className="px-2 py-2 text-sm font-medium text-[#f0f0f0] hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Docs
                </Link>
                <Link
                  href="/ai"
                  className="px-2 py-2 text-sm font-medium text-[#f0f0f0] hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  AI
                </Link>
                <Link
                  href="/pricing"
                  className="px-2 py-2 text-sm font-medium text-[#f0f0f0] hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pricing
                </Link>
              </nav>
              <div className="flex flex-col gap-3 pt-3 border-t border-[#292d30]">
                <Link
                  href="/login"
                  className="flex items-center justify-center rounded-xl h-10 text-sm font-semibold text-[#a1a4a5] hover:text-white transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  className="button-texture flex items-center justify-center rounded-2xl h-10 text-sm font-semibold text-white border-[2px] border-white/5 backdrop-blur-[25px] bg-[linear-gradient(104deg,rgba(253,253,253,0.05)_5%,rgba(240,240,228,0.1)_100%)] hover:bg-white hover:text-black transition duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="relative z-10">Get started</span>
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Desktop Header bar */}
        <div className="mx-auto hidden h-[58px] w-full items-center transition duration-500 ease-in-out md:flex">
          <div className="flex flex-1 lg:w-[225px]">
            <div style={{ WebkitTouchCallout: "none" }}>
              <Link
                className="outline-hidden transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-[#3e4246] py-1"
                aria-label="Resend"
                href="/"
              >
                <svg
                  role="img"
                  aria-label="Resend"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 377 81"
                  fill="none"
                  width="80"
                  className="text-white hover:opacity-90 transition-opacity"
                >
                  <path
                    fill="currentColor"
                    d="M103.704 22.537c17.023 0 29.411 11.829 28.532 33.327H90.781c1.548 5.975 5.684 11.109 13.963 11.109 4.635 0 8.871-1.279 12.068-5.275h14.306l-.241 1.279C128.4 73.926 115.932 80 104.744 80c-17.743 0-29.65-11.988-29.65-28.691 0-16.704 11.907-28.772 28.61-28.772Zm119.96 0c17.103 0 29.411 11.829 28.612 33.327H210.81c1.529 5.975 5.635 11.109 13.974 11.109 4.635 0 8.871-1.279 11.988-5.275h14.386l-.241 1.279C248.44 73.926 235.972 80 224.784 80c-17.743 0-29.651-11.988-29.651-28.691 0-16.704 11.908-28.772 28.531-28.772Zm-60.978-.32c12.627 0 23.736 4.556 26.933 15.745l.32 1.2h-15.744c-3.357-4.157-7.833-4.717-11.509-4.717-3.437 0-8.871.88-8.871 4.237 0 3.116 3.596 4.155 6.713 4.554l9.111.96c14.465 1.278 20.859 6.953 20.859 18.062 0 12.787-12.707 17.582-25.254 17.582-12.548 0-25.576-5.594-28.053-16.943l-.239-1.199h16.143c2.237 6.392 12.542 5.915 12.149 5.914 6.073 0 9.829-1.838 9.83-4.795 0-1.918-.64-4.156-6.873-4.955l-9.511-.959c-12.548-.879-20.14-7.512-20.14-17.422 0-12.148 11.509-17.263 24.136-17.263Zm214.185 56.184h-15.504l.799-7.752c-2.157 4.636-9.111 9.19-17.822 9.19-14.385 0-26.054-11.028-26.054-28.45 0-17.423 11.509-28.452 26.054-28.452 7.912 0 12.787 2.557 17.103 6.953V0h15.424v78.401ZM48.081 0c15.184 0 24.215 9.03 24.215 21.019 0 11.988-9.03 21.019-24.216 21.02h-7.672L78.53 78.4H51.597L22.587 50.83c-2.079-1.918-3.038-4.156-3.038-6.074 0-2.717 1.918-5.114 5.594-6.153l14.945-3.996c5.674-1.519 9.59-5.915 9.591-11.669 0-7.032-5.754-11.109-12.867-11.109H.128V0H48.08Zm241.677 22.617c13.587 0 23.098 9.91 23.098 24.056V78.4h-15.505v-29.09c0-7.992-4.236-12.788-11.748-12.788-7.513 0-12.388 4.955-12.388 12.787v29.091h-15.184V23.736h15.423l-.718 8.711c2.238-4.395 9.19-9.83 17.022-9.83Zm58.262 13.906c-9.35 0-14.306 6.954-14.306 14.866 0 8.471 5.595 14.945 14.306 14.945 8.391 0 13.826-6.554 13.826-14.945 0-8.392-5.275-14.866-13.826-14.866Zm-244.316-1.598c-7.554 0-11.871 4.512-13.21 10.55h26.148a24.052 24.052 0 0 0-.63-2.239c-1.918-5.434-6.394-8.311-12.308-8.311Zm119.96 0c-7.489 0-11.793 4.512-13.13 10.55h26.148a24.052 24.052 0 0 0-.63-2.239c-1.918-5.434-6.394-8.311-12.388-8.311Z"
                  />
                </svg>
              </Link>
            </div>
          </div>

          <ul className="flex items-center">
            {["Features", "Company", "Enterprise", "Help", "Docs", "AI"].map((item) => (
              <li key={item}>
                <button
                  type="button"
                  className="h-[58px] flex items-center px-1 py-1 text-sm font-normal text-[#a1a4a5] hover:text-[#f0f0f0] transition-colors duration-150 lg:px-3 group select-none gap-1.5 outline-hidden focus-visible:ring-2 focus-visible:ring-[#3e4246]"
                >
                  {item}
                  <svg
                    className="opacity-70 -ml-0.5 transition-transform duration-200 ease-in group-hover:translate-y-0.5"
                    fill="none"
                    height="14"
                    viewBox="0 0 24 24"
                    width="14"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M19.7071 9.20698C20.0976 8.81646 20.0976 8.18345 19.7071 7.79292C19.3166 7.4024 18.6836 7.4024 18.293 7.79292L12.7072 13.3788C12.3167 13.7693 11.6835 13.7693 11.293 13.3788L5.70711 7.79292C5.31658 7.4024 4.68357 7.4024 4.29304 7.79292C3.90252 8.18345 3.90252 8.81646 4.29304 9.20698L11.293 16.207C11.6836 16.5975 12.3166 16.5975 12.7071 16.207L19.7071 9.20698Z"
                    />
                  </svg>
                </button>
              </li>
            ))}
            <li>
              <Link
                className="outline-hidden transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-[#3e4246] h-[58px] flex items-center px-2 py-1 text-sm font-normal text-[#a1a4a5] hover:text-[#f0f0f0] lg:px-4"
                href="/pricing"
              >
                Pricing
              </Link>
            </li>
          </ul>

          <div className="flex flex-1 justify-end items-center gap-3">
            <Link
              className="outline-hidden relative items-center justify-center select-none rounded-2xl transition ease-in-out duration-200 bg-transparent text-[#a1a4a5] hover:text-white focus-visible:ring-4 focus-visible:ring-white/10 text-sm h-10 px-4 font-medium hidden whitespace-nowrap lg:flex"
              href="/login"
            >
              Log in
            </Link>
            <Link
              className="button-texture outline-hidden relative inline-flex items-center justify-center select-none rounded-2xl ease-in-out text-white border-[2px] border-white/5 backdrop-blur-[25px] bg-[linear-gradient(104deg,rgba(253,253,253,0.05)_5%,rgba(240,240,228,0.1)_100%)] shadow-sm hover:bg-white/90 hover:text-black transition-all duration-200 focus-visible:ring-4 focus-visible:ring-white/30 text-sm h-10 px-4 font-semibold whitespace-nowrap group"
              href="/signup"
            >
              <span className="relative z-10">Get started</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
