"use client";

import React, { useState } from "react";

interface TabItem {
  id: "analytics" | "visibility" | "authentication";
  title: string;
  icon: React.ReactNode;
}

export default function ControlMetricsSection() {
  const [activeTab, setActiveTab] = useState<"analytics" | "visibility" | "authentication">(
    "analytics"
  );

  const tabs: TabItem[] = [
    {
      id: "analytics",
      title: "Intuitive analytics",
      icon: (
        <svg fill="none" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path
            fill="currentColor"
            d="M3 3q1 0 1 1v15q0 1 1 1h15a1 1 0 1 1 0 2H5a3 3 0 0 1-3-3V4q0-1 1-1m6.5 5q2.3.2 2.5 2.5v5c0 1.4-1.1 2.5-2.5 2.5h-1A2.5 2.5 0 0 1 6 15.5v-5Q6.2 8.2 8.5 8zm8-4C18.9 4 20 5.1 20 6.5v9c0 1.4-1.1 2.5-2.5 2.5h-1a2.5 2.5 0 0 1-2.5-2.5v-9q.2-2.3 2.5-2.5zm-9 6q-.5 0-.5.5v5q0 .5.5.5h1q.5 0 .5-.5v-5q0-.5-.5-.5zm8-4q-.5 0-.5.5v9q0 .5.5.5h1q.5 0 .5-.5v-9q0-.5-.5-.5z"
          />
        </svg>
      ),
    },
    {
      id: "visibility",
      title: "Full visibility",
      icon: (
        <svg fill="none" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path
            fill="currentColor"
            d="M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1-2.846 2.996L19 20H5l-.154-.004A3 3 0 0 1 2 17V7a3 3 0 0 1 3-3zm-4 7a5 5 0 0 1-6 0L4.8 7.85a.5.5 0 0 0-.8.4V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V8.25a.5.5 0 0 0-.8-.4zm-4.8-1.6a3 3 0 0 0 3.6 0l3.334-2.5a.5.5 0 0 0-.3-.9H7.166a.5.5 0 0 0-.3.9z"
          />
        </svg>
      ),
    },
    {
      id: "authentication",
      title: "Domain authentication",
      icon: (
        <svg fill="none" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2M9.557 13a.49.49 0 0 0-.492.527c.16 1.87.603 3.48 1.188 4.65C11.05 19.774 11.785 20 12 20s.949-.226 1.747-1.823c.585-1.17 1.028-2.78 1.188-4.65a.49.49 0 0 0-.492-.527zM4.63 13a.475.475 0 0 0-.477.56 8 8 0 0 0 3.1 4.88c.387.285.85-.15.687-.603-.456-1.264-.768-2.75-.887-4.362A.51.51 0 0 0 6.549 13zm12.82 0a.51.51 0 0 0-.505.475c-.12 1.612-.432 3.098-.888 4.362-.163.453.3.889.687.603a8 8 0 0 0 3.1-4.88.474.474 0 0 0-.476-.56zM7.94 6.162c.163-.452-.3-.888-.687-.603a8 8 0 0 0-3.1 4.882.474.474 0 0 0 .477.559h1.918a.51.51 0 0 0 .505-.475c.119-1.612.431-3.098.887-4.363M12 4c-.215 0-.949.226-1.747 1.823-.585 1.17-1.028 2.78-1.188 4.65a.49.49 0 0 0 .492.527h4.886a.49.49 0 0 0 .492-.527c-.16-1.87-.603-3.48-1.188-4.65C12.95 4.226 12.215 4 12 4m4.745 1.559c-.387-.286-.85.15-.687.603.456 1.265.769 2.751.888 4.363a.51.51 0 0 0 .505.475h1.918a.475.475 0 0 0 .477-.56 8 8 0 0 0-3.101-4.881"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="mx-auto px-6 py-12 sm:py-24 max-w-5xl md:max-w-7xl">
      {/* 3D Control Icon Video Loop */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="mx-auto mb-4 mix-blend-screen"
        height={170}
        width={170}
        poster="/media/3d-control-fallback.jpg"
      >
        <source src="/media/3d-control.mp4" type="video/mp4" />
      </video>

      {/* Heading */}
      <h2 className="font-display effect-font-styling text-[3rem] md:text-[3.5rem] tracking-tighter leading-[120%] effect-font-gradient mb-2 text-center">
        Everything in your control
      </h2>
      <p className="text-base md:text-[1.125rem] md:leading-[1.5] text-[#a1a4a5] font-normal text-balance text-center mb-8 md:mb-16">
        All the features you need to manage your email sending, troubleshoot with
        <br /> detailed logs, and protect your domain reputation – without the friction.
      </p>

      {/* 3-Tab Selector Grid */}
      <div className="mb-6 grid grid-cols-1 gap-3 md:mb-8 md:gap-6 lg:grid-cols-3">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`group relative flex h-[3.75rem] overflow-hidden rounded-2xl border transition-all duration-200 md:h-[5.625rem] cursor-pointer text-left ${
                isActive
                  ? "border-white/20 bg-white/[0.04] text-white"
                  : "border-[#292d30] bg-[#070707] hover:border-[#292d30]/90 hover:bg-[#0c0c0d]"
              }`}
            >
              <div className="flex h-full w-full items-center gap-3 px-4 py-2 md:gap-4 md:p-5">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-all duration-150 ${
                    isActive
                      ? "border-white/20 bg-white/[0.08] text-white"
                      : "border-[#292d30] bg-white/[0.03] text-[#a1a4a5] group-hover:text-white"
                  }`}
                >
                  {tab.icon}
                </div>
                <h3
                  className={`font-display text-base tracking-tight transition-colors ${
                    isActive ? "text-white font-medium" : "text-[#a1a4a5] group-hover:text-white"
                  }`}
                >
                  {tab.title}
                </h3>
              </div>
            </button>
          );
        })}
      </div>

      {/* Showcase Container: Full Resend Dashboard */}
      <div className="relative rounded-2xl border border-[#292d30] bg-[#080809] overflow-hidden shadow-2xl opacity-100">
        {/* Top window bar */}
        <div className="flex items-center justify-between border-b border-[#292d30] px-4 py-3 bg-[#0c0c0e] text-xs">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-lg border border-[#292d30] bg-[#141416] px-2.5 py-1 text-white font-medium">
              <span className="h-2 w-2 rounded-full bg-[#3ad389]"></span>
              <span>Resend Pro</span>
              <svg className="w-3 h-3 text-[#70757e]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 10l5 5 5-5z" />
              </svg>
            </div>
            <span className="text-[#70757e] hidden sm:inline">acme-production</span>
          </div>

          <div className="flex items-center gap-3 font-mono text-[11px] text-[#a1a4a5]">
            <span className="hidden md:inline text-[#3ad389] flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-[#3ad389]"></span> All systems operational
            </span>
            <span className="rounded bg-white/5 border border-[#292d30] px-2 py-0.5 text-white">
              UTC
            </span>
          </div>
        </div>

        {/* Dashboard Shell: Sidebar + Content */}
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr]">
          {/* Dashboard Sidebar */}
          <div className="hidden md:flex flex-col justify-between border-r border-[#292d30] p-4 bg-[#0a0a0c] text-xs font-medium text-[#a1a4a5]">
            <div className="flex flex-col gap-1">
              <div
                className={`flex items-center gap-2 rounded-lg px-2.5 py-1.5 transition-colors cursor-pointer ${
                  activeTab === "analytics"
                    ? "bg-white/10 text-white font-semibold"
                    : "hover:bg-white/5 hover:text-white"
                }`}
                onClick={() => setActiveTab("analytics")}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 3v18h18" />
                  <path d="M18 17V9" />
                  <path d="M13 17V5" />
                  <path d="M8 17v-3" />
                </svg>
                <span>Metrics</span>
              </div>

              <div
                className={`flex items-center gap-2 rounded-lg px-2.5 py-1.5 transition-colors cursor-pointer ${
                  activeTab === "visibility"
                    ? "bg-white/10 text-white font-semibold"
                    : "hover:bg-white/5 hover:text-white"
                }`}
                onClick={() => setActiveTab("visibility")}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span>Emails</span>
              </div>

              <div className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 hover:bg-white/5 hover:text-white cursor-pointer transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 11a9 9 0 0 1 9 9" />
                  <path d="M4 4a16 16 0 0 1 16 16" />
                  <circle cx="5" cy="19" r="1" />
                </svg>
                <span>Broadcasts</span>
              </div>

              <div className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 hover:bg-white/5 hover:text-white cursor-pointer transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <span>Audiences</span>
              </div>

              <div
                className={`flex items-center gap-2 rounded-lg px-2.5 py-1.5 transition-colors cursor-pointer ${
                  activeTab === "authentication"
                    ? "bg-white/10 text-white font-semibold"
                    : "hover:bg-white/5 hover:text-white"
                }`}
                onClick={() => setActiveTab("authentication")}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
                <span>Domains</span>
              </div>

              <div className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 hover:bg-white/5 hover:text-white cursor-pointer transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
                <span>Settings</span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#292d30]/60 flex items-center justify-between text-[11px] text-[#70757e]">
              <span>API v1.1.0</span>
              <span className="text-[#3ad389]">99.99%</span>
            </div>
          </div>

          {/* Main Dashboard Workspace */}
          <div className="p-4 sm:p-6 flex flex-col gap-6 bg-[#050507]">
            {activeTab === "analytics" && (
              <>
                {/* 4 Metric Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                  <div className="rounded-xl border border-[#292d30] bg-[#0c0c0e] p-3.5 sm:p-4">
                    <div className="flex items-center justify-between text-xs text-[#a1a4a5]">
                      <span>Deliverability</span>
                      <span className="rounded-full bg-[#3ad389]/15 text-[#3ad389] px-2 py-0.5 text-[10px] font-mono font-medium border border-[#3ad389]/30">
                        Good
                      </span>
                    </div>
                    <div className="mt-2 text-2xl font-mono font-bold text-white">100%</div>
                    <div className="mt-1 text-[11px] text-[#70757e] font-mono">0 bounces recorded</div>
                  </div>

                  <div className="rounded-xl border border-[#292d30] bg-[#0c0c0e] p-3.5 sm:p-4">
                    <div className="flex items-center justify-between text-xs text-[#a1a4a5]">
                      <span>Reputation</span>
                      <span className="rounded-full bg-[#3ad389]/15 text-[#3ad389] px-2 py-0.5 text-[10px] font-mono font-medium border border-[#3ad389]/30">
                        Good
                      </span>
                    </div>
                    <div className="mt-2 text-2xl font-mono font-bold text-white">1.85%</div>
                    <div className="mt-1 text-[11px] text-[#70757e] font-mono">Top tier IP pool</div>
                  </div>

                  <div className="rounded-xl border border-[#292d30] bg-[#0c0c0e] p-3.5 sm:p-4">
                    <div className="flex items-center justify-between text-xs text-[#a1a4a5]">
                      <span>Engagement</span>
                      <span className="rounded-full bg-[#ffca16]/15 text-[#ffca16] px-2 py-0.5 text-[10px] font-mono font-medium border border-[#ffca16]/30">
                        Poor
                      </span>
                    </div>
                    <div className="mt-2 text-2xl font-mono font-bold text-white">0.0%</div>
                    <div className="mt-1 text-[11px] text-[#70757e] font-mono">Open tracking disabled</div>
                  </div>

                  <div className="rounded-xl border border-[#292d30] bg-[#0c0c0e] p-3.5 sm:p-4">
                    <div className="flex items-center justify-between text-xs text-[#a1a4a5]">
                      <span>Sent emails</span>
                      <span className="text-[#3ad389] text-[11px] font-mono">+12.4%</span>
                    </div>
                    <div className="mt-2 text-2xl font-mono font-bold text-white">29,486</div>
                    <div className="mt-1 text-[11px] text-[#70757e] font-mono">Last 7 days</div>
                  </div>
                </div>

                {/* Main Sparkline Area Chart */}
                <div className="rounded-xl border border-[#292d30] bg-[#0c0c0e] p-4 sm:p-6 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-display text-sm font-medium text-white">
                        Sent emails over time
                      </h4>
                      <p className="text-xs text-[#70757e] font-mono">Daily volume distribution</p>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono">
                      <span className="inline-flex items-center gap-1.5 text-white">
                        <span className="h-2 w-2 rounded-full bg-[#3ad389]"></span>
                        Delivered
                      </span>
                    </div>
                  </div>

                  {/* High fidelity SVG Area Chart */}
                  <div className="w-full h-48 sm:h-64 relative">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 600 200" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="chart-grad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#3ad389" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#3ad389" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>

                      {/* Horizontal Grid lines */}
                      <line x1="0" y1="20" x2="600" y2="20" stroke="#292d30" strokeDasharray="3 3" opacity="0.4" />
                      <line x1="0" y1="70" x2="600" y2="70" stroke="#292d30" strokeDasharray="3 3" opacity="0.4" />
                      <line x1="0" y1="120" x2="600" y2="120" stroke="#292d30" strokeDasharray="3 3" opacity="0.4" />
                      <line x1="0" y1="170" x2="600" y2="170" stroke="#292d30" strokeDasharray="3 3" opacity="0.4" />

                      {/* Area Fill */}
                      <path
                        d="M0,160 Q70,140 100,110 T200,80 T300,130 T400,50 T500,70 T600,30 L600,190 L0,190 Z"
                        fill="url(#chart-grad)"
                      />

                      {/* Stroke Line */}
                      <path
                        d="M0,160 Q70,140 100,110 T200,80 T300,130 T400,50 T500,70 T600,30"
                        fill="none"
                        stroke="#3ad389"
                        strokeWidth="2.5"
                      />

                      {/* Peak Dot Indicator */}
                      <circle cx="400" cy="50" r="5" fill="#3ad389" stroke="#000" strokeWidth="2" />
                      <circle cx="600" cy="30" r="5" fill="#3ad389" stroke="#000" strokeWidth="2" />
                    </svg>

                    {/* Chart Tooltip mockup */}
                    <div className="absolute top-2 left-2/3 -translate-x-1/2 rounded-lg border border-[#3ad389]/40 bg-[#000000] px-2.5 py-1 text-[11px] font-mono text-white shadow-xl pointer-events-none">
                      <span className="text-[#3ad389] font-bold">Nov 9:</span> 4,812 emails
                    </div>
                  </div>

                  {/* Dates Axis */}
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#70757e] pt-2 border-t border-[#292d30]/60">
                    <span>Nov 5</span>
                    <span>Nov 6</span>
                    <span>Nov 7</span>
                    <span>Nov 8</span>
                    <span>Nov 9</span>
                    <span>Nov 10</span>
                    <span>Nov 11</span>
                  </div>
                </div>
              </>
            )}

            {activeTab === "visibility" && (
              <div className="rounded-xl border border-[#292d30] bg-[#0c0c0e] p-4 flex flex-col gap-3">
                <div className="flex items-center justify-between border-b border-[#292d30] pb-3 text-xs">
                  <span className="text-white font-medium">Recent Email Activity</span>
                  <span className="text-[#70757e] font-mono text-[11px]">Auto-refreshing</span>
                </div>
                <div className="flex flex-col gap-2 font-mono text-xs">
                  <div className="flex items-center justify-between rounded-lg border border-[#292d30]/60 bg-[#08080a] p-3">
                    <div className="flex items-center gap-3">
                      <span className="rounded px-2 py-0.5 text-[10px] font-medium bg-[#3ad389]/15 text-[#3ad389] border border-[#3ad389]/30">
                        Delivered
                      </span>
                      <span className="text-white font-semibold">welcome@acme.com</span>
                      <span className="text-[#70757e] hidden sm:inline">Welcome to Acme!</span>
                    </div>
                    <span className="text-[#70757e] text-[11px]">2m ago</span>
                  </div>

                  <div className="flex items-center justify-between rounded-lg border border-[#292d30]/60 bg-[#08080a] p-3">
                    <div className="flex items-center gap-3">
                      <span className="rounded px-2 py-0.5 text-[10px] font-medium bg-[#3ad389]/15 text-[#3ad389] border border-[#3ad389]/30">
                        Delivered
                      </span>
                      <span className="text-white font-semibold">john@stripe.com</span>
                      <span className="text-[#70757e] hidden sm:inline">Your invoice is ready</span>
                    </div>
                    <span className="text-[#70757e] text-[11px]">8m ago</span>
                  </div>

                  <div className="flex items-center justify-between rounded-lg border border-[#292d30]/60 bg-[#08080a] p-3">
                    <div className="flex items-center gap-3">
                      <span className="rounded px-2 py-0.5 text-[10px] font-medium bg-[#ff9592]/15 text-[#ff9592] border border-[#ff9592]/30">
                        Bounced
                      </span>
                      <span className="text-white font-semibold">invalid@domain.xyz</span>
                      <span className="text-[#70757e] hidden sm:inline">Verify your email</span>
                    </div>
                    <span className="text-[#70757e] text-[11px]">15m ago</span>
                  </div>

                  <div className="flex items-center justify-between rounded-lg border border-[#292d30]/60 bg-[#08080a] p-3">
                    <div className="flex items-center gap-3">
                      <span className="rounded px-2 py-0.5 text-[10px] font-medium bg-[#3ad389]/15 text-[#3ad389] border border-[#3ad389]/30">
                        Delivered
                      </span>
                      <span className="text-white font-semibold">sarah@figma.com</span>
                      <span className="text-[#70757e] hidden sm:inline">Team invite: Design</span>
                    </div>
                    <span className="text-[#70757e] text-[11px]">24m ago</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "authentication" && (
              <div className="rounded-xl border border-[#292d30] bg-[#0c0c0e] p-4 flex flex-col gap-4">
                <div className="flex items-center justify-between border-b border-[#292d30] pb-3 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-medium text-sm">acme.com</span>
                    <span className="rounded-full bg-[#3ad389]/15 text-[#3ad389] border border-[#3ad389]/30 px-2 py-0.5 text-[10px] font-mono">
                      Verified
                    </span>
                  </div>
                  <span className="text-[#70757e] font-mono text-[11px]">Region: us-east-1</span>
                </div>

                <div className="flex flex-col gap-2 font-mono text-xs">
                  <div className="grid grid-cols-4 gap-2 rounded-lg border border-[#292d30]/60 bg-[#08080a] p-3 text-[11px]">
                    <span className="text-[#3ad389] font-bold">MX</span>
                    <span className="text-white truncate">feedback-smtp.us-east-1.amazonses.com</span>
                    <span className="text-[#70757e]">Priority: 10</span>
                    <span className="text-right text-[#3ad389]">Valid</span>
                  </div>

                  <div className="grid grid-cols-4 gap-2 rounded-lg border border-[#292d30]/60 bg-[#08080a] p-3 text-[11px]">
                    <span className="text-[#3ad389] font-bold">TXT (DKIM)</span>
                    <span className="text-white truncate">resend._domainkey.acme.com</span>
                    <span className="text-[#70757e] truncate">p=MIGfMA0GCSqGSIb3...</span>
                    <span className="text-right text-[#3ad389]">Valid</span>
                  </div>

                  <div className="grid grid-cols-4 gap-2 rounded-lg border border-[#292d30]/60 bg-[#08080a] p-3 text-[11px]">
                    <span className="text-[#3ad389] font-bold">TXT (SPF)</span>
                    <span className="text-white truncate">bounces.acme.com</span>
                    <span className="text-[#70757e] truncate">v=spf1 include:amazonses.com ~all</span>
                    <span className="text-right text-[#3ad389]">Valid</span>
                  </div>

                  <div className="grid grid-cols-4 gap-2 rounded-lg border border-[#292d30]/60 bg-[#08080a] p-3 text-[11px]">
                    <span className="text-[#3ad389] font-bold">TXT (DMARC)</span>
                    <span className="text-white truncate">_dmarc.acme.com</span>
                    <span className="text-[#70757e] truncate">v=DMARC1; p=none;</span>
                    <span className="text-right text-[#3ad389]">Valid</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}