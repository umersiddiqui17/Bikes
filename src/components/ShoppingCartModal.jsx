"use client"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
  } from "@/components/ui/sheet"
import { useShoppingCart } from "use-shopping-cart"
import Image from "next/image"
import { Button } from "./ui/button"
  
  

export default function ShoppingCartModal() {
  const {cartCount,shouldDisplayCart,handleCartClick,cartDetails,incrementItem,decrementItem,removeItem,totalPrice,redirectToCheckout} = useShoppingCart()
  async function handleCheckout(e){
    e.preventDefault()
    try {
      const result = await redirectToCheckout()
    } catch (error) {
      console.log(error)
    }
  }
  return (
    
    <Sheet open={shouldDisplayCart} onOpenChange={handleCartClick}>
  
  <SheetContent classname="sm:maxw-lg w-[90vw]">
    <SheetHeader>
      <SheetTitle className="border-b border-black text-red-500 font-serif text-xl font-semibold" >Shopping Cart</SheetTitle>
    </SheetHeader>
    
    <div className=" h-full flex flex-col justify-between">
          <div className="mt-8 flex-1 overflow-y-auto">
            <ul className="mt-6 divide-y  divide-red-500 ">
              {cartCount === 0 ? (
                <div className=" flex justify-center items-center flex-col">
                  <div className=" mt-6 h-60 w-60  relative">
                    <Image
                      src="/cyclev1.png"
                      alt=""
                      priority
                      quality={100}
                      fill
                      style={{ objectFit: "cover", objectPosition: "75%" }}
                    />
                  </div>
                  <div>
                    <h2 className=" text-xl font-bold font-sans">
                      Opps ! There is nothing in the cart
                    </h2>
                  </div>
                </div>
              ) : (
                <div className=" border-t border-gray-600 dark:border-gray-200">
                  {Object.values(cartDetails ?? {}).map((entry) => (
                    <li key={entry.id} className="flex py-6">
                      <div className=" h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-500 dark:border-gray-200">
                        <Image
                          src={entry.image}
                          alt=""
                          width={100}
                          height={100}
                          className="outline-none object-cover object-center"
                        />
                      </div>
                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className=" flex justify-between text-base font-medium text-gray-900 dark:text-gray-200">
                            <h3 className="font-serif font-semibold border-b-2 border-red-500">{entry.name}</h3>
                            <p className="">$<span className="border-b-2 border-red-600">{entry.price}</span></p>
                          </div>
                          <p className="mt-1 text-sm text-gray-700 dark:text-gray-200 line-clamp-2">
                            {entry.description}
                          </p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <div className="flex items-center">
                            <button
                              onClick={() => incrementItem(entry.id)}
                              className="text-red-500  hover:text-red-400 "
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                />
                              </svg>
                            </button>
                            <p className="font-bold ml-3 mr-3">
                              {entry.quantity}
                            </p>
                            <button
                              onClick={() => decrementItem(entry.id)}
                              className="text-red-500  hover:text-red-400  "
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                />
                              </svg>
                            </button>
                          </div>

                          <button
                            onClick={() => removeItem(entry.id)}
                            type="button"
                            className="font-medium  text-red-600 hover:text-red-600/80  "
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </div>
              )}
            </ul>
          </div>
      <div className="border-t border-red-500 px-6 py-6">
        <div className="flex text-base justify-between font-sans text-gray-900">
          <p className="font-semibold">Subtotal:</p>
          <p>${totalPrice}</p>
        </div>
        <p className="text-sm mt-0.5 text-gray-500">Shipping and taxes are calculated at the checkout</p>
        <div className="mt-3">
          <Button variant="destructive" className=" w-full" onClick={handleCheckout}>Checkout</Button>
          <span className="flex justify-center items-center mt-1 mb-1 text-sm">OR</span>
          <Button variant="secondary" className="w-full" onClick={()=>handleCartClick()}>Continue Shopping</Button>
        </div>
      </div>
    </div>
  </SheetContent>
</Sheet>
  )
}
