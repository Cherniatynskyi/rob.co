import Slider from "react-slick";
import { ReviewCard } from "./ReviewCard";
import css from './Reviews.module.css'



export const SimpleSlider = ({reviews}) => {
    var settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
    return (
      <Slider className={css.slider} {...settings}>
        {reviews?.map(el => <ReviewCard key={Math.random()} review={el}/>)}
      </Slider>
    );
  }