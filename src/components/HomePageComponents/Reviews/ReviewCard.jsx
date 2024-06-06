import { FaCheckCircle } from "react-icons/fa";
import { Rating } from "../../../utils/Rating";
import css from './Reviews.module.css'

export const ReviewCard = () => {
  const score = 3.8
  return (
    <div className={css.reviewsCard}>
      <Rating rating={score}/>
      <span className={css.reviewName}>Name <FaCheckCircle color="green"/></span>
      <p className={css.reviewComment}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi quidem inventore necessitatibus nulla cupiditate dolor, tempore commodi officia repellendus placeat!</p>
    </div>
  )
}
