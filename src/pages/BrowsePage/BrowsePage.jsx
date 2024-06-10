import { Filter } from "../../components/BrowsePageComponents/Filter/Filter"
import { Pagintation } from "../../components/BrowsePageComponents/Pagination/Pagintation"
import { ProductsList } from "../../components/BrowsePageComponents/ProductsList/ProductsList"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCategoryThunk } from "../../redux/Items/operations"

const BrowsePage = () => {
  const dispatch = useDispatch()
  const {items} = useSelector(state => state.items)
  const {filters} = useSelector(state => state.items)

  useEffect(() => {
    dispatch(getCategoryThunk({...filters}))
  }, [dispatch, filters])

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