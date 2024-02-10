import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url"

export const client = createClient({
    projectId:"rlovgm35",
    dataset: "production",
    apiVersion:"2022-03-07",
    useCdn: true
})

const builder = imageUrlBuilder(client)

export default function urlFor(source){
    return builder.image(source)
}