"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      console.log(formData)
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      }, 3000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-16 relative">
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl -z-10"></div>

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
            Get In Touch
          </motion.div>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold"
          >
            Contact Me
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
            Feel free to reach out if you have any questions or want to work together.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <Card className="h-full border-primary/10 hover:border-primary/30 transition-colors duration-300 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Send Me a Message</CardTitle>
                <CardDescription>Fill out the form and I'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-10 text-center"
                  >
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4 shadow-md">
                      <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border-primary/20 focus:border-primary/50 shadow-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border-primary/20 focus:border-primary/50 shadow-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <Input
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="border-primary/20 focus:border-primary/50 shadow-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="border-primary/20 focus:border-primary/50 shadow-sm"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" /> Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <Card className="h-full border-primary/10 hover:border-primary/30 transition-colors duration-300 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
                <CardDescription>Feel free to reach out through any of these channels.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Card className="border-primary/10 bg-background/80 backdrop-blur-sm shadow-lg">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-gradient-to-br from-primary to-purple-600 shadow-sm">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <a
                          href="mailto:abuzarktk123@gmail.com"
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          abuzarktk123@gmail.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-primary/10 bg-background/80 backdrop-blur-sm shadow-lg">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-gradient-to-br from-primary to-purple-600 shadow-sm">
                        <Phone className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-medium">Phone</h3>
                        <a
                          href="tel:+923178521144"
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          +92 317 8521144
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-primary/10 bg-background/80 backdrop-blur-sm shadow-lg">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-gradient-to-br from-primary to-purple-600 shadow-sm">
                        <MapPin className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-medium">Location</h3>
                        <p className="text-sm text-muted-foreground">Warsak Rd, Peshawar</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <div className="pt-6 space-y-4">
                  <Card className="border-primary/10 bg-background shadow-md">
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-lg mb-2">Office Hours</h3>
                      <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-muted-foreground">Saturday: 10:00 AM - 2:00 PM</p>
                      <p className="text-muted-foreground">Sunday: Closed</p>
                    </CardContent>
                  </Card>

                  <Card className="border-primary/10 bg-background shadow-md">
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-lg mb-2">Preferred Contact Method</h3>
                      <p className="text-muted-foreground">
                        Email is the best way to reach me for project inquiries and collaborations.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

