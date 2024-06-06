import css from './Show.module.css'
import img from '../../../images/hero.png'
import { Rating } from '../../../utils/Rating';


export const ProductsShowList = ({products}) => {
  const score = 3.8
  return (
        <ul className={css.showList}>
          <li className={css.cardItem}>
            <img className={css.cardImg} src={img} alt="" />
            <div>
              <h3 className={css.cardTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
              <Rating rating={score}/>
              <p className={css.cardPrice}>$120</p>
            </div>
          </li>
          <li className={css.cardItem}>
            <img className={css.cardImg} src={img} alt="" />
            <div>
              <h3 className={css.cardTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
              <Rating rating={score}/>
              <p className={css.cardPrice}>$120</p>
            </div>
          </li>
          <li className={css.cardItem}>
            <img className={css.cardImg} src={img} alt="" />
            <div>
              <h3 className={css.cardTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
              <Rating rating={score}/>
              <p className={css.cardPrice}>$120</p>
            </div>
          </li>
          <li className={css.cardItem}>
            <img className={css.cardImg} src={img} alt="" />
            <div>
              <h3 className={css.cardTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
              <Rating rating={score}/>
              <p className={css.cardPrice}>$120</p>
            </div>
          </li>
        </ul>
  )
}
