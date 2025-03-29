"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

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

        <div className="grid grid-cols-1 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="border-primary/10 hover:border-primary/30 transition-colors duration-300 shadow-lg">
              <CardContent className="p-6 space-y-4">
                <p className="text-lg leading-relaxed">
                  A Web Developer with two years of hands-on experience in designing, developing, and deploying web
                  applications using various technologies and programming languages. Currently doing onsite job as a
                  Software Engineer at Tech Emulsion, specializing in frontend development with React, Next.js, and
                  Vue.js.
                </p>
                <p className="text-lg leading-relaxed">
                  My passion lies in creating intuitive and responsive user interfaces that provide exceptional user
                  experiences. I'm constantly learning and adapting to new technologies to stay at the forefront of web
                  development.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">React.js</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Next.js</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Vue.js</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">JavaScript</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">TypeScript</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

