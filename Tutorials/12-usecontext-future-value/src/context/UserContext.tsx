import React, { createContext, useState } from "react";

// user context props
type UserContextProviderProps = {
    children: React.ReactNode
}

// type of our context, what value type
type UserContextType = {
    user: AuthUser | null
    setuser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

// type of AuthUser
export type AuthUser = {
    name: string
    email: string
}

// create a context & telling it can be null initially but in future the value can be change so mention it type
// export const UserContext = createContext<null | UserContextType>(null)
export const UserContext = createContext({} as UserContextType)// type assertion

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
    const [user, setuser] = useState<null | AuthUser>(null)
    return <UserContext.Provider value={{ user, setuser }}>{children}</UserContext.Provider>
}