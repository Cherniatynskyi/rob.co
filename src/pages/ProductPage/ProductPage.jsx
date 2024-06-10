import { ProductDetails } from "../../components/ProductPageComponents/ProductDetails/ProductDetails"
import { ProductImagesNav } from "../../components/ProductPageComponents/ProductImagesNav/ProductImagesNav"
import { ProductInfo } from "../../components/ProductPageComponents/ProductInfo/ProductInfo"
import { ProductsReviews } from "../../components/ProductPageComponents/ProductsReviews/ProductsReviews"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

const ProductPage = () => {
  const {id} = useParams()
  const {items} = useSelector(state => state.items)
  const currentItem = items.filter((el) => el._id === id)
    return (
      <>
        <div style={{display: "flex"}}>
            <ProductImagesNav images={currentItem[0].photo_urls}/>
            <ProductInfo item={currentItem[0]}/>
        </div>
        <nav>Buttons</nav>
        <ProductDetails item={currentItem[0]}/>
        <ProductsReviews reviews={currentItem[0].reviews}/>
      </>
    )
  }
  

export default ProductPage