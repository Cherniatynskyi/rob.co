import { Rating } from '../../utils/Rating';
import css from './ProductCard.module.css'
import img from '../../images/hero.png'

export const ProductCard = () => {
  const score = 3.5
  return (
    <li className={css.cardItem}>
        <img className={css.cardImg} src={img} alt="" />
        <div>
          <h3 className={css.cardTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
          <Rating rating={score}/>
          <p className={css.cardPrice}>$120</p>
        </div>
    </li>
  )
}
