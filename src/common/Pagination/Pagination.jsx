import { useState } from 'react';
import s from './Pagination.module.css'

const Pagination = ({ totalUsersCount: totalItemsCount, pageSize, onChangeClick, currentPage }) => {
    let pageCount = Math.ceil(totalItemsCount / pageSize); 
    let portion = 10
    let page = []

    for (let i = 1; i <= pageCount; i++) {
        page.push(i);
    }

    let portionCount = Math.ceil(pageCount / portion)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortion = (portionNumber - 1) * portion + 1
    let rightPortion = portionNumber * portion


    return <div className={s.paginationBox}>
      {portionNumber > 1 && <button onClick={ () => {setPortionNumber(portionNumber - 1)} }>Prev</button>}
        {  page.filter(p => p >= leftPortion && p <= rightPortion) 
                .map(p => {
                return <span onClick={() => { onChangeClick(p) }} className={currentPage === p ? s.selectedPage : ''}>{p}</span>
            })
        }
        {portionNumber < portionCount && <button onClick={ () => {setPortionNumber(portionNumber + 1)} }>Next</button> }
    </div>
}

export default Pagination;


