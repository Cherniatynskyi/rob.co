import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import css from './styles.module.css'

export const Rating = ({rating}) => {
  return (
    <>
    {rating ? <div className={css.ratingWrap}>
    {Array.apply(0, Array(Math.floor(rating))).map((el, i) => {
        return (<FaStar className={css.starIcon} key={i}/>)
    })}
    {!Number.isInteger(rating) && <FaStarHalf className={css.starIcon} />}
    <span className={css.score}>{rating.toFixed(1)} / 10</span>
    </div> : <span>No rating</span>}</>
  )
}
