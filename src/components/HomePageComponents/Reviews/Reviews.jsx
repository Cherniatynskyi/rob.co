import { ShowTitle } from "../Showpart/ShowTitle"
import css from './Reviews.module.css'
import { SimpleSlider } from "./Slider"


export const Reviews = ({reviews}) => {
  return (
    <section className={css.reviews}>
        <div className={css.titleWrap}><ShowTitle title='НАШІ ЩАСЛИВІ ПОКУПЦІ'/></div>
        <SimpleSlider reviews={reviews}/>
    </section>
  )
}
