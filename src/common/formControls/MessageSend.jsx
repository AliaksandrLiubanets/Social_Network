import React from 'react'
import { Field } from 'redux-form'
import { maxLength, minLength, required } from '../validators/validator'
// import { maxLength, required } from './required'
import { Textarea } from './Textarea'

const maxLength100 = maxLength(100)
const minLength1 = minLength(1)

let MessageSend = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} placeholder={'Enter your message'} name={'message'} type='text'
                validate={[minLength1, maxLength100, required]}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export default MessageSend
