import React, { useState } from 'react'

type AuthUser = {
    name: string
    email: string
}
function User() {
    const btnStyle = { backgroundColor: 'black', color: 'white', padding: 10, margin: 20, fontSize: 20 }

    // usestate: we are saying User can be null or in future User can be object like AuthUser
    const [User, setUser] = useState<null | AuthUser>(null)

    const handleLogin = () => {
        setUser({
            name: "ErMapsh",
            email: "ermapsh@gmail.com"
        })
    }
    const handleLogout = () => { setUser(null) }

    return (
        <div>
            <button style={btnStyle} onClick={handleLogin}>Login</button>
            <button style={btnStyle} onClick={handleLogout}>Logout</button>
            {User && <div>User name is {User?.name}</div>}
            {User && <div>User email is {User?.email}</div>}
        </div>
    )
}

export default User