"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Truck, Recycle, AlertTriangle } from "lucide-react"

type WasteVehicle = {
  id: string
  type: "collection" | "transport" | "disposal"
  location: { lat: number; lng: number }
  status: "active" | "idle" | "maintenance"
  wasteType: string
  capacity: number
  fillLevel: number
}

export default function WasteTrackingMap() {
  const [vehicles, setVehicles] = useState<WasteVehicle[]>([])
  const [selectedVehicle, setSelectedVehicle] = useState<WasteVehicle | null>(null)

  useEffect(() => {
    // Mock data for waste collection vehicles
    const mockVehicles: WasteVehicle[] = [
      {
        id: "V001",
        type: "collection",
        location: { lat: 34.052235, lng: -118.243683 },
        status: "active",
        wasteType: "Mixed Debris",
        capacity: 100,
        fillLevel: 65,
      },
      {
        id: "V002",
        type: "transport",
        location: { lat: 34.056235, lng: -118.253683 },
        status: "active",
        wasteType: "Construction",
        capacity: 200,
        fillLevel: 45,
      },
      {
        id: "V003",
        type: "disposal",
        location: { lat: 34.059235, lng: -118.263683 },
        status: "idle",
        wasteType: "Hazardous",
        capacity: 50,
        fillLevel: 80,
      },
      {
        id: "V004",
        type: "collection",
        location: { lat: 34.062235, lng: -118.273683 },
        status: "maintenance",
        wasteType: "Organic",
        capacity: 75,
        fillLevel: 30,
      },
    ]

    setVehicles(mockVehicles)
    setSelectedVehicle(mockVehicles[0])

    // Simulate vehicle movement
    const interval = setInterval(() => {
      setVehicles((prevVehicles) =>
        prevVehicles.map((vehicle) => ({
          ...vehicle,
          location: {
            lat: vehicle.location.lat + (Math.random() - 0.5) * 0.001,
            lng: vehicle.location.lng + (Math.random() - 0.5) * 0.001,
          },
          fillLevel:
            vehicle.status === "active" ? Math.min(100, vehicle.fillLevel + Math.random() * 2) : vehicle.fillLevel,
        })),
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500"
      case "idle":
        return "bg-yellow-500"
      case "maintenance":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  const getVehicleIcon = (type: string) => {
    switch (type) {
      case "collection":
        return <Truck className="h-5 w-5" />
      case "transport":
        return <Truck className="h-5 w-5" />
      case "disposal":
        return <Recycle className="h-5 w-5" />
      default:
        return <Truck className="h-5 w-5" />
    }
  }

  return (
    <Card className="glass-effect border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Real-Time Waste Tracking</span>
          <Badge variant="outline" className="text-xs">
            Live
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Map Placeholder */}
          <div className="md:col-span-2 bg-card/50 rounded-lg h-64 md:h-80 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-gray-500">Map visualization would appear here</p>
            </div>
            {vehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className={`absolute w-3 h-3 rounded-full ${getStatusColor(vehicle.status)} cursor-pointer transform -translate-x-1/2 -translate-y-1/2 hover:scale-150 transition-transform`}
                style={{
                  left: `${((vehicle.location.lng + 118.3) / 0.1) * 100}%`,
                  top: `${((34.07 - vehicle.location.lat) / 0.03) * 100}%`,
                }}
                onClick={() => setSelectedVehicle(vehicle)}
              ></div>
            ))}
          </div>

          {/* Vehicle Details */}
          <div className="bg-card/50 rounded-lg p-4">
            {selectedVehicle ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {getVehicleIcon(selectedVehicle.type)}
                    <h3 className="font-medium">Vehicle {selectedVehicle.id}</h3>
                  </div>
                  <Badge className={getStatusColor(selectedVehicle.status)}>{selectedVehicle.status}</Badge>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Type:</span>
                    <span className="font-medium capitalize">{selectedVehicle.type}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Waste Type:</span>
                    <span className="font-medium">{selectedVehicle.wasteType}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Location:</span>
                    <span className="font-medium">
                      {selectedVehicle.location.lat.toFixed(4)}, {selectedVehicle.location.lng.toFixed(4)}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Capacity:</span>
                      <span className="font-medium">{selectedVehicle.fillLevel}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${selectedVehicle.fillLevel > 80 ? "bg-red-500" : "bg-primary"}`}
                        style={{ width: `${selectedVehicle.fillLevel}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                {selectedVehicle.fillLevel > 80 && (
                  <div className="flex items-center space-x-2 text-yellow-500 text-sm bg-yellow-500/10 p-2 rounded">
                    <AlertTriangle className="h-4 w-4" />
                    <span>Approaching capacity limit</span>
                  </div>
                )}
              </div>
            ) : (
              <div className="h-full flex items-center justify-center">
                <p className="text-gray-500">Select a vehicle to view details</p>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

