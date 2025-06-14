import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import {
  Kumbh_Sans,
  Figtree,
  Chivo,
  Rajdhani,
  Raleway,
  Mulish,
  Pattaya,
  Recursive,
  Gantari,
  Overpass_Mono,
  Kaushan_Script,
  Exo_2,
  Crimson_Pro,
  Caveat_Brush,
  Quicksand,
  Maven_Pro,
} from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Andrew Yong",
  description: "Andrew Yong portfolio",
};

// Portfolio fonts:

const kumbhSans = Kumbh_Sans({
  variable: "--font-kumbh-sans",
  subsets: ["latin"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

// PROJECT: inquiryon

const chivo = Chivo({
  variable: "--font-inquiryon-header",
  subsets: ["latin"],
});

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
});

// just for the logo
const rajdhani = Rajdhani({
  variable: "--font-inquiryon-logo",
  subsets: ["latin"],
  weight: "600",
});

// PROJECT: concaly

const raleway = Raleway({
  variable: "--font-concaly-header",
  subsets: ["latin"],
});

// NOTE: mulish for body

// logo
const pattaya = Pattaya({
  variable: "--font-concaly-logo",
  subsets: ["latin"],
  weight: "400",
});

// PROJECT: Mudboard

const headerFont = Recursive({
  variable: "--font-mudboard-header",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const bodyFont = Gantari({
  variable: "--font-mudboard-body",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const monoFont = Overpass_Mono({
  variable: "--font-mudboard-mono",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

// PROJECT: PCT

const pctLogo = Kaushan_Script({
  variable: "--font-pct-logo",
  subsets: ["latin"],
  weight: "400",
});

const pctHeader = Exo_2({
  variable: "--font-pct-header",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const pctBody = Crimson_Pro({
  variable: "--font-pct-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

// PROJECT: Jonadrew

const jonadrewLogo = Caveat_Brush({
  variable: "--font-jonadrew-logo",
  subsets: ["latin"],
  weight: "400", // Caveat doesn't need multiple weights usually
});

const jonadrewHeader = Quicksand({
  variable: "--font-jonadrew-header",
  subsets: ["latin"],
  weight: ["400", "500", "600"], // pick based on what you use
});

const jonadrewBody = Maven_Pro({
  variable: "--font-jonadrew-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="6586e2e2-2f22-44d5-b317-4fe886f21085"
        />
      </head>
      <body
        className={`
        ${kumbhSans.variable}
        ${figtree.variable}
        ${chivo.variable}
        ${mulish.variable}
        ${rajdhani.variable}
        ${raleway.variable}
        ${pattaya.variable}
        ${headerFont.variable}
        ${bodyFont.variable}
        ${monoFont.variable}
        ${pctLogo.variable}
        ${pctHeader.variable}
        ${pctBody.variable}
        ${jonadrewLogo.variable}
        ${jonadrewHeader.variable}
        ${jonadrewBody.variable}
        antialiased
      `}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
