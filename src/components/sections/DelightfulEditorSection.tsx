"use client";

import React from "react";

export default function DelightfulEditorSection() {
  return (
    <section className="mx-auto px-6 py-12 sm:py-24 max-w-5xl md:max-w-7xl">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="mx-auto mb-4 mix-blend-screen"
        height={170}
        width={170}
        poster="/media/3d-broadcast-fallback.jpg"
      >
        <source src="/media/3d-broadcast.mp4" type="video/mp4" />
      </video>

      <h2 className="font-display effect-font-styling text-[3rem] md:text-[3.5rem] tracking-tighter leading-[120%] effect-font-gradient mb-2 text-center">
        Write using a delightful editor
      </h2>
      <p className="text-base md:text-[1.125rem] md:leading-[1.5] text-[#a1a4a5] font-normal text-balance text-center">
        A modern editor that makes it easy for anyone to write, format, and send
        emails. <br className="hidden sm:block" />
        Visually build your email and change the design by adding custom styles.
      </p>

      <div className="w-full max-w-5xl mx-auto mt-16" data-nosnippet="true">
        {/* Main Editor Window Shell */}
        <div
          className="relative rounded-2xl border border-[#292d30] overflow-hidden"
          style={{
            background:
              "radial-gradient(50% 12% at 50% 0%, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(180deg, #101010 0%, #000000 100%)",
          }}
        >
          {/* Subtle Accent Glow Hairlines */}
          <div
            aria-hidden="true"
            className="absolute top-0 left-1/2 h-px w-[300px] -translate-x-1/2 pointer-events-none blur-[3px] md:w-[600px]"
            style={{
              background:
                "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #FFF 50%, rgba(255, 255, 255, 0) 100%)",
            }}
          ></div>
          <div
            aria-hidden="true"
            className="absolute top-0 left-1/2 h-px w-[300px] -translate-x-1/2 pointer-events-none opacity-80 md:w-[600px]"
            style={{
              background:
                "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #9B7CFF 50%, rgba(255, 255, 255, 0) 100%)",
            }}
          ></div>

          {/* Top Window Bar */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-[#292d30] bg-[#0a0a0a] text-xs text-[#a1a4a5]">
            <button className="flex items-center gap-1.5 rounded-md border border-[#292d30] bg-[#141414] px-2.5 py-1 text-xs text-[#f0f0f0] hover:bg-[#1a1a1a] transition-colors">
              <svg
                fill="none"
                height="14"
                viewBox="0 0 24 24"
                width="14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M8.1 2.293a1 1 0 0 1 1.414 0l2.225 2.225h.002l7.034 7.034a1 1 0 0 1 0 1.414l-8.327 8.327a1 1 0 0 1-1.414 0l-6.327-6.328a1 1 0 0 1 0-1.414L9.618 6.64a1 1 0 0 0 0-1.415L8.1 3.707a1 1 0 0 1 0-1.414M20.734 16.58q.466.67.874 1.37.408.698.409 1.485l-.012.264a2.43 2.43 0 0 1-.746 1.557 2.5 2.5 0 0 1-1.806.743l-.258-.012a2.35 2.35 0 0 1-1.333-.556l-.186-.175a2.47 2.47 0 0 1-.717-1.557l-.012-.264q0-.687.3-1.31l.094-.176q.294-.525.647-1.032l.241-.337.453-.582a1 1 0 0 1 1.564-.017zm-.518 2.158c-.339-.58-1.152-.589-1.48-.005a1.4 1.4 0 0 0-.19.702c0 .317.092.516.272.7a.8.8 0 0 0 .635.264.9.9 0 0 0 .686-.285.86.86 0 0 0 .278-.679c0-.232-.057-.45-.19-.68zm-12.232-3.74c-.89 0-1.337 1.078-.707 1.708l1.757 1.757a1 1 0 0 0 1.414 0l1.757-1.757c.63-.63.184-1.707-.707-1.707zm-.191-3.706c-.63.63-.184 1.707.707 1.707h7.105a.741.741 0 0 0 .524-1.265l-4.01-4.011-.02-.017a.51.51 0 0 0-.72 0z"
                ></path>
              </svg>
              Styles
            </button>

            <span className="text-[#a1a4a5] font-medium hidden sm:block">
              Weekly Acme Newsletter
            </span>

            <div className="flex items-center gap-3">
              <span className="hidden md:flex items-center gap-1.5 text-[#70757e]">
                <svg
                  fill="none"
                  height="14"
                  viewBox="0 0 24 24"
                  width="14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M12.001 2c5.522 0 10 4.477 10 10s-4.478 10-10 10-10-4.477-10-10 4.477-10 10-10m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16M12 7a1 1 0 0 1 1 1v3.227a.5.5 0 0 0 .21.407l2.871 2.053a1 1 0 1 1-1.162 1.627l-3.291-2.351a1.5 1.5 0 0 1-.628-1.22V8a1 1 0 0 1 1-1"
                  ></path>
                </svg>
                a day ago
              </span>
              <button className="rounded-md border border-[#292d30] px-3 py-1 bg-black text-[#f0f0f0] hover:border-white/30 transition-colors">
                Test
              </button>
              <button className="rounded-md px-3.5 py-1 border border-white bg-white text-black font-semibold hover:bg-white/90 transition-colors">
                Send
              </button>
            </div>
          </div>

          {/* Email Canvas Preview Card */}
          <div className="w-full md:w-[72%] max-w-3xl mx-auto mt-6 md:mt-8 rounded-t-2xl border border-b-0 border-[#292d30] bg-black overflow-hidden shadow-2xl">
            {/* Metadata Rows */}
            <div className="px-6 py-2 bg-[#050505]">
              <div className="flex items-center gap-6 py-2.5 border-b border-[#292d30] text-sm">
                <span className="inline-block w-24 shrink-0 text-[#a1a4a5]" style={{ minWidth: "6rem", display: "inline-block" }}>From</span>
                <span className="text-[#f0f0f0]">
                  your.name@acme.com
                </span>
              </div>
              <div className="flex items-center gap-6 py-2.5 border-b border-[#292d30] text-sm">
                <span className="inline-block w-24 shrink-0 text-[#a1a4a5]" style={{ minWidth: "6rem", display: "inline-block" }}>To</span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#292d30] bg-[#141414] px-2.5 py-0.5 text-xs text-[#f0f0f0]">
                  <svg
                    fill="none"
                    height="14"
                    viewBox="0 0 24 24"
                    width="14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"
                    ></path>
                  </svg>
                  Newsletter Subscribers
                </span>
              </div>
              <div className="flex items-center gap-6 py-2.5 border-b border-[#292d30] text-sm">
                <span className="inline-block w-24 shrink-0 text-[#a1a4a5]" style={{ minWidth: "6rem", display: "inline-block" }}>Subject</span>
                <span className="text-[#f0f0f0]">
                  Weekly Newsletter
                </span>
              </div>
            </div>

            {/* Email Body Document Mockup */}
            <div className="bg-white text-black relative overflow-hidden pb-16">
              {/* Cover Banner */}
              <img
                alt="Weekly newsletter header"
                src="/images/broadcast-email-header.webp"
                className="w-full h-auto object-cover"
              />

              {/* Newsletter Body Content */}
              <div className="px-8 md:px-12 py-6 relative">
                {/* Floating Formatting Toolbar */}
                <div className="absolute top-2 left-10 md:left-14 flex items-center gap-1 rounded-lg border border-gray-200 bg-white shadow-md px-2 py-1 text-xs text-gray-700">
                  <button className="px-1.5 py-0.5 rounded font-bold hover:bg-gray-100">
                    B
                  </button>
                  <button className="px-1.5 py-0.5 rounded italic hover:bg-gray-100">
                    I
                  </button>
                  <button className="px-1.5 py-0.5 rounded underline hover:bg-gray-100">
                    U
                  </button>
                  <span className="h-3 w-px bg-gray-200 mx-0.5"></span>
                  <button className="px-1.5 py-0.5 rounded hover:bg-gray-100">
                    Link
                  </button>
                  <button className="px-1.5 py-0.5 rounded font-medium hover:bg-gray-100">
                    H1
                  </button>
                  <button className="px-1.5 py-0.5 rounded font-medium hover:bg-gray-100">
                    H2
                  </button>
                </div>

                <div className="mt-8 space-y-4">
                  <h1 className="text-2xl font-bold tracking-tight text-gray-900">
                    Introducing Acme 2.0
                  </h1>
                  <p className="text-sm leading-relaxed text-gray-600">
                    We&apos;re excited to share our latest product update with you.
                    Over the past few months, we&apos;ve rebuilt the entire core
                    messaging architecture to give you faster deliverability,
                    granular analytics, and a delight-driven editing experience.
                  </p>
                  <p className="text-sm leading-relaxed text-gray-600">
                    Whether you are distributing regular newsletters or shipping
                    critical notifications, everything you need is now in one
                    place.
                  </p>
                </div>

                {/* Floating Slash Command Menu Mockup */}
                <div className="mt-6 w-60 rounded-xl border border-gray-200 bg-white shadow-xl p-1.5 text-xs text-gray-800">
                  <div className="px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                    Insert Block
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-gray-100 px-2.5 py-1.5 font-medium cursor-pointer">
                    <span className="font-mono text-gray-500 font-bold">H1</span>
                    Heading 1
                  </div>
                  <div className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 hover:bg-gray-50 cursor-pointer">
                    <span className="font-mono text-gray-500 font-bold">T</span>
                    Text Paragraph
                  </div>
                  <div className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 hover:bg-gray-50 cursor-pointer">
                    <span className="font-mono text-gray-500 font-bold">&gt;</span>
                    Callout Quote
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fade mask at the bottom */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black via-black/80 to-transparent"
          />
        </div>
      </div>
    </section>
  );
}
