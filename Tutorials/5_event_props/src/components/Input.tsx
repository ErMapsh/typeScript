import React from 'react'

type InputProps = {
    value: string
    handleOnChangeFunction: (event: React.ChangeEvent<HTMLInputElement>, id: number) => void
}

function Input(props: InputProps) {

    const style = { borderWidth: 2, borderStyle: 'solid', borderColor: 'black', margin: 20, width: '50%', padding: 15, borderRadius: 25 }

    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>, id: number) => {
        console.log(event)

    }

    return (
        <input type='text' style={style} value={props.value} onChange={(event) => {
            handleChangeInput(event, 2)
        }} />
    )
}

export default Input