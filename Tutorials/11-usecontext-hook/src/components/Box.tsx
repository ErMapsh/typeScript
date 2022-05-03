import React, { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

function Box() {
    const context = useContext(ThemeContext)
    const { primary, secondary } = context
    return (
        <>
            <div style={{ backgroundColor: primary.main, color: primary.text }}>Box</div>
            <div style={{ backgroundColor: secondary.main, color: secondary.text }}>Box</div>
        </>
    )
}

export default Box