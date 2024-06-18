import { Filter } from "../../components/BrowsePageComponents/Filter/Filter"
import { Pagintation } from "../../components/BrowsePageComponents/Pagination/Pagintation"
import { ProductsList } from "../../components/BrowsePageComponents/ProductsList/ProductsList"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCategoryThunk } from "../../redux/Items/operations"
import {motion} from 'framer-motion'

const BrowsePage = () => {
  const dispatch = useDispatch()
  const {items, filters, page} = useSelector(state => state.items)

  useEffect(() => {
    dispatch(getCategoryThunk({...filters, page}))
    window.scrollTo({top: 0,left: 0,behavior: "smooth",});
  }, [dispatch, filters, page])

    return (
      <motion.div initial={{x: '-100%'}} animate={{x: "0"}} style={{padding: "50px 0 80px 0", display:'flex'}}>
        <Filter/>

        <div>
            <ProductsList products = {items}/>
            <Pagintation/>
        </div>
      </motion.div>
    )
}
  
export default BrowsePage