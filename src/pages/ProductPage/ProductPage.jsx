import { ProductDetails } from "../../components/ProductPageComponents/ProductDetails/ProductDetails"
import { ProductImagesNav } from "../../components/ProductPageComponents/ProductImagesNav/ProductImagesNav"
import { ProductInfo } from "../../components/ProductPageComponents/ProductInfo/ProductInfo"
import { ProductsReviews } from "../../components/ProductPageComponents/ProductsReviews/ProductsReviews"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import css from './ProductPage.module.css'
import {motion} from 'framer-motion'


const ProductPage = () => {
  const {id} = useParams()
  const {items, topItems, newItems} = useSelector(state => state.items)
  const [subMenuValue, setSubMenuValue] = useState('stats')
  const selectedItem = items.filter((el) => el._id === id).length > 0 ? items.filter((el) => el._id === id) : topItems.filter((el) => el._id === id)
  const currentItem = selectedItem.length > 0 ? selectedItem : newItems.filter((el) => el._id === id)

  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handelChangeSubmenu = (e) =>{
    if(e.currentTarget.id === 'stats'){
      if(subMenuValue === 'stats') return
      setSubMenuValue('stats')
      return
    }
    if(subMenuValue === 'reviews') return
    setSubMenuValue('reviews')
  }

    return (
      <motion.div initial={{y: '-100%'}} animate={{y: "0"}}>
        <div style={{display: "flex", paddingTop: "100px"}}>
            <ProductImagesNav images={currentItem[0].photo_urls}/>
            <ProductInfo item={currentItem[0]}/>
        </div>
        <nav className={css.subNav}>
          <button onClick={(e) => handelChangeSubmenu(e)} id="stats" data-selected={subMenuValue === 'stats'} className={css.subNavBtn}>Деталі</button>
          <button onClick={(e) => handelChangeSubmenu(e)} id="review" data-selected={subMenuValue === 'reviews'} className={css.subNavBtn}>Відгуки</button>
        </nav>
          { subMenuValue === 'stats' && <ProductDetails item={currentItem[0]}/>}
          { subMenuValue === 'reviews' && <ProductsReviews reviews={currentItem[0].reviews}/>}
      </motion.div>
    )
  }
  

export default ProductPage