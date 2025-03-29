"use client"

import { useEffect } from "react"
import { useTheme } from "next-themes"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Courses from "@/components/courses"
import Languages from "@/components/languages"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  const { setTheme, resolvedTheme } = useTheme()

  // Force theme to be applied on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [setTheme])

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="fixed top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="fixed bottom-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10"></div>

      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Courses />
        <Languages />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}

