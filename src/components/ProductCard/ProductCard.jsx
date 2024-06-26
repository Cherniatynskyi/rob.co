import { Rating } from '../../utils/Rating';
import css from './ProductCard.module.css'

export const ProductCard = ({item}) => {
  const score = item.reviews.reduce((avgScore, el) => {
    return avgScore + parseInt(el.score)
  }, 0)
  const title = item.title.length > 38 ? `${item.title.slice(0, 38)}...` : item.title
  return (
    <li className={css.cardItem}>
        <img className={css.cardImg} src={item.photo_urls[0]} alt="" />
        <div>
          <h3 className={css.cardTitle}>{title}</h3>
          <Rating rating={score / item.reviews.length}/>
          <p className={css.cardPrice}>₴ {item.price}</p>
        </div>
    </li>
  )
}
