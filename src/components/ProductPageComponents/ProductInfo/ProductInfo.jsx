import css from './ProductInfo.module.css'
import { Rating } from '../../../utils/Rating'

export const ProductInfo = ({item}) => {
  const score = item.reviews.reduce((avgScore, el) => {
    return avgScore + parseInt(el.score)
  }, 0)
  return (
    <div>
      <h1 className={css.title}>{item.title}</h1>
      <Rating rating={score / item.reviews.length}/>
      <div>
        <div>Counter</div>
        <button>Add to cart</button>
      </div>
    </div>
  )
}
