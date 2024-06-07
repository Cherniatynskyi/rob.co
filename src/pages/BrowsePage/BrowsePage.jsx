import { Filter } from "../../components/BrowsePageComponents/Filter/Filter"
import { Pagintation } from "../../components/BrowsePageComponents/Pagination/Pagintation"
import { ProductsList } from "../../components/BrowsePageComponents/ProductsList/ProductsList"

const BrowsePage = () => {
    return (
      <div style={{padding: "50px 0 80px 0", display:'flex', justifyContent: 'space-between'}}>
        <Filter/>
        <div>
            <ProductsList/>
            <Pagintation/>
        </div>
      </div>
    )
}
  
export default BrowsePage