"use client"

import { useRootContext } from "@/components/UserContext"

export default function ClientPage(){
    const rootUser = useRootContext()

    return<h2>Client Page {rootUser.name}</h2>
}