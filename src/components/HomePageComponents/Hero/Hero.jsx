
import { StandartButton } from '../../../utils/StandartButton'
import { NavLink } from "react-router-dom";
import css from './Hero.module.css'
import img from '../../../images/hero.png'

export const Hero = () => {
  return (
    <section className={css.hero}>
        <div className={css.heroTextWrap}>
            <h1 className={css.heroTitle}>Find your best <br></br> AI home helper</h1>
            <p className={css.heroSubtext}>Browse through the large number of brands that provide products with advanced artificial intelligence technologies that will help make the home routine much easier</p>
            <NavLink to='/browse'><StandartButton buttonText="Shop Now"></StandartButton></NavLink>      
        </div>
        <ul className={css.advList}>
            <li className={css.advItem}><span>100 +</span><p>International Brands</p></li>
            <li className={css.advItem}><span>300 +</span><p>High-Quality Products</p></li>
            <li className={css.advItem}><span>20 000 +</span><p>Happy Customers</p></li>
        </ul>
        <img className={css.heroImg} src={img} alt="" />
        <div className={css.test}></div>
    </section>
  )
}
