import React from 'react'
import Login from './Login'
import { ProfileProps } from './Profile'

// define component props type
type PrivateProps = {
    isLoggedIn: boolean,
    Component: React.ComponentType<ProfileProps>// how we can get a props as component 
}


export const Private = (props: PrivateProps) => {
    if (props.isLoggedIn) {
        // if loggin true hai to profile dikhado
        return <props.Component name="ErMapsh" />
    } else {
        // otherwise redirect to login page
        return <Login />
    }

}
