import React from 'react'
import { Field, reduxForm } from 'redux-form'

const LoginForm = (props) => {
    <form onSubmit={props.handleSubmit}>
        <div><Field component={'input'} placeholder={'Login'} name={'login'} /></div>
        <div><button>Send</button></div>
    </form>
}

const loginForm = reduxForm({form: loginForm})(LoginForm)

const Login = (props) => {
    return <div>
        <h1>LOGIN</h1>
        <div><LoginForm /></div>         
        </div>
}

export default Login

