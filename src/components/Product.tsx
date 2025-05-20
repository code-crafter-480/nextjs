export default async function Product() {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    return (
        <div>
            <h2>Component Product Page</h2>
        </div>
    )
}