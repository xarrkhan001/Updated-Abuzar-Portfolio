"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen } from "lucide-react"

const courses = [
  {
    title: "Introduction to Front-End Development",
    provider: "Meta",
    icon: BookOpen,
  },
  {
    title: "React Basics",
    provider: "Meta",
    icon: BookOpen,
  },
  {
    title: "Advanced React",
    provider: "Meta",
    icon: BookOpen,
  },
  {
    title: "Programming with JavaScript",
    provider: "Meta",
    icon: BookOpen,
  },
]

export default function Courses() {
  return (
    <section id="courses" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Courses</h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader className="pb-2">
                  <course.icon className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-base">{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary">{course.provider}</Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

