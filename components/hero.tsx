
"use client"
import { GlobeDemo } from "./GlobeDemo"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface HeroProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

const Hero = ({ handleSubmit }: HeroProps) => {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 bg-black text-white overflow-hidden">
      <div className="absolute top-6 inline-flex items-center rounded-full border border-gray-800 bg-black px-3 py-1 text-sm text-gray-300">
        <svg
          className="mr-2 h-3.5 w-3.5 text-lime-400"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 14V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V14C3 15.1046 3.89543 16 5 16H19C20.1046 16 21 15.1046 21 14Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M7 11L9 13L13 9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        We're open-source! Check Now!
      </div>

      <div className="relative z-10">
        <h1 className="mt-20 max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl">Build Your Vertical AI Agents</h1>
        <p className="mt-6 max-w-2xl text-lg text-gray-400 mx-auto">
          Complete your tasks successfully and with minimum cost using LLM calls, agents, Computer use, and MCP.
        </p>
        <form onSubmit={handleSubmit} className="mt-8 flex w-full max-w-md gap-4 mx-auto">
          <Input
            type="email"
            placeholder="name@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white/5 border-gray-800"
            required
          />
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Joining..." : "Join Waitlist"}
          </Button>
        </form>

        <Button className="mt-4 bg-lime-400 text-black flex items-center justify-center hover:bg-lime-500 mx-auto">
          Join Discord
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width={50}
            height={50}
            viewBox="0 0 50 50"
            className="ml-2"
          >
            <path d="M 41.625 10.769531 C 37.644531 7.566406 31.347656 7.023438 31.078125 7.003906 C 30.660156 6.96875 30.261719 7.203125 30.089844 7.589844 C 30.074219 7.613281 29.9375 7.929688 29.785156 8.421875 C 32.417969 8.867188 35.652344 9.761719 38.578125 11.578125 C 39.046875 11.867188 39.191406 12.484375 38.902344 12.953125 C 38.710938 13.261719 38.386719 13.429688 38.050781 13.429688 C 37.871094 13.429688 37.6875 13.378906 37.523438 13.277344 C 32.492188 10.15625 26.210938 10 25 10 C 23.789063 10 17.503906 10.15625 12.476563 13.277344 C 12.007813 13.570313 11.390625 13.425781 11.101563 12.957031 C 10.808594 12.484375 10.953125 11.871094 11.421875 11.578125 C 14.347656 9.765625 17.582031 8.867188 20.214844 8.425781 C 20.0625 7.929688 19.925781 7.617188 19.914063 7.589844 C 19.738281 7.203125 19.34375 6.960938 18.921875 7.003906 C 18.652344 7.023438 12.355469 7.566406 8.320313 10.8125 C 6.214844 12.761719 2 24.152344 2 34 C 2 34.175781 2.046875 34.34375 2.132813 34.496094 C 5.039063 39.605469 12.972656 40.941406 14.78125 41 C 14.789063 41 14.800781 41 14.8125 41 C 15.132813 41 15.433594 40.847656 15.621094 40.589844 L 17.449219 38.074219 C 12.515625 36.800781 9.996094 34.636719 9.851563 34.507813 C 9.4375 34.144531 9.398438 33.511719 9.765625 33.097656 C 10.128906 32.683594 10.761719 32.644531 11.175781 33.007813 C 11.234375 33.0625 15.875 37 25 37 C 34.140625 37 38.78125 33.046875 38.828125 33.007813 C 39.242188 32.648438 39.871094 32.683594 40.238281 33.101563 C 40.601563 33.515625 40.5625 34.144531 40.148438 34.507813 C 40.003906 34.636719 37.484375 36.800781 32.550781 38.074219 L 34.378906 40.589844 C 34.566406 40.847656 34.867188 41 35.1875 41 C 35.199219 41 35.210938 41 35.21875 41 C 37.027344 40.941406 44.960938 39.605469 47.867188 34.496094 C 47.953125 34.34375 48 34.175781 48 34 C 48 24.152344 43.785156 12.761719 41.625 10.769531 Z M 18.5 30 C 16.566406 30 15 28.210938 15 26 C 15 23.789063 16.566406 22 18.5 22 C 20.433594 22 22 23.789063 22 26 C 22 28.210938 20.433594 30 18.5 30 Z M 31.5 30 C 29.566406 30 28 28.210938 28 26 C 28 23.789063 29.566406 22 31.5 22 C 33.433594 22 35 23.789063 35 26 C 35 28.210938 33.433594 30 31.5 30 Z" />
          </svg>
        </Button>
      </div>

      <div className="absolute inset-0 z-0 w-[50vw] h-[50vh] mx-auto ">
        <GlobeDemo />
      </div>
    </div>
  )
}

export default Hero



