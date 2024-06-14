import css from './CategorySelect.module.css'
import {ShowTitle} from '../Showpart/ShowTitle'
import { setFilter } from '../../../redux/Items/itemsSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const CategorySelect = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onCategorySelect = (e) =>{
    dispatch(setFilter({category: e.currentTarget.id,
    pricemin: 0,
    pricemax: 30000,
    color: 'all'}))

    navigate('/browse')
  }

  return (
    <div className={css.CategorySelectContainer}>
      <ShowTitle title='Обери потрібний товар'></ShowTitle>
        <ul className={css.CategorySelectList}>
            <li onClick={(e) => onCategorySelect(e)} id='floor-vacuum' className={css.CategorySelectItem}>
              <span className={css.categoryTitle}>Робот пилосос</span>
            </li>
            <li onClick={(e) => onCategorySelect(e)} id='window-vacuum' className={css.CategorySelectItem}>
              <span className={css.categoryTitle}>Пилосос для вікон</span></li>
            <li onClick={(e) => onCategorySelect(e)} id='homepod' className={css.CategorySelectItem}>
              <span className={css.categoryTitle}>Розумна колонка</span></li>
        </ul>
    </div>
  )
}
