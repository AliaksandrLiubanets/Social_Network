import React from 'react'
import s from './FullName.module.css'

const FullName = (props) => {
    return <div>
        <div className={s.name}>{props.fullName}</div>        
    </div>
}

export default FullName