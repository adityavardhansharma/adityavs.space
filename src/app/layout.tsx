import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { Navbar } from "../components/navbar"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nexxel.dev"),
  title: {
    default: "Aditya Vardhan Sharma",
    template: "%s | Aditya Vardhan Sharma",
  },
  description:
    "Master's student in Computer Science at DCU, building with AI and AI agents.",
  openGraph: {
    title: "Aditya Vardhan Sharma",
    description:
      "Master's student in Computer Science at DCU, building with AI and AI agents.",
    url: "https://www.nexxel.dev",
    siteName: "Aditya Vardhan Sharma",
    locale: "en_US",
    type: "website",
    images: ["https://www.nexxel.dev/og/home"],
  },
  robots: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  twitter: {
    title: "Aditya Vardhan Sharma",
    card: "summary_large_image",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable} antialiased min-h-screen font-mono`}
      >
        <div className="max-w-4xl mx-auto px-5 sm:px-4 py-8">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  )
}
