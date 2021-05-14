import React from 'react'
import { Field } from 'redux-form'

let MessageSend = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} placeholder={'Enter your message'} name={'message'} />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export default MessageSend
