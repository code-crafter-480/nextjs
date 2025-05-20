import Submit from "@/components/Submit";
import { addProduct } from "@/prisma-db";
import { redirect } from "next/navigation";



export default function AddProductServer() {

    async function addProductHandler(formData: FormData) {
        "use server"
        const title = formData.get('title') as string;
        const price = formData.get('price') as string;
        const description = formData.get('description') as string;

        await addProduct(title, Number(price), description)
        redirect('/products-db')
    }


    return (
        <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-900 text-center mb-6">Create Product</h2>
            <form action={addProductHandler}>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        required
                        className="mt-1 text-gray-900 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                        Price
                    </label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        required
                        className="mt-1 p-2 w-full text-gray-900 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                        Description
                    </label>
                    <textarea
                        name="description"
                        id="description"
                        required
                        className="mt-1 text-gray-900 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    ></textarea>
                </div>

                <Submit />
                
            </form>
        </div>
    )
}