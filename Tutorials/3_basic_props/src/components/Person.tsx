import React from 'react'
type PersonProps = {
    PersonName: {
        fname: string
        lname: string
    }
}

function Person(props: PersonProps) {
    return (
        <div>{props.PersonName.fname} {props.PersonName.lname}</div>
    )
}

export default Person