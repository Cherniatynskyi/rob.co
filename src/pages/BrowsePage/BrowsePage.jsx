import { Filter } from "../../components/Filter/Filter"
import { Pagintation } from "../../components/Pagination/Pagintation"
import { ProductsList } from "../../components/ProductsList/ProductsList"

const BrowsePage = () => {
    return (
      <>
        <Filter/>
        <div>
            <ProductsList/>
            <Pagintation/>
        </div>
      </>
    )
}
  
export default BrowsePage