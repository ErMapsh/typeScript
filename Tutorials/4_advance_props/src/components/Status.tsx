import React from 'react'
type StatusProps = {
    status: 'loading' | 'success' | 'error'
}

function Status(props: StatusProps) {
    let message;
    if (props.status === 'loading') {
        message = "Loading"
    } else if (props.status === 'success') {
        message = 'Success'
    } else if (props.status === 'error') {
        message = "Error Fetching Data"
    }
    return (
        <div>
            {/* <h2>Loading...</h2>
            <h2>Data Fetch Successfully</h2>
            <h2>Error Fetching Data</h2> */}
            <h2>Status: {message}</h2>
        </div>
    )
}

export default Status