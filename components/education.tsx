"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, Award } from "lucide-react"

export default function Education() {
  return (
    <section id="education" className="py-16 relative">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl -z-10"></div>

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
            Academic Background
          </motion.div>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold"
          >
            Education & Certifications
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-primary to-purple-600 rounded-full mx-auto"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="border-primary/10 hover:border-primary/30 transition-colors duration-300 h-full shadow-lg">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-gradient-to-br from-primary to-purple-600 shadow-md">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">BS Software Engineering</CardTitle>
                    <p className="text-lg font-medium text-primary">Islamia College University Peshawar</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">01/07/2020 – 25/05/2024</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Completed a comprehensive program in Software Engineering, gaining expertise in various aspects of
                  software development, web technologies, and project management.
                </p>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="mt-4 flex flex-wrap gap-2"
                >
                  <Badge variant="secondary" className="bg-primary/5 shadow-sm">
                    Web Development
                  </Badge>
                  <Badge variant="secondary" className="bg-primary/5 shadow-sm">
                    Software Engineering
                  </Badge>
                  <Badge variant="secondary" className="bg-primary/5 shadow-sm">
                    Database Systems
                  </Badge>
                  <Badge variant="secondary" className="bg-primary/5 shadow-sm">
                    Programming
                  </Badge>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 gap-4">
              <Card className="border-primary/10 hover:border-primary/30 transition-colors duration-300 shadow-lg">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-gradient-to-br from-primary to-purple-600 shadow-md">
                      <GraduationCap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">FSC</CardTitle>
                      <p className="text-base font-medium text-primary">City College Peshawar</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">17/01/2020</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border-primary/10 hover:border-primary/30 transition-colors duration-300 shadow-lg">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-gradient-to-br from-primary to-purple-600 shadow-md">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">Certifications</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-3">
                    <motion.div whileHover={{ y: -3 }} className="p-3 rounded-lg border border-primary/10 bg-primary/5">
                      <h3 className="font-semibold">Basics and Advanced React</h3>
                      <p className="text-muted-foreground text-sm">Meta</p>
                      <Badge className="mt-2">2024</Badge>
                    </motion.div>

                    <motion.div whileHover={{ y: -3 }} className="p-3 rounded-lg border border-primary/10 bg-primary/5">
                      <h3 className="font-semibold">Programming with JavaScript</h3>
                      <p className="text-muted-foreground text-sm">Meta</p>
                      <Badge className="mt-2">2023</Badge>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

