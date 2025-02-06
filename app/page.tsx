import { Header } from "@/components/header"
import Hero  from "@/components/hero"
import { Features } from "@/components/features"
import { Metrics } from "@/components/metrics"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative">
       <Header />
      <Hero  />
      <Features />
      
      <Metrics />
      <FAQ />
      <Footer /> 
    </main>
  )
}

