import React, { useState } from 'react'

const ProfileStatusWithHooks = (props) => {
    
        // let stateWithSetState = useState(false)
        // let editMode = stateWithSetState[0]
        // let setEditMode = stateWithSetState[1]

        let [editMode, setEditMode] = useState(false)
        let [status, setStatus] = useState(props.status)

        const activateEditMode = () => {
            setEditMode(true)
        }

        const deactivateEditMode = () => {
            setEditMode(false)
            props.updateStatus(status)
        }

        const changeTextInput = (e) => {
            let body = e.currentTarget.value   // e.target.value
            setStatus(body)
        }
    
        return <>
            {   !editMode &&
                     <div>
                        <span  onDoubleClick={activateEditMode}>{status || 'Set your status'} </span>
                    </div>
            }   
            {   editMode &&
                    <div>
                        <input  onBlur={deactivateEditMode} onChange={changeTextInput} autoFocus={true}
                         value={status} />
                    </div>
            }
        </>
}  

export default ProfileStatusWithHooks