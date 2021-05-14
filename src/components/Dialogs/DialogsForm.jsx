import React from 'react'
import { Field, reduxForm } from 'redux-form'

const DialogsForm = (props) => {
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

const ReduxDialogsForm = reduxForm({
    form: 'dialogsMessage'
})(DialogsForm)

export default ReduxDialogsForm
