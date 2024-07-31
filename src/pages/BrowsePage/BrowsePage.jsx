import { Filter } from "../../components/BrowsePageComponents/Filter/Filter"
import { FilterModal } from "./FilterModal"
import { Pagintation } from "../../components/BrowsePageComponents/Pagination/Pagintation"
import { ProductsList } from "../../components/BrowsePageComponents/ProductsList/ProductsList"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCategoryThunk } from "../../redux/Items/operations"
import {motion} from 'framer-motion'
import css from './BrowsePage.module.css'
import { LuSettings2 } from "react-icons/lu";

const BrowsePage = () => {
  const dispatch = useDispatch()
  const {items, filters, page} = useSelector(state => state.items)
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const onModalClose = () =>{
    setIsFilterOpen(false)
  }

  useEffect(() => {
    dispatch(getCategoryThunk({...filters, page}))
    window.scrollTo({top: 0,left: 0,behavior: "smooth",});
  }, [dispatch, filters, page])

    return (
      <motion.div initial={{x: '-100%'}} animate={{x: "0"}} className={css.browsePage}>
        <div className={css.filterWrap}>
          <Filter/>
        </div>

        <div>
            <ProductsList products = {items}/>
            <Pagintation/>
        </div>
        <button onClick={()=> setIsFilterOpen(true)} className={css.filterBtn}><LuSettings2 /></button>
        {isFilterOpen && <FilterModal onClose = {onModalClose}/>}
      </motion.div>
    )
}
  
export default BrowsePage