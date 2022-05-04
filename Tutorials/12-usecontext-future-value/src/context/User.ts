import React, { createContext, useState } from "react";

export const UserContext = createContext(null)

type UserContextProviderProps = {
    children: React.ReactNode
}

export type AuthUser = {
    name: string
    email: string
}

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
    const [user, setuser] = useState<null | AuthUser>(null)
    return 
}