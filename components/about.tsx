"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-16 relative">
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full shadow-sm"
          >
            About Me
          </motion.div>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold"
          >
            My Journey
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-primary to-purple-600 rounded-full mx-auto"
          ></motion.div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-stretch pt-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative h-[400px] md:h-auto w-full md:w-[320px] shrink-0 group mx-auto md:mx-0"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Card className="h-full w-full overflow-hidden border-primary/20 glass-card relative z-10">
              <Image
                src="/abai.png"
                alt="Abuzar Khan Journey"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </Card>
            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex-grow"
          >
            <Card className="glass-card hover:border-primary/30 transition-all duration-500 shadow-2xl hover:shadow-primary/5 h-full">
              <CardContent className="p-8 space-y-6">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  A Full Stack Engineer with <span className="text-primary font-semibold">four years</span> of industry experience working with multiple companies in developing web, mobile apps, and desktop applications (offline, online, and hybrid).
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Currently running my own virtual company called <span className="text-primary font-semibold">ASH Cloud</span> with a talented team, specializing in web development, mobile app development, and AI solutions. I lead the technical direction and development of innovative projects across multiple platforms.
                </p>
                <div className="flex flex-wrap gap-2 pt-4">
                  {["React.js", "Next.js", "Vue.js", "JavaScript", "TypeScript"].map((skill) => (
                    <span 
                      key={skill} 
                      className="px-4 py-1.5 bg-primary/5 border border-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/10 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

