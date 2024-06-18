import { BrandsStripe } from "../../components/HomePageComponents/BrandsStripe/BrandsStripe"
import { CategorySelect } from "../../components/HomePageComponents/CaregorySelect/CategorySelect"
import { Hero } from "../../components/HomePageComponents/Hero/Hero"
import {Reviews} from '../../components/HomePageComponents/Reviews/Reviews'
import { ProductsShowList } from "../../components/HomePageComponents/Showpart/ProductsShowList"
import { ShowTitle } from "../../components/HomePageComponents/Showpart/ShowTitle"
import { ShowButton } from "../../utils/ShowButton"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getNewThunk, getTopSalesThunk } from "../../redux/Items/operations"
import {motion} from 'framer-motion'

const HomePage = () => {
  const dispatch = useDispatch()
  const {topItems, newItems} = useSelector(state => state.items)
  const topReviews = topItems.map(el => el.reviews)


  useEffect(() => {
    dispatch(getNewThunk())
    dispatch(getTopSalesThunk())
  }, [dispatch])
  
  return (
    <motion.div initial={{width: 0}} animate={{width: '100%'}} >
        <Hero/>
        <BrandsStripe/>
        <div style={{padding: '80px 0', borderTop: '1px solid rgb(203, 203, 203)'}}>
            <ShowTitle title="НОВИНКИ"/>
            <ProductsShowList products={newItems}/>
            <ShowButton/>
        </div>
        <div style={{padding: '80px 0', borderTop: '1px solid rgb(203, 203, 203)'}}>
            <ShowTitle title="ТОП ПРОДАЖІВ"/>
            <ProductsShowList products={topItems}/>
            <ShowButton/>
        </div>
        <CategorySelect/>
        <Reviews reviews={topReviews[0]}/>
    </motion.div>
  )
}

export default HomePage