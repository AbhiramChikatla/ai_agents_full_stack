"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap } from "lucide-react"

export function Features() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = 300
    canvas.height = 200

    const drawBar = (x: number, height: number) => {
      ctx.fillStyle = "#9FEF00"
      ctx.fillRect(x, 200 - height, 15, height)
    }

    const bars = [40, 60, 30, 80, 50, 70, 45, 90, 65, 75, 55, 85]
    bars.forEach((height, i) => {
      drawBar(i * 20 + 10, height)
    })
  }, [])

  return (
    <section className="w-full px-4 py-8">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Top row - 3 cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* API Calls Card */}
          <Card className="relative overflow-hidden border-gray-800/20 bg-black/40 p-6 backdrop-blur-xl">
            <div className="mb-4 text-[#9FEF00]">API-call</div>
            <canvas ref={canvasRef} className="w-full" />
            <div className="mt-2 flex justify-between text-sm text-gray-500">
              <span>Nov. 10</span>
              <span>Nov. 11</span>
              <span>Today</span>
            </div>
          </Card>

          {/* Mail Sending Card */}
          <Card className="relative overflow-hidden border-gray-800/20 bg-black/40 p-6 backdrop-blur-xl">
            <div className="space-y-4">
              <div className="flex items-center gap-2 rounded-full bg-black/60 px-4 py-2 text-sm">
                <Zap className="h-4 w-4 text-[#9FEF00]" />
                <span className="text-white">Mail sending...</span>
              </div>
              <div className="text-xs text-gray-500">Gmail MCP-Server Using</div>
              <div className="space-y-2">
                <div className="h-[1px] w-full bg-gray-800/50" />
                <div className="h-[1px] w-full bg-gray-800/50" />
                <div className="h-[1px] w-full bg-gray-800/50" />
              </div>
              <div className="pt-8">
                <h3 className="text-xl font-semibold">Full-fit for complex tasks.</h3>
                <p className="mt-2 text-sm text-gray-400">
                  We&apos;ve got the expertise to make your vision a reality.
                </p>
              </div>
            </div>
          </Card>

          {/* Growth Card */}
          <Card className="relative overflow-hidden border-gray-800/20 bg-black/40 p-6 backdrop-blur-xl">
            <div className="h-[200px] w-full">
              <svg className="h-full w-full" viewBox="0 0 300 200">
                <path d="M 50 150 Q 100 150, 150 100 T 250 50" fill="none" stroke="#9FEF00" strokeWidth="2" />
                <circle cx="250" cy="50" r="4" fill="#9FEF00" />
              </svg>
            </div>
            <div className="pt-4">
              <h3 className="text-xl font-semibold">Scalable as you grow</h3>
              <p className="mt-2 text-sm text-gray-400">Scale your agents easily based on tasks!</p>
            </div>
          </Card>
        </div>

        {/* Bottom row - 2 cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* MCP Support Card */}
          <Card className="relative overflow-hidden border-gray-800/20 bg-black/40 p-6 backdrop-blur-xl">
            <h3 className="text-xl font-semibold">MCP support</h3>
            <p className="mt-2 text-sm text-gray-400">We make it possible to use MCP with OpenAI.</p>
            <div className="mt-6 flex gap-4">
              <div className="h-12 w-12 rounded-full bg-white/10" />
              <div className="h-12 w-12 rounded-full bg-white/10" />
              <div className="h-12 w-12 rounded-full bg-white/10" />
            </div>
          </Card>

          {/* Production APIs Card */}
          <Card className="relative overflow-hidden border-gray-800/20 bg-black/40 p-6 backdrop-blur-xl">
            <h3 className="text-xl font-semibold">Production-ready APIs</h3>
            <p className="mt-2 text-sm text-gray-400">Deploy scalable APIs ready for production use.</p>
            <div className="relative mt-6 h-16">
              <div className="absolute left-0 top-0 h-16 w-16 animate-pulse rounded-full bg-purple-500/30 blur-xl" />
              <div className="absolute left-8 top-0 h-16 w-16 animate-pulse rounded-full bg-cyan-500/30 blur-xl" />
              <div className="absolute left-16 top-0 h-16 w-16 animate-pulse rounded-full bg-yellow-500/30 blur-xl" />
              <div className="absolute right-0 top-0 rounded-md bg-[#9FEF00] px-2 py-1 text-xs text-black">Elia</div>
            </div>
          </Card>
        </div>

        {/* Feature badges */}
        <div className="flex flex-wrap justify-center gap-4">
          <Badge variant="outline" className="border-gray-800 bg-black/40 backdrop-blur-xl">
            <div className="mr-2 size-2 rounded-full bg-[#9FEF00]" /> Build with Docker
          </Badge>
          <Badge variant="outline" className="border-gray-800 bg-black/40 backdrop-blur-xl">
            <div className="mr-2 size-2 rounded-full bg-[#9FEF00]" /> Production-ready API
          </Badge>
          <Badge variant="outline" className="border-gray-800 bg-black/40 backdrop-blur-xl">
            <div className="mr-2 size-2 rounded-full bg-[#9FEF00]" /> MCP supported
          </Badge>
          <Badge variant="outline" className="border-gray-800 bg-black/40 backdrop-blur-xl">
            <div className="mr-2 size-2 rounded-full bg-[#9FEF00]" /> Asset library
          </Badge>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <Badge variant="outline" className="border-gray-800 bg-black/40 backdrop-blur-xl">
            <div className="mr-2 size-2 rounded-full bg-[#9FEF00]" /> Top-notch experience
          </Badge>
          <Badge variant="outline" className="border-gray-800 bg-black/40 backdrop-blur-xl">
            <div className="mr-2 size-2 rounded-full bg-[#9FEF00]" /> Cross platform
          </Badge>
          <Badge variant="outline" className="border-gray-800 bg-black/40 backdrop-blur-xl">
            <div className="mr-2 size-2 rounded-full bg-[#9FEF00]" /> Local model support
          </Badge>
        </div>
      </div>
    </section>
  )
}


// "use client"

// import { motion } from "framer-motion"

// const features = [
//   { name: "Build with Docker", icon: "⚡" },
//   { name: "Production-ready API", icon: "⚡" },
//   { name: "MCP supported", icon: "⚡" },
//   { name: "Asset library", icon: "⚡" },
//   { name: "Top-notch experience", icon: "⚡" },
//   { name: "Cross platform", icon: "⚡" },
//   { name: "Local model support", icon: "⚡" },
// ]

// const stats = [
//   { number: "60k+", label: "Developer" },
//   { number: "5k+", label: "GitHub Star" },
//   { number: "4x", label: "Faster Computer-use" },
// ]

// export function Features() {
//   return (
//     <section className="w-full py-12 bg-black text-white">
//       <div className="container px-4 md:px-6 mx-auto">
//         <div className="flex flex-wrap justify-center gap-4 mb-20">
//           {features.map((feature, index) => (
//             <motion.div
//               key={feature.name}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//               className="inline-flex items-center rounded-full border border-gray-800 bg-black/50 backdrop-blur-sm px-4 py-2"
//             >
//               <span className="mr-2 text-lime-400">{feature.icon}</span>
//               <span className="text-sm text-gray-300">{feature.name}</span>
//             </motion.div>
//           ))}
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
//           {stats.map((stat, index) => (
//             <motion.div
//               key={stat.label}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5 + index * 0.1 }}
//               className="space-y-2"
//             >
//               <h3 className="text-6xl font-bold tracking-tighter">{stat.number}</h3>
//               <p className="text-gray-500 text-lg">{stat.label}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }


