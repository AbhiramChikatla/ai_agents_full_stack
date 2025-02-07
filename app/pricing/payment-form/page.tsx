"use client"

import { useState } from "react"
import { CreditCard, ShoppingCartIcon as PaypalIcon, Apple } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { useToast } from "@/components/ui/use-toast"
import { useToast } from "@/hooks/use-toast"
const formSchema = z.object({
  paymentMethod: z.enum(["card", "paypal", "apple"]),
  name: z.string().min(1, "Name is required"),
  city: z.string().min(1, "City is required"),
  cardNumber: z.string().regex(/^\d{16}$/, "Invalid card number"),
  expiryMonth: z.string().min(1, "Month is required"),
  expiryYear: z.string().min(1, "Year is required"),
  cvc: z.string().regex(/^\d{3,4}$/, "Invalid CVC"),
})

type FormData = z.infer<typeof formSchema>

export default function PaymentForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      paymentMethod: "card",
    },
  })

  const selectedPaymentMethod = watch("paymentMethod")

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      console.log("Payment data:", data)

      toast({
        title: "Payment method added",
        description: "Your payment method has been successfully added.",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem adding your payment method.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const formatCardNumber = (value: string) => {
    return value.replace(/\D/g, "").slice(0, 16)
  }

  return (
    <div className="flex justify-center items-center h-screen">
    <Card className="w-full max-w-md mx-auto bg-white shadow-lg text-black ">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold tracking-tight text-black">Payment Method</CardTitle>
        <CardDescription className="text-gray-500">Add a new payment method to your account.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-2">
          <RadioGroup defaultValue="card" className="grid grid-cols-3 gap-4" {...register("paymentMethod")}>
            <div>
              <RadioGroupItem value="card" id="card" className="peer sr-only" />
              <Label
                htmlFor="card"
                className="flex flex-col items-center justify-between rounded-md border-2 border-gray-200 bg-white p-4 hover:bg-gray-50 hover:border-gray-300 peer-data-[state=checked]:border-black [&:has([data-state=checked])]:border-black cursor-pointer"
              >
                <CreditCard className="mb-3 h-6 w-6" />
                Card
              </Label>
            </div>
            <div>
              <RadioGroupItem value="paypal" id="paypal" className="peer sr-only" />
              <Label
                htmlFor="paypal"
                className="flex flex-col items-center justify-between rounded-md border-2 border-gray-200 bg-white p-4 hover:bg-gray-50 hover:border-gray-300 peer-data-[state=checked]:border-black [&:has([data-state=checked])]:border-black cursor-pointer"
              >
                <PaypalIcon className="mb-3 h-6 w-6" />
                Paypal
              </Label>
            </div>
            <div>
              <RadioGroupItem value="apple" id="apple" className="peer sr-only" />
              <Label
                htmlFor="apple"
                className="flex flex-col items-center justify-between rounded-md border-2 border-gray-200 bg-white p-4 hover:bg-gray-50 hover:border-gray-300 peer-data-[state=checked]:border-black [&:has([data-state=checked])]:border-black cursor-pointer"
              >
                <Apple className="mb-3 h-6 w-6 " />
                Apple
              </Label>
            </div>
          </RadioGroup>

          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium text-gray-700">
              Name
            </Label>
            <Input
              id="name"
              placeholder="First Last"
              className="bg-white border-gray-200 focus:border-gray-300 focus:ring-gray-200"
              {...register("name")}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="city" className="text-sm font-medium text-gray-700">
              City
            </Label>
            <Input
            placeholder="City"
              id="city"
              className="bg-white border-gray-200 focus:border-gray-300 focus:ring-gray-200"
              {...register("city")}
            />
            {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
          </div>

          {selectedPaymentMethod === "card" && (
            <>
              <div className="space-y-2">
                <Label htmlFor="cardNumber" className="text-sm font-medium text-gray-700">
                  Card number
                </Label>
                <Input
                    placeholder="0000 0000 0000 0000"
                  id="cardNumber"
                  className="bg-white border-gray-200 focus:border-gray-300 focus:ring-gray-200"
                  {...register("cardNumber")}
                  onChange={(e) => {
                    e.target.value = formatCardNumber(e.target.value)
                  }}
                />
                {errors.cardNumber && <p className="text-red-500 text-sm">{errors.cardNumber.message}</p>}
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="month" className="text-sm font-medium text-gray-700">
                    Expires
                  </Label>
                  <Select onValueChange={(value) => register("expiryMonth").onChange({ target: { value } })}>
                    <SelectTrigger
                      id="month"
                      className="bg-white border-gray-200 focus:border-gray-300 focus:ring-gray-200"
                    >
                      <SelectValue placeholder="Month" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 12 }, (_, i) => {
                        const month = (i + 1).toString().padStart(2, "0")
                        return (
                          <SelectItem key={month} value={month}>
                            {month}
                          </SelectItem>
                        )
                      })}
                    </SelectContent>
                  </Select>
                  {errors.expiryMonth && <p className="text-red-500 text-sm">{errors.expiryMonth.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="year" className="text-sm font-medium text-gray-700">
                    Year
                  </Label>
                  <Select onValueChange={(value) => register("expiryYear").onChange({ target: { value } })}>
                    <SelectTrigger
                      id="year"
                      className="bg-white border-gray-200 focus:border-gray-300 focus:ring-gray-200"
                    >
                      <SelectValue placeholder="Year" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 10 }, (_, i) => {
                        const year = (new Date().getFullYear() + i).toString()
                        return (
                          <SelectItem key={year} value={year}>
                            {year}
                          </SelectItem>
                        )
                      })}
                    </SelectContent>
                  </Select>
                  {errors.expiryYear && <p className="text-red-500 text-sm">{errors.expiryYear.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cvc" className="text-sm font-medium text-gray-700">
                    CVC
                  </Label>
                  <Input
                    placeholder="322"
                    id="cvc"
                    maxLength={4}
                    className="bg-white border-gray-200 focus:border-gray-300 focus:ring-gray-200"
                    {...register("cvc")}
                  />
                  {errors.cvc && <p className="text-red-500 text-sm">{errors.cvc.message}</p>}
                </div>
              </div>
            </>
          )}

          <Button
            type="submit"
            className="w-full bg-black hover:bg-gray-800 text-white transition-colors"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Processing..." : "Continue"}
          </Button>
        </form>
      </CardContent>
    </Card>
    </div>
  )
}

