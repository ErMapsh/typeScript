import React from 'react'

type ListPropsType = {
    itmes: string[] | number[]
    onclick: (value: string | number) => void
}

const borderStyle = { borderWidth: 2, borderColor: 'black', borderStyle: 'solid', margin: 10, padding: 15, }

function List(props: ListPropsType) {
    return (
        <div>
            <h2>List of items</h2>
            {
                props.itmes.map((item, index) => {
                    return (
                        <div onClick={() => props.onclick(item)} style={borderStyle} key={index}>
                            {item}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default List