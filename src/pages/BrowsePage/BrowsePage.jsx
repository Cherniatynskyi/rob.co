import { Filter } from "../../components/BrowsePageComponents/Filter/Filter"
import { Pagintation } from "../../components/BrowsePageComponents/Pagination/Pagintation"
import { ProductsList } from "../../components/BrowsePageComponents/ProductsList/ProductsList"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCategoryThunk } from "../../redux/Items/operations"

const BrowsePage = () => {
  const page = 1
  const color = 'all'
  const pricemin = 0
  const pricemax = 30000
  const category = 'all'

  const dispatch = useDispatch()
  const {items} = useSelector(state => state.items)

  useEffect(() => {
    dispatch(getCategoryThunk({page, category, pricemin, pricemax, color}))
  }, [dispatch])

    return (
      <div style={{padding: "50px 0 80px 0", display:'flex', justifyContent: 'space-between'}}>
        <Filter/>

        <div>
            <ProductsList products = {items}/>
            <Pagintation/>
        </div>
      </div>
    )
}
  
export default BrowsePage