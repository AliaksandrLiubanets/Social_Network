import React from 'react'
import job_yes from '../../../../assets/job_yes.png'
import job_no from '../../../../assets/job_no.png'
import s from './Job.module.css'

const Job = (props) => {
    return <div>        
        {
            props.job
            ? <div><div className={s.jobText}>Looking for a job</div><img className={s.jobImage} src={job_yes} /></div>
            : <div><div className={s.jobText}>Already work</div><img className={s.jobImage} src={job_no} /></div>
        }
        
    </div>
}

export default Job


