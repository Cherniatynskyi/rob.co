import css from './Show.module.css'
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import img from '../../../images/hero.png'

export const ProductsShowList = ({products}) => {
  const score = 3.8
  return (
        <ul className={css.showList}>
          <li className={css.cardItem}>
            <img className={css.cardImg} src={img} alt="" />
            <div>
              <h3 className={css.cardTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
              <div>
                {Array.apply(0, Array(Math.floor(score))).map(i => {
                  return (<FaStar className={css.starIcon} key={i}/>)
                })}
                {!Number.isInteger(score) && <FaStarHalf className={css.starIcon} />}
              <span>{score} / 5</span>
              </div>
              <p className={css.cardPrice}>$120</p>
            </div>
          </li>
          <li className={css.cardItem}>
            <img className={css.cardImg} src={img} alt="" />
            <div>
              <h3 className={css.cardTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
              <div>
                {Array.apply(0, Array(Math.floor(score))).map(i => {
                  return (<FaStar className={css.starIcon} key={i}/>)
                })}
                {!Number.isInteger(score) && <FaStarHalf className={css.starIcon} />}
              <span>{score} / 5</span>
              </div>
              <p className={css.cardPrice}>$120</p>
            </div>
          </li>
          <li className={css.cardItem}>
            <img className={css.cardImg} src={img} alt="" />
            <div>
              <h3 className={css.cardTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
              <div>
                {Array.apply(0, Array(Math.floor(score))).map(i => {
                  return (<FaStar className={css.starIcon} key={i}/>)
                })}
                {!Number.isInteger(score) && <FaStarHalf className={css.starIcon} />}
              <span>{score} / 5</span>
              </div>
              <p className={css.cardPrice}>$120</p>
            </div>
          </li>
          <li className={css.cardItem}>
            <img className={css.cardImg} src={img} alt="" />
            <div>
              <h3 className={css.cardTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
              <div>
                {Array.apply(0, Array(Math.floor(score))).map(i => {
                  return (<FaStar className={css.starIcon} key={i}/>)
                })}
                {!Number.isInteger(score) && <FaStarHalf className={css.starIcon} />}
              <span>{score} / 5</span>
              </div>
              <p className={css.cardPrice}>$120</p>
            </div>
          </li>
        </ul>
  )
}
