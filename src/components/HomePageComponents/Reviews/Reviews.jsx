import { ShowTitle } from "../Showpart/ShowTitle"
import css from './Reviews.module.css'
import { SimpleSlider } from "./Slider"


export const Reviews = () => {
  return (
    <section className={css.reviews}>
        <div className={css.titleWrap}><ShowTitle title='OUR HAPPY CUSTOMERS'/></div>
        <SimpleSlider></SimpleSlider>
    </section>
  )
}
