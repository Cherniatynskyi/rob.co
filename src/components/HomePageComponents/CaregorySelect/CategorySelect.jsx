import css from './CategorySelect.module.css'
import {ShowTitle} from '../Showpart/ShowTitle'

export const CategorySelect = () => {
  return (
    <div className={css.CategorySelectContainer}>
      <ShowTitle title='Обери потрібний товар'></ShowTitle>
        <ul className={css.CategorySelectList}>
            <li className={css.CategorySelectItem}>
              <span className={css.categoryTitle}>Робот пилосос</span>
            </li>
            <li className={css.CategorySelectItem}><span className={css.categoryTitle}>Пилосос для вікон</span></li>
            <li className={css.CategorySelectItem}><span className={css.categoryTitle}>Розумна колонка</span></li>
        </ul>
    </div>
  )
}
