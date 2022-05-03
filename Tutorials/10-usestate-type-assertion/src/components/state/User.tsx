import React, { useState } from 'react'

type AuthUser = {
    name: string
    email: string
}
function User() {
    const btnStyle = { backgroundColor: 'black', color: 'white', padding: 10, margin: 20, fontSize: 20 }

    // usestate: we are saying User Type can like AuthUser
    const [User, setUser] = useState<AuthUser>({} as AuthUser)

    const handleLogin = () => {
        setUser({
            name: "ErMapsh",
            email: "ermapsh@gmail.com"
        })
    }
    const handleLogout = () => { setUser({} as AuthUser) }

    return (
        <div>
            <button style={btnStyle} onClick={handleLogin}>Login</button>
            <button style={btnStyle} onClick={handleLogout}>Logout</button>
            <div>User name is {User?.name}</div>
            <div>User email is {User?.email}</div>
        </div>
    )
}

export default User