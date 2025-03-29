"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const languages = [
  {
    name: "English",
    proficiency: 90,
  },
  {
    name: "Urdu",
    proficiency: 100,
  },
  {
    name: "Pashto",
    proficiency: 100,
  },
]

export default function Languages() {
  return (
    <section id="languages" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Languages</h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Language Proficiency</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {languages.map((language, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{language.name}</span>
                  <span className="text-muted-foreground">{language.proficiency}%</span>
                </div>
                <Progress value={language.proficiency} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}

