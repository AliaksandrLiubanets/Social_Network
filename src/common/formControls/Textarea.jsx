import React from 'react'

export const Textarea = ({input, meta: {touched: touched, error: error}, ...props}) => {
   
    return <div>
        <textarea {...input}></textarea>
        <div>
            {
                touched && 
                (error && <span>{error}</span>)
            }
        </div>
    </div>

}