"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Briefcase } from "lucide-react"

const experiences = [
  {
    title: "Software Engineer (Frontend Developer)",
    company: "Tech Emulsion",
    period: "2024 - 2025",
    location: "Peshawar (Onsite)",
    responsibilities: [
      "Working as a Frontend Developer, building components for various web applications.",
      "Implementing user interfaces using React, Next.js, and Vue.js.",
      "Collaborating with the team to deliver high-quality web solutions.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Tech Pioneer",
    period: "2023 - 2024",
    location: "Peshawar",
    responsibilities: [
      "8 months work experience as Front-End Developer.",
      "Collaborated on several projects, contributing to their design, development, and implementation.",
      "Built responsive and interactive user interfaces using modern web technologies.",
    ],
  },
]

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="experience" className="py-16 relative">
      <div className="absolute top-40 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-10"
      >
        <div className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full shadow-sm"
          >
            Work History
          </motion.div>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold"
          >
            Professional Experience
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-primary to-purple-600 rounded-full mx-auto"
          ></motion.div>
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
                <Card className="border-primary/10 hover:border-primary/30 transition-colors duration-300 shadow-md hover:shadow-lg">
                  <CardHeader className="pb-2">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-gradient-to-br from-primary to-purple-600 shadow-md">
                        <Briefcase className="h-5 w-5 text-white" />
                      </div>
                      <div className="space-y-1">
                        <Badge variant="outline" className="mb-1 bg-primary/5 text-primary border-primary/20 shadow-sm">
                          {exp.period}
                        </Badge>
                        <CardTitle className="text-xl">{exp.title}</CardTitle>
                        <p className="text-lg font-medium text-primary">{exp.company}</p>
                        <span className="text-sm text-muted-foreground">{exp.location}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

