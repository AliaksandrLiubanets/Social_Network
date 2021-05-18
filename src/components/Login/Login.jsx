import React from 'react'
import { Field, reduxForm } from 'redux-form'
import SubmitedData from './SubmitedData'

let LoginForm = (props) => {
    return <>
        <form onSubmit={props.handleSubmit}>
            <div><Field component='input' name='login' type="text" placeholder='Login' /></div>
            <div><Field component='input' name='name' type="text" placeholder='Name' /></div>
            <div><Field component='input' name='rememberMe' type="checkbox" />remember me</div>
            <button>Send</button>
        </form>
    </>
}

LoginForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const funSubmit = (formData) => {
        console.log(formData.name)
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginForm onSubmit={funSubmit}/>
        <SubmitedData />

    </div>
}

export default Login

