type GreetProps = {
    name: string
    MessageCount: number
    loggedin: boolean
}

export const Greet = (props: GreetProps) => {
    return (
        <div>
            {props.loggedin?<h2>Welcome {props.name}! You Have 10 unread messages</h2>:<h2>Welcome Guest</h2>}
        </div>
    )
}