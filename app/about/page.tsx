"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Recycle, Shield, Leaf } from "lucide-react"

export default function AboutPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const teamMembers = [
    {
      name: "Vedanshi Singh",
      role: "Founder & CEO",
      bio: "Environmental scientist with 2+ years of experience in waste management and disaster response.",
      image: "/vedanshi.jpg",
    },
    {
      name: "Tejashwi Lisa",
      role: "CTO",
      bio: "AI and IoT specialist with a background in developing sustainable technology solutions.",
      image: "/vedanshi.jpg",
    },
    {
      name: "Neha Rathore",
      role: "Operations Director",
      bio: "Expert in logistics and disaster management with experience working with international relief organizations.",
      image: "/vedanshi.jpg",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative hero-pattern py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 to-background/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-glow">About Us</h1>
            <p className="text-xl text-gray-300 mb-8">
              We're on a mission to revolutionize disaster waste management with cutting-edge technology and sustainable
              practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-glow">Our Mission</h2>
              <p className="text-lg text-gray-300">
                To revolutionize disaster waste management with cutting-edge technology and sustainable practices,
                ensuring a cleaner, safer environment for affected communities.
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-glow pt-6">Our Vision</h2>
              <p className="text-lg text-gray-300">
                A world where disaster recovery is swift, efficient, and environmentally responsible, minimizing the
                long-term impact of waste on communities and ecosystems.
              </p>
              <div className="pt-4">
                <Link href="/contact">
                  <Button className="bg-primary hover:bg-primary/80 text-white">
                    Get in Touch
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative h-[400px] w-full animate-pulse-glow rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Our Mission"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-b from-background to-card/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow">Our Core Values</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The principles that guide our approach to disaster waste management.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Value 1 */}
            <motion.div variants={fadeIn}>
              <Card className="bg-card/50 border-primary/20 hover:border-primary/50 transition-all duration-300 h-full">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center animate-pulse-glow">
                    <Recycle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Sustainability</h3>
                  <p className="text-gray-400">
                    We prioritize environmentally responsible solutions that minimize waste and maximize resource
                    recovery.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Value 2 */}
            <motion.div variants={fadeIn}>
              <Card className="bg-card/50 border-primary/20 hover:border-primary/50 transition-all duration-300 h-full">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center animate-pulse-glow">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Safety</h3>
                  <p className="text-gray-400">
                    We are committed to protecting public health and safety through proper waste management practices.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Value 3 */}
            <motion.div variants={fadeIn}>
              <Card className="bg-card/50 border-primary/20 hover:border-primary/50 transition-all duration-300 h-full">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center animate-pulse-glow">
                    <Leaf className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Innovation</h3>
                  <p className="text-gray-400">
                    We continuously develop and implement innovative technologies to improve disaster waste management.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow">Our Team</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Meet the experts behind our mission to revolutionize disaster waste management.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="bg-card/50 border-primary/20 hover:border-primary/50 transition-all duration-300 h-full overflow-hidden">
                  <div className="relative h-64 w-full">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-primary mb-2">{member.role}</p>
                    <p className="text-gray-400 text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-8 md:p-12 box-glow text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-glow">Join Our Mission</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Be part of the solution for a cleaner, safer environment through efficient waste handling and recycling
              after disasters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg" className="bg-primary hover:bg-primary/80 text-white">
                  Sign Up Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

