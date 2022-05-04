import React, { Component } from 'react'

type CounterStateType = {
    count: number
}

type CounterProps = {
    message: string
}

export class Counter extends Component<CounterProps>{
    state = {
        count: 0
    }

    handleClick = () => {
        this.setState((prevState: CounterStateType) => ({ count: prevState.count + 1 }))
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Increment</button>
                {this.props.message} {this.state.count}
            </div>
        )
    }
}
