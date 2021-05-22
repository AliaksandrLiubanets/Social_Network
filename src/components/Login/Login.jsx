import React from 'react'
import { Field, reduxForm } from 'redux-form'
import SubmitedData from './SubmitedData'
import { connect } from 'react-redux'
import { setSubmitedData } from './../../redux/reducer-login.js'
import { alphaNumeric, maxLength30, minLength4, required, minLength } from '../../common/validators/validator'
import { login } from './../../redux/reducer-auth'
import s from './Login.module.css'

// const inputField = ({input, meta: {touched, error}}) => (
const inputField = (props) => {
    let {input, type, placeholder, meta: {touched, error}} = props
    return (
    
        <div>
            <input {...input} type={type} placeholder={placeholder} />
            {
                touched &&  error && <span className={s.error}>{ error }</span>
            }
        </div>
    )
}

const minLength2 = minLength(2) 

let LoginForm = (props) => {
    let {pristine, submitting, reset, handleSubmit } = props    
    debugger;
    return <>
        <form onSubmit={handleSubmit}>
            <div><Field component={inputField} name='email' validate={[required, minLength4, maxLength30]} type="email" placeholder='Email' /></div>
            <div><Field component={inputField} name='password' validate={[required, alphaNumeric, minLength2]} type="password" placeholder='Password' /></div>
            <div><Field component='input' name='rememberMe' type="checkbox" />remember me</div>
            <button className={s.button} type='submit' disabled={ pristine || submitting} >Send</button>
            <button className={s.buttonClear} type='submit' disabled={ pristine || submitting } onClick={reset}>Clear</button>
        </form>
    </>
}

LoginForm = reduxForm({form: 'loginForm'})(LoginForm)

const Login = (props) => {
    const funSubmit = (formData) => {
        let {email, password, rememberMe} = formData
        // props.setSubmitedData(email, password, rememberMe)
        props.login(email, password, rememberMe)
        // props.setUserIdAuth()

    }
    return <div className={s.loginPage}>
        <h1>LOGIN</h1>
        <LoginForm onSubmit={funSubmit}/>
        <SubmitedData {...props} />
    </div>
}

const mapStateToProps = (state) => {
    return {
        login: state.loginPage.data.email,
        password: state.loginPage.data.password,
        rememberMe: state.loginPage.data.rememberMe
    }
}

export default connect( mapStateToProps, {setSubmitedData, login})(Login)

// export default Login

