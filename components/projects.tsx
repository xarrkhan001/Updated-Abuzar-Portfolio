"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Code2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const projects = [

   {
  title: "Legal Assistant",
  description:
    "An AI-powered platform that generates and edits legal documents like Word and PDF files. Developed under CoderBrill, I contributed to this project by enhancing user interaction and refining document workflow experiences.",
  tags: ["AI", "LegalTech", "Next.js", "UI/UX", "PDF/Word"],
  image: "/images/projects3.webp",
  liveLink: "https://app.dev.legalassistant.au/",
}
,
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
    title: "Heritage Walk Footwear",
    description:
      "An e-commerce platform for 'Heritage Walk Footwear' specializing in Peshawari and Charsadda chapplas. Built with Next.js, using Stripe, Firebase, and Sanity for payments, authentication, and product management.",
    tags: ["E-commerce", "Full Stack", "Next.js", "Firebase", "Stripe"],
    image: "/images/projects5.webp",
    liveLink: "https://heritage-walk-footer-nextjs-project-eccomerce.vercel.app/",
  },
  {
    title: "AI Image Generation",
    description:
      "An AI-powered image generation application that allows users to create unique images based on text prompts. Built with modern web technologies and integrated with AI APIs.",
    tags: ["AI", "React", "API Integration", "Frontend"],
    image: "/images/projects5.jpg",
    liveLink: "https://abuzar-ai-image-generation.vercel.app/",
  },
  {
    title: "Voice Chat App",
    description:
      "A real-time voice chat application that enables users to communicate through voice messages. Features include user authentication, real-time messaging, and voice recording capabilities.",
    tags: ["Real-time", "React", "Firebase", "Voice API"],
    image: "/images/projects6.webp",
    liveLink: "https://voice-chat-chatapp.vercel.app/",
  },
  {
    title: "Portfolio with Radix UI",
    description:
      "A modern portfolio website built with Next.js and Radix UI, showcasing projects and skills in an elegant and responsive design.",
    tags: ["Portfolio", "Next.js", "Radix UI", "Frontend"],
    image: "/images/projects.jpg",
    liveLink: "https://abu-zar-latest-portfolio-radixui.vercel.app/",
  },
]

export default function Projects() {
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
            className="h-1 bg-gradient-to-r from-primary to-purple-600 rounded-full mx-auto"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Explore my recent projects showcasing my skills in web development, e-commerce, and more.
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
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group"
            >
              <Card className="h-full flex flex-col overflow-hidden border-primary/10 hover:border-primary/30 transition-colors duration-300 shadow-md hover:shadow-xl">
                <div className="relative overflow-hidden h-48">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-2 right-2">
                    <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm shadow-sm">
                      <Code2 className="h-3 w-3 mr-1" /> {project.tags[0]}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                    {project.title}
                    <motion.div
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      className="h-0.5 bg-primary/50 rounded-full"
                    ></motion.div>
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
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
                <CardFooter className="flex gap-2 border-t p-4">
                  <Button
                    variant="default"
                    size="sm"
                    asChild
                    className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700 transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" /> Live Demo
                    </a>
                  </Button>
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
      </motion.div>
    </section>
  )
}

