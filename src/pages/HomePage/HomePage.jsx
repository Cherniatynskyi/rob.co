import { BrandsStripe } from "../../components/HomePageComponents/BrandsStripe/BrandsStripe"
import { CategorySelect } from "../../components/HomePageComponents/CaregorySelect/CategorySelect"
import { Hero } from "../../components/HomePageComponents/Hero/Hero"
import {  Reviews } from "../../components/Reviews/Reviews"
import { ProductsShowList } from "../../components/HomePageComponents/Showpart/ProductsShowList"
import { ShowTitle } from "../../components/HomePageComponents/Showpart/ShowTitle"
import { ShowButton } from "../../utils/ShowButton"

const HomePage = () => {
  return (
    <>
        <Hero/>
        <BrandsStripe/>

        <div>
            <ShowTitle title="NEW ARRIVALS"/>
            <ProductsShowList/>
            <ShowButton/>
        </div>
        <div>
            <ShowTitle title="TOP SALLING"/>
            <ProductsShowList/>
            <ShowButton/>
        </div>
        <CategorySelect/>
        <Reviews/>
    </>
  )
}

export default HomePage