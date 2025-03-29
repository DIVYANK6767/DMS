"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Upload, Camera, Trash2, RefreshCw, CheckCircle } from "lucide-react"

export default function UploadPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisComplete, setAnalysisComplete] = useState(false)
  const [analysisProgress, setAnalysisProgress] = useState(0)
  const [analysisResults, setAnalysisResults] = useState<{
    wasteType: string
    recyclable: number
    hazardous: boolean
    disposalMethod: string
    materials: { name: string; percentage: number }[]
  } | null>(null)

  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        setSelectedImage(reader.result as string)
        setAnalysisComplete(false)
        setAnalysisResults(null)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const file = e.dataTransfer.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        setSelectedImage(reader.result as string)
        setAnalysisComplete(false)
        setAnalysisResults(null)
      }
      reader.readAsDataURL(file)
    }
  }

  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  const clearImage = () => {
    setSelectedImage(null)
    setAnalysisComplete(false)
    setAnalysisResults(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const analyzeImage = () => {
    setIsAnalyzing(true)
    setAnalysisProgress(0)

    // Simulate analysis progress
    const interval = setInterval(() => {
      setAnalysisProgress((prev) => {
        const newProgress = prev + 5
        if (newProgress >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setIsAnalyzing(false)
            setAnalysisComplete(true)
            // Mock analysis results
            setAnalysisResults({
              wasteType: "Construction Debris",
              recyclable: 65,
              hazardous: false,
              disposalMethod: "Segregation and Recycling",
              materials: [
                { name: "Concrete", percentage: 40 },
                { name: "Wood", percentage: 25 },
                { name: "Metal", percentage: 20 },
                { name: "Plastic", percentage: 10 },
                { name: "Other", percentage: 5 },
              ],
            })
          }, 500)
        }
        return newProgress
      })
    }, 100)
  }

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
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-glow">Waste Image Analysis</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Upload an image of waste materials for AI-powered classification and recycling recommendations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Card className="glass-effect border-primary/20 h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <h2 className="text-2xl font-bold mb-4 text-glow">Upload Waste Image</h2>

                <div
                  className={`mt-4 flex-grow flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-6 ${
                    selectedImage ? "border-primary/50" : "border-gray-700"
                  }`}
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                >
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept="image/*"
                    className="hidden"
                  />

                  {selectedImage ? (
                    <div className="relative w-full h-64 md:h-80">
                      <Image
                        src={selectedImage || "/placeholder.svg"}
                        alt="Selected waste"
                        fill
                        className="object-contain rounded-lg"
                      />
                      <Button variant="destructive" size="icon" className="absolute top-2 right-2" onClick={clearImage}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ) : (
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto animate-pulse-glow">
                        <Upload className="h-8 w-8 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <p className="text-lg font-medium">Drag and drop an image here</p>
                        <p className="text-gray-400">or</p>
                        <Button onClick={triggerFileInput} className="bg-primary hover:bg-primary/80">
                          Browse Files
                        </Button>
                      </div>
                      <p className="text-sm text-gray-400">Supported formats: JPG, PNG, WEBP</p>
                    </div>
                  )}
                </div>

                {selectedImage && !isAnalyzing && !analysisComplete && (
                  <Button onClick={analyzeImage} className="mt-6 bg-primary hover:bg-primary/80">
                    Analyze Waste
                    <Camera className="ml-2 h-4 w-4" />
                  </Button>
                )}

                {isAnalyzing && (
                  <div className="mt-6 space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Analyzing image...</span>
                      <span>{analysisProgress}%</span>
                    </div>
                    <Progress value={analysisProgress} className="h-2" />
                  </div>
                )}

                {analysisComplete && (
                  <div className="mt-6 flex justify-between">
                    <Button
                      onClick={clearImage}
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary/10"
                    >
                      Upload New Image
                      <RefreshCw className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Results Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="glass-effect border-primary/20 h-full">
              <CardContent className="p-6 h-full">
                <h2 className="text-2xl font-bold mb-4 text-glow">Analysis Results</h2>

                {!selectedImage && (
                  <div className="h-full flex flex-col items-center justify-center text-center py-12">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                      <Camera className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-medium mb-2">No Image Selected</h3>
                    <p className="text-gray-400 max-w-md">
                      Upload an image of waste materials to receive AI-powered analysis and recycling recommendations.
                    </p>
                  </div>
                )}

                {selectedImage && !analysisComplete && (
                  <div className="h-full flex flex-col items-center justify-center text-center py-12">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                      {isAnalyzing ? (
                        <RefreshCw className="h-8 w-8 text-primary animate-spin" />
                      ) : (
                        <Camera className="h-8 w-8 text-primary" />
                      )}
                    </div>
                    <h3 className="text-xl font-medium mb-2">
                      {isAnalyzing ? "Analyzing Image..." : "Ready for Analysis"}
                    </h3>
                    <p className="text-gray-400 max-w-md">
                      {isAnalyzing
                        ? "Our AI is processing your image to classify waste types and determine recyclability."
                        : "Click the 'Analyze Waste' button to start the AI-powered analysis process."}
                    </p>
                  </div>
                )}

                {analysisComplete && analysisResults && (
                  <div className="space-y-6 animate-fade-in">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-green-500">Analysis Complete</span>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-medium mb-1">Waste Type</h3>
                        <p className="text-primary text-xl font-semibold">{analysisResults.wasteType}</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium mb-1">Recyclability</h3>
                        <div className="flex items-center space-x-4">
                          <div className="w-full bg-gray-700 rounded-full h-4">
                            <div
                              className="bg-primary h-4 rounded-full"
                              style={{ width: `${analysisResults.recyclable}%` }}
                            ></div>
                          </div>
                          <span className="text-lg font-semibold">{analysisResults.recyclable}%</span>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium mb-1">Hazardous</h3>
                        <p
                          className={`text-lg font-semibold ${analysisResults.hazardous ? "text-red-500" : "text-green-500"}`}
                        >
                          {analysisResults.hazardous ? "Yes" : "No"}
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium mb-1">Recommended Disposal</h3>
                        <p className="text-gray-300">{analysisResults.disposalMethod}</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium mb-3">Material Composition</h3>
                        <div className="space-y-3">
                          {analysisResults.materials.map((material, index) => (
                            <div key={index}>
                              <div className="flex justify-between mb-1">
                                <span>{material.name}</span>
                                <span>{material.percentage}%</span>
                              </div>
                              <div className="w-full bg-gray-700 rounded-full h-2">
                                <div
                                  className="bg-primary h-2 rounded-full"
                                  style={{ width: `${material.percentage}%` }}
                                ></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

