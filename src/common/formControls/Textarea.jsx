import React from 'react'
import s from '../../components/Login/Login.module.css'

export const Textarea = ({input, meta: {touched: touched, error: error}, ...props}) => {
   
    return <div>
        <textarea {...input}></textarea>
        <div className={s.error}>
            {
                touched && 
                (error && <span>{error}</span>)
            }
        </div>
    </div>

}