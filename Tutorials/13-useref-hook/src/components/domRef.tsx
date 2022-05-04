import { useRef, useEffect } from 'react'

export const DomRef = () => {
    const inputRef = useRef<HTMLInputElement>(null!)

    useEffect(() => {
        inputRef.current?.focus()
        console.log(inputRef)
    }, [])

    return (
        <div>
            <input type='text' ref={inputRef} style={{margin: 25, padding: 15,}}/>
        </div>
    )
}