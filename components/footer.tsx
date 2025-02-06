"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Heart, Twitter, Linkedin,Instagram } from "lucide-react"
import { AnimatedTooltip } from "./ui/animated-tooltip"
import { people } from "../data/team"

function TeamSection() {
  
   

  return (
    <div className="text-center">
      <div className="flex justify-center -space-x-4">
     
        <AnimatedTooltip items={people} />

      </div>
      <p className="mt-4 text-sm text-gray-400">Created by ambitious people</p>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="mt-24  mx-11 border-t border-gray-800">
      <div className="container px-4 py-12">
        <TeamSection />

        <div className="mt-16 grid gap-8 md:grid-cols-4">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="size-6 rounded bg-[#9FEF00]" />
              <span className="font-bold">Intelli Agents</span>
            </Link>
            <p className="mt-4 text-sm text-gray-400">Streamline your daily tasks with intelligent workflow automation.
            </p>
            <div className="mt-6 flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="size-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="size-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="size-5" />
              </Link>
            </div>
            <div className="mt-6 space-y-4">
              
              <div className="inline-flex items-center gap-2 rounded-lg border border-gray-800 bg-black px-4 py-2">
                <svg height="16" viewBox="0 0 16 16" width="16" className="fill-current">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                </svg>
                <span className="text-sm font-semibold">6.1k</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-8 md:col-span-2">
            <div>
              <h3 className="font-semibold">Home</h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-400">
                <li>
                  <Link href="/docs" className="hover:text-white">
                    Docs
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/workflow" className="hover:text-white">
                    Try Workflow
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Changelog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Agents</h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Play Wright
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Browser Use
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-1">
            <h3 className="font-semibold">Newsletter</h3>
            <p className="mt-4 text-sm text-gray-400">
              Be the first to know about new releases, exciting integrations, and tips.
            </p>
            <form className="mt-4">
              <Input type="email" placeholder="yourname@mail.com" className="mb-2 bg-transparent" />
              <Button className="w-full bg-white text-black hover:bg-gray-200">Subscribe</Button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 flex items-center justify-between border-t border-gray-800 pt-8 text-sm text-gray-400">
          <div>Intelli Agents, Inc. © All rights reserved</div>
          <div className="flex items-center gap-1">
            Made with <Heart className="size-4 text-red-500" /> in India
          </div>
        </div>
      </div>
    </footer>
  )
}

