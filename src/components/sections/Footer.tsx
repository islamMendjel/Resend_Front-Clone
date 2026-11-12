import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const columns = [
    {
      title: "Features",
      links: [
        { label: "Automations", href: "/features/automations" },
        { label: "Audiences", href: "/features/audiences" },
        { label: "Broadcasts", href: "/features/broadcasts" },
        { label: "Inbound", href: "/features/inbound" },
        { label: "Inboxes", href: "/products/inboxes" },
        { label: "Templates", href: "/features/templates" },
        { label: "Webhooks", href: "/features/webhooks" },
        { label: "Dedicated IPs", href: "/features/dedicated-ips" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Changelog", href: "/changelog" },
        { label: "Pricing", href: "/pricing" },
        { label: "Enterprise", href: "/enterprise" },
        { label: "Security", href: "/security" },
        { label: "SOC 2", href: "/security/soc-2" },
        { label: "GDPR", href: "/security/gdpr" },
        { label: "Brand", href: "/brand" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Careers", href: "/careers" },
        { label: "Clubs", href: "/clubs" },
        { label: "Customers", href: "/customers" },
        { label: "Humans", href: "/humans" },
        { label: "Philosophy", href: "/philosophy" },
      ],
    },
    {
      title: "Help",
      links: [
        { label: "Support", href: "/support" },
        { label: "Status", href: "/status" },
        { label: "Migrate", href: "/migrate" },
        { label: "Knowledge base", href: "https://resend.com/docs/knowledge-base/introduction" },
        { label: "Legal policies", href: "/legal" },
      ],
    },
    {
      title: "Community",
      links: [
        { label: "Events", href: "/events" },
        { label: "Insiders", href: "/insiders" },
        { label: "Open source", href: "/open-source" },
        { label: "Wallpapers", href: "/wallpapers" },
      ],
    },
  ];

  return (
    <div className="w-full relative">
      {/* Giant Background "Resend" Wordmark */}
      <div className="w-full overflow-hidden select-none pointer-events-none -mb-px">
        <div className="mx-auto max-w-6xl px-6 flex justify-center">
          <svg
            role="img"
            aria-label="Resend"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 377 81"
            fill="none"
            className="w-full max-w-5xl h-auto text-white/[0.04] fill-current select-none pointer-events-none translate-y-6 md:translate-y-8"
          >
            <path
              fill="currentColor"
              d="M103.704 22.537c17.023 0 29.411 11.829 28.532 33.327H90.781c1.548 5.975 5.684 11.109 13.963 11.109 4.635 0 8.871-1.279 12.068-5.275h14.306l-.241 1.279C128.4 73.926 115.932 80 104.744 80c-17.743 0-29.65-11.988-29.65-28.691 0-16.704 11.907-28.772 28.61-28.772Zm119.96 0c17.103 0 29.411 11.829 28.612 33.327H210.81c1.529 5.975 5.635 11.109 13.974 11.109 4.635 0 8.871-1.279 11.988-5.275h14.386l-.241 1.279C248.44 73.926 235.972 80 224.784 80c-17.743 0-29.651-11.988-29.651-28.691 0-16.704 11.908-28.772 28.531-28.772Zm-60.978-.32c12.627 0 23.736 4.556 26.933 15.745l.32 1.2h-15.744c-3.357-4.157-7.833-4.717-11.509-4.717-3.437 0-8.871.88-8.871 4.237 0 3.116 3.596 4.155 6.713 4.554l9.111.96c14.465 1.278 20.859 6.953 20.859 18.062 0 12.787-12.707 17.582-25.254 17.582-12.548 0-25.576-5.594-28.053-16.943l-.239-1.199h16.143c2.237 6.392 12.542 5.915 12.149 5.914 6.073 0 9.829-1.838 9.83-4.795 0-1.918-.64-4.156-6.873-4.955l-9.511-.959c-12.548-.879-20.14-7.512-20.14-17.422 0-12.148 11.509-17.263 24.136-17.263Zm214.185 56.184h-15.504l.799-7.752c-2.157 4.636-9.111 9.19-17.822 9.19-14.385 0-26.054-11.028-26.054-28.45 0-17.423 11.509-28.452 26.054-28.452 7.912 0 12.787 2.557 17.103 6.953V0h15.424v78.401ZM48.081 0c15.184 0 24.215 9.03 24.215 21.019 0 11.988-9.03 21.019-24.216 21.02h-7.672L78.53 78.4H51.597L22.587 50.83c-2.079-1.918-3.038-4.156-3.038-6.074 0-2.717 1.918-5.114 5.594-6.153l14.945-3.996c5.674-1.519 9.59-5.915 9.591-11.669 0-7.032-5.754-11.109-12.867-11.109H.128V0H48.08Zm241.677 22.617c13.587 0 23.098 9.91 23.098 24.056V78.4h-15.505v-29.09c0-7.992-4.236-12.788-11.748-12.788-7.513 0-12.388 4.955-12.388 12.787v29.091h-15.184V23.736h15.423l-.718 8.711c2.238-4.395 9.19-9.83 17.022-9.83Zm58.262 13.906c-9.35 0-14.306 6.954-14.306 14.866 0 8.471 5.595 14.945 14.306 14.945 8.391 0 13.826-6.554 13.826-14.945 0-8.392-5.275-14.866-13.826-14.866Zm-244.316-1.598c-7.554 0-11.871 4.512-13.21 10.55h26.148a24.052 24.052 0 0 0-.63-2.239c-1.918-5.434-6.394-8.311-12.308-8.311Zm119.96 0c-7.489 0-11.793 4.512-13.13 10.55h26.148a24.052 24.052 0 0 0-.63-2.239c-1.918-5.434-6.394-8.311-12.388-8.311Z"
            />
          </svg>
        </div>
      </div>

      {/* Full-width Divider Line */}
      <div className="w-full border-t border-[#292d30]/60" />

      {/* Footer Inner */}
      <footer className="mx-auto flex max-w-5xl flex-col gap-12 px-6 py-24 md:py-36 md:max-w-7xl md:flex-row md:gap-8">
        {/* Left col: address, socials, status */}
        <div className="flex min-w-48 flex-col justify-start gap-8 md:min-w-[18.75rem]">
          <p className="text-xs text-[#a1a4a5] font-normal leading-relaxed">
            2261 Market Street #5039
            <br />
            San Francisco, CA 94114
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3 my-5">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://x.com/resend"
              aria-label="Resend on X"
              className="w-8 h-8 rounded-full border border-[#292d30] flex items-center justify-center hover:border-white/40 hover:bg-white/5 transition-all"
            >
              <img
                src="/images/footer-x.svg"
                alt="X"
                className="w-4 h-4 opacity-70 hover:opacity-100 transition-opacity"
              />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/resend"
              aria-label="Resend on GitHub"
              className="w-8 h-8 rounded-full border border-[#292d30] flex items-center justify-center hover:border-white/40 hover:bg-white/5 transition-all"
            >
              <img
                src="/images/footer-github.svg"
                alt="GitHub"
                className="w-4 h-4 opacity-70 hover:opacity-100 transition-opacity"
              />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://linkedin.com/company/resend"
              aria-label="Resend on LinkedIn"
              className="w-8 h-8 rounded-full border border-[#292d30] flex items-center justify-center hover:border-white/40 hover:bg-white/5 transition-all"
            >
              <img
                src="/images/footer-linkedin.svg"
                alt="LinkedIn"
                className="w-4 h-4 opacity-70 hover:opacity-100 transition-opacity"
              />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.youtube.com/channel/UC0FkhoSz2kYqHVBk4L0QYIg"
              aria-label="Resend on YouTube"
              className="w-8 h-8 rounded-full border border-[#292d30] flex items-center justify-center hover:border-white/40 hover:bg-white/5 transition-all"
            >
              <img
                src="/images/footer-youtube.svg"
                alt="YouTube"
                className="w-4 h-4 opacity-70 hover:opacity-100 transition-opacity"
              />
            </a>
          </div>

          {/* Live Status Badge */}
          <Link
            className="group relative flex w-fit items-center gap-x-2.5 overflow-hidden rounded-full border border-white/10 bg-black/40 px-3.5 py-1.5 text-xs text-[#a1a4a5] hover:border-white/20 hover:text-white transition-colors"
            href="/status"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3ad389] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3ad389]"></span>
            </span>
            <span>All systems operational</span>
          </Link>
        </div>

        {/* 5-Column Link Grid */}
        <div className="grid w-full grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-4">
              <p className="text-sm font-medium text-white">{col.title}</p>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-[#a1a4a5] hover:text-white transition-colors inline-block py-0.5"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
}
