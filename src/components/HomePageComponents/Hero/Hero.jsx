
import { StandartButton } from '../../../utils/StandartButton'
import { NavLink } from "react-router-dom";
import css from './Hero.module.css'
import img from '../../../images/hero.png'

export const Hero = () => {
  return (
    <section className={css.hero}>
        <div className={css.heroTextWrap}>
            <h1 className={css.heroTitle}>Знайди найкращого<br></br>робота-помічника</h1>
            <p className={css.heroSubtext}>
                Перегляньте велику кількість брендів, які пропонують продукти з передовими технологіями штучного інтелекту, які допоможуть зробити домашню рутину набагато легшою</p>
            <NavLink to='/browse'><StandartButton buttonText="Придбати зараз"></StandartButton></NavLink>      
        </div>
        <ul className={css.advList}>
            <li className={css.advItem}><span>100 +</span><p>Інтернаціональних Брендів</p></li>
            <li className={css.advItem}><span>300 +</span><p>Якісних Продуктів</p></li>
            <li className={css.advItem}><span>20 000 +</span><p>Щасливих Покупців</p></li>
        </ul>
        <img className={css.heroImg} src={img} alt="" />
        <div className={css.test}></div>
    </section>
  )
}
