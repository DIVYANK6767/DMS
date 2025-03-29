"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }
  }

  const validateForm = () => {
    let valid = true
    const newErrors = { ...errors }

    if (!formData.name) {
      newErrors.name = "Name is required"
      valid = false
    }

    if (!formData.email) {
      newErrors.email = "Email is required"
      valid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
      valid = false
    }

    if (!formData.subject) {
      newErrors.subject = "Subject is required"
      valid = false
    }

    if (!formData.message) {
      newErrors.message = "Message is required"
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      setIsSubmitting(true)

      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false)
        setIsSubmitted(true)
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      }, 1500)
    }
  }

  const faqs = [
    {
      question: "How does the waste tracking system work?",
      answer:
        "Our waste tracking system uses IoT-enabled GPS sensors attached to waste collection vehicles and containers. These sensors transmit real-time location data to our platform, allowing stakeholders to monitor waste movement from collection to disposal.",
    },
    {
      question: "What types of waste can the AI system classify?",
      answer:
        "Our AI classification system can identify and categorize various types of disaster waste, including construction debris, household items, hazardous materials, organic waste, and recyclable materials like plastics, metals, and paper.",
    },
    {
      question: "How accurate is the AI waste classification?",
      answer:
        "Our AI system has an accuracy rate of approximately 90-95% for most common waste types. The system continuously learns and improves through machine learning algorithms as more data is processed.",
    },
    {
      question: "Can the platform be used during active disaster response?",
      answer:
        "Yes, our platform is designed to be deployed rapidly during active disaster response. The mobile-friendly interface and offline capabilities ensure functionality even in areas with limited connectivity.",
    },
    {
      question: "How do you ensure data security and privacy?",
      answer:
        "We implement industry-standard encryption protocols, secure authentication methods, and regular security audits. All data is stored in compliance with relevant data protection regulations.",
    },
  ]

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-glow">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you. Get in touch with our team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <Card className="glass-effect border-primary/20 h-full">
              <CardContent className="p-6 space-y-6">
                <h2 className="text-2xl font-bold text-glow">Get In Touch</h2>
                <p className="text-gray-400">
                  Our team is here to help. Contact us with any questions or concerns about our disaster waste
                  management solutions.
                </p>

                <div className="space-y-4 mt-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-gray-400">distastermanagement77@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-gray-400">+91 73027 xxxxxx</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Address</h3>
                      <p className="text-gray-400">123,Bareilly,Uttar Pradesh, 243003</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <Card className="glass-effect border-primary/20">
              <CardContent className="p-6">
                {isSubmitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto animate-pulse-glow">
                      <Send className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-glow">Message Sent!</h3>
                    <p className="text-gray-400 max-w-md mx-auto">
                      Thank you for reaching out. We've received your message and will get back to you as soon as
                      possible.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)} className="mt-4 bg-primary hover:bg-primary/80">
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder=""
                          value={formData.name}
                          onChange={handleChange}
                          className={`bg-card/50 border-input ${errors.name ? "border-red-500" : ""}`}
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Your Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="name@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          className={`bg-card/50 border-input ${errors.email ? "border-red-500" : ""}`}
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="How can we help you?"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`bg-card/50 border-input ${errors.subject ? "border-red-500" : ""}`}
                      />
                      {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Your message here..."
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className={`bg-card/50 border-input ${errors.message ? "border-red-500" : ""}`}
                      />
                      {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                    </div>
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/80" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* FAQs Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-glow">Frequently Asked Questions</h2>
          <Card className="glass-effect border-primary/20">
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-gray-400">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

