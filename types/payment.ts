export type PaymentMethod = "card" | "paypal" | "apple"

export interface PaymentFormData {
  paymentMethod: PaymentMethod
  name: string
  city: string
  cardNumber?: string
  expiryMonth?: string
  expiryYear?: string
  cvc?: string
}

