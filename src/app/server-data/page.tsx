export default async function ServerData() {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await response.json()
    return (
        <div>
            <h2>Client data</h2>
            <ul>
                {users.map(user => <li className="m-3" key={user.id}>
                    <h3>Name: {user.name}</h3>
                    <p>Email: {user.email}</p>
                </li>)}
            </ul>
        </div>
    )
}