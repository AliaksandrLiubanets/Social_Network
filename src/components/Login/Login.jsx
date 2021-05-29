import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { alphaNumeric, maxLength30, minLength4, required, minLength } from '../../common/validators/validator'
import { login, logout } from './../../redux/reducer-auth'
import s from './Login.module.css'
import { Redirect } from 'react-router'

// const inputField = ({input, meta: {touched, error}}) => (
const inputField = (props) => {
    let {input, type, placeholder, meta: {touched, error}} = props
    return (
    
        <div>
            <input className={touched &&  (error || (!props.isAuth && props.isError)) ? s.errorBorder : undefined } {...input} type={type} placeholder={placeholder} />
            {
                touched &&  error && <span className={s.error}>{ error }</span>
            }
        </div>
    )
}

const minLength2 = minLength(2) 

let LoginForm = (props) => {
    debugger;
    let {pristine, submitting, reset, handleSubmit } = props        
    return <>
        <form onSubmit={handleSubmit}>
            <div><Field component={inputField} name='email' validate={[required, minLength4, maxLength30]} type="email" placeholder='Email' isError={props.isError} isAuth={props.isAuth}/></div>
            <div><Field component={inputField} name='password' validate={[required, alphaNumeric, minLength2]} type="password" placeholder='Password' isError={props.isError} isAuth={props.isAuth}/></div>
            <div><Field component='input' name='rememberMe' type="checkbox" />remember me</div>
            {props.isError ? <div className={s.errorText}>{props.errorText}</div> : null}
            <button className={s.button} type='submit' disabled={ pristine || submitting} >Send</button>
            {/* <button className={s.buttonClear} type='submit' disabled={ pristine || submitting } onClick={reset}>Clear</button> */}
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
        <LoginForm onSubmit={funSubmit} isError={props.isError} isAuth={props.isAuth} errorText={props.errorText}/>
        {/* {props.isError ? <div className={s.errorText}>{props.errorText}</div> : null} */}
        {/* <SubmitedData {...props} /> */}
    </div>

}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        isError: state.auth.isError,
        errorText: state.auth.errorText
    }
}


export default connect( mapStateToProps, {login})(Login)

// const wrapperLoginFormWithProps = connect(mapStateToProps)(LoginForm)



