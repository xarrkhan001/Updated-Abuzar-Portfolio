import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Abuzar Khan | Software Engineer",
  description:
    "Portfolio website of Abuzar Khan, a Software Engineer specializing in frontend development with React, Next.js, and Vue.js.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          forcedTheme={undefined}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'