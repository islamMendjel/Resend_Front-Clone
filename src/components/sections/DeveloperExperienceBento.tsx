"use client";

import React, { useState } from "react";
import Link from "next/link";

interface TestLog {
  id: string;
  type: "delivered" | "bounced" | "complained";
  time: string;
}

export default function DeveloperExperienceBento() {
  const [selectedRecipient, setSelectedRecipient] = useState<
    "delivered" | "bounced" | "complained"
  >("delivered");

  const [logs, setLogs] = useState<TestLog[]>([
    {
      id: "46572096-ae1a-4b90-8272-9b5f23f16d12",
      type: "delivered",
      time: "10:42:05",
    },
    {
      id: "13359f77-466e-436d-9cb2-ff0b0c9a8af4",
      type: "bounced",
      time: "10:41:48",
    },
    {
      id: "c3be1838-b80e-457a-9fc5-3abf49c3b33e",
      type: "complained",
      time: "10:40:22",
    },
    {
      id: "a08045a6-132a-4e16-ace1-aa81df4278ac",
      type: "delivered",
      time: "10:38:19",
    },
  ]);

  const [sending, setSending] = useState(false);

  const handleSend = () => {
    setSending(true);
    setTimeout(() => {
      const hex = () => Math.random().toString(16).substring(2, 6);
      const newId = `${hex()}${hex()}-${hex()}-4${hex().substring(0, 3)}-a${hex().substring(0, 3)}-${hex()}${hex()}${hex()}`;
      const now = new Date();
      const timeStr = now.toTimeString().split(" ")[0];
      setLogs((prev) => [
        { id: newId, type: selectedRecipient, time: timeStr },
        ...prev.slice(0, 4),
      ]);
      setSending(false);
    }, 250);
  };

  const recipientConfig = {
    delivered: {
      email: "delivered@resend.dev",
      color: "#3ad389",
      bg: "bg-[#3ad389]/10 text-[#3ad389] border-[#3ad389]/20",
    },
    bounced: {
      email: "bounced@resend.dev",
      color: "#ff9592",
      bg: "bg-[#ff9592]/10 text-[#ff9592] border-[#ff9592]/20",
    },
    complained: {
      email: "complained@resend.dev",
      color: "#ffca16",
      bg: "bg-[#ffca16]/10 text-[#ffca16] border-[#ffca16]/20",
    },
  };

  return (
    <section className="mx-auto px-6 py-12 sm:py-24 max-w-5xl md:max-w-7xl">
      <h2 className="font-display effect-font-styling text-[3rem] md:text-[3.5rem] tracking-tighter leading-[120%] effect-font-gradient mb-3 text-center md:text-left">
        First-class <br />
        developer experience
      </h2>
      <p className="text-base md:text-[1.125rem] md:leading-[1.5] text-[#a1a4a5] font-normal text-balance mb-12 text-center md:text-left">
        We are a team of engineers who love building tools for other engineers.{" "}
        <br className="hidden sm:block" />
        Our goal is to create the email platform we&apos;ve always wished we had —
        one that <em>just works</em>.
      </p>

      <div className="grid grid-cols-1 gap-12 md:gap-8 lg:grid-cols-2">
        {/* Left Card: Test Mode */}
        <div className="flex flex-col gap-6">
          <div className="h-[380px] rounded-2xl border border-[#292d30] bg-[#050505] p-6 relative overflow-hidden flex flex-col justify-center">
            {/* Centered Controls / Simulator Bar */}
            <div className="z-10 flex flex-col gap-4 max-w-[420px] w-full mx-auto">
              <div className="flex items-center justify-between gap-3 rounded-xl border border-[#292d30] bg-[#0d0d0d] p-2">
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-flex items-center px-2 py-0.5 rounded-md text-xs font-mono font-medium border ${recipientConfig[selectedRecipient].bg}`}
                  >
                    {selectedRecipient}
                  </span>
                  <select
                    value={selectedRecipient}
                    onChange={(e) =>
                      setSelectedRecipient(
                        e.target.value as "delivered" | "bounced" | "complained"
                      )
                    }
                    className="bg-transparent text-sm text-[#f0f0f0] font-mono outline-none cursor-pointer"
                  >
                    <option value="delivered" className="bg-[#121212] text-white">
                      delivered@resend.dev
                    </option>
                    <option value="bounced" className="bg-[#121212] text-white">
                      bounced@resend.dev
                    </option>
                    <option value="complained" className="bg-[#121212] text-white">
                      complained@resend.dev
                    </option>
                  </select>
                </div>

                <button
                  onClick={handleSend}
                  disabled={sending}
                  className="flex items-center gap-1.5 rounded-lg border border-[#292d30] bg-white px-3 py-1 text-xs font-semibold text-black transition-transform hover:scale-105 active:scale-95 disabled:opacity-50"
                >
                  <svg
                    className="h-3.5 w-3.5 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m16 9.49.003.125a2 2 0 0 0 .24.832l3.336 6.117C20.67 18.563 19.223 21 16.946 21H7.053l-.21-.007c-2.085-.14-3.394-2.344-2.519-4.241l.095-.188 3.336-6.117a2 2 0 0 0 .24-.832L8 9.49V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"
                      fill="currentColor"
                    />
                  </svg>
                  {sending ? "Sending..." : "Send"}
                </button>
              </div>

              {/* 3 subtle dark/dimmed HTTP 200 log rows fading out with gradient mask */}
              <div
                className="flex flex-col gap-2 font-mono text-xs overflow-hidden"
                style={{
                  maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
                }}
              >
                {logs.slice(0, 3).map((log) => (
                  <div
                    key={log.id}
                    className="flex items-center rounded-lg border border-[#292d30]/40 bg-[#0a0a0a]/80 px-3 py-2 text-xs"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[#a1a4a5] font-mono font-medium">HTTP 200:</span>
                      <span className="text-[#6e727a] font-mono">
                        &#123; &quot;id&quot;: &quot;{log.id}&quot; &#125;
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ambient subtle glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-32 blur-3xl opacity-20 bg-[#3ad389]"
            />
          </div>

          <div className="flex flex-col gap-3 pl-2">
            <div className="flex items-center gap-2">
              <svg
                fill="none"
                height="20"
                viewBox="0 0 24 24"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <path
                  fill="currentColor"
                  d="m16 9.49.003.125a2 2 0 0 0 .24.832l3.336 6.117C20.67 18.563 19.223 21 16.946 21H7.053l-.21-.007c-2.085-.14-3.394-2.344-2.519-4.241l.095-.188 3.336-6.117a2 2 0 0 0 .24-.832L8 9.49V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1zM8.69 14a1 1 0 0 0-.878.521l-1.637 3A1 1 0 0 0 7.053 19h9.893a1 1 0 0 0 .877-1.479l-1.636-3a1 1 0 0 0-.878-.521zM10 9.49a4 4 0 0 1-.489 1.915.402.402 0 0 0 .353.595h4.27c.306 0 .5-.327.354-.595a4 4 0 0 1-.489-1.915V6a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1z"
                ></path>
              </svg>
              <h3 className="font-display effect-font-styling text-xl text-white">
                Test mode
              </h3>
            </div>
            <p className="text-sm leading-[1.6] text-[#a1a4a5] font-normal">
              Simulate events and experiment with our API without the risk of
              accidentally sending real emails to real people.
            </p>
            <a
              href="https://resend.com/docs/dashboard/emails/send-test-emails"
              className="text-sm font-medium text-white hover:text-white/80 inline-flex items-center gap-1 transition-colors"
            >
              Learn more &rarr;
            </a>
          </div>
        </div>

        {/* Right Card: Modular Webhooks */}
        <div className="flex flex-col gap-6">
          <div className="h-[380px] rounded-2xl border border-[#292d30] bg-[#050505] p-5 relative overflow-hidden flex flex-col justify-between">
            {/* Timeline Stream */}
            <div className="relative flex flex-col gap-3.5 overflow-hidden">
              {/* Vertical timeline spine */}
              <div
                aria-hidden="true"
                className="absolute left-3.5 top-3 bottom-1 w-px bg-[#292d30]"
              />

              {/* Event 1: Bounced */}
              <div className="relative flex items-start gap-3">
                <span className="z-10 mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[#292d30] bg-[#0c0c0d]">
                  <svg className="h-3.5 w-3.5 text-[#ff9592]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9.402 4.938c1.16-1.983 4.028-1.979 5.183.006l6.776 11.653c1.167 2.006-.29 4.52-2.61 4.508l-13.553-.076c-2.237-.012-3.648-2.367-2.674-4.327l.102-.188zm3.454 1.012a1 1 0 0 0-1.727-.003L4.353 17.523a1 1 0 0 0 .857 1.506l13.553.076a1 1 0 0 0 .869-1.503zM12 15a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0-6a1 1 0 0 1 1 1v2.5a1 1 0 1 1-2 0V10a1 1 0 0 1 1-1" />
                  </svg>
                </span>
                <div className="flex-1 flex flex-col gap-1.5 min-w-0">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-mono font-medium capitalize bg-[#ff9592]/15 text-[#ff9592] border border-[#ff9592]/30">
                      bounced
                    </span>
                    <span className="text-[11px] font-mono text-[#a1a4a5] flex items-center gap-1">
                      <svg className="w-3 h-3 text-[#70757e]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm0 3a1 1 0 0 1 1 1v3.23l2.87 2.05a1 1 0 1 1-1.16 1.63l-3.29-2.35a1.5 1.5 0 0 1-.63-1.22V8a1 1 0 0 1 1-1z" />
                      </svg>
                      Nov 11 18:36:31
                    </span>
                  </div>
                  <div className="rounded-lg border border-[#292d30]/70 bg-[#0b0b0c] p-2.5 text-xs text-[#a1a4a5] flex flex-col gap-1.5">
                    <div className="flex flex-wrap items-center gap-1">
                      <span>to</span>
                      <span className="font-mono text-white bg-white/5 border border-[#292d30] px-1.5 py-0.5 rounded text-[11px]">
                        emma@figma.com
                      </span>
                      <span>with type</span>
                      <span className="font-mono text-white bg-white/5 border border-[#292d30] px-1.5 py-0.5 rounded text-[11px]">
                        Spam
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-1 text-[11px]">
                      <span>on agent</span>
                      <span className="inline-flex items-center gap-1 text-white bg-white/5 border border-[#292d30] px-1.5 py-0.5 rounded font-mono">
                        <svg className="w-3 h-3 text-[#6d4aff]" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2V7h2v10z" />
                        </svg>
                        ProtonMail
                      </span>
                      <span>running on</span>
                      <span className="inline-flex items-center gap-1 text-white bg-white/5 border border-[#292d30] px-1.5 py-0.5 rounded font-mono">
                        <svg className="w-3 h-3 text-[#00adef]" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.951-1.8" />
                        </svg>
                        Windows
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Event 2: Complained */}
              <div className="relative flex items-start gap-3">
                <span className="z-10 mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[#292d30] bg-[#0c0c0d]">
                  <svg className="h-3.5 w-3.5 text-[#ffca16]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2a10 10 0 0 1 7 17l-.3.4a10 10 0 0 1-13.4 0l-.4-.3A10 10 0 0 1 12 2m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16m0 11a1 1 0 1 1 0 2 1 1 0 1 1 0-2m0-8q1 0 1 1v4a1 1 0 1 1-2 0V8q0-1 1-1" />
                  </svg>
                </span>
                <div className="flex-1 flex flex-col gap-1.5 min-w-0">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-mono font-medium capitalize bg-[#ffca16]/15 text-[#ffca16] border border-[#ffca16]/30">
                      complained
                    </span>
                    <span className="text-[11px] font-mono text-[#a1a4a5] flex items-center gap-1">
                      <svg className="w-3 h-3 text-[#70757e]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm0 3a1 1 0 0 1 1 1v3.23l2.87 2.05a1 1 0 1 1-1.16 1.63l-3.29-2.35a1.5 1.5 0 0 1-.63-1.22V8a1 1 0 0 1 1-1z" />
                      </svg>
                      Nov 11 16:28:21
                    </span>
                  </div>
                  <div className="rounded-lg border border-[#292d30]/70 bg-[#0b0b0c] p-2.5 text-xs text-[#a1a4a5] flex items-center flex-wrap gap-1">
                    <span>to</span>
                    <span className="font-mono text-white bg-white/5 border border-[#292d30] px-1.5 py-0.5 rounded text-[11px]">
                      emma@yahoo.com
                    </span>
                    <span>with feedback</span>
                    <span className="font-mono text-white bg-white/5 border border-[#292d30] px-1.5 py-0.5 rounded text-[11px]">
                      Spam
                    </span>
                  </div>
                </div>
              </div>

              {/* Event 3: Delivered - matching 2-line header + indented pill format */}
              <div className="relative flex items-start gap-3">
                <span className="z-10 mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[#292d30] bg-[#0c0c0d]">
                  <span className="h-2 w-2 rounded-full bg-[#3ad389]"></span>
                </span>
                <div className="flex-1 flex flex-col gap-1.5 min-w-0">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-mono font-medium capitalize bg-[#3ad389]/15 text-[#3ad389] border border-[#3ad389]/30">
                      delivered
                    </span>
                    <span className="text-[11px] font-mono text-[#a1a4a5] flex items-center gap-1">
                      <svg className="w-3 h-3 text-[#70757e]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm0 3a1 1 0 0 1 1 1v3.23l2.87 2.05a1 1 0 1 1-1.16 1.63l-3.29-2.35a1.5 1.5 0 0 1-.63-1.22V8a1 1 0 0 1 1-1z" />
                      </svg>
                      Nov 11 16:15:02
                    </span>
                  </div>
                  <div className="rounded-lg border border-[#292d30]/70 bg-[#0b0b0c] p-2.5 text-xs text-[#a1a4a5] flex items-center flex-wrap gap-1">
                    <span>to</span>
                    <span className="font-mono text-white bg-white/5 border border-[#292d30] px-1.5 py-0.5 rounded text-[11px]">
                      steve@apple.com
                    </span>
                    <span>with status</span>
                    <span className="font-mono text-white bg-white/5 border border-[#292d30] px-1.5 py-0.5 rounded text-[11px]">
                      250 OK
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom fade gradient */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 left-0 right-0 h-20"
                style={{
                  background: "linear-gradient(to bottom, transparent, #050505)",
                }}
              />
            </div>

            {/* Subtle purple accent glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-10 right-1/4 w-3/4 h-32 blur-3xl opacity-20 bg-[#70b8ff]"
            />
          </div>

          <div className="flex flex-col gap-3 pl-2">
            <div className="flex items-center gap-2">
              <svg
                fill="none"
                height="20"
                viewBox="0 0 24 24"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <path
                  fill="currentColor"
                  d="M7 21.5q-2.074 0-3.537-1.462Q2 18.574 2 16.5q0-1.4.675-2.537a4.94 4.94 0 0 1 1.8-1.788q.525-.3 1.025.012.5.313.5.863 0 .275-.112.5a.7.7 0 0 1-.313.325q-.7.375-1.138 1.075A2.87 2.87 0 0 0 4 16.5q0 1.25.875 2.125A2.9 2.9 0 0 0 7 19.5q1.25 0 2.125-.875A2.9 2.9 0 0 0 10 16.5q0-.424.238-.713.237-.287.662-.287h4.526c.286 0 .55-.138.793-.285q.07-.042.143-.078Q16.65 15 17 15q.625 0 1.063.438.437.437.437 1.062t-.437 1.063A1.45 1.45 0 0 1 17 18a1.46 1.46 0 0 1-.78-.215c-.245-.147-.508-.285-.794-.285h-2.709c-.475 0-.874.34-1.04.786a4.9 4.9 0 0 1-1.49 2.076Q8.826 21.5 7 21.5"
                ></path>
              </svg>
              <h3 className="font-display effect-font-styling text-xl text-white">
                Modular webhooks
              </h3>
            </div>
            <p className="text-sm leading-[1.6] text-[#a1a4a5] font-normal">
              Receive real-time notifications directly to your server. Every time
              an email is delivered, opened, bounces, or a link is clicked.
            </p>
            <a
              href="https://resend.com/docs/webhooks/introduction"
              className="text-sm font-medium text-white hover:text-white/80 inline-flex items-center gap-1 transition-colors"
            >
              Learn more &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
