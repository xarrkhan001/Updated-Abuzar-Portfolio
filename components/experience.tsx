"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Briefcase } from "lucide-react"

const experiences = [
  {
    title: "Frontend Developer",
    company: "CodeBrill",
    industry: "AI and Legal Tech",
    period: "May 2025 – Present",
    location: "Lahore, Pakistan",
    responsibilities: [
      "Architect and deliver scalable UI systems using TypeScript, React.js, Vue.js, and Tailwind CSS, reducing component development time by 35% through reusable design patterns adopted across the entire team.",
      "Drive frontend engineering on an AI-powered Legal Document Management System, enforcing strict TypeScript type safety and performance optimization across a codebase serving enterprise clients.",
      "Collaborate in Agile sprints with product and backend teams, consistently delivering production-quality features on schedule with zero critical post-release bugs.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Twenty Four Storage Company",
    industry: "Storage and Logistics",
    period: "Oct 2024 – Apr 2025",
    location: "Mirpur Dadyal",
    responsibilities: [
      "Engineered end-to-end full-stack applications using TypeScript, React.js, Node.js, and Express.js, improving overall system reliability and reducing downtime by 40% through optimized architecture.",
      "Designed and implemented a multi-layered RESTful API with JWT authentication, role-based access control, and server-side validation, eliminating critical security vulnerabilities across the platform.",
      "Established a full unit and integration testing suite that increased code coverage to 80% and cut production regression bugs by 50%.",
    ],
  },
  {
    title: "MERN Stack Developer",
    company: "Tech Emulsion",
    industry: "Software Development Agency",
    period: "Mar 2024 – Sep 2024",
    location: "Peshawar, Pakistan",
    responsibilities: [
      "Delivered 5+ full-stack MERN applications with TypeScript integration, owning the complete development lifecycle from database schema design to production deployment.",
      "Designed optimized MongoDB schemas and reusable React component libraries that accelerated feature delivery by 30% across multiple client projects.",
      "Converted Figma designs into pixel-perfect, fully responsive interfaces across mobile, tablet, and desktop, achieving 100% design accuracy on all delivered projects.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company: "Tech Pioneer",
    industry: "Software Development",
    period: "Apr 2023 – Nov 2023",
    location: "Peshawar, Pakistan",
    responsibilities: [
      "Developed reusable React.js component libraries during an 8-month structured internship program, with components integrated directly into the production codebase and praised in senior code reviews.",
      "Participated in full Agile sprint cycles including planning, standups, and code reviews, gaining end-to-end exposure from UI design through deployment and post-launch iteration.",
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
                        <p className="text-sm text-muted-foreground italic">{exp.industry}</p>
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

