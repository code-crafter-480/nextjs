'use client'

export default function ErrorPage({error}: {error: Error}) {
    return ( 
        <div>
            <p>Error: {error.message}</p>
        </div>
    )
}