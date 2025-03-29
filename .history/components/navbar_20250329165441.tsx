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
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Update active section based on scroll position
      const sections = navLinks.map((link) => link.href.substring(1))

      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false) // Close mobile menu if open
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-background/90 backdrop-blur-md border-b shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center"
          >
            <Link href="#home" className="flex items-center gap-2 group" onClick={(e) => scrollToSection(e, "#home")}>
              <div className="relative w-8 h-8 bg-gradient-to-br from-primary to-purple-600 rounded-md flex items-center justify-center overflow-hidden shadow-md group-hover:shadow-lg transition-all duration-300">
                <span className="text-white font-bold text-lg">A</span>
                <div className="absolute -bottom-3 -right-3 w-4 h-4 bg-background dark:bg-background rounded-full border-2 border-primary"></div>
              </div>
              <div className="font-bold text-xl tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                  Abuzar
                </span>
                <span className="text-primary">.</span>
                <span className="text-xs font-normal text-muted-foreground ml-1">dev</span>
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
                    "px-3 py-2 text-sm font-medium rounded-md transition-all duration-300",
                    activeSection === link.href.substring(1)
                      ? "text-primary bg-primary/10 shadow-sm"
                      : "hover:text-primary hover:bg-primary/5",
                  )}
                  onClick={(e) => scrollToSection(e, link.href)}
                >
                  {link.name}
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
                className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <a href="/resume.pdf" download="Abuzar_Khan_Resume.pdf">
                  <Download className="mr-2 h-4 w-4" /> Resume
                </a>
              </Button>
            </motion.div>
          </nav>

          <div className="flex md:hidden items-center space-x-2">
            <ModeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="hover:bg-primary/10">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
          className="md:hidden"
        >
          <div className="flex flex-col space-y-3 px-4 py-6 bg-background/95 backdrop-blur-sm border-b shadow-md">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors flex items-center",
                  activeSection === link.href.substring(1)
                    ? "text-primary bg-primary/10"
                    : "hover:text-primary hover:bg-primary/5",
                )}
                onClick={(e) => scrollToSection(e, link.href)}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2 opacity-70"></span>
                {link.name}
              </Link>
            ))}
            <Button
              asChild
              className="w-full mt-2 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700 transition-all duration-300 shadow-md"
            >
              <a href="/resume.pdf" download="Abuzar_Khan_Resume.pdf">
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </a>
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}

