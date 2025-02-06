
import { Inter } from "next/font/google"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Minimal Docs Site",
  description: "A gorgeous minimal documentation site using Next.js App Router",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning
    style={{ fontSize: "15px",backgroundColor: "#868794" }}
    >
      <body className={`${inter.className} antialiased bg-background text-[#868794]`}>
        <SidebarProvider>
          <AppSidebar />
          <div className="p-4">
            <SidebarTrigger />
          </div>
          <main className="flex-1 overflow-auto p-8">{children}</main>
        </SidebarProvider>
      </body>
    </html>
  )
}

