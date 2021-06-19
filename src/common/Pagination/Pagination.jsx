import s from './Pagination.module.css'

const Pagination = ({ totalUsersCount, pageSize, onChangeClick, currentPage, ...props }) => {
    let pageCount = Math.ceil(totalUsersCount / pageSize);
    let page = [];

    for (let i = 1; i <= pageCount; i++) {
        page.push(i);
    }

    return <div className={s.paginationBox}>
        {
            page.map(p => {
                return <span onClick={() => { onChangeClick(p) }} className={currentPage === p ? s.selectedPage : ''}>{p}</span>
            })
        }
    </div>

}

export default Pagination;


