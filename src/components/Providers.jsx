"use client";
import React from "react";
import { CartProvider } from "use-shopping-cart";

export default function Providers({ children }) {
  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      shouldPersist={true}
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY}
      successUrl="http://localhost:3000/stripe/success"
      cancelUrl="http://localhost:3000/stripe/cancel"
      currency="USD"
      billingAddressCollection={false}
      language="en-US"
    >
      {children}
    </CartProvider>
  );
}
