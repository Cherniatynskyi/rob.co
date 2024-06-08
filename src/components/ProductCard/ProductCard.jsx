import { Rating } from '../../utils/Rating';
import css from './ProductCard.module.css'

export const ProductCard = ({item}) => {
  const score = item.reviews.reduce((avgScore, el) => {
    return avgScore + parseInt(el.score)
  }, 0)
  return (
    <li className={css.cardItem}>
        <img className={css.cardImg} src={item.photo_urls[0]} alt="" />
        <div>
          <h3 className={css.cardTitle}>{item.title}</h3>
          <Rating rating={score / item.reviews.length}/>
          <p className={css.cardPrice}>₴ {item.price}</p>
        </div>
    </li>
  )
}
