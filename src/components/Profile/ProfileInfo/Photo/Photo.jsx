import React from 'react'
import s from './Photo.module.css'

const Photo = (props) => {
    return <div >
        <img className={s.photo} src={props.photo} />
    </div>
}

export default Photo