"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ArrowUp, Code } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t py-12 mt-10 relative">
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 via-purple-500/50 to-primary/50"></div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-8">
          <Link
            href="#home"
            className="p-3 bg-primary/10 hover:bg-primary/20 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5 text-primary" />
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-purple-600 rounded-md flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                Abuzar Khan
              </h3>
            </div>
            <p className="text-muted-foreground mt-1">Software Engineer</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-3"
          >
            <div className="flex items-center gap-6">
              <motion.a
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/abuzarkhan1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-primary/10 transition-colors shadow-sm hover:shadow-md"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.linkedin.com/in/abu-zar-04529030a"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-primary/10 transition-colors shadow-sm hover:shadow-md"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                href="mailto:abuzarktk123@gmail.com"
                className="p-3 rounded-full bg-muted hover:bg-primary/10 transition-colors shadow-sm hover:shadow-md"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href="https://abu-zar-latest-portfolio-radixui.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-primary/10 transition-colors shadow-sm hover:shadow-md"
                aria-label="Portfolio"
              >
                <Code className="h-5 w-5" />
              </motion.a>
            </div>
            <a
              href="mailto:abuzarktk123@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              abuzarktk123@gmail.com
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center text-muted-foreground text-sm"
          >
            &copy; {currentYear} Abuzar Khan. All rights reserved.
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

