import React, { createContext } from 'react'
import { theme } from './theme'//we import theme for pass a value to app

type ThemeContextProviderProps = {
    children: React.ReactNode
}

// create context
export const ThemeContext = createContext(theme)

// we gonna wrap all component in themecontext so we need to specify are children are component as reactNode 
export const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}