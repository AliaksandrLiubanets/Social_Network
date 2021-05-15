import React from 'react'
import { Field } from 'redux-form'
import { maxLength, required } from './required'
import { Textarea } from './Textarea'

const maxLength2 = maxLength(2)

let MessageSend = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} placeholder={'Enter your message'} name={'message'} type='text'
                validate={[required, maxLength2]}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export default MessageSend
