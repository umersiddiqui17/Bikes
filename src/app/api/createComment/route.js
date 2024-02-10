import { createClient } from "@sanity/client";
import { NextResponse } from "next/server";

const client = createClient({
    projectId:"rlovgm35",
    dataset: "production",
    apiVersion:"2022-03-07",
    useCdn: true,
    token:process.env.NEXT_SANITY_TOKEN,

})

export async function POST(req){
    const {_id,name,email,comment} = await req.json()
    try {
        await client.create({
            _type:"comment",
            product:{
                _type:"reference",
                _ref:_id,
            },
            name,
            email,
            comment,
        })
        return new NextResponse({
            status: 200,
            body: "Comment submitted successfully",
        })
    } catch (error) {
        console.log(error)
        return new NextResponse({
            status: 500,
            body: "Internal Server Error",
    })
    }
}