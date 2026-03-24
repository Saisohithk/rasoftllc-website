import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RA SOFT LLC | IT Staffing & Technology Solutions",
  description:
    "Premier IT staffing and workforce solutions for federal, commercial, and cleared environments. Headquartered in the Washington D.C. metro area, serving clients nationwide.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
