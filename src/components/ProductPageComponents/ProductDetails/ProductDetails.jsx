import css from './ProductDetails.module.css'

export const ProductDetails = ({item}) => {
  return (
    <div className={css.detailsWrap}>
      <h2 className={css.detailsTitle}>Характеристики</h2>
      <div className={css.detailsList}>
        <ul className={css.keysList}>
          {Object.keys(item.techs).map(el => {
            return (
              <li key={el} className={css.keyItem}>
                {el}
              </li>
            )
          })}
        </ul>
        <ul className={css.valuesList}>
          {Object.values(item.techs).map(el => {
            return (
              <li key={el} className={css.valueItem}>
                {el}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
