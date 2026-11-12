import React from "react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  companyLogo: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Our team loves Resend. It makes email sending so easy and reliable. After we switched to Dedicated IPs, our deliverability improved tremendously and we don't hear complaints about emails landing on spam anymore.",
    name: "Vlad Matsiiako",
    role: "Co-founder of Infisical",
    avatar: "/images/vlad-matsiiako.jpg",
    companyLogo: "/images/logo-infisical.png",
    company: "Infisical",
  },
  {
    quote:
      "As a developer I love the approach that the Resend team is taking. Its so refreshing. They are also extremely user-centric and helpful in terms of getting you up and running, sending beautiful emails that deliver.",
    name: "Hahnbee Lee",
    role: "Co-Founder at Mintlify",
    avatar: "/images/hahnbee-lee.jpg",
    companyLogo: "/images/logo-mintlify.png",
    company: "Mintlify",
  },
  {
    quote:
      "We value tools that feel stable, well thought out, and aligned with the standards we expect across our stack. Resend meets those expectations. It lets our team stay focused on building the larger platform rather than getting pulled into the overhead that typically comes with legacy email infrastructure.",
    name: "Bradley Greenwood",
    role: "VP of Engineering at MrBeast",
    avatar: "/images/bradley-greenwood.jpg",
    companyLogo: "/images/logo-mrbeast.png",
    company: "MrBeast",
  },
  {
    quote:
      "Our partnership with Resend has been a great experience. They've made sure we can focus on what we do best—building our product and growing our business.",
    name: "Sahil Lavingia",
    role: "CEO of Gumroad",
    avatar: "/images/sahil-lavingia.jpg",
    companyLogo: "/images/logo-gumroad.png",
    company: "Gumroad",
  },
  {
    quote:
      "Switching over to Resend from SendGrid marked a significant improvement in our email management. We started with a small test - waitlist emails for our iOS and Windows apps. Within 30 minutes, we were done.",
    name: "Thomas Mann",
    role: "Founder & CEO of Raycast",
    avatar: "/images/thomas-mann.jpg",
    companyLogo: "/images/logo-raycast.png",
    company: "Raycast",
  },
  {
    quote:
      "The simplicity and reliability of Resend allowed our engineers to focus on building features rather than troubleshooting email infrastructure.",
    name: "Amadeo Pellicce",
    role: "Connectors, Agents and Automations Lead at Replit",
    avatar: "/images/amadeo-pellicce.jpg",
    companyLogo: "/images/logo-replit.png",
    company: "Replit",
  },
  {
    quote:
      "We're a small team with a lot on our plates. Email infrastructure is something we don't want to think about, and with Resend we don't have to.",
    name: "Peter Suhm",
    role: "Ops at Tailwind",
    avatar: "/images/peter-suhm.jpg",
    companyLogo: "/images/logo-tailwind.png",
    company: "Tailwind",
  },
  {
    quote:
      "The best part about taking Resend into production was that there was no friction at all.",
    name: "Tara Nagar",
    role: "Software Engineer at Braintrust",
    avatar: "/images/tara-nagar.jpg",
    companyLogo: "/images/logo-braintrust.png",
    company: "Braintrust",
  },
  {
    quote:
      "The flexibility of Resend is what we value most. It allows us to quickly adapt and refine our email communications as our products evolve.",
    name: "Glauber Costa",
    role: "Founder and CEO at Turso",
    avatar: "/images/glauber-costa.jpg",
    companyLogo: "/images/logo-turso.png",
    company: "Turso",
  },
  {
    quote:
      "Resend is email with simpler APIs, better webhooks, and best-in-class debugging.",
    name: "Dan Farrelly",
    role: "CTO and Co-Founder of Inngest",
    avatar: "/images/dan-farrelly.jpg",
    companyLogo: "/images/logo-inngest.png",
    company: "Inngest",
  },
];

export default function TestimonialsMarquee() {
  const marqueeCards = [...testimonials, ...testimonials];

  return (
    <section className="mx-auto py-12 sm:py-24 px-0 overflow-hidden relative">
      {/* Title */}
      <h2 className="font-display effect-font-styling text-[3rem] md:text-[3.5rem] tracking-tighter leading-[120%] effect-font-gradient mb-2 text-center">
        Beyond expectations
      </h2>
      <p className="text-base md:text-[1.125rem] md:leading-[1.5] text-[#a1a4a5] font-normal text-balance mb-16 md:mb-24 text-center px-4">
        Resend is driving remarkable developer experiences that enable success{" "}
        <br className="hidden sm:block" />
        stories, empower businesses, and fuel growth across industries and individuals.
      </p>

      {/* Infinite Horizontal Marquee */}
      <div className="relative w-full overflow-hidden py-10 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max gap-6 animate-marquee hover:[animation-play-state:paused]">
          {marqueeCards.map((item, idx) => (
            <div
              key={`${item.name}-${idx}`}
              className="w-[380px] sm:w-[420px] shrink-0 flex flex-col justify-between rounded-2xl border border-[#292d30] bg-black p-6 relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(180deg, rgba(80, 80, 80, 0.15) 0%, rgba(0, 0, 0, 0) 70%)",
              }}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, rgba(0, 0, 0, 0) 60%, #000000 100%)",
                }}
              />
              <blockquote className="relative z-10 flex flex-col justify-between h-full">
                <p className="text-sm leading-[1.6] text-[#a1a4a5] font-normal">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="mt-6 flex flex-row items-center">
                  <div className="mr-4 flex items-center">
                    <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-white/10 bg-black">
                      <img
                        src={item.companyLogo}
                        alt={item.company}
                        className="h-full w-full object-cover"
                        loading="eager"
                      />
                    </div>
                    <div className="relative -ml-2.5 h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-black bg-zinc-900">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="h-full w-full object-cover"
                        loading="eager"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-normal text-white">{item.name}</span>
                    <span className="text-sm font-normal text-[#a1a4a5]">{item.role}</span>
                  </div>
                </div>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
