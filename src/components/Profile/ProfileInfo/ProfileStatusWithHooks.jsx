import React, { useEffect, useState } from 'react'

const ProfileStatusWithHooks = (props) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect( () => {
        setStatus(props.status)
    }, [props.status] )
    
    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const changeTextInput = (event) => {
        setStatus(event.currentTarget.value)
    }

    const handleFocus = (event) => {
        event.target.select()
    }

    return <>
        {
            !editMode
                ? <div>
                    <span onDoubleClick={activateEditMode}>{status || 'enter your status'}</span>
                </div>
                : <div>
                    <input onBlur={deactivateEditMode} onChange={changeTextInput} 
                    value={status} autoFocus={true} onFocus={handleFocus}></input>
                </div>
        }    
    </>
}

export default ProfileStatusWithHooks