import React, {useContext} from 'react';
import { UserContext } from '../context/UserContext';

export const User = () => {
    const Context = useContext(UserContext);

    const handleLogin = () => { 
        if(Context){
            Context.setuser({
                name:"ErMapsh",
                email: "ErMapsh@gmail.com"
            })
        }
    }
    const handleLogout = () => {
        if(Context){
            Context.setuser(null)
        }
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            {/* <div>User name is {Context?.user?.name}</div>
            <div>User email is {Context?.user?.email}</div> */}
            <div>User name is {Context.user?.name}</div>
            <div>User email is {Context.user?.email}</div>

        </div>
    )
}