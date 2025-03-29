"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail, MapPin, Phone, Download, ExternalLink, Code } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="home" className="py-20 md:py-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col space-y-6"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-2"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full shadow-sm"
            >
              Software Engineer
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
              Frontend Developer
            </motion.h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-lg text-muted-foreground max-w-md"
          >
            A Web Developer with two years of hands-on experience in designing, developing, and deploying web
            applications using various technologies and programming languages.
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
              className="group bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg"
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
              <a href="/AbuzarCv (2).pdf" download="Abuzar_Khan_Resume.pdf">
                <Download className="mr-2 h-4 w-4 group-hover:translate-y-1 transition-transform" /> Download CV
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="group border-primary/20 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <a href="https://abu-zar-latest-portfolio-radixui.vercel.app/" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" /> Portfolio
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-wrap gap-4 pt-2"
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
            className="flex gap-4 pt-2"
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
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-full blur opacity-70"
              style={{ zIndex: -1 }}
            ></motion.div>
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut" }}
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-background shadow-xl"
              style={{ marginTop: "20px" }} // Add margin to ensure image is fully visible
            >
              <Image
                src="/images/profile.png"
                alt="Abuzar Khan"
                fill
                className="object-cover object-center" // Ensure proper centering of the image
                priority
              />
            </motion.div>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-5 -right-5 bg-background rounded-full p-2 shadow-lg"
            >
              <div className="bg-gradient-to-r from-primary to-purple-600 rounded-full p-3 shadow-md">
                <code className="text-white font-bold text-sm">{"<coder/>"}</code>
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -top-2 -left-2 bg-background rounded-full p-1.5 shadow-lg"
            >
              <div className="bg-gradient-to-r from-purple-600 to-primary rounded-full p-2 shadow-md">
                <span className="text-white font-bold text-xs">React</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute top-1/4 -left-8 bg-background rounded-full p-1.5 shadow-lg"
            >
              <div className="bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full p-2 shadow-md">
                <span className="text-white font-bold text-xs">Next.js</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              className="absolute bottom-1/4 -left-6 bg-background rounded-full p-1.5 shadow-lg"
            >
              <div className="bg-gradient-to-r from-green-500 to-emerald-400 rounded-full p-2 shadow-md">
                <span className="text-white font-bold text-xs">Vue.js</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.5 }}
              className="absolute -top-4 right-1/4 bg-background rounded-full p-1.5 shadow-lg"
            >
              <div className="bg-gradient-to-r from-red-500 to-orange-400 rounded-full p-2 shadow-md">
                <span className="text-white font-bold text-xs">Redux</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.5 }}
              className="absolute top-1/3 -right-6 bg-background rounded-full p-1.5 shadow-lg"
            >
              <div className="bg-gradient-to-r from-green-600 to-green-400 rounded-full p-2 shadow-md">
                <span className="text-white font-bold text-xs">Node.js</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
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
    </section>
  )
}

