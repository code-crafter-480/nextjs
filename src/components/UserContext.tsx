'use client'
import { createContext, useContext } from "react"

type User = {
    name: string,
    email: string, 
    age: number
}

const userData:User = {
    name: "Rakesh",
    email: "Hello@gmail.com",
    age: 12
}

const RootContext = createContext(userData)

export const RootProvider = ({children}:{children: React.ReactNode}) => {
    return (
        <RootContext.Provider value={userData}>
            {children}
        </RootContext.Provider>
    )
}

export const useRootContext = () => useContext(RootContext)