"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center hero-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 to-background/70"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto text-center"
        >
          <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
            <AlertTriangle className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-glow">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-gray-400 mb-8">The page you are looking for doesn't exist or has been moved.</p>
          <Link href="/">
            <Button className="bg-primary hover:bg-primary/80">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

