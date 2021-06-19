import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { alphaNumeric, maxLength30, minLength4, required, minLength } from '../../common/validators/validator'
import { login } from './../../redux/reducer-auth'
import s from './Login.module.css'
import { Redirect } from 'react-router'

const inputField = (props) => {
    let {input, type, placeholder, meta: {touched, error}, isAuth, isError} = props
    return (
    
        <div>
            <input className={touched &&  (error || (!isAuth && isError)) ? s.errorBorder : undefined } {...input} type={type} placeholder={placeholder} />
            {
                touched &&  error && <span className={s.error}>{ error }</span>
            }
        </div>
    )
}

const minLength2 = minLength(2) 

let LoginForm = (props) => {
    let {pristine, submitting, handleSubmit } = props        
    return <>
        <form onSubmit={handleSubmit}>
            <div><Field component={inputField} name='email' validate={[required, minLength4, maxLength30]} type="email" placeholder='Email' /></div>
            <div><Field component={inputField} name='password' validate={[required, alphaNumeric, minLength2]} type="password" placeholder='Password' /></div>
            <div><Field component='input' name='rememberMe' type="checkbox" />remember me</div>
            {props.error ? <div className={s.errorText}>{props.error}</div> : null}
            <button className={s.button} type='submit' disabled={ pristine || submitting} >Send</button>
        </form>
    </>
}

LoginForm = reduxForm({form: 'loginForm'})(LoginForm)

const Login = (props) => {
    const funSubmit = (formData) => {
        let {email, password, rememberMe} = formData
        props.login(email, password, rememberMe)
    }
    
    if (props.isAuth) {
        return  <Redirect to='/profile'/> }

    return <div className={s.loginPage}>
        <h1>LOGIN</h1>
        <LoginForm onSubmit={funSubmit} />
    </div>
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth      
    }
}

export default connect( mapStateToProps, {login})(Login)




