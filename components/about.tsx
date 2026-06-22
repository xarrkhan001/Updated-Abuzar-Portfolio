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

        <div className="max-w-3xl mx-auto pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <Card className="glass-card hover:border-primary/40 transition-all duration-500 shadow-2xl hover:shadow-primary/5">
              <CardContent className="p-6 md:p-10 space-y-6">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Results-driven <span className="text-primary font-semibold">Full Stack Developer</span> with 3+ years of experience delivering scalable, production-ready web and desktop applications across healthcare, storage, and enterprise sectors.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Specialized in <span className="text-primary font-semibold">TypeScript, React.js, Node.js</span>, and RESTful API development with a proven track record of improving application performance, reducing security vulnerabilities, and shipping high-quality features in fast-paced Agile environments. Immediately available and open to relocation.
                </p>
                <div className="flex flex-wrap gap-2 pt-4">
                  {["TypeScript", "React.js", "Next.js", "Vue.js", "Node.js", "Express.js", "React Native", "Electron.js", "MongoDB", "PostgreSQL"].map((skill) => (
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

