"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail, MapPin, Phone, Download, ExternalLink, Code } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="home" className="py-6 md:py-10 relative overflow-hidden">
      {/* Dynamic Background Blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse-glow -z-10"></div>
      <div className="absolute bottom-0 -right-4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse-glow -z-10" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-3 pt-1"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-1"
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full shadow-sm"
              >
                Software Engineer | Full Stack Developer
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400"
              >
                Abuzar Khan
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-2xl md:text-3xl text-muted-foreground"
              >
                Full Stack Developer
              </motion.h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-lg text-muted-foreground max-w-md"
            >
              Results-driven Full Stack Developer with 3+ years of experience delivering scalable, production-ready web and desktop applications across healthcare, storage, and enterprise sectors.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Button
                asChild
                size="lg"
                className="group bg-gradient-to-r from-primary to-indigo-600 hover:from-primary/90 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Link href="#contact">
                  Contact Me <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="group border-primary/20 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <a href="/ab-cv01.pdf" download="Abuzar_Khan_CV.pdf">
                  <Download className="mr-2 h-4 w-4 group-hover:translate-y-1 transition-transform" /> Download CV
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-wrap gap-3 pt-1"
            >
              <div className="flex items-center text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-full shadow-sm">
                <MapPin className="h-4 w-4 mr-2 text-primary" />
                <span>Warsak Rd, Peshawar</span>
              </div>
              <a
                href="mailto:abuzarktk123@gmail.com"
                className="flex items-center text-muted-foreground hover:text-primary transition-colors bg-muted/50 px-3 py-1.5 rounded-full shadow-sm hover:shadow-md"
              >
                <Mail className="h-4 w-4 mr-2 text-primary" />
                <span>abuzarktk123@gmail.com</span>
              </a>
              <a
                href="tel:+923178521144"
                className="flex items-center text-muted-foreground hover:text-primary transition-colors bg-muted/50 px-3 py-1.5 rounded-full shadow-sm hover:shadow-md"
              >
                <Phone className="h-4 w-4 mr-2 text-primary" />
                <span>+92 317 8521144</span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="flex gap-3 pt-1"
            >
              <motion.a
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/xarrkhan001"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-primary/10 transition-colors shadow-sm hover:shadow-md"
              >
                <Github className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.linkedin.com/in/abu-zar-04529030a"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-primary/10 transition-colors shadow-sm hover:shadow-md"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href="https://abu-zar-latest-portfolio-radixui.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-primary/10 transition-colors shadow-sm hover:shadow-md"
              >
                <Code className="h-5 w-5" />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Solid Gradient Border using box-shadow */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut" }}
                className="relative w-72 h-72 md:w-88 md:h-88 lg:w-[24rem] lg:h-[24rem] rounded-full overflow-hidden shadow-2xl p-1"
                style={{
                  marginTop: "8px",
                  backgroundImage: 'linear-gradient(45deg, #6366f1, #0ea5e9, #4f46e5, #6366f1)',
                  backgroundSize: '300% 300%',
                  animation: 'gradient-shift 3s ease-in-out infinite',
                  boxShadow: '0 0 20px rgba(99, 102, 241, 0.4), inset 0 0 20px rgba(99, 102, 241, 0.1)'
                }}
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-background">
                  <Image
                    src="/abuzar-suit.jpg"
                    alt="Abuzar Khan Avatar"
                    fill
                    className="object-cover"
                    style={{ objectPosition: 'center 10%', transform: 'scale(1.1)' }}
                    priority
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -top-4 left-[10%] bg-background rounded-full p-1.5 shadow-lg z-10"
              >
                <div className="bg-gradient-to-r from-indigo-500 to-sky-400 rounded-full p-2 shadow-md">
                  <span className="text-white font-bold text-xs">React</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute top-[25%] -left-12 bg-background rounded-full p-1.5 shadow-lg z-10"
              >
                <div className="bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full p-2 shadow-md">
                  <span className="text-white font-bold text-xs">Next.js</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                className="absolute top-[70%] -left-12 bg-background rounded-full p-1.5 shadow-lg z-10"
              >
                <div className="bg-gradient-to-r from-green-500 to-emerald-400 rounded-full p-2 shadow-md">
                  <span className="text-white font-bold text-xs">Vue.js</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.6, duration: 0.5 }}
                className="absolute -top-4 right-[10%] bg-background rounded-full p-1.5 shadow-lg z-10"
              >
                <div className="bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full p-2 shadow-md">
                  <span className="text-white font-bold text-xs">Electron Js</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.8, duration: 0.5 }}
                className="absolute top-[25%] -right-12 bg-background rounded-full p-1.5 shadow-lg z-10"
              >
                <div className="bg-gradient-to-r from-green-600 to-green-400 rounded-full p-2 shadow-md">
                  <span className="text-white font-bold text-xs">Node.js</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 2, duration: 0.5 }}
                className="absolute top-[55%] -right-16 bg-background rounded-full p-1.5 shadow-lg z-10"
              >
                <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full p-2 shadow-md">
                  <span className="text-white font-bold text-xs">React Native</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 2.2, duration: 0.5 }}
                className="absolute top-[85%] -right-4 bg-background rounded-full p-1.5 shadow-lg z-10"
              >
                <div className="bg-gradient-to-r from-green-700 to-green-500 rounded-full p-2 shadow-md">
                  <span className="text-white font-bold text-xs">Django</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 2.4, duration: 0.5 }}
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-background rounded-full p-2 shadow-lg z-10"
              >
                <div className="bg-gradient-to-r from-indigo-600 to-primary rounded-full p-3 shadow-md">
                  <code className="text-white font-bold text-sm">{"<coder/>"}</code>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            className="w-6 h-10 border-2 border-primary rounded-full flex justify-center p-1 shadow-md"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
              className="w-1 h-1 bg-primary rounded-full"
            ></motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}