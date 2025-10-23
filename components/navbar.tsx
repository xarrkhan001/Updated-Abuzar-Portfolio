"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"
import { Menu, X, Download } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150 // Increased offset for better detection

      // Update navbar background - make it more responsive
      if (window.scrollY > 2) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Update active section based on scroll position
      const sections = navLinks.map((link) => link.href.substring(1))

      let currentSection = "home" // Default to home

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          const elementTop = rect.top + window.scrollY
          const elementBottom = elementTop + rect.height

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            currentSection = section
            break
          }
        }
      }

      setActiveSection(currentSection)
    }

    // Initial call to set correct active section
    handleScroll()

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 100 // Account for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      })
      setIsOpen(false) // Close mobile menu if open

      // Update active section immediately
      setActiveSection(href.substring(1))
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 border-b border-primary/10 backdrop-blur-xl",
        scrolled
          ? "bg-background/96 shadow-xl shadow-primary/10 border-primary/20"
          : "bg-background/85 shadow-lg shadow-primary/5 border-primary/10",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center"
          >
            <Link href="#home" className="flex items-center gap-3 group" onClick={(e) => scrollToSection(e, "#home")}>
              <div className="relative w-10 h-10 bg-gradient-to-br from-primary via-purple-600 to-purple-700 rounded-lg flex items-center justify-center overflow-hidden shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300 border border-primary/20">
                <span className="text-white font-bold text-xl">A</span>
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-background rounded-full border-2 border-primary shadow-sm"></div>
              </div>
              <div className="font-bold text-xl tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-600 to-purple-700">
                  Abuzar
                </span>
                <span className="text-primary">.</span>
                <span className="text-sm font-medium text-muted-foreground ml-1 bg-primary/10 px-2 py-0.5 rounded-full border border-primary/20">dev</span>
              </div>
            </Link>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group overflow-hidden",
                    activeSection === link.href.substring(1)
                      ? "text-primary bg-primary/15 shadow-lg border border-primary/30 text-primary font-semibold"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/5 hover:shadow-sm",
                  )}
                  onClick={(e) => scrollToSection(e, link.href)}
                >
                  <span className="relative z-10">{link.name}</span>
                  <div className={cn(
                    "absolute inset-0 bg-gradient-to-r transition-all duration-300",
                    activeSection === link.href.substring(1)
                      ? "from-primary/15 via-purple-600/10 to-primary/15"
                      : "from-primary/0 via-purple-600/0 to-primary/0 group-hover:from-primary/5 group-hover:via-purple-600/5 group-hover:to-primary/5"
                  )}></div>
                  {activeSection === link.href.substring(1) && (
                    <>
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-full shadow-sm"
                        transition={{ type: "spring", duration: 0.5 }}
                      />
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full shadow-sm"
                        transition={{ type: "spring", duration: 0.3 }}
                      />
                    </>
                  )}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.8 }}
            >
              <ModeToggle />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.9 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                asChild
                className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl border border-primary/20 hover:border-primary/30"
              >
                <a href="/Abu zar resume s.e.pdf" download="Abuzar_Khan_Resume.pdf">
                  <Download className="mr-2 h-4 w-4" /> Resume
                </a>
              </Button>
            </motion.div>
          </nav>

          <div className="flex md:hidden items-center space-x-3">
            <ModeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="hover:bg-primary/10 hover:shadow-md transition-all duration-300 border border-transparent hover:border-primary/20"
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.div>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-20 left-0 right-0 z-40 md:hidden border-t border-primary/10"
        >
          <div className="flex flex-col space-y-1 px-4 py-6 bg-background/95 backdrop-blur-xl border-b border-primary/5 shadow-xl">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 border",
                    activeSection === link.href.substring(1)
                      ? "text-primary bg-primary/15 border-primary/30 shadow-lg font-semibold"
                      : "text-muted-foreground border-transparent hover:text-primary hover:bg-primary/5 hover:border-primary/10",
                  )}
                  onClick={(e) => scrollToSection(e, link.href)}
                >
                  <span className={cn(
                    "w-2 h-2 rounded-full mr-3 transition-all duration-300",
                    activeSection === link.href.substring(1)
                      ? "bg-primary shadow-sm"
                      : "bg-primary/40 group-hover:bg-primary"
                  )}></span>
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.8 }}
              className="pt-4 border-t border-primary/10"
            >
              <Button
                asChild
                className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700 transition-all duration-300 shadow-lg border border-primary/20"
              >
                <a href="/Abu zar resume s.e.pdf" download="Abuzar_Khan_Resume.pdf">
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}

