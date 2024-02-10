import AddtoCart from "@/components/AddtoCart";
import CheckoutNow from "@/components/CheckoutNow";
import Comment from "@/components/Comment";
import ImageGallery from "@/components/ImageGallery";
import { client } from "@/lib/sanity"
import { MdLocalShipping } from "react-icons/md";


export const revalidate = 40

async function getData(slug) {
    const query =`*[_type == "product" && slug.current == "${slug}"][0]{
        _id,
          name,
          image,
          price,
          "slug":slug.current,
          description,
          "categoryName":category ->name,
          price_id,
          "comments":*[_type == "comment" && product._ref == ^._id && approved == true]
          
      }`
      const data = client.fetch(query)
      return data;
}
export const dynamic = 'force-dynamic'
export default async function ProductPage({params}) {
    const data = await getData(params.slug)
    return(
        <div>
          <div className=" relative top-20  max-w-screen-xl px-4 md:px-8">
            <h1 className="border-b border-red-500 text-2xl font-serif ">Product page:</h1>
            <div className="grid gap-8 md:grid-cols-2">
                <div>
                    <ImageGallery image={data.image}/>
                </div>
                  
                <div className="md:py-8">
                    <div className="mb-2 md:mb-3">
                        <span className=" mb-0.5 text-gray-500 dark:text-gray-300">
                            {data.categoryName}
                        </span>
                        <h2 className="mt-4 text-red-500  text-2xl font-bold">
                            <span className="text-red-500 border-b-2 border-red-500 font-serif text-2xl font-bold">{data.name}</span>
                        </h2>
                    </div>
                    <div className=" mt-7 md:mt-8 font-semibold ">
                       $ <span className="border-b-2 text-red-500 border-red-500">{data.price}</span>
                    </div>
                    <div className="mt-4 flex items-center text-gray-500 dark:text-gray-300">
                        <MdLocalShipping className="w-6 h-8"/>
                        <span className=" ml-3">2-4 Days Shipping</span>
                    </div>
                    <div className=" flex gap-2.5 mt-16">
                       <AddtoCart currency="USD" description={data.description} name={data.name} image={data.image[0]} price={data.price} key={data._id} price_id={data.price_id}/>
                       <CheckoutNow  currency="USD" description={data.description} name={data.name} image={data.image[0]} price={data.price} key={data._id} price_id={data.price_id}/>
                    </div>
                    <div className=" mt-12 text-base tracking-wide text-gray-500">
                        <p>{data.description}</p>
                    </div>
                </div>
                <div className="mt-5">
                <Comment data={data}/>
                </div>
            <div >
              <h1 className="mt-5 text-2xl font-serif text-red-500 border-b border-red-500 ">
              Review List:
              </h1>
              {data.comments.map((comment,index) => (
                <div key={index} className="">
                    <span className="mr-3 font-serif text-red-500 flex mt-2"><p className="mr-2 font-sans font-semibold">{comment.name}:</p> <span className="border-b border-red-500">{comment.comment}</span> </span>
                </div>
                ))}
            </div>
            </div>
            
          </div>
          
        </div>
    )
}