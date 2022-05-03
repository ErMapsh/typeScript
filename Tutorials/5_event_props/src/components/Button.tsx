import React from "react"

type ButtonProps = {
    handleClickFunction: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}


{/* when someone click the button, that time component have props as fuction TypeScript pass to the event and id to that funtion */ }
export const Button = (props: ButtonProps) => {

    const style = { backgroundColor: 'black', color: 'white', padding: 15, marginTop: 20, fontSize: 20, borderRadius: 25, cursor: "pointer" }

    return (

        <button
            onClick={(event) => {
                props.handleClickFunction(event, 1)
                // here event and id pass to the funtion
            }}
            style={style}>Click</button>
    )
}