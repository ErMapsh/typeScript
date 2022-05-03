import React from 'react'
import {PersonProps} from '../types/Person.types'

function Person(props: PersonProps) {
    return (
        <div>{props.PersonName.fname} {props.PersonName.lname}</div>
    )
}

export default Person