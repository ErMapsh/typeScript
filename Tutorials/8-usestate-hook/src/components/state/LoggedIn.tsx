import React, { useState } from 'react'

function LoggedIn() {
  const btnStyle = { backgroundColor: 'black', color: 'white', padding: 10, margin: 20, fontSize: 20 }

  // usestate 
  const [login, setlogin] = useState(false)
  
  const handleLogin = () => { 
    setlogin(true)
  }
  const handleLogout = () => { 
    setlogin(false)
  }

  return (
    <div>
      <button style={btnStyle} onClick={handleLogin}>Login</button>
      <button style={btnStyle} onClick={handleLogout}>Logout</button>
      <div>User is {login?'logged in':'logged out'}</div>
    </div>
  )
}

export default LoggedIn