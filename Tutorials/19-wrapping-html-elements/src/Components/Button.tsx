import React from "react"

type ButtonProps = {
    variant: 'primary' | 'secondary'
    onClick: ()=>void
    children: React.ReactNode
}

export const Button = ({ variant, children, onClick }: ButtonProps) => {
    return <button className={`class-with-${variant}`} onClick={()=>{onClick()}}>{children}</button>
}