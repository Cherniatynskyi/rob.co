import { Filter } from "../../components/BrowsePageComponents/Filter/Filter"
import css from './BrowsePage.module.css'
import { useLockBodyScroll } from '@uidotdev/usehooks';
import { IoClose } from "react-icons/io5";

export const FilterModal = ({onClose}) => {
    useLockBodyScroll()
  return (
    <div className={css.filterModalWrap}>
        <button onClick = {onClose} className={css.modalClose}><IoClose /></button>
        <Filter closeModal = {onClose}/>
    </div>
  )
}
