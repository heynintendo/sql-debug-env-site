import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://sql-debug-env-site.vercel.app";

const TITLE = "sql-debug-env — RL environment for SQL debugging";
const DESCRIPTION =
  "An OpenEnv 1.0 reinforcement learning environment that trains agents to debug SQL. 33 tasks, a five-dimension partial-credit grader, live on Hugging Face Spaces.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s · sql-debug-env",
  },
  description: DESCRIPTION,
  applicationName: "sql-debug-env",
  authors: [{ name: "Anish Kishore" }],
  keywords: [
    "reinforcement learning",
    "OpenEnv",
    "SQL",
    "PyTorch",
    "RL environment",
    "code agents",
    "partial credit grading",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "sql-debug-env",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0B",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
