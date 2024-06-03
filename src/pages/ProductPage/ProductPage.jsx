import { ProductDetails } from "../../components/ProductPageComponents/ProductDetails/ProductDetails"
import { ProductImagesNav } from "../../components/ProductPageComponents/ProductImagesNav/ProductImagesNav"
import { ProductInfo } from "../../components/ProductPageComponents/ProductInfo/ProductInfo"
import { ProductsReviews } from "../../components/ProductPageComponents/ProductsReviews/ProductsReviews"

const ProductPage = () => {
    return (
      <>
        <div>
            <ProductImagesNav/>
            <ProductInfo/>
        </div>
        <nav>Buttons</nav>
        <ProductDetails/>
        <ProductsReviews/>
      </>
    )
  }
  

export default ProductPage