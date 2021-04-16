import React from 'react'
import s from './JobDescription.module.css'

const JobDescription = (props) => {
    return <div>        
        {
            props.jobDescription
            ? <div className={s.jobText}>{props.jobDescription}</div>
            : <div className={s.jobText}>no experience</div>             
        }        
    </div>
}

export default JobDescription


