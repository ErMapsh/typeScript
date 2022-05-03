import React from 'react'
type PersonListProps = {
    // such that we use array 
    NameList: {
        fname: string
        lname: string
    }[]
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