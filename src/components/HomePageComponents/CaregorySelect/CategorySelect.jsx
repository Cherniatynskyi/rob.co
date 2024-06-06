import css from './CategorySelect.module.css'
import {ShowTitle} from '../Showpart/ShowTitle'

export const CategorySelect = () => {
  return (
    <div className={css.CategorySelectContainer}>
      <ShowTitle title='choose your product'></ShowTitle>
        <ul className={css.CategorySelectList}>
            <li className={css.CategorySelectItem}>
              <span className={css.categoryTitle}>Floor Vacuum</span>
            </li>
            <li className={css.CategorySelectItem}><span className={css.categoryTitle}>Window Vacuum</span></li>
            <li className={css.CategorySelectItem}><span className={css.categoryTitle}>Smart Speaker</span></li>
        </ul>
    </div>
  )
}
