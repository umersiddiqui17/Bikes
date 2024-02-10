"use client"
import React from 'react'
import { Button } from "@/components/ui/button"
import { useShoppingCart } from 'use-shopping-cart'
import urlFor from '@/lib/sanity'

export default function CheckoutNow({currency,description,image,name,price,price_id}) {
  const {checkoutSingleItem} = useShoppingCart()
  const product = {
    name:name,
    description:description,
    image:urlFor(image).url(),
    price:price,
    currency:currency,
    price_id:price_id
  }
  return (
    <Button variant="secondary" onClick={()=>checkoutSingleItem(product.price_id)}>CheckOut</Button>
  
  )
}