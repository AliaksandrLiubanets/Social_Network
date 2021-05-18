import React from 'react'
import { Field, reduxForm } from 'redux-form'
import SubmitedData from './SubmitedData'
import { connect } from 'react-redux'
import { setSubmitedData } from './../../redux/reducer-login.js'

let LoginForm = (props) => {
    return <>
        <form onSubmit={props.handleSubmit}>
            <div><Field component='input' name='login' type="text" placeholder='Login' /></div>
            <div><Field component='input' name='password' type="text" placeholder='Name' /></div>
            <div><Field component='input' name='rememberMe' type="checkbox" />remember me</div>
            <button>Send</button>
        </form>
    </>
}

LoginForm = reduxForm({form: 'loginForm'})(LoginForm)

const Login = (props) => {
    const funSubmit = (formData) => {
        
        props.setSubmitedData(formData)
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginForm onSubmit={funSubmit}/>
        <SubmitedData {...props} />

    </div>
}

const mapStateToProps = (state) => {
    return {
        login: state.loginPage.data.login,
        password: state.loginPage.data.password,
        rememberMe: state.loginPage.data.rememberMe
    }
}



export default connect(mapStateToProps, {setSubmitedData})(Login)

