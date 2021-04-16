import React from 'react'
import s from './AboutMe'


const AboutMe = (props) => {
    return <div >
        <div className={s.userInfo}>{props.aboutMe}</div>
    </div>
}

export default AboutMe