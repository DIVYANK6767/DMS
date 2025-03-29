import { RefreshCw } from "lucide-react"

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
          <RefreshCw className="h-8 w-8 text-primary animate-spin" />
        </div>
        <h2 className="text-xl font-semibold text-glow">Loading...</h2>
        <p className="text-gray-400 mt-2">Please wait while we prepare your content.</p>
      </div>
    </div>
  )
}

