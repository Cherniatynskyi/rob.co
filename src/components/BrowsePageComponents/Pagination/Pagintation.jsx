import css from './Paginations.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { setPage, incPage, decPage } from '../../../redux/Items/itemsSlice'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export const Pagintation = () => {
  const dispatch = useDispatch()
  const {page} = useSelector(state => state.items)
  const {totalItems} = useSelector(state => state.items)
  const pagesTotal = Math.ceil(totalItems/6)
  const pages = []

  for(let i = 1; i <=  pagesTotal ; i++){
    pages.push(i)
  }

  const incrpage = () =>{
    if(page === pagesTotal){
      return
    }
    dispatch(incPage())
  }

  const decrpage = () =>{
    if(page === 1){
      return
    }
    dispatch(decPage())
  }

  const setDirectpage  = (e) =>{
    if(e.currentTarget.textContent === page){
      return
    }
    dispatch(setPage(parseInt(e.currentTarget.textContent)))
  }

  return (
    <>
    {pagesTotal > 1 && <div className={css.pagWrap}>
      <button className={css.button} onClick={decrpage} disabled={page===1}><FaArrowLeft/> Назад</button>
      {(pagesTotal < 4) &&
          <ul className={css.pagList}>
            {pages.map(el => {
              return (
              <li key={el}>
                <button onClick={(e)=>setDirectpage(e)} className={`${css.pageItem} ${page === el && css.pageActive}`}>{el}</button>
              </li>)
            })}
            
          </ul>
      }
      {(page >= 1 && page < 4 && page < pagesTotal - 2) &&
          <ul className={css.pagList}>
            <li>
              <button onClick={(e)=>setDirectpage(e)} className={`${css.pageItem} ${page === 1 && css.pageActive}`}>1</button>
            </li>
            <li>
              <button onClick={(e)=>setDirectpage(e)}  className={`${css.pageItem} ${page === 2 && css.pageActive}`}>2</button>
            </li>
            <li>
              <button onClick={(e)=>setDirectpage(e)}  className={`${css.pageItem} ${page === 3 && css.pageActive}`}>3</button>
            </li>
            <li>....</li>
            <li><button onClick={(e)=>setDirectpage(e)}  className={`${css.pageItem}`}>{pagesTotal}</button></li>
          </ul>
      }
      {(page > 3 && page < pagesTotal-2)  &&
          <ul className={css.pagList}>
            <li><button onClick={(e)=>setDirectpage(e)}  className={`${css.pageItem} ${page === 3 && css.pageActive}`}>1</button></li>
            <li>....</li>
            <li className={`${css.pageItem} ${css.pageActive}`}>{page}</li>
            <li>....</li>
            <li><button onClick={(e)=>setDirectpage(e)}  className={`${css.pageItem} ${page === 3 && css.pageActive}`}>{pagesTotal}</button></li>
          </ul>
      }
      {(page >= pagesTotal - 2 && page <= pagesTotal && pagesTotal>3) &&
          <ul className={css.pagList}>
            <li><button onClick={(e)=>setDirectpage(e)}  className={`${css.pageItem}`}>1</button></li>
            <li>....</li>
            <li>
              <button onClick={(e)=>setDirectpage(e)} className={`${css.pageItem} ${page === pagesTotal-2 && css.pageActive}`}>{pagesTotal-2}</button>
            </li>
            <li>
              <button onClick={(e)=>setDirectpage(e)}  className={`${css.pageItem} ${page === pagesTotal-1 && css.pageActive}`}>{pagesTotal-1}</button>
            </li>
            <li>
              <button onClick={(e)=>setDirectpage(e)}  className={`${css.pageItem} ${page === pagesTotal && css.pageActive}`}>{pagesTotal}</button>
            </li>
            
        </ul>
      }
      <button className={css.button} onClick={incrpage} disabled={page===pagesTotal}>Вперед <FaArrowRight/></button>
    </div>}
    </>
  )
}
