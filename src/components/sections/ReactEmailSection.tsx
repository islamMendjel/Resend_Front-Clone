"use client";

import React, { useState } from "react";
import Link from "next/link";

interface CodeLine {
  num: number;
  content: React.ReactNode;
}

const welcomeEmailLines: CodeLine[] = [
  { num: 1, content: <><span className="text-[#6C6C6C]">import</span> <span className="text-[#A0A0A0]">&#123;</span></> },
  { num: 2, content: <>  <span className="text-[#EBECED]">Body</span><span className="text-[#A0A0A0]">,</span></> },
  { num: 3, content: <>  <span className="text-[#EBECED]">Button</span><span className="text-[#A0A0A0]">,</span></> },
  { num: 4, content: <>  <span className="text-[#EBECED]">Column</span><span className="text-[#A0A0A0]">,</span></> },
  { num: 5, content: <>  <span className="text-[#EBECED]">Container</span><span className="text-[#A0A0A0]">,</span></> },
  { num: 6, content: <>  <span className="text-[#EBECED]">Head</span><span className="text-[#A0A0A0]">,</span></> },
  { num: 7, content: <>  <span className="text-[#EBECED]">Heading</span><span className="text-[#A0A0A0]">,</span></> },
  { num: 8, content: <>  <span className="text-[#EBECED]">Hr</span><span className="text-[#A0A0A0]">,</span></> },
  { num: 9, content: <>  <span className="text-[#EBECED]">Html</span><span className="text-[#A0A0A0]">,</span></> },
  { num: 10, content: <>  <span className="text-[#EBECED]">Img</span><span className="text-[#A0A0A0]">,</span></> },
  { num: 11, content: <>  <span className="text-[#EBECED]">Link</span><span className="text-[#A0A0A0]">,</span></> },
  { num: 12, content: <>  <span className="text-[#EBECED]">Preview</span><span className="text-[#A0A0A0]">,</span></> },
  { num: 13, content: <>  <span className="text-[#EBECED]">Row</span><span className="text-[#A0A0A0]">,</span></> },
  { num: 14, content: <>  <span className="text-[#EBECED]">Section</span><span className="text-[#A0A0A0]">,</span></> },
  { num: 15, content: <>  <span className="text-[#EBECED]">Text</span><span className="text-[#A0A0A0]">,</span></> },
  { num: 16, content: <>  <span className="text-[#EBECED]">Tailwind</span><span className="text-[#A0A0A0]">,</span></> },
  { num: 17, content: <><span className="text-[#A0A0A0]">&#125;</span> <span className="text-[#6C6C6C]">from</span> <span className="text-[#ABABAB]">&apos;react-email&apos;</span><span className="text-[#A0A0A0]">;</span></> },
  { num: 18, content: <><span className="text-[#6C6C6C]">import</span> <span className="text-[#6C6C6C]">* as</span> <span className="text-[#EBECED]">React</span> <span className="text-[#6C6C6C]">from</span> <span className="text-[#ABABAB]">&apos;react&apos;</span><span className="text-[#A0A0A0]">;</span></> },
  { num: 19, content: null },
  { num: 20, content: <><span className="text-[#6C6C6C]">const</span> <span className="text-[#EBECED]">WelcomeEmail</span> = (<span className="text-[#A0A0A0]">&#123;</span></> },
  { num: 21, content: <>  username = <span className="text-[#ABABAB]">&apos;Steve&apos;</span><span className="text-[#A0A0A0]">,</span></> },
  { num: 22, content: <>  company = <span className="text-[#ABABAB]">&apos;ACME&apos;</span><span className="text-[#A0A0A0]">,</span></> },
  { num: 23, content: <><span className="text-[#A0A0A0]">&#125;</span>: <span className="text-[#EBECED]">WelcomeEmailProps</span>) =&gt; <span className="text-[#A0A0A0]">&#123;</span></> },
  { num: 24, content: <>  <span className="text-[#6C6C6C]">const</span> previewText = <span className="text-[#ABABAB]">`Welcome to $&#123;company&#125;, $&#123;username&#125;!`</span><span className="text-[#A0A0A0]">;</span></> },
  { num: 25, content: null },
  { num: 26, content: <>  <span className="text-[#6C6C6C]">return</span> (</> },
  { num: 27, content: <>    &lt;<span className="text-[#6C6C6C]">Html</span>&gt;</> },
  { num: 28, content: <>      &lt;<span className="text-[#6C6C6C]">Head</span> /&gt;</> },
  { num: 29, content: <>      &lt;<span className="text-[#6C6C6C]">Preview</span>&gt;<span className="text-[#A0A0A0]">&#123;</span>previewText<span className="text-[#A0A0A0]">&#125;</span>&lt;/<span className="text-[#6C6C6C]">Preview</span>&gt;</> },
  { num: 30, content: <>      &lt;<span className="text-[#6C6C6C]">Tailwind</span>&gt;</> },
  { num: 31, content: <>        &lt;<span className="text-[#6C6C6C]">Body</span> <span className="text-[#ABABAB]">className</span>=<span className="text-[#ABABAB]">&quot;bg-white my-auto mx-auto font-sans&quot;</span>&gt;</> },
  { num: 32, content: <>          &lt;<span className="text-[#6C6C6C]">Container</span> <span className="text-[#ABABAB]">className</span>=<span className="text-[#ABABAB]">&quot;my-10 mx-auto p-5 w-[465px]&quot;</span>&gt;</> },
  { num: 33, content: <>            &lt;<span className="text-[#6C6C6C]">Section</span> <span className="text-[#ABABAB]">className</span>=<span className="text-[#ABABAB]">&quot;mt-8&quot;</span>&gt;</> },
  { num: 34, content: <>              &lt;<span className="text-[#6C6C6C]">Img</span></> },
  { num: 35, content: <>                <span className="text-[#ABABAB]">src</span>=<span className="text-[#A0A0A0]">&#123;</span><span className="text-[#ABABAB]">`$&#123;baseUrl&#125;/images/example-logo.png`</span><span className="text-[#A0A0A0]">&#125;</span></> },
  { num: 36, content: <>                <span className="text-[#ABABAB]">width</span>=<span className="text-[#ABABAB]">&quot;80&quot;</span> <span className="text-[#ABABAB]">height</span>=<span className="text-[#ABABAB]">&quot;80&quot;</span></> },
  { num: 37, content: <>                <span className="text-[#ABABAB]">alt</span>=<span className="text-[#ABABAB]">&quot;Logo Example&quot;</span></> },
  { num: 38, content: <>                <span className="text-[#ABABAB]">className</span>=<span className="text-[#ABABAB]">&quot;my-0 mx-auto&quot;</span></> },
];

const resetPasswordLines: CodeLine[] = [
  { num: 1, content: <><span className="text-[#6C6C6C]">import</span> <span className="text-[#A0A0A0]">&#123;</span> <span className="text-[#EBECED]">Html, Head, Body, Container, Section, Text, Button</span> <span className="text-[#A0A0A0]">&#125;</span> <span className="text-[#6C6C6C]">from</span> <span className="text-[#ABABAB]">&apos;react-email&apos;</span><span className="text-[#A0A0A0]">;</span></> },
  { num: 2, content: <><span className="text-[#6C6C6C]">import</span> <span className="text-[#6C6C6C]">* as</span> <span className="text-[#EBECED]">React</span> <span className="text-[#6C6C6C]">from</span> <span className="text-[#ABABAB]">&apos;react&apos;</span><span className="text-[#A0A0A0]">;</span></> },
  { num: 3, content: null },
  { num: 4, content: <><span className="text-[#6C6C6C]">export const</span> <span className="text-[#EBECED]">ResetPasswordEmail</span> = () =&gt; (</> },
  { num: 5, content: <>  &lt;<span className="text-[#6C6C6C]">Html</span>&gt;</> },
  { num: 6, content: <>    &lt;<span className="text-[#6C6C6C]">Body</span> <span className="text-[#ABABAB]">className</span>=<span className="text-[#ABABAB]">&quot;bg-white font-sans&quot;</span>&gt;</> },
  { num: 7, content: <>      &lt;<span className="text-[#6C6C6C]">Container</span> <span className="text-[#ABABAB]">className</span>=<span className="text-[#ABABAB]">&quot;p-6 max-w-[480px] mx-auto&quot;</span>&gt;</> },
  { num: 8, content: <>        &lt;<span className="text-[#6C6C6C]">Text</span> <span className="text-[#ABABAB]">className</span>=<span className="text-[#ABABAB]">&quot;text-lg font-bold&quot;</span>&gt;Reset your password&lt;/<span className="text-[#6C6C6C]">Text</span>&gt;</> },
  { num: 9, content: <>        &lt;<span className="text-[#6C6C6C]">Text</span>&gt;Click the button below to reset your password.&lt;/<span className="text-[#6C6C6C]">Text</span>&gt;</> },
  { num: 10, content: <>        &lt;<span className="text-[#6C6C6C]">Button</span> <span className="text-[#ABABAB]">className</span>=<span className="text-[#ABABAB]">&quot;bg-black text-white px-4 py-2 rounded&quot;</span> <span className="text-[#ABABAB]">href</span>=<span className="text-[#ABABAB]">&quot;#&quot;</span>&gt;Reset Password&lt;/<span className="text-[#6C6C6C]">Button</span>&gt;</> },
  { num: 11, content: <>      &lt;/<span className="text-[#6C6C6C]">Container</span>&gt;</> },
  { num: 12, content: <>    &lt;/<span className="text-[#6C6C6C]">Body</span>&gt;</> },
  { num: 13, content: <>  &lt;/<span className="text-[#6C6C6C]">Html</span>&gt;</> },
  { num: 14, content: <>);</> },
];

export default function ReactEmailSection() {
  const [activeFile, setActiveFile] = useState("user-welcome.tsx");
  const [deviceMode, setDeviceMode] = useState<"desktop" | "mobile">("desktop");
  const [appearanceMode, setAppearanceMode] = useState<"dark" | "light">("dark");

  const files = [
    "user-welcome.tsx",
    "reset-password.tsx",
    "user-invite.tsx",
    "weekly-digest.tsx",
  ];

  const currentLines = activeFile === "reset-password.tsx" ? resetPasswordLines : welcomeEmailLines;

  return (
    <section className="mx-auto px-6 py-12 sm:py-24 max-w-5xl md:max-w-7xl">
      {/* 3D React Icon Loop */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="mx-auto mb-4 mix-blend-screen"
        height={170}
        width={170}
        poster="/media/3d-react-fallback.jpg"
      >
        <source src="/media/3d-react.mp4" type="video/mp4" />
      </video>

      {/* Heading */}
      <h2 className="font-display effect-font-styling text-[3rem] md:text-[3.5rem] tracking-tighter leading-[120%] effect-font-gradient mb-2 text-center">
        Develop emails using React
      </h2>
      <p className="text-base md:text-[1.125rem] md:leading-[1.5] text-[#a1a4a5] font-normal text-balance text-center">
        Create beautiful templates without having to deal with &lt;table&gt; layouts and HTML.{" "}
        <br className="hidden sm:block" />
        Powered by react-email, our open source component library.
      </p>

      {/* CTAs */}
      <div className="mx-auto my-8 flex flex-col justify-center gap-4 px-10 sm:max-w-none sm:flex-row sm:px-0 md:mb-16">
        <Link
          className="inline-flex h-10 items-center gap-2 rounded-full border border-[#292d30] bg-white/5 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition-colors"
          href="/signup"
        >
          <span>Get started</span>
          <svg fill="none" height="14" viewBox="0 0 24 24" width="14" className="text-[#70757E]" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="currentColor"
              d="M9.20705 4.29295C8.81652 3.90243 8.18351 3.90243 7.79298 4.29295C7.40246 4.68348 7.40246 5.31649 7.79298 5.70702L13.3788 11.2929C13.7694 11.6834 13.7694 12.3166 13.3788 12.7071L7.79298 18.293C7.40246 18.6835 7.40246 19.3165 7.79298 19.707C8.18351 20.0975 8.81652 20.0975 9.20705 19.707L16.207 12.707C16.5976 12.3165 16.5976 11.6835 16.207 11.293L9.20705 4.29295Z"
            />
          </svg>
        </Link>
        <a
          className="inline-flex h-10 items-center justify-center rounded-lg border border-transparent bg-transparent px-4 text-sm font-medium text-[#a1a4a5] hover:text-white transition-colors gap-1.5"
          href="https://react.email/docs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Check the docs</span>
          <svg fill="none" height="14" viewBox="0 0 24 24" width="14" className="text-[#70757E]" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="currentColor"
              d="M9.20705 4.29295C8.81652 3.90243 8.18351 3.90243 7.79298 4.29295C7.40246 4.68348 7.40246 5.31649 7.79298 5.70702L13.3788 11.2929C13.7694 11.6834 13.7694 12.3166 13.3788 12.7071L7.79298 18.293C7.40246 18.6835 7.40246 19.3165 7.79298 19.707C8.18351 20.0975 8.81652 20.0975 9.20705 19.707L16.207 12.707C16.5976 12.3165 16.5976 11.6835 16.207 11.293L9.20705 4.29295Z"
            />
          </svg>
        </a>
      </div>

      {/* Editor Showcase Container */}
      <div className="rounded-3xl border border-[#292d30] overflow-hidden bg-[#050505]">
        {/* Top Header Controls */}
        <header className="flex h-12 items-center justify-end border-b border-[#292d30] px-4 bg-[#0a0a0a]">
          {/* Device & Appearance Switches */}
          <div className="flex items-center gap-2">
            {/* Desktop / Mobile Switch */}
            <div className="hidden sm:flex items-center rounded-lg border border-[#292d30] p-0.5 bg-black/40">
              <button
                type="button"
                onClick={() => setDeviceMode("desktop")}
                className={`inline-flex h-7 w-7 items-center justify-center rounded-md transition-colors ${
                  deviceMode === "desktop" ? "bg-[#292d30] text-white" : "text-[#70757E] hover:text-white"
                }`}
                title="Desktop View"
              >
                <svg fill="none" height="15" viewBox="0 0 24 24" width="15" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="currentColor"
                    d="M18.154 3.004A3 3 0 0 1 21 6v8l-.004.154a3 3 0 0 1-2.842 2.842L18 17h-4.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.5a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2h.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H6a3 3 0 0 1-2.996-2.846L3 14V6a3 3 0 0 1 3-3h12zM6 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"
                  />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => setDeviceMode("mobile")}
                className={`inline-flex h-7 w-7 items-center justify-center rounded-md transition-colors ${
                  deviceMode === "mobile" ? "bg-[#292d30] text-white" : "text-[#70757E] hover:text-white"
                }`}
                title="Mobile View"
              >
                <svg fill="none" height="15" viewBox="0 0 24 24" width="15" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="currentColor"
                    d="M16.154 2.004A3 3 0 0 1 19 5v14l-.004.154a3 3 0 0 1-2.842 2.842L16 22H8a3 3 0 0 1-2.996-2.846L5 19V5a3 3 0 0 1 2.846-2.996L8 2h8zM8 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm4 11a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
                  />
                </svg>
              </button>
            </div>

            {/* Dark / Light Mode Switch */}
            <div className="hidden sm:flex items-center rounded-lg border border-[#292d30] p-0.5 bg-black/40">
              <button
                type="button"
                onClick={() => setAppearanceMode("dark")}
                className={`inline-flex h-7 w-7 items-center justify-center rounded-md transition-colors ${
                  appearanceMode === "dark" ? "bg-[#292d30] text-white" : "text-[#70757E] hover:text-white"
                }`}
                title="Dark Theme"
              >
                <svg fill="none" height="15" viewBox="0 0 24 24" width="15" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="currentColor"
                    d="M7.2 5.8v-.3a8 8 0 0 0 5 14.3l-.5 1 .5 1h-.5a10 10 0 0 1-9.4-9.5v-.5A10 10 0 0 1 9 2.3q.7-.2.6.6l-.1.4-.4 2.5v.4a9 9 0 0 0 8.6 8.5h.4q1.5 0 2.9-.4.8 0 .6.6l-.1.4a10 10 0 0 1-9.4 6.5l-.5-1 .5-1a8 8 0 0 0 6.3-3h-.3c-6 0-11-5-11-11"
                  />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => setAppearanceMode("light")}
                className={`inline-flex h-7 w-7 items-center justify-center rounded-md transition-colors ${
                  appearanceMode === "light" ? "bg-[#292d30] text-white" : "text-[#70757E] hover:text-white"
                }`}
                title="Light Theme"
              >
                <svg fill="none" height="15" viewBox="0 0 24 24" width="15" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="currentColor"
                    d="M12 18a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1m-5.655-1.754a1 1 0 1 1 1.414 1.414l-1.414 1.414A1 1 0 1 1 4.93 17.66zm9.9 0a1 1 0 0 1 1.413 0l1.414 1.414a1 1 0 1 1-1.414 1.414l-1.414-1.414a1 1 0 0 1 0-1.414M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-6.995.995a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2zm16 0a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2zM4.93 4.933a1 1 0 0 1 1.414 0l1.414 1.414A1 1 0 1 1 6.345 7.76L4.93 6.347a1 1 0 0 1 0-1.414m12.727 0a1 1 0 1 1 1.414 1.414L17.658 7.76a1 1 0 1 1-1.414-1.414zM12 2a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1"
                  />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Body Split */}
        <div className="flex w-full flex-col md:flex-row">
          {/* Left File Sidebar */}
          <aside className="w-full shrink-0 border-b border-[#292d30] p-3 md:w-52 md:border-b-0 md:border-r bg-[#070707]">
            <div className="flex gap-1 md:flex-col">
              {files.map((file) => {
                const isActive = activeFile === file;
                return (
                  <button
                    key={file}
                    type="button"
                    onClick={() => setActiveFile(file)}
                    className={`flex items-center gap-2 rounded-md px-2.5 py-1.5 text-xs font-mono transition-colors text-left w-full ${
                      isActive
                        ? "bg-[#18181b] text-white font-medium"
                        : "text-[#70757E] hover:bg-[#121214] hover:text-[#d4d4d8]"
                    }`}
                  >
                    <svg
                      viewBox="-11.5 -10.232 23 20.463"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5 shrink-0 text-[#3b9eff]"
                    >
                      <circle cx="0" cy="0" r="2.05" fill="currentColor" />
                      <g stroke="currentColor" strokeWidth="1" fill="none">
                        <ellipse rx="11" ry="4.2" />
                        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                      </g>
                    </svg>
                    <span>{file}</span>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* Code Pane */}
          <div className="flex-1 min-w-0 border-b border-[#292d30] md:border-b-0 md:border-r bg-black [scrollbar-width:none] [&::-webkit-scrollbar]:hidden overflow-x-auto">
            <div className="py-4 pr-4">
              {currentLines.map((line) => (
                <div key={line.num} className="flex items-baseline gap-4 leading-6 font-mono text-xs hover:bg-white/[0.02]">
                  <span className="w-7 shrink-0 select-none text-right text-[#464a4d] font-mono text-xs">
                    {line.num}
                  </span>
                  <div className="flex-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden whitespace-pre">
                    {line.content || "\u00A0"}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Live Email Preview */}
          <div className="w-full md:w-[460px] shrink-0 p-6 flex items-center justify-center bg-black/60">
            <div
              className={`w-full rounded-2xl p-6 transition-all duration-300 ${
                appearanceMode === "light"
                  ? "bg-white text-black"
                  : "bg-[#0b0c0e] border border-[#292d30] text-white"
              } ${deviceMode === "mobile" ? "max-w-[340px]" : "max-w-[420px]"}`}
              style={{
                backgroundImage:
                  appearanceMode === "dark"
                    ? "radial-gradient(100% 50% at 50% 0%, rgba(0, 163, 255, 0.12) 0%, rgba(0, 163, 255, 0) 60%)"
                    : "none",
              }}
            >
              {/* Logo */}
              <div className="mt-4 mb-6 flex justify-center">
                <img
                  alt="Logo Example"
                  width={64}
                  height={64}
                  className="rounded-xl border border-black/10 dark:border-white/10"
                  src="/images/example-logo.png"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-medium text-center mb-3">
                Welcome to <strong className="font-semibold">ACME</strong>, user!
              </h3>

              {/* Body */}
              <div className={`space-y-3 text-xs leading-relaxed ${appearanceMode === "light" ? "text-gray-700" : "text-[#a1a4a5]"}`}>
                <p>Hello Steve,</p>
                <p>
                  We&apos;re excited to have you onboard at <strong className={appearanceMode === "light" ? "text-black" : "text-white"}>ACME</strong>. We hope you enjoy your journey with us. If you have any questions or need assistance, feel free to reach out.
                </p>
              </div>

              {/* CTA Button */}
              <div className="my-6 text-center">
                <a
                  href="#get-started"
                  className="inline-block rounded-md bg-[#00A3FF] px-5 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-[#0092e6] transition-colors"
                >
                  Get Started
                </a>
              </div>

              {/* Signoff */}
              <div className={`text-xs ${appearanceMode === "light" ? "text-gray-700" : "text-[#a1a4a5]"}`}>
                <p>Cheers,</p>
                <p>The ACME Team</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
