type GreetProps = {
    name: string
    MessageCount?: number
    loggedin: boolean
}

export const Greet = (props: GreetProps) => {
    // if we got props messagecount then use that else use 0 value for messagecount
    const { MessageCount = 0 } = props
    return (
        <div>
            {props.loggedin ? <h2>Welcome {props.name}! You Have {MessageCount} unread messages</h2> : <h2>Welcome Guest</h2>}
        </div>
    )
}