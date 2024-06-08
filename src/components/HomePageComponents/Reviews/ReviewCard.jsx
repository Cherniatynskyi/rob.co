import { FaCheckCircle } from "react-icons/fa";
import { Rating } from "../../../utils/Rating";
import css from './Reviews.module.css'

export const ReviewCard = ({review}) => {
  return (
    <div className={css.reviewsCard}>
      <Rating rating={parseInt(review.score)}/>
      <span className={css.reviewName}>{review.name} <FaCheckCircle color="green"/></span>
      <p className={css.reviewComment}>{review.comment}</p>
    </div>
  )
}
