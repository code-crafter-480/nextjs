import { addProduct } from "@/prisma-db";

export async function POST(requst: Request) {
    const body = await requst.json()
    const {title, price, description} = body;

    const newProduct = await addProduct(title, Number(price), description)

    return new Response(JSON.stringify(newProduct), {
        headers: {
            'Content-Type': 'application/json'
        }
    })

}