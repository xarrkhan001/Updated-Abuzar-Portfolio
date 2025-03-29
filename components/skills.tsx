"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Web Development",
    icon: "💻",
    skills: [
      { name: "JavaScript", type: "Expert" },
      { name: "TypeScript", type: "" },
      { name: "React.js", type: "" },
      { name: "Next.js", type: "" },
      { name: "Vue.js", type: "" },
      { name: "HTML/CSS", type: "" },
      { name: "Tailwind CSS", type: "" },
      { name: "MUI", type: "" },
      { name: "APIs Integration", type: "" },
      { name: "GraphQL", type: "" },
      { name: "Redux Toolkit", type: "" },
    ],
  },
  {
    title: "Backend & Databases",
    icon: "🔧",
    skills: [
      { name: "Node.js", type: "" },
      { name: "Express.js", type: "" },
      { name: "MongoDB", type: "" },
      { name: "Firebase", type: "" },
      { name: "Sanity", type: "" },
    ],
  },
  {
    title: "Animation & UI",
    icon: "✨",
    skills: [
      { name: "Framer Motion", type: "" },
      { name: "Vuetify", type: "" },
      { name: "Shadcn UI", type: "" },
      { name: "Radix UI", type: "" },
      { name: "Responsive Design", type: "" },
    ],
  },
  {
    title: "Languages",
    icon: "🌐",
    skills: [
      { name: "English", type: "" },
      { name: "Urdu", type: "" },
      { name: "Pashto", type: "" },
    ],
  },
]

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" className="py-16 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10"></div>

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
            My Expertise
          </motion.div>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold"
          >
            Skills & Technologies
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-primary to-purple-600 rounded-full mx-auto"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <Card className="h-full border-primary/10 hover:border-primary/30 transition-colors duration-300 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Technical Proficiency</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Frontend</span>
                    <span className="text-xs text-muted-foreground">95%</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "95%" }}
                      transition={{ duration: 1, delay: 0.6 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-primary to-purple-600 rounded-full"
                    ></motion.div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Backend</span>
                    <span className="text-xs text-muted-foreground">80%</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "80%" }}
                      transition={{ duration: 1, delay: 0.7 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-primary to-purple-600 rounded-full"
                    ></motion.div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">UI/UX</span>
                    <span className="text-xs text-muted-foreground">90%</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "90%" }}
                      transition={{ duration: 1, delay: 0.8 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-primary to-purple-600 rounded-full"
                    ></motion.div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">React/Next.js</span>
                    <span className="text-xs text-muted-foreground">95%</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "95%" }}
                      transition={{ duration: 1, delay: 0.9 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-primary to-purple-600 rounded-full"
                    ></motion.div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Vue.js</span>
                    <span className="text-xs text-muted-foreground">85%</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      transition={{ duration: 1, delay: 1 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-primary to-purple-600 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {skillCategories.map((category, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
                <Card className="h-full border-primary/10 hover:border-primary/30 transition-colors duration-300 overflow-hidden shadow-md hover:shadow-lg">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{category.icon}</span>
                      <CardTitle>{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, idx) => (
                        <motion.div key={idx} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="px-3 py-1.5 bg-primary/5 hover:bg-primary/10 transition-colors shadow-sm"
                          >
                            {skill.name}
                            {skill.type && <span className="ml-1 text-xs opacity-70">({skill.type})</span>}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
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

