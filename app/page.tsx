"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ArrowRight, Recycle, MapPin, BarChart } from "lucide-react"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative hero-pattern py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 to-background/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={fadeIn}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-glow">
                Revolutionizing <span className="text-primary">Disaster Waste</span> Management
              </h1>
              <p className="text-lg text-gray-300">
                Our platform streamlines disaster waste management using IoT and AI technologies to prevent health
                hazards and environmental damage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/signup">
                  <Button size="lg" className="bg-primary hover:bg-primary/80 text-white">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    Learn More
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative h-[400px] w-full animate-pulse-glow rounded-lg overflow-hidden">
                <img
                  src="/climate-change-concept-collage.jpg"
                  alt="Disaster Waste Management"
              
                  className="object-cover rounded-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow">Our Key Features</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Leveraging cutting-edge technology to transform disaster waste management and create a sustainable future.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Feature 1 */}
            <motion.div variants={fadeIn}>
              <Card className="bg-card/50 border-primary/20 hover:border-primary/50 transition-all duration-300 h-full">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center animate-pulse-glow">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Real-Time Tracking</h3>
                  <p className="text-gray-400">
                    IoT-enabled GPS sensors track waste collection and disposal in real-time, providing live location
                    updates for better coordination.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Feature 2 */}
            <motion.div variants={fadeIn}>
              <Card className="bg-card/50 border-primary/20 hover:border-primary/50 transition-all duration-300 h-full">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center animate-pulse-glow">
                    <Recycle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">AI Waste Classification</h3>
                  <p className="text-gray-400">
                    Smart AI-driven waste segregation system identifies and classifies waste, determining recyclability
                    percentages and proper disposal methods.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Feature 3 */}
            <motion.div variants={fadeIn}>
              <Card className="bg-card/50 border-primary/20 hover:border-primary/50 transition-all duration-300 h-full">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center animate-pulse-glow">
                    <BarChart className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Analytics Dashboard</h3>
                  <p className="text-gray-400">
                    Comprehensive analytics dashboard providing insights on waste collection, processing, and
                    environmental impact metrics.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-b from-background to-card/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow">How It Works</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our streamlined process makes disaster waste management efficient and effective.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Step 1 */}
            <motion.div variants={fadeIn} className="relative">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Upload Waste Images</h3>
                <p className="text-gray-400 text-center">
                  Upload images of waste materials through our platform for AI-powered analysis and classification.
                </p>
              </div>
              <div className="hidden md:block absolute top-8 right-0 w-full h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
            </motion.div>

            {/* Step 2 */}
            <motion.div variants={fadeIn} className="relative">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">AI Classification</h3>
                <p className="text-gray-400 text-center">
                  Our AI system analyzes and classifies the waste, determining recyclability and proper disposal
                  methods.
                </p>
              </div>
              <div className="hidden md:block absolute top-8 right-0 w-full h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
            </motion.div>

            {/* Step 3 */}
            <motion.div variants={fadeIn}>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">Track & Manage</h3>
                <p className="text-gray-400 text-center">
                  Track waste collection and disposal in real-time, ensuring efficient management and environmental
                  safety.
                </p>
              </div>
            </motion.div>
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
            className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-8 md:p-12 box-glow"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-glow">
                  Ready to Transform Disaster Waste Management?
                </h2>
                <p className="text-gray-300">
                  Join our platform today and be part of the solution for a cleaner, safer environment through efficient
                  waste handling and recycling after disasters.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/signup">
                    <Button size="lg" className="bg-primary hover:bg-primary/80 text-white">
                      Sign Up Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-[300px] w-full">
                <Image
                  src="/climate-change-concept-collage.jpg"
                  alt="Disaster Waste Management"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

