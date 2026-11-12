import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Resend · Email for developers",
  description: "The best way to reach humans instead of spam folders. Deliver transactional and marketing emails at scale.",
  icons: {
    icon: "/images/favicon-marketing@180x180.png",
    apple: "/images/favicon-marketing@180x180.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark bg-black">
      <body className="bg-black text-[#f0f0f0] min-h-screen selection:bg-[#9281f7]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
