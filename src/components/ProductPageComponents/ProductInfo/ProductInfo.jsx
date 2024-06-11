import css from './ProductInfo.module.css'
import { Rating } from '../../../utils/Rating'
import { CartController } from './CartController'

export const ProductInfo = ({item}) => {
  const score = item.reviews.reduce((avgScore, el) => {
    return avgScore + parseInt(el.score)
  }, 0)
  return (
    <div className={css.infoWrap}>
      <h1 className={css.title}>{item.title}</h1>
      <Rating rating={score / item.reviews.length}/>
      <CartController item={item} />
    </div>
  )
}
