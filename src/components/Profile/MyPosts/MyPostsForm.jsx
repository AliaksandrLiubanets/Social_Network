import React from 'react';
import { Field, reduxForm } from 'redux-form'

let MyPostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={'textarea'} name={'message'} />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  )
}

MyPostsForm = reduxForm({form: 'profileMessage'})(MyPostsForm)

export default MyPostsForm;
