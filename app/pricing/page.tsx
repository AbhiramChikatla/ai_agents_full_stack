"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { Header } from "@/components/header"
import { useRouter } from "next/navigation"

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false)
  const router = useRouter();

  const plans = [
    {
      name: "Prototype",
      price: "Free",
      description: "Start now for",
      features: [
        "Limited filtering",
        "1,000 API events/day",
        "Addresses: 100",
        "50 simulations/day",
        "10 Transactions distributed/day",
        "Gas refresh rate: 5 sec",
        "Forum based support",
      ],
      button: "Start Now",
      buttonVariant: "default" as const,
    },
    {
      name: "Production",
      price: isAnnual ? 75 : 83,
      description: "Starting at",
      popular: true,
      features: [
        "Complex filtering",
        "5,000 API events/day",
        "Addresses: 1,000",
        "300 simulations/day",
        "50 Transactions distributed/day",
        "Gas refresh rate: 3 sec",
        "Support via 1:1 chat",
      ],
      button: "Select Plan",
      buttonVariant: "default" as const,
    },
    {
      name: "Growth",
      price: isAnnual ? 1125 : 1250,
      description: "Starting at",
      features: [
        "Complex filtering",
        "150,000 API events/day",
        "Addresses: 15,000",
        "5,000 simulations/day",
        "1000 Transactions distributed/day",
        "Gas refresh rate: 1 sec",
        "Priority support",
      ],
      button: "Select Plan",
      buttonVariant: "default" as const,
    },
    {
      name: "Leader",
      price: "Custom",
      description: "Contact us to",
      features: [
        "Complex filtering",
        "1,200,000+ API events/day",
        "Addresses: Unlimited",
        "45,000+ simulations/day",
        "10,000+ Transactions distributed/day",
        "Gas refresh rate: 1 sec",
        "Dedicated support",
      ],
      button: "Request Quote",
      buttonVariant: "default" as const,
    },
  ]
  const handleRedirect = () => {
    router.push("/pricing/payment-form"); 
  };

  return (

    <div className="min-h-screen bg-black text-white py-20 px-4">
      <Header/>

      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            Get the right plan
            <br />
            for your <span className="text-[#9FEF00]">team</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            These plans are our most popular starting points. For more detailed options —{" "}
            <a href="#" className="text-[#9FEF00] hover:underline">
              Explore tiers below
            </a>
            .
          </p>
          <div className="flex items-center justify-center gap-4">
            <Label htmlFor="billing-toggle" className="text-sm">
              Monthly
            </Label>
            <Switch
              id="billing-toggle"
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              className="data-[state=checked]:bg-[#9FEF00]"
            />
            <Label htmlFor="billing-toggle" className="text-sm">
              Annual (10% off)
            </Label>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan) => (
            <Card key={plan.name} className="relative bg-gray-950 border-gray-800" >
              {plan.popular && (
                <Badge className="absolute -top-2 left-1/2 -translate-x-1/2 bg-[#9FEF00] text-black">
                  Most Popular
                </Badge>
              )}
              <CardHeader>
                <CardTitle className="text-xl text-white">{plan.name}</CardTitle>
                <div className="mt-4">
                  <div className="text-gray-300 text-sm">{plan.description}</div>
                  <div className="text-4xl font-bold mt-2 text-white">
                    {typeof plan.price === "number" ? `$${plan.price}` : plan.price}
                    {typeof plan.price === "number" && <span className="text-lg text-gray-400">/mo</span>}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <Button
                  className={
                    plan.buttonVariant === "default" ? "w-full bg-[#9FEF00] text-black hover:bg-[#8FDF00]" : "w-full"
                  }
                  variant={plan.buttonVariant}
                >
                  {plan.button}
                </Button>
                <div className="space-y-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-[#9FEF00]" />
                      <span className="text-sm text-gray-200">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

