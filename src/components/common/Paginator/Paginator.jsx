import React, {useEffect, useState} from 'react';
import s from './Paginator.module.css';
import cn from "classnames";

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 2}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    /*useEffect(() => {
        setPortionNumber(portionNumber);
    }, [currentPage]);*/

    return <div className={s.pageList}>
        {portionNumber > 1 &&
        <div><button onClick={() => {
            setPortionNumber(portionNumber - 1)
        }}>{"<="}</button></div>}
        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p) => {
                return <div key={p}
                            className={ cn({
                                [s.selectedPage]: currentPage === p
                            }, s.pageNumber)
                            }
                            onClick={(e) => {
                                onPageChanged(p);
                            }}>
                    {p}
                </div>
            })}
        {portionCount > portionNumber &&
        <div><button onClick={() => {
            setPortionNumber(portionNumber + 1)
        }}>{'=>'}</button></div>}
    </div>
}

export default Paginator;