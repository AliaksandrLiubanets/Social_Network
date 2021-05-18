import React from 'react'

const SubmitedData = (props) => {
    return <div>
        <div>Submited login: {props.login}</div>
        <div>Submited password: {props.password}</div>
        <div>Submited remember: {props.rememberMe}</div>
    </div>
}

export default SubmitedData;
