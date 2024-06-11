
import { ReviewCard } from '../../HomePageComponents/Reviews/ReviewCard'
import css from './ProductReviews.module.css'

export const ProductsReviews = ({reviews}) => {
  return (
    <div>
      <h2>Відгуки</h2>
      {reviews.length > 0 ? <ul className={css.reviewsList}>
        {reviews.map(review =>{
          return (
            <ReviewCard key={review.name} review={review} addStyle={css.reviewCardDetails}/>
          )
        })}
      </ul> : <h3 className={css.marker}>Відгути до цього товару відсутні</h3>}
    </div>
  )
}
