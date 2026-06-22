"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Code2, ArrowRight, Play, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

const projects = [
  {
    title: "MediCore PMS",
    description:
      "A high-end retail and wholesale Pharmacy Management System. Manage inventory, client/customer records, detailed reporting, and daily notifications. Features a secure admin control system for temporary access management.",
    tags: ["Pharmacy Management", "Desktop App", "Offline-Hybrid", "Inventory"],
    image: "/images/pms-thumbnail.png",
    video: "/abu.mp4",
  },
  {
    title: "Sehat Kor",
    description:
      "Sehat Kor is a not-for-profit digital platform by Sehat Kor Foundation, built to connect healthcare providers with patients in a transparent, accessible, and meaningful way. Our mission is to make healthcare easier to reach, understand, and trust.",
    tags: ["Healthcare", "Non-Profit", "React", "Full Stack", "Next.js"],
    image: "/images/projects.jpg",
    liveLink: "https://sehatkor.pk/",
  },

  {
    title: "Legal Assistant",
    description:
      "An AI-powered platform that generates and edits legal documents like Word and PDF files. Developed under CoderBrill, I contributed to this project by enhancing user interaction and refining document workflow experiences.",
    tags: ["AI", "LegalTech", "Next.js", "UI/UX", "PDF/Word"],
    image: "/images/projects3.webp",
    liveLink: "https://app.legalassistant.au/",
  },
  {
    title: "PodBCN",
    description:
      "Built a component where users can create an account and add all their social media links in one place, making it easy to share multiple profiles at once.",
    tags: ["Frontend", "React", "Next.js", "UI/UX"],
    image: "/images/projects1.webp",
    liveLink: "https://podbcn.techemulsion.com/",
  },
  {
    title: "Rains E-commerce",
    description:
      "An e-commerce platform selling products like jackets, purses, and other items designed specifically for rainy weather. Worked extensively on the frontend to enhance the user experience.",
    tags: ["E-commerce", "Frontend", "React", "UI/UX"],
    image: "/images/projects2.webp",
    liveLink: "https://www.rains.com/",
  },

  {
    title: "Hospital Management System",
    description:
      "A comprehensive hospital management system with patient registration, appointment scheduling, medical records, staff management, billing, and real-time dashboard analytics.",
    tags: ["Healthcare", "Management System", "React", "Full Stack", "Next.js"],
    image: "/images/projects5.webp",
    liveLink: "https://hospital-management-wheat-iota.vercel.app/",
  },
  {
    title: "Dukaan E-commerce",
    description:
      "A modern e-commerce platform built with Next.js featuring product catalog, shopping cart, user authentication, payment integration, order management, and comprehensive admin dashboard for online store operations.",
    tags: ["E-commerce", "Next.js", "Full Stack", "Payment Integration", "Admin Dashboard"],
    image: "/images/projects5.jpg",
    liveLink: "https://dukaan-henna.vercel.app/",
  },
  {
    title: "KCD Notify",
    description:
      "Administration web app that digitized result distribution for Khyber College of Dentistry, replacing manual processes and reducing notification delivery time from days to seconds. Features automated Email and WhatsApp broadcast with a secure RBAC admin dashboard.",
    tags: ["MERN Stack", "Node.js", "Email API", "WhatsApp API", "React.js"],
    image: "/images/projects6.webp",
    liveLink: "https://kcd-notify-5jq3.vercel.app/login",
  },
]

export default function Projects() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const [selectedTitle, setSelectedTitle] = useState("")

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
    <section id="projects" className="py-16 relative">
      <div className="absolute top-40 right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl -z-10"></div>

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
            My Work
          </motion.div>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold"
          >
            Featured Projects
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-primary to-sky-400 rounded-full mx-auto"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Explore my recent projects showcasing my skills in web development, desktop applications, and more.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -12, transition: { duration: 0.3 } }}
              className="group"
            >
              <Card className="glass-card h-full flex flex-col overflow-hidden hover:border-primary/40 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-primary/10">
                <div
                  className="relative overflow-hidden h-48 cursor-pointer"
                  onClick={() => {
                    if (project.video) {
                      setSelectedVideo(project.video)
                      setSelectedTitle(project.title)
                    }
                  }}
                >
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-300"></div>

                  {project.video && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-primary/20 backdrop-blur-[2px]">
                      <div className="bg-white/20 p-4 rounded-full border border-white/40 shadow-2xl backdrop-blur-md">
                        <Play className="h-8 w-8 text-white fill-white" />
                      </div>
                    </div>
                  )}

                  <div className="absolute top-2 right-2">
                    <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm shadow-sm">
                      <Code2 className="h-3 w-3 mr-1" /> {project.tags[0]}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="flex flex-wrap gap-2 pt-2">
                    {project.tags.slice(1).map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="bg-primary/5 shadow-sm">
                        {tag}
                      </Badge>
                    ))}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground line-clamp-4">{project.description}</p>
                </CardContent>
                <CardFooter className="flex gap-2 border-t p-4 mt-auto">
                  {project.liveLink ? (
                    <Button
                      variant="default"
                      size="sm"
                      asChild
                      className="w-full bg-gradient-to-r from-primary to-indigo-600 hover:from-primary/90 hover:to-indigo-700 transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" /> Live Demo
                      </a>
                    </Button>
                  ) : (
                    <Button
                      variant="default"
                      size="sm"
                      className="w-full bg-gradient-to-r from-primary to-indigo-600 hover:from-primary/90 hover:to-indigo-700 transition-all duration-300 shadow-sm hover:shadow-md"
                      onClick={() => {
                        setSelectedVideo(project.video!)
                        setSelectedTitle(project.title)
                      }}
                    >
                      <Play className="h-4 w-4 mr-2 fill-current" /> Watch Video Demo
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button asChild variant="outline" className="mt-8 group shadow-sm hover:shadow-md">
            <a href="https://abu-zar-latest-portfolio-radixui.vercel.app/" target="_blank" rel="noopener noreferrer">
              View More Projects
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>

        {/* Video Dialog */}
        <Dialog open={!!selectedVideo} onOpenChange={(open) => !open && setSelectedVideo(null)}>
          <DialogContent className="max-w-3xl p-0 overflow-hidden bg-black border-none ring-offset-0 focus:ring-0">
            <DialogHeader className="sr-only">
              <DialogTitle>{selectedTitle}</DialogTitle>
              <DialogDescription>Video demo for {selectedTitle}</DialogDescription>
            </DialogHeader>
            <div className="relative aspect-video w-full group">
              {selectedVideo && (
                <video
                  src={selectedVideo}
                  controls
                  autoPlay
                  className="w-full h-full"
                >
                  Your browser does not support the video tag.
                </video>
              )}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-white hover:bg-white/20 transition-colors z-50 backdrop-blur-sm rounded-full"
                onClick={() => setSelectedVideo(null)}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-xl font-bold text-white">{selectedTitle}</h3>
            </div>
          </DialogContent>
        </Dialog>
      </motion.div>
    </section>
  )
}

