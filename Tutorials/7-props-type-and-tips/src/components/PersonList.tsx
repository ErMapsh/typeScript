import React from 'react'
import {Name} from '../types/Person.types'
type PersonListProps = {
    // such that we use array 
    NameList: Name[]
}

function PersonList(props: PersonListProps) {
  return (
    <div>
        {props.NameList.map((item)=>{
            return(<h2>{item.fname} {item.lname}</h2>)
        })}
    </div>
  )
}

export default PersonList