import { getProducts } from "@/prisma-db"

type Product = {
    id: number,
    title: string,
    price: number,
    description: string,
}

export default async function ProductDB() {
    const allProducts:Product[] = await getProducts()
    return (
        <div>
            <h2>Products</h2>
            <div className="flex w-full gap-2">
                <div className="flex flex-wrap gap-2 w-full">
                    {allProducts.map((product) => (
                        <div key={product.id} className="p-4 w-full bg-white text-gray-900 rounded-lg shadow-sm border">
                            <h3 className="text-lg font-semibold">
                                    {product.title}
                            </h3>
                            <p className="text-sm text-gray-700">{product.description}</p>
                            <p className="text-sm font-medium text-gray-900">Price: ${product.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}