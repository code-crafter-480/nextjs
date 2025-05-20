export default async function Review() {
    await new Promise((resolve) => setTimeout(resolve, 5000))
    return (
        <div>
            <h2>Component Review Page</h2>
        </div>
    )
}