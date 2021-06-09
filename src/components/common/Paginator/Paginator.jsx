import React from 'react';
import s from './Paginator.module.css';

const Paginator = ({totalUserCount, pageSize, currentPage, onPageChanged}) => {
    let pagesCount = Math.ceil(totalUserCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++){
        pages.push(i);
    }
    return <div className={s.pageList}>
            { pages.map(p => {
                return <div key={p}
                            className={currentPage === p ? s.selectedPage : ""}
                            onClick={(e) => {
                                onPageChanged(p);
                            }}>
                        {p}
                    </div>
            })}
        </div>
}

export default Paginator;