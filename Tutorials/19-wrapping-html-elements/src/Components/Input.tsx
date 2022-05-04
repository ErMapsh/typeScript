import React from "react"

type InputProps = React.ComponentProps<'input'>

export const Input = (props: InputProps) =>{
    console.log(props)
    return <input type="text" name="" id="" />
}