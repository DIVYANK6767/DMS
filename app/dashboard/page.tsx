"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import WasteTrackingMap from "@/components/waste-tracking-map"
import { BarChart, LineChart, Truck, Recycle, AlertTriangle, Trash2 } from "lucide-react"

export default function DashboardPage() {
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
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-glow">Waste Management Dashboard</h1>
          <p className="text-gray-400">Real-time monitoring and analytics for disaster waste management operations.</p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {/* Stat Card 1 */}
          <motion.div variants={fadeIn}>
            <Card className="glass-effect border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Total Waste Collected</p>
                    <h3 className="text-3xl font-bold mt-1">256.8</h3>
                    <p className="text-primary text-sm">tons</p>
                  </div>
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Trash2 className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-green-500 text-sm">
                  <span className="mr-1">↑ 12%</span>
                  <span className="text-gray-400">from last week</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Stat Card 2 */}
          <motion.div variants={fadeIn}>
            <Card className="glass-effect border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Recycled Materials</p>
                    <h3 className="text-3xl font-bold mt-1">142.3</h3>
                    <p className="text-primary text-sm">tons</p>
                  </div>
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Recycle className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-green-500 text-sm">
                  <span className="mr-1">↑ 8%</span>
                  <span className="text-gray-400">from last week</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Stat Card 3 */}
          <motion.div variants={fadeIn}>
            <Card className="glass-effect border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Active Vehicles</p>
                    <h3 className="text-3xl font-bold mt-1">18</h3>
                    <p className="text-primary text-sm">units</p>
                  </div>
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Truck className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-yellow-500 text-sm">
                  <span className="mr-1">↓ 2</span>
                  <span className="text-gray-400">in maintenance</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Stat Card 4 */}
          <motion.div variants={fadeIn}>
            <Card className="glass-effect border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Hazardous Waste</p>
                    <h3 className="text-3xl font-bold mt-1">32.5</h3>
                    <p className="text-primary text-sm">tons</p>
                  </div>
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <AlertTriangle className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-red-500 text-sm">
                  <span className="mr-1">↑ 5%</span>
                  <span className="text-gray-400">requires special handling</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Waste Tracking Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-8"
        >
          <WasteTrackingMap />
        </motion.div>

        {/* Charts Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Chart 1 */}
          <motion.div variants={fadeIn}>
            <Card className="glass-effect border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart className="h-5 w-5 text-primary" />
                  <span>Waste Collection by Type</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-card/50 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Bar chart visualization would appear here</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Chart 2 */}
          <motion.div variants={fadeIn}>
            <Card className="glass-effect border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <LineChart className="h-5 w-5 text-primary" />
                  <span>Collection Trends</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-card/50 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Line chart visualization would appear here</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

