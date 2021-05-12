import React, { useEffect } from 'react'
import s from './Pagination.module.css'

let Pagination = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let page = [];

    for (let i = 1; i <= pageCount; i++) {
        page.push(i);
    }

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then()
    }, [])

    return <>
    
        <div className={s.paginationBox}>
            <h1>Pagination</h1>
            <div>
            {
                page.map(p => {
                    
                    return <span onClick={() => { props.onChangeClick(p) }} className={props.currentPage === p ? s.selectedPage : ''}>{p}</span>
                })
            }
            </div>
            
        </div>
        </>
}

export default Pagination